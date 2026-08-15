#!/usr/bin/env node
/**
 * Übersetzt das Handbuch aus `de/` nach `en/` mit der Claude API.
 *
 * Deutsch ist die Quelle. Englische Dateien werden erzeugt und nie von Hand
 * bearbeitet — jeder Lauf überschreibt sie.
 *
 * Pro Quelldatei wird ein SHA-256-Hash gebildet und in der Übersetzung als
 * `source_hash` abgelegt. Stimmt der Hash noch, wird die Datei übersprungen;
 * ein Lauf ohne Änderungen ist also ein No-op.
 *
 *   node scripts/translate.mjs              alle geänderten Dateien übersetzen
 *   node scripts/translate.mjs de/01-*.md   nur bestimmte Dateien
 *   node scripts/translate.mjs --force      alles neu übersetzen
 *   node scripts/translate.mjs --check      nur prüfen (Exit 1, wenn veraltet)
 *
 * Braucht ANTHROPIC_API_KEY — ausser bei --check.
 *
 * Weitere Sprachen: TARGETS unten um einen Eintrag ergänzen. Der Rest des
 * Skripts ist sprachunabhängig.
 */

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE_DIR = 'de';
const MODEL = 'claude-opus-5';

/** Zielsprachen. `slugKey` benennt das Frontmatter-Feld mit dem Dateinamen-Slug. */
const TARGETS = [
	{
		dir: 'en',
		language: 'English',
		slugKey: 'slug_en',
		system: `You are a professional translator for bun.ink, a browser-based writing app that stores texts as Markdown in a GitHub repository. You translate the German user handbook into natural, fluent English that reads as if it had been written by a native speaker — not a literal word-for-word rendering.

Rules:
- Preserve the Markdown structure exactly: headings, lists, tables, bold/italic, inline code, fenced code blocks, links, images, and paragraph breaks must match the source.
- Never translate anything inside code fences, inline code, URLs, or file paths.
- Keep technical terms that are identical in English (Git, GitHub, commit, branch, merge, pull request, repository, Markdown). Where the German text explains such a term, translate the explanation.
- Keep the tone of the source: clear, practical, addressed to a writer who is not necessarily a developer. German uses "du" — use a direct, personal "you".
- Do NOT add, remove, reorder, or summarise content. Do NOT add commentary.
- Return ONLY the translated Markdown body. No front matter, no code fence around the whole answer, no preamble.`
	}
];

const FRONTMATTER_ORDER = [
	'title',
	'chapter',
	'slug',
	'description',
	'lang',
	'status',
	'updated',
	'source',
	'source_hash'
];

function sha256(value) {
	return createHash('sha256').update(value, 'utf8').digest('hex');
}

/**
 * Zerlegt eine Datei in Frontmatter und Rumpf. Bewusst ein Minimal-Parser:
 * flache `key: value`-Paare, kein verschachteltes YAML — mehr braucht das
 * Handbuch nicht, und so bleibt das Skript ohne Abhängigkeit zu einem
 * YAML-Paket.
 */
function parseFrontmatter(raw) {
	const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
	if (!match) return { data: {}, body: raw };

	const data = {};
	for (const line of match[1].split(/\r?\n/)) {
		const pair = /^([A-Za-z0-9_]+):\s*(.*)$/.exec(line);
		if (!pair) continue;
		data[pair[1]] = pair[2].trim().replace(/^["'](.*)["']$/, '$1');
	}
	return { data, body: raw.slice(match[0].length) };
}

function serializeFrontmatter(data, body) {
	const keys = [
		...FRONTMATTER_ORDER.filter((key) => data[key] !== undefined),
		...Object.keys(data).filter((key) => !FRONTMATTER_ORDER.includes(key))
	];
	const lines = keys.map((key) => `${key}: ${data[key]}`);
	return `---\n${lines.join('\n')}\n---\n\n${body.replace(/^\n+/, '')}`;
}

/** Sammelt die deutschen Quelldateien — alle, oder die auf der Kommandozeile. */
function collectSources(explicit) {
	const names = explicit.length
		? explicit.map((path) => basename(path))
		: readdirSync(join(ROOT, SOURCE_DIR))
				.filter((name) => name.endsWith('.md'))
				.sort();

	return names.map((name) => {
		const path = join(ROOT, SOURCE_DIR, name);
		if (!existsSync(path)) throw new Error(`Quelldatei fehlt: ${SOURCE_DIR}/${name}`);
		return { name, path, raw: readFileSync(path, 'utf8') };
	});
}

/** Zielpfad aus dem Slug der Zielsprache; ohne Slug bleibt der deutsche Name. */
function targetPath(source, data, target) {
	const prefix = /^(\d+)-/.exec(source.name);
	const slug = data[target.slugKey];
	if (!slug) return join(ROOT, target.dir, source.name);
	return join(ROOT, target.dir, `${prefix ? `${prefix[1]}-` : ''}${slug}.md`);
}

function recordedHash(path) {
	if (!existsSync(path)) return null;
	return parseFrontmatter(readFileSync(path, 'utf8')).data.source_hash ?? null;
}

async function translate(client, system, text) {
	const stream = client.messages.stream({
		model: MODEL,
		max_tokens: 32000,
		thinking: { type: 'adaptive' },
		system,
		messages: [{ role: 'user', content: text }]
	});
	const message = await stream.finalMessage();

	if (message.stop_reason === 'refusal') {
		throw new Error('Die Übersetzung wurde abgelehnt (stop_reason: refusal).');
	}
	const out = message.content
		.filter((block) => block.type === 'text')
		.map((block) => block.text)
		.join('')
		.trim();
	if (!out) throw new Error('Die Übersetzung kam leer zurück.');
	return out;
}

async function main() {
	const args = process.argv.slice(2);
	const force = args.includes('--force');
	const checkOnly = args.includes('--check');
	const explicit = args.filter((arg) => !arg.startsWith('--'));

	const sources = collectSources(explicit);
	if (!sources.length) {
		console.log(`Keine Quelldateien in ${SOURCE_DIR}/ gefunden.`);
		return;
	}

	let client = null;
	if (!checkOnly) {
		if (!process.env.ANTHROPIC_API_KEY) {
			console.error('ANTHROPIC_API_KEY ist nicht gesetzt.');
			process.exit(1);
		}
		client = new Anthropic();
	}

	let translated = 0;
	let skipped = 0;
	const stale = [];

	for (const source of sources) {
		const { data, body } = parseFrontmatter(source.raw);
		const hash = sha256(source.raw);

		// Ohne Titel bricht die Kapitelübersicht — lieber laut überspringen.
		if (!data.title) {
			console.warn(`ueberspringe ${source.name} (kein title im Frontmatter)`);
			skipped += 1;
			continue;
		}

		for (const target of TARGETS) {
			const outPath = targetPath(source, data, target);
			const relative = `${target.dir}/${basename(outPath)}`;

			if (!force && recordedHash(outPath) === hash) {
				skipped += 1;
				if (!checkOnly) console.log(`aktuell   ${relative}`);
				continue;
			}

			if (checkOnly) {
				stale.push(relative);
				continue;
			}

			console.log(`uebersetze ${source.name} -> ${relative} …`);
			const [title, description, translatedBody] = await Promise.all([
				translate(client, target.system, data.title),
				data.description ? translate(client, target.system, data.description) : '',
				translate(client, target.system, body)
			]);

			mkdirSync(dirname(outPath), { recursive: true });
			writeFileSync(
				outPath,
				serializeFrontmatter(
					{
						title,
						chapter: data.chapter,
						slug: data[target.slugKey] ?? data.slug,
						description: description || undefined,
						lang: target.dir,
						status: 'translated',
						updated: new Date().toISOString().slice(0, 10),
						source: `${SOURCE_DIR}/${source.name}`,
						source_hash: hash
					},
					translatedBody
				),
				'utf8'
			);
			translated += 1;
			console.log(`geschrieben ${relative}`);
		}
	}

	if (checkOnly) {
		if (stale.length) {
			console.error(`Nicht aktuell (${stale.length}):`);
			for (const name of stale) console.error(`  ${name}`);
			console.error('\nnode scripts/translate.mjs ausfuehren.');
			process.exit(1);
		}
		console.log(`Alle Uebersetzungen sind aktuell (${skipped} geprueft).`);
		return;
	}

	console.log(`\nFertig. ${translated} uebersetzt, ${skipped} uebersprungen.`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});

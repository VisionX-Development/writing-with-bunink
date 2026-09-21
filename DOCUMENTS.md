# Document structure

The anatomy of a single handbook file. For how chapters are divided and ordered, see [`CHAPTERS.md`](CHAPTERS.md).

## Front matter

Every file in `de/` starts with a front-matter block. The sync reads it, so a malformed block means the file is skipped.

```markdown
---
title: Projekte, Ordner und Dokumente
chapter: 3
slug: [chapter]-projekte-und-dokumente, eg. 00-projekte-und dokumente -> has to match file name
slug_en: [chapter]projects-folders-and-documents, eg. 00-projects-folders-and-documents -> has to match file name
description: Wie ein Schreibprojekt aufgebaut ist und wo ein Text hingehört.
lang: de
status: draft
updated: 2026-08-15
---
```

Generated files in `en/` carry two extra fields, `source` and `source_hash`, which record where the translation came from and whether it is still current. Do not edit them.

Older versions of bun.ink's editor rewrote the block on save — blank lines between fields and `slug\_en` instead of `slug_en`. The editor now keeps the block byte for byte, and the sync still reads the old form, so nothing needs repairing by hand.

Keep the syntax flat — one `key: value` per line. The parser is deliberately minimal so the repository needs no YAML dependency; nested structures will not be read.

## Body

**Start with a first-level heading matching `title`, then a short lead paragraph** that says what the reader will be able to do by the end. No table of contents inside the file — [`CONTENTS.md`](CONTENTS.md) does that job.

```markdown
# Projekte, Ordner und Dokumente

Ein Schreibprojekt in bun.ink ist mehr als ein Stapel Dateien. Dieses Kapitel
zeigt, wie Projekte, Ordner und Dokumente zusammenhängen …

## Was ein Projekt ist

…
```

### Headings

Second level (`##`) for the sections a reader would scan for; third level (`###`) for steps or variants inside a section. Do not go deeper — a fourth level means the chapter needs splitting. Write headings as the thing itself ("Einen Branch anlegen"), not as a label ("Branches: Anlegen").

### Conventions

- **Instructions in the imperative**, addressed as "du". The reader is a writer, not necessarily a developer.
- **UI labels in bold**: click **Speichern**. Use the German UI wording; the translation handles the English label.
- **Paths, filenames, commands, and branch names in backticks**: `main`, `kapitel-3-neu.md`.
- **Numbered lists only for actual sequences.** If order does not matter, use bullets.
- **Explain a Git term the first time it appears in the handbook's reading order**, then use it plainly. Every explanation is a place a reader can get lost, so explain once and trust it.
- **Screenshots**: store under `de/images/`, reference relatively, and always give real alt text describing what the image shows. The English version reuses the same files.
- **No trailing prose about what the next chapter covers** — the order is visible in `CONTENTS.md` and such lines rot when chapters move.

### What does not belong in a document

Release notes, roadmap items, and known bugs. The handbook describes how the app works today; planned work lives in the [roadmap repository](https://github.com/VisionX-Development/bunink-roadmap).

## Translation

Anything you write in `de/` is translated verbatim in structure: headings, lists, tables, emphasis, and code blocks are preserved, and content inside code fences, inline code, URLs, and paths is left untouched. That means a formatting mistake in the source is faithfully reproduced in every language — proofread the German before running the translation.

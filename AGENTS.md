# AGENTS.md

Orientation for AI agents (and humans) working in this repository. Read this first; it links everything else.

## What this repository is

The user handbook for **[bun.ink](https://bun.ink/?utm_source=github&utm_medium=example_repo&utm_campaign=agents_md)**, a browser-based writing app that stores texts as Markdown in the author's own GitHub repository.

It is also a demonstration of the workflow it describes: the handbook is written *in* bun.ink, saved to branches, and merged through pull requests. The commit and branch history is part of the point — please keep it honest and readable.

There is no application code here. bun.ink's source lives in a separate private repository.

## Where things are

| Path | What it holds |
|---|---|
| `de/` | The handbook, in German. **This is the source of truth — all writing happens here.** |
| `en/` | The English translation. **Generated. Never edit by hand — changes are overwritten.** |
| [`CONTENTS.md`](CONTENTS.md) | Table of contents: every chapter, its status, and its files. **Generated** by the sync. |
| [`CHAPTERS.md`](CHAPTERS.md) | How chapters are organised — numbering, order, scope, adding one |
| [`DOCUMENTS.md`](DOCUMENTS.md) | Anatomy of a single document — front matter, headings, conventions |
| [`README.md`](README.md) | Human-facing entry point |

More languages may be added later as sibling directories (`fr/`, `es/`, …), each generated from `de/` the same way.

## Rules that matter

1. **German is the source.** Write and edit in `de/` only. If you are asked to fix wording in `en/`, fix it in the German source; the next sync re-translates.
2. **Never hand-edit `en/` or `CONTENTS.md`.** Every file in `en/` carries a `source_hash`; the next sync overwrites both.
3. **One chapter, one file.** See [`CHAPTERS.md`](CHAPTERS.md) before adding or splitting one.
4. **Front matter is required** on every document in `de/`, including `slug_en`. See [`DOCUMENTS.md`](DOCUMENTS.md) for the exact fields.
5. **Keep the front matter truthful** — `status` and `slug_en` feed [`CONTENTS.md`](CONTENTS.md) and the English file name; the sync regenerates the table of contents from them.
6. **Describe the app as it actually behaves.** This is a manual, not marketing copy. If you are unsure whether a feature works the way a draft claims, say so in the pull request instead of guessing — a handbook that is confidently wrong is worse than one with a gap.

## Translating

There is nothing to run here. A sync in bun.ink's private source repository pulls `main`, translates every chapter whose German file changed (the hash of the source is recorded as `source_hash` in the English file), deletes translations whose source is gone, regenerates `CONTENTS.md` and pushes the result back. Commit your German changes to `main`; the English follows.

## Working as an agent on this repo

- Read [`CONTENTS.md`](CONTENTS.md) first to see what exists and what is still missing.
- Make substantive changes on a branch and open a pull request; the review history is part of what this repository demonstrates.
- Keep commits scoped to one chapter or one concern, with a message that says what changed in the text — not "update files".
- Do not reformat files you were not asked to touch. Whitespace-only churn buries the real diff.

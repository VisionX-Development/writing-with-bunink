# writing-with-bunink

The user handbook for **[bun.ink](https://bun.ink/?utm_source=github&utm_medium=example_repo&utm_campaign=readme)** — a browser-based writing app that keeps your texts as Markdown in your own GitHub repository. Branches, commits and pull requests, without the terminal.

**Start reading:** [Contents](CONTENTS.md) · [Deutsch](de/) · [English](en/)

## Why this repository exists

Two reasons, and the second is the interesting one.

It is the handbook — how to use bun.ink, written for people who write for a living rather than people who deploy for a living.

It is also the workflow demonstrating itself. Every chapter is written *in* bun.ink and saved straight to this repository. Drafts live on branches. Revisions arrive as pull requests — some from a human editor, some proposed by an AI agent that reads the repo and suggests changes. So the commit graph, the branches, and the merged pull requests are not a byproduct of the handbook; they are the second half of what it is showing you.

If you want to know what "Git for writers" actually looks like day to day, the tab worth opening is not this README. It is [the commit history](../../commits), and the [pull requests](../../pulls).

> **Status:** early. The structure and tooling are in place; the chapters are being written now — [CONTENTS.md](CONTENTS.md) shows what exists and what is still planned.

## How it is organised

```
de/          the handbook, in German — the source of truth
en/          the English translation — generated, never edited by hand
```

| File | What it tells you |
|---|---|
| [CONTENTS.md](CONTENTS.md) | Every chapter, its status, and where its files are — generated |
| [CHAPTERS.md](CHAPTERS.md) | How chapters are numbered, ordered, and scoped |
| [DOCUMENTS.md](DOCUMENTS.md) | What a single chapter file looks like inside |
| [AGENTS.md](AGENTS.md) | The short version of all of the above, for AI agents |

German is the authoring language; English is generated from it. Further languages can be added as sibling directories without changing anything else.

## Translating

`en/` and `CONTENTS.md` are produced by a sync that runs from bun.ink's (private) source repository, the same way the [blog](https://github.com/VisionX-Development/bunink-blogposts) is kept in sync: it pulls `main`, translates every chapter whose German file changed, removes translations whose source is gone, regenerates the table of contents and pushes the result back here. Each German file is hashed and the hash recorded in its translation (`source_hash`), so an unchanged chapter is never translated twice.

Write in `de/`, save to `main`, and the English follows with the next sync.

## Contributing

Corrections and gaps are welcome — open an [issue](../../issues), or a pull request against the German source in `de/`. Please do not send changes to `en/` or `CONTENTS.md`: both are generated, and the next sync would overwrite them.

For feature requests and bug reports about the app itself, use the [bun.ink roadmap repository](https://github.com/VisionX-Development/bunink-roadmap) instead. Security problems go to [info@bun.ink](mailto:info@bun.ink), never a public issue.

## Licence

The handbook text is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — use it, translate it, quote it, with attribution.

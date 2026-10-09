---
title: Statistics, Versions, and Export
chapter: 10
slug: statistics-versions-and-export
description: Where bun.ink keeps your earlier drafts, what the writing statistics show, and how to get your texts back out.
lang: en
status: translated
updated: 2026-09-21
source: de/10-statistik-versionen-export.md
source_hash: d1ac92c11abd6d4b21d80010b9373a88e19461b1eab176655bdfdabc736c972f
---

# Statistics, Versions and Export

Three things that seem to have nothing to do with each other and yet answer the same question: what happened to my text, and how do I get back to earlier states? This chapter shows what kind of memory [bun.ink](http://bun.ink) keeps, what the statistics make of it, and how you can get hold of your texts again at any time.

## Three Kinds of Memory

[bun.ink](http://bun.ink) remembers your work in three places, and each answers a different question:

| Where | What it records | What you need it for |

|---|---|---|

| **History** | earlier versions of a single document, automatically | «How did this paragraph read yesterday?» |

| **Commit history** | states you deliberately recorded, across all files | «What did the project look like when I handed in that chapter?» |

| **Export** | a copy outside of [bun.ink](http://bun.ink) | «What do I still have if nothing else is left?» |

They don't replace one another. The History is fine-grained, but it covers only one document and only the main branch (Chapter 5). The commit history covers the whole project, but records only what you committed yourself (Chapter 6). The export is the only thing that still works once you stop using [bun.ink](http://bun.ink).

Anyone who uses both — saving often, committing regularly — has the right answer to almost any question. And anyone who exports on top of that still has it when something goes wrong.

## A Document's Version History

Every document keeps its own history. You'll find it in the sidebar under **History** while the document is open.

It builds up without you doing anything: [bun.ink](http://bun.ink) stores versions whenever you save, and you can view older ones and compare them with each other. You don't need to set anything up for this and you don't need a GitHub connection — the History belongs to the document, not to the repository.

Two peculiarities matter:

- **Main branch only.** In branch mode there is no History. Whatever you write there lives only in your browser until you save it (Chapter 5) — so save more often on a branch than you normally would.
- **Conflict versions end up here.** When the editor reports that the same document was saved elsewhere, **Save local version** files your state as a separate version in the History (Chapter 3). That's exactly what it's for: nothing gets lost, and you can compare at your leisure later.

The obvious mix-up: the History is not your commit history. It knows only this one document, it knows no commit messages, and it never leaves [bun.ink](http://bun.ink). If you want to record that a particular state was *the* state — the version that went to the publisher — that calls for a commit with a message, not an entry in the History.

## Writing Statistics

The statistics answer a different question than the History: not «what did it say», but «how much have I worked».

They count the words in your documents and, alongside that, evaluate the commits of recent months — which produces the overview of which days you wrote on. So anyone who writes a lot but commits rarely will see less activity than they actually produced; one more argument for committing more often.

Two things people tend to trip over:

- **Locked high-privacy documents count zero words** (Chapter 9). A sudden slump in the statistics often just means that an encrypted area is currently locked.
- **Numbers are not a verdict.** A day on which you cut three hundred words is a bad day in the statistics and often a good one in reality. Take them as a reminder of your rhythm, not as an assessment.

Besides satisfying your own curiosity, the statistics have a second use, described in Chapter 8: together with the commit history, they are evidence of how a text came into being.

## Exporting

Export is the way out, and it is deliberately unspectacular: via the context menu in the explorer you can get a single document as Markdown (`.md`) or as plain text (`.txt`), and a folder or an entire project as a ZIP archive with its folder structure intact (Chapter 2).

What you get is the substance of your text — and only that. The version history, the statistics and everything that belongs to GitHub are not exported. An export is a snapshot, not a replica of your work.

That's why a simple plan you can stick to is worth having:

- **If your texts live in a repository**, you already have your backup. It is as current as your last push, it sits in your GitHub account, and it stays there even if you stop using [bun.ink](http://bun.ink).
- **If they don't live in a repository** — and with high-privacy areas they never do — then you are the backup. Export regularly and put the archive somewhere else (Chapter 9).

And one small thing that saves trouble: a locked encrypted area cannot be exported. Unlock it first, otherwise [bun.ink](http://bun.ink) will abort.

## If You Leave [bun.ink](http://bun.ink)

The best thing about Markdown is that it takes no hostages. Your documents are text files — every editor, every other writing program, every typesetting system can handle them. There is no format you'd first have to escape from.

So if you leave, three things stay with you: the repository in your GitHub account along with its complete history, your exports, and the Markdown files themselves. What is lost is the version history inside [bun.ink](http://bun.ink) and the statistics — both exist only there.

That this chapter appears in the app's own handbook is intentional. A writing environment that keeps your texts readable and portable has an advantage no feature list can replace: you stay because it suits you, not because you can't get out.

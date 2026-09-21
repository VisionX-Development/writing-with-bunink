---
title: Statistics, Versions, and Export
chapter: 10
slug: statistics-versions-and-export
description: "Where [bun.ink](http://bun.ink) remembers your earlier versions, what the writing statistics show, and how to get your texts back out again."
lang: en
status: translated
updated: 2026-09-21
source: de/10-statistik-versionen-export.md
source_hash: 3e322336eaafbefed7179c10e3382df1b148d55baa8f70dc3c584e6e1885209a
---

# Statistics, Versions and Export

Three things that seem to have nothing to do with each other and yet answer the same question: what happened to my text, and how do I get back to earlier states? This chapter shows what kind of memory [bun.ink](http://bun.ink) keeps, what the statistics make of it, and how you can get hold of your texts again at any time.

## Three kinds of memory

[bun.ink](http://bun.ink) remembers your work in three places, and each one answers a different question:

| Where | What it records | What you need it for |

|---|---|---|

| **History** | earlier versions of a single document, automatically | «How did this paragraph read yesterday?» |

| **Commit history** | states you deliberately recorded, across all files | «What did the project look like when I handed in that chapter?» |

| **Export** | a copy outside of [bun.ink](http://bun.ink) | «What do I have left if nothing else is there?» |

They don't replace each other. The history is fine-grained, but covers only one document and only the main branch (chapter 5). The commit history covers the whole project, but records only what you committed yourself (chapter 6). The export is the only thing that still works once you stop using [bun.ink](http://bun.ink).

If you use both — saving often, committing regularly — you'll have the right answer to almost any question that comes up. And if you export on top of that, you'll still have it when something goes wrong.

## A document's version history

Every document keeps its own history. You'll find it in the sidebar under **History** while the document is open.

It builds up without you doing anything: [bun.ink](http://bun.ink) stores versions whenever you save, and you can view older ones and compare them with each other. You don't need to set anything up for this and you don't need a GitHub connection — the history belongs to the document, not to the repository.

Two quirks are worth knowing:

- **Main branch only.** In branch mode there is no history. Whatever you write there lives only in your browser until you save (chapter 5) — so save more often on a branch than you're used to.

- **Conflict versions end up here.** If the editor reports that the same document was saved elsewhere, **Save local version** puts your state into the history as a version of its own (chapter 3). That's exactly what it's for: nothing is lost, and you can compare at your leisure later.

The obvious mix-up: the history is not your commit history. It knows only this one document, it knows no commit messages, and it never leaves [bun.ink](http://bun.ink). If you want to record that a particular state was *the* state — the version that went to the publisher — then that calls for a commit with a message, not an entry in the history.

## The writing statistics

The statistics answer a different question than the history: not «what did it say», but «how much did I work».

They count the words in your documents and, alongside that, evaluate the commits of the past months — that's what produces the overview of which days you wrote on. So if you write a lot but commit rarely, the activity view will show less than you actually achieved; one more argument for committing more often.

Two things people otherwise trip over:

- **Locked high-privacy documents count zero words** (chapter 9). A sudden dip in the statistics often just means that an encrypted area is currently locked.

- **Numbers are not a verdict.** A day on which you cut three hundred words is a bad day in the statistics and in truth often a good one. Take them as a reminder of your rhythm, not as an assessment.

Besides satisfying your own curiosity, the statistics have a second use, described in chapter 8: together with the commit history, they are evidence of how a text came about.

## Exporting

The export is the way out, and it's deliberately unspectacular: via the context menu in the explorer you can get a single document as Markdown (`.md`) or as plain text (`.txt`), and a folder or an entire project as a ZIP archive with the folder structure preserved (chapter 2).

What you get is the substance of your text — and nothing else. Not included in the export are the version history, the statistics, and everything that belongs to GitHub. An export is a snapshot, not a mirror image of your work.

That's why it pays to have a simple plan you can stick to:

- **If your texts live in a repository**, you already have your backup. It's as current as your last push, it sits in your GitHub account, and it stays there even if you stop using [bun.ink](http://bun.ink).

- **If they don't live in a repository** — and with high-privacy areas they never do — then you are the backup. Export regularly and put the archive somewhere else (chapter 9).

And one small thing that saves trouble: a locked encrypted area cannot be exported. Unlock it first, otherwise [bun.ink](http://bun.ink) will abort.

## If you leave [bun.ink](http://bun.ink)

The best thing about Markdown is that it takes no hostages. Your documents are text files — every editor, every other writing program, every typesetting system can handle them. There's no format you'd first have to escape from.

So if you leave, three things stay with you: the repository in your GitHub account together with its complete history, your exports, and the Markdown files themselves. What you lose is the version history inside [bun.ink](http://bun.ink) and the statistics — both exist only there.

The fact that this chapter is part of the app's own handbook is intentional. A writing environment that keeps your texts readable and portable has an advantage no feature list can replace: you stay because it suits you, not because you can't get out.

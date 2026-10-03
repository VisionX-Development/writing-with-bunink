---
title: Statistics, Versions, and Export
chapter: 10
slug: statistics-versions-and-export
description: Where bun.ink keeps your earlier drafts, what the writing statistics show, and how to get your texts back out again.
lang: en
status: translated
updated: 2026-09-21
source: de/10-statistik-versionen-export.md
source_hash: 549582b55cc3ea4ba21338278845da862c4b1e4febf4a73ea4d30a9f44468993
---

# Statistics, Versions and Export

Three things that seem to have nothing to do with each other and yet answer the same question: what happened to my text, and how do I get back to earlier states? This chapter shows what kind of memory [bun.ink](http://bun.ink) keeps, what the statistics make of it, and how you can get hold of your texts again at any time.

## Three kinds of memory

[bun.ink](http://bun.ink) remembers your work in three places, and each one answers a different question:

| Where | What it records | What you need it for |

|---|---|---|

| **History** | earlier versions of a single document, automatically | "How did this paragraph read yesterday?" |

| **Commit history** | states you deliberately recorded, across all files | "What did the project look like when I handed in that chapter?" |

| **Export** | a copy outside [bun.ink](http://bun.ink) | "What do I still have when nothing else is left?" |

They don't replace one another. The History is fine-grained, but only for one document and only on the main branch (Chapter 5). The commit history covers the whole project, but only records what you committed yourself (Chapter 6). The export is the only thing that still works when you stop using [bun.ink](http://bun.ink).

If you use both — saving often, committing regularly — you'll have the right answer to almost any question. And if you also export, you'll still have it when something goes wrong.

## A document's version history

Every document keeps its own history. You'll find it in the sidebar under **History** while the document is open.

It builds up without you doing anything: [bun.ink](http://bun.ink) stores versions whenever you save, and you can view older ones and compare them with each other. You don't need to set anything up for this and you don't need a connection to GitHub — the History belongs to the document, not to the repository.

Two particularities are worth knowing:

- **Only on the main branch.** In branch mode there is no History. What you write there stays in your browser until you save it (Chapter 5) — so save more often on a branch than you're used to.
- **Conflict versions end up here.** If the editor reports that the same document was saved elsewhere, **Save local version** puts your state into the History as a separate version (Chapter 3). That's exactly what it's for: nothing is lost, and you can compare the two later at your leisure.

The obvious mix-up: the History is not your commit history. It knows only this one document, it knows no commit messages, and it never leaves [bun.ink](http://bun.ink). If you want to record that a particular state was *the* state — the version that went to the publisher — then that calls for a commit with a message, not an entry in the History.

## Writing statistics

The statistics answer a different question than the History: not "what was there", but "how much did I work".

They count the words in your documents and also evaluate the commits of the past few months — that's where the overview of which days you wrote on comes from. So if you write a lot but commit rarely, your activity will show less than you actually achieved; another argument for committing more often.

Two things people tend to stumble over:

- **Locked high-privacy documents count zero words** (Chapter 9). A sudden drop in the statistics often just means that an encrypted area is currently locked.
- **Numbers are not a verdict.** A day on which you cut three hundred words looks bad in the statistics and is in truth often a good one. Take them as a reminder of your rhythm, not as an assessment.

Besides satisfying your own curiosity, the statistics have a second use, which the blog post [Proving Your Work](https://bun.ink/blog/proving-you-wrote-it-yourself) explores in detail: together with the commit history, they're evidence of how a text came into being.

## Exporting

The export is the way out, and it's deliberately unspectacular: via the context menu in the explorer you can get a single document as Markdown (`.md`) or as plain text (`.txt`), and a folder or an entire project as a ZIP archive with the folder structure intact (Chapter 2).

What you get is the substance of your text — and only that. The version history, the statistics and everything to do with GitHub are not included. An export is a snapshot, not a mirror image of your work.

That's why a simple plan you can stick to is worth having:

- **If your texts live in a repository**, you already have your backup. It's as current as your last push, it's in your GitHub account, and it stays there even if you stop using [bun.ink](http://bun.ink).
- **If they don't live in a repository** — with high-privacy areas they never do — then you are the backup. Export regularly and put the archive somewhere else (Chapter 9).

And one small detail that saves trouble: a locked encrypted area can't be exported. Unlock it first, otherwise [bun.ink](http://bun.ink) will abort.

## When you leave [bun.ink](http://bun.ink)

The best thing about Markdown is that it takes no hostages. Your documents are text files — every editor, every other writing program, every typesetting system can handle them. There's no format you'd first have to escape from.

So if you leave, three things remain: the repository in your GitHub account along with its complete history, your exports, and the Markdown files themselves. What's lost is the version history inside [bun.ink](http://bun.ink) and the statistics — both exist only there.

It's no accident that this chapter is in the app's own handbook. A writing environment that keeps your texts readable and portable has an advantage that no feature list can replace: you stay because it suits you, not because you can't get out.

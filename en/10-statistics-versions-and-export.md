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

Three things that seem to have nothing to do with one another, and yet they answer the same question: what happened to my text, and how do I get back to an earlier state? This chapter shows what kind of memory [bun.ink](http://bun.ink) keeps, what the statistics make of it, and how you can always get your hands on your texts again.

## Three Kinds of Memory

[bun.ink](http://bun.ink) remembers your work in three places, and each answers a different question:

| Where | What it records | What you need it for |

|---|---|---|

| **History** | earlier versions of a single document, automatically | "How did this paragraph read yesterday?" |

| **Commit history** | states you deliberately recorded, across all files | "What did the project look like when I handed in that chapter?" |

| **Export** | a copy outside [bun.ink](http://bun.ink) | "What do I still have when nothing else is left?" |

They don't replace one another. The history is fine-grained, but it covers only one document and only the main branch (Chapter 5). The commit history covers the whole project, but records only what you committed yourself (Chapter 6). The export is the only thing that still works when you stop using [bun.ink](http://bun.ink).

If you use both — save often, commit regularly — you'll have the right answer for almost any question that comes up. And if you export as well, you'll still have it when something goes wrong.

## A Document's Version History

Every document keeps its own history. You'll find it in the sidebar under **History** while the document is open.

It builds up without you doing anything: [bun.ink](http://bun.ink) stores a version whenever you save, and you can view older ones and compare them with each other. You don't need to have set anything up and you don't need a GitHub connection — the history belongs to the document, not to the repository.

Two quirks are worth knowing:

- **Main branch only.** In branch mode there is no history. What you write there lives only in your browser until you save (Chapter 5) — so save more often on a branch than you're used to.
- **Conflict versions end up here.** If the editor reports that the same document was saved elsewhere, **Save local version** files your state in the history as a version of its own (Chapter 3). That's exactly what it's there for: nothing is lost, and you can compare the two later at your leisure.

The obvious mix-up: the history is not your commit history. It knows only this one document, it knows no commit messages, and it never leaves [bun.ink](http://bun.ink). If you want to record that a particular state was *the* state — the version that went to the publisher — that calls for a commit with a message, not an entry in the history.

## Writing Statistics

The statistics answer a different question than the history: not "what did it say", but "how much did I work".

They count the words in your documents and, alongside that, evaluate the commits of recent months — which is where the overview of which days you wrote on comes from. So if you write a lot but commit rarely, your activity will show less than you actually did; one more argument for committing more often.

Two things that tend to trip people up:

- **Locked high-privacy documents count zero words** (Chapter 9). A sudden drop in the statistics often just means an encrypted area is currently locked.
- **Numbers are not a verdict.** A day on which you cut three hundred words looks bad in the statistics and is often a good day in reality. Take them as a reminder of your rhythm, not as an assessment.

Besides satisfying your own curiosity, the statistics have a second use, which the blog post [Proving you wrote it yourself](https://bun.ink/blog/proving-you-wrote-it-yourself) spells out: together with the commit history, they are evidence of how a text came into being.

## Exporting

Export is the way out, and it's deliberately unspectacular: via the context menu in the explorer you can get a single document as Markdown (`.md`) or as plain text (`.txt`), and a folder or an entire project as a ZIP archive with the folder structure preserved (Chapter 2).

What you get is the substance of your text — and only that. The version history, the statistics and everything to do with GitHub are not included. An export is a snapshot, not a mirror image of your work.

That's why it pays to have a simple plan you can stick to:

- **If your texts live in a repository**, you already have your backup. It's as current as your last push, it sits in your GitHub account, and it stays there even if you stop using [bun.ink](http://bun.ink).
- **If they don't live in a repository** — and with high-privacy areas they never do — then you are the backup. Export regularly and put the archive somewhere else (Chapter 9).

And one small detail that saves trouble: a locked encrypted area cannot be exported. Unlock it first, or [bun.ink](http://bun.ink) will abort.

## When You Leave [bun.ink](http://bun.ink)

The best thing about Markdown is that it takes no hostages. Your documents are text files — every editor, every other writing program, every typesetting system can handle them. There's no format you'd first have to escape from.

So if you leave, three things stay with you: the repository in your GitHub account along with its complete history, your exports, and the Markdown files themselves. What you lose is the version history inside [bun.ink](http://bun.ink) and the statistics — both live only there.

The fact that this chapter appears in the app's own handbook is deliberate. A writing environment that keeps your texts readable and portable has an advantage no feature list can replace: you stay because it suits you, not because you can't get out.

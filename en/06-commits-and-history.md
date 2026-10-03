---
title: Commits and History
chapter: 6
slug: commits-and-history
description: How your changes become a commit, how you get it to GitHub, and where to look up the history of your text.
lang: en
status: translated
updated: 2026-10-03
source: de/06-commits-und-historie.md
source_hash: bf751cb979b5adc16855b4d6f817be34fc661a6104e088f20e02a63f5b0a57b0
---

# **Commits and History**

A repository doesn't remember every keystroke — it remembers the states you deliberately record. This chapter shows you how to create such a state and where to read up on the history you've built.

## What a commit is

A commit is a recorded state of your texts, together with a note about it. It records which files changed, how they looked before, and what you had in mind while making the changes.

The difference from saving matters. Saving secures your current text. A commit additionally says: this particular state is one I want to be able to find my way back to. That's why every commit comes with a message, and that's why it's mandatory.

## Seeing what has changed

Before you commit, it's worth a glance at the list. In the GitHub section of the sidebar, **Changes** shows what's different since the last commit. Each file is marked as **New locally**, **Changed locally** or **Deleted locally**.

With **Open diff against GitHub** you see exactly what changed in a given file — the same side-by-side comparison as in change mode, only against the state in the repository instead of against your last save point.

[bun.ink](http://bun.ink) fetches the state from GitHub itself as soon as you open the GitHub section; while it's loading, a spinner turns. If there's nothing pending, the list says exactly that.

## Committing and pushing

It all runs through one button: **Sync with GitHub...**. It first saves your open documents, then fetches whatever is new on GitHub (see below), and finally opens the commit dialog. That dialog has three parts:

1. **Files** — you pick what goes into this commit. You can deselect individual files and commit them separately later; at least one file must be selected.
2. **Commit message** — the note about this state. The field asks: "What was changed?"
3. **Save and push** — [bun.ink](http://bun.ink) secures the local state, creates the commit and sends it to the active branch.

About the message: half a sentence is enough, as long as it says something. "Shortened chapter 3, cut the dialogue on page 4" will help you six months from now; "changes" never will. Write what you changed, not that you changed something.

Because the button fetches first and commits afterwards, your push can't overwrite someone else's work: whatever is new on GitHub has already been taken over before your commit goes out. If there's nothing to commit, [bun.ink](http://bun.ink) tells you that you're already up to date with GitHub. On a branch, the final step is called **Save to branch** (Chapter 5).

## Fetching changes from GitHub

The other direction appears under **Incoming from GitHub**. Each file is marked as **New on GitHub**, **Changed on GitHub** or **Removed on GitHub**.

**Sync with GitHub...** takes these changes over before moving on to the commit. Anything that changed on only one side, [bun.ink](http://bun.ink) applies automatically. For files that changed on both sides, you decide file by file — **Use GitHub version**, **Keep my version** or **Keep both as separate files**. If you cancel at this point, the whole process ends and nothing is committed.

If the comparison shows no visible difference, it's usually down to spaces or line endings; [bun.ink](http://bun.ink) points that out.

## Reading the history: the Commit Browser

The sidebar section **Changes** contains the **Commits** area: the commits on the current branch, each with its message and date. With **Load more commits** you go further back.

Every commit carries two switches, **A** and **B**. A is the older side, B the newer one — and B can also be your **Working draft**, that is, the text as it currently stands in the editor, saved or not. When you open it, A is the first commit on the branch and B is the most recent. In the section header you can swap A and B or reset both to this selection. The comparison always applies to the document you currently have open.

The Commit Browser is available for projects linked to a repository — not for high-privacy projects (Chapter 9). How to use it to trace how a text came about is shown in the blog post [The Commit Browser](https://bun.ink/blog/browsing-your-commit-history). To see what a commit changed across all files at once, go to the repository on [github.com](http://github.com).

What [bun.ink](http://bun.ink) does use from the history is the activity: the writing statistics evaluate the commits of recent months and show you which days you worked on.

Independently of Git, [bun.ink](http://bun.ink) also keeps its own version history for each document, in the sidebar section **History**. That's something different from the commit history: more fine-grained, for one document only, and available on the main branch only.

---

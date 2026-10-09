---
title: Commits and History
chapter: 6
slug: commits-and-history
description: How your changes become a commit, how you get it to GitHub, and where you can read back the history of your text.
lang: en
status: translated
updated: 2026-10-03
source: de/06-commits-und-historie.md
source_hash: e8c25e9e3a138f2323f7630f159af8f206c06aedc628734de0a186f761735a2b
---

# **Commits and History**

A repository doesn't remember every keystroke — it remembers the states you deliberately record. This chapter shows how you create such a state and where you can read back the history that results.

## What a commit is

A commit is a recorded state of your texts, with a note attached. It records which files changed, what they looked like before, and what you had in mind at the time.

The difference from saving matters. Saving secures your current text. A commit additionally says: this state here is one I want to be able to find my way back to. That's why every commit comes with a message, and that's why it's mandatory.

## Seeing what has changed

Before you commit, it's worth a look at the list. In the GitHub area of the sidebar, **Changes** shows what's different since the last commit. Each file is marked as **New locally**, **Changed locally** or **Deleted locally**.

With **Open diff against GitHub** you see exactly what changed in a given file — the same side-by-side comparison as in the changes mode, only against the state in the repository instead of against your last save point.

[bun.ink](http://bun.ink) fetches the state from GitHub itself as soon as you open the GitHub area; while it's loading, a spinner turns. If there's nothing outstanding, the list says exactly that.

## Committing and pushing

It all runs through one button: **Sync with GitHub...**. It first saves your open documents, then fetches what's new on GitHub (see below), and finally opens the commit dialog. That dialog has three parts:

1. **Files** — you choose what goes into this commit. You can deselect individual files and commit them separately later; at least one file must be selected.
2. **Commit message** — the note for this state. The field asks: «What was changed?»
3. **Save and push** — [bun.ink](http://bun.ink) secures the local state, creates the commit and sends it to the active branch.

About the message: half a sentence is enough, as long as it's meaningful. «Shortened chapter 3, cut the dialogue on page 4» will help you in six months; «Changes» will never help you. Write what you changed, not that you changed something.

Because the button fetches first and commits afterwards, your push can't overwrite someone else's work: whatever is new on GitHub has already been taken over before your commit goes out. If there's nothing to commit, [bun.ink](http://bun.ink) reports that you're already up to date with GitHub. On a branch, the last step is called **Save to branch** (chapter 5).

## Fetching changes from GitHub

The opposite direction appears under **Incoming from GitHub**. Each file is marked as **New on GitHub**, **Changed on GitHub** or **Removed on GitHub**.

**Sync with GitHub...** takes over these changes before moving on to the commit. Anything that changed on only one side is taken over automatically by [bun.ink](http://bun.ink). For files that changed on both sides, you decide file by file — **Use GitHub version**, **Keep my version** or **Keep both as separate files**. If you cancel at this point, the whole process ends and nothing is committed.

If the comparison shows no visible difference, it's usually down to spaces or line endings; [bun.ink](http://bun.ink) tells you so.

## Reading the history: the commit browser

In the **Changes** area of the sidebar there's a **Commits** section: the commits of the current branch, each with its message and date. With **Load more commits** you go further back.

Every commit carries two switches, **A** and **B**. A is the older side, B the newer one — and B can also be your **Working draft**, that is, the text exactly as it currently stands in the editor, whether saved or not. When you open the section, A is the first commit of the branch and B the most recent. In the section header you can swap A and B or reset both to this selection. What gets compared is always the document you currently have open.

The commit browser is available for projects linked to a repository — not for high-privacy projects (chapter 9). How to use it to trace how a text came about is shown in the blog post [The Commit Browser](https://bun.ink/blog/browsing-your-commit-history). To see what a commit changed across all files at once, go to the repository on [github.com](http://github.com).

What [bun.ink](http://bun.ink) does use from the history is the activity: the writing statistics evaluate the commits of recent months and show you which days you worked on.

Independently of Git, [bun.ink](http://bun.ink) also keeps its own version history per document, in the **History** area of the sidebar. That's something different from the commit history: finer-grained, for a single document only, and available only on the main branch.

---

---
title: Commits and History
chapter: 6
slug: commits-and-history
description: How your changes become a commit, how you get it to GitHub, and where to read back the history of your text.
lang: en
status: translated
updated: 2026-10-03
source: de/06-commits-und-historie.md
source_hash: bf751cb979b5adc16855b4d6f817be34fc661a6104e088f20e02a63f5b0a57b0
---

# **Commits and history**

A repository doesn't remember every keystroke — it remembers the states you deliberately record. This chapter shows how to create such a state and where to read up on the history it produces.

## What a commit is

A commit is a recorded state of your texts along with a note about it. It captures which files changed, what they looked like before, and what you had in mind at the time.

The difference from saving matters. Saving secures your current text. A commit additionally says: this state here is one I want to be able to find my way back to. That's why every commit comes with a message, and that's why it's mandatory.

## Seeing what has changed

Before you commit, it's worth a look at the list. In the GitHub section of the sidebar, **Changes** shows what's different since the last commit. Each file is marked as **New locally**, **Changed locally** or **Deleted locally**.

With **Open diff against GitHub** you see exactly what changed in a given file — the same side-by-side comparison as in change mode, just against the state in the repository instead of against your last save point.

[bun.ink](http://bun.ink) fetches the state from GitHub by itself as soon as you open the GitHub section; while it loads, a spinner turns. If nothing is pending, the list says exactly that.

## Committing and pushing

Everything runs through one button: **Sync with GitHub...**. It first saves your open documents, then fetches whatever is new on GitHub (see below), and finally opens the commit dialog. That dialog has three parts:

1. **Files** — you choose what goes into this commit. You can deselect individual files and commit them separately later; at least one file has to be selected.
2. **Commit message** — the note about this state. The field asks: "What was changed?"
3. **Save and push** — [bun.ink](http://bun.ink) secures the local state, creates the commit and sends it to the active branch.

About the message: half a sentence is enough, as long as it's meaningful. "Shortened chapter 3, cut the dialogue on page 4" will help you six months from now; "changes" never will. Write what you changed, not that you changed something.

Because the button fetches first and commits second, your push can't overwrite someone else's work: whatever is new on GitHub has already been brought in before your commit goes out. If there's nothing to commit, [bun.ink](http://bun.ink) tells you that you're already up to date with GitHub. On a branch, the last step is called **Save to branch** (chapter 5).

## Fetching changes from GitHub

The other direction lives under **Incoming from GitHub**. Each file is marked as **New on GitHub**, **Changed on GitHub** or **Removed on GitHub**.

**Sync with GitHub...** brings these changes in before moving on to the commit. Whatever was changed on only one side, [bun.ink](http://bun.ink) takes over automatically. For files that were changed on both sides, you decide file by file — **Use GitHub version**, **Keep my version** or **Keep both as separate files**. If you cancel at this point, the whole process ends and nothing is committed.

If the comparison shows no visible difference, it's usually down to spaces or line endings; [bun.ink](http://bun.ink) tells you so.

## Reading the history: the commit browser

In the **Changes** section of the sidebar you'll find the **Commits** list: the commits of the current branch, each with its message and date. **Load more commits** takes you further back.

Every commit carries two toggles, **A** and **B**. A is the older side, B the newer one – and B can also be your **Working draft**, the text as it stands in the editor right now, saved or not. When you open it, A is the first commit of the branch and B the latest. In the header of the section you swap A and B or reset both to that selection. The comparison always covers the document you currently have open.

The commit browser is available for projects linked to a repository – not for high-privacy projects (chapter 9). How to use it to trace how a text came about is shown in the blog post [The Commit Browser](https://bun.ink/blog/browsing-your-commit-history). What a commit changed across all files at once, you can see on [github.com](http://github.com) in the repository.

What [bun.ink](http://bun.ink) does use from the history is the activity: the writing statistics evaluate the commits of recent months and show you which days you worked on.

Independently of Git, [bun.ink](http://bun.ink) also keeps its own version history per document, in the **History** section of the sidebar. That's something different from the commit history: more fine-grained, limited to a single document, and only available on the main branch.

---

---
title: Commits and History
chapter: 6
slug: commits-and-history
description: How your changes become a commit, how you get it to GitHub, and where to read back the history of your text.
lang: en
status: translated
updated: 2026-08-21
source: de/06-commits-und-historie.md
source_hash: 1be6e25fca50bf6869b4ea57b0faaba9a3eec427332944a6efb43fb43ceb9f12
---

# **Commits and history**

A repository doesn't remember every keystroke — it remembers the states you deliberately record. This chapter shows how to create such a state and where to read up on the history it produces.

## What a commit is

A commit is a recorded state of your texts along with a note about it. It captures which files changed, what they looked like before, and what you had in mind at the time.

The difference from saving matters. Saving secures your current text. A commit additionally says: this state here is one I want to be able to find my way back to. That's why every commit comes with a message, and that's why it's mandatory.

## Seeing what has changed

Before you commit, it's worth a look at the list. In the GitHub section of the sidebar, **Changes** shows what's different since the last commit. Each file is marked as **New**, **Changed** or **Deleted**.

With **Open diff against GitHub** you see exactly what changed in a given file — the same side-by-side comparison as in change mode, just against the state in the repository instead of against your last save point.

**Refresh changes** fetches the state fresh from GitHub. If nothing is pending, the list says exactly that.

## Committing and pushing

**Push to GitHub...** opens the dialog. It has three parts:

1. **Files** — you choose what goes into this commit. You can deselect individual files and commit them separately later; at least one file has to be selected.
2. **Commit message** — the note about this state. The field asks: "What was changed?"
3. **Save and push** — [bun.ink](http://bun.ink) secures the local state, creates the commit and sends it to the active branch.

About the message: half a sentence is enough, as long as it's meaningful. "Shortened chapter 3, cut the dialogue on page 4" will help you six months from now; "changes" never will. Write what you changed, not that you changed something.

If GitHub has picked up new changes in the meantime, [bun.ink](http://bun.ink) blocks the push and asks you to sync first. That's not an error but a safeguard against overwriting someone else's work.

## Fetching changes from GitHub

The other direction lives under **Incoming from GitHub**. Each file is marked as **New on GitHub**, **Changed on GitHub** or **Removed on GitHub**.

**Sync with GitHub...** brings these changes in. Whatever was changed on only one side, [bun.ink](http://bun.ink) takes over automatically. For files that were changed on both sides, you decide file by file — **Use GitHub version**, **Keep my version** or **Keep both as separate files**.

If the comparison shows no visible difference, it's usually down to spaces or line endings; [bun.ink](http://bun.ink) tells you so.

There's also **Load files from GitHub** for the simple case where you only want to fetch and don't need to resolve anything. [bun.ink](http://bun.ink) blocks this as long as you have pending changes of your own — commit and push those first. It likewise speaks up if there are no Markdown or text files in the repository; your local state then stays unchanged.

## Where the history is (not yet)

An honest disclosure here: [bun.ink](http://bun.ink) doesn't show you the list of your commits yet. The feature is planned, though, and coming soon. Until then, you read the history of your text on [github.com](http://github.com) in the repository itself — there you see every commit, its message, its date and the associated changes line by line.

What [bun.ink](http://bun.ink) does use from the history is the activity: the writing statistics evaluate the commits of recent months and show you which days you worked on.

Independently of Git, [bun.ink](http://bun.ink) also keeps its own version history per document, in the **History** section of the sidebar. That's something different from the commit history: more fine-grained, limited to a single document, and only available on the main branch.

---

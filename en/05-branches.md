---
title: Branches: Versions of a Text
chapter: 5
slug: branches
description: How to develop one version of a text alongside the main version and merge them later.
lang: en
status: translated
updated: 2026-09-20
source: de/05-branches.md
source_hash: 50945a329a501721d879babf95dc87ab19fe0dcd907ada8e0059850fd6de75a1
---

# **Branches: Versions of a Text**

Sometimes you want to try something out without touching the existing text. A branch is exactly that: a second version that runs in parallel until you decide whether it was the right one.

## What a branch is

A branch is a fork in the road. You take the current state of your repository, give it a name, and carry on working in that copy from then on. The main state remains untouched.

That main state has a name too; in most repositories it's called the `main oder master branch`. In bun.ink it's the **default branch**.

For writers this has a practical benefit: you can rewrite a chapter from scratch, test out a second narrative perspective, create a shortened version for a different publication — all at the same time, all traceable, without filenames like `kapitel-3-neu-final-2.md`.

## Creating a branch

In the GitHub section of the sidebar you create one via **Create branch**. The new branch grows out of the branch you're currently on.

Git is strict about names, and bun.ink tells you in advance what won't work:

- No spaces. Use a hyphen or underscore, for example `version-2`.
- The characters `~ ^ : ? * [ \` are not allowed either.
- No `..` in the name, no `-` or `.` at the start, no `/` or `.` at the end, no `.lock` ending.

A good name says what the branch is for: `kuerzung-fuer-magazin`, `perspektive-ich`, `lektorat-runde-2`.

## Working on a branch

As soon as you're on a branch other than the main branch, bun.ink makes it clear: a **branch mode** badge and a note showing which branch you're currently editing.

The note matters, which is why it's spelled out here once more in full: **what you write on a branch is not stored in bun.ink.** The bun.ink database holds only the main branch. Everything else exists solely in your browser until you write it to GitHub with **Save to branch**.

Two restrictions follow from this, and you'll run into both in branch mode:

- You can only create, rename, move, or delete folders and documents on the main branch. The structure is managed in bun.ink, and branch mode doesn't write there.
- The version history of a document is likewise only available on the main branch.

So on a branch, save earlier and more often than you're used to.

## Switching between branches

You switch to another branch via the branch list. bun.ink loads its files from GitHub and shows you that state — exactly one branch is active per project at any time.

If you have unsaved changes, bun.ink asks first: save, discard, or cancel. Nothing is silently overwritten. On a branch, "discard" is final, because those changes don't exist anywhere else.

**Reload branches** fetches the list fresh from GitHub, in case someone else has created a branch there.

## When GitHub has changed the branch

If you're working on a branch while it moves on over on GitHub — because of you on another device, or because of someone else — bun.ink reports a **conflict**.

You have two options:

- **Merge changes** keeps your edits and adds the new ones. This is the normal route.
- **Reload branch** replaces your state with the one from GitHub. Any changes you haven't saved yet are gone; bun.ink asks you clearly beforehand.

## Merging into main and cleaning up

Once the version is finished, you merge it back into the main state with **Merge into main**. After that it's no longer a fork but the regular text.

Two conditions apply:

1. The branch must be saved. Unsaved changes exist only in your browser and wouldn't be included in the merge — bun.ink points this out.
2. The merge must be possible automatically. If both sides have changed the same spot, bun.ink stops and asks you to reload the branch and check the differences before trying again.

**Return to main** takes you back out of branch mode.

Branches you no longer need can be deleted. Read the confirmation prompt carefully: the entire content of that branch on GitHub is permanently lost, and this can't be undone. bun.ink protects the default branch — it can't be deleted.

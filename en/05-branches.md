---
title: "Branches: Versions of a Text"
chapter: 5
slug: branches
description: How to develop a version of a text alongside the main version and merge the two later on.
lang: en
status: translated
updated: 2026-08-21
source: de/05-branches.md
source_hash: f2e8f186a4dff267adc6ac16f9e7f341723c308ea479ca9b1979fafd71e62d21
---

# **Branches: Versions of a Text**

Sometimes you want to try something out without touching the existing text. A branch is exactly that: a second version that runs in parallel until you decide whether it was the right one.

## What a branch is

A branch is a fork in the road. You take the current state of your repository, give it a name, and from then on carry on working in that copy. The main version stays untouched.

This main version has a name too; in most repositories it's called `main oder master branch`. In bun.ink it's the **Default branch**.

For writers this has a practical benefit: you can rewrite a chapter from scratch, try out a second narrative perspective, create a shortened version for a different publication — all at the same time, all traceable, without file names like `kapitel-3-neu-final-2.md`.

## Creating a branch

In the GitHub section of the sidebar you create one with **Create branch**. The new branch grows out of the branch you're currently on.

Git is strict about names, and bun.ink tells you up front what won't work:

- No spaces. Use a hyphen or underscore, for example `version-2`.
- The characters `~ ^ : ? * [ \` aren't allowed either.
- No `..` in the name, no `-` or `.` at the start, no `/` or `.` at the end, no `.lock` ending.

A good name says what the branch is for: `kuerzung-fuer-magazin`, `perspektive-ich`, `lektorat-runde-2`.

## Working on a branch

As soon as you're on a branch other than the main branch, bun.ink makes that clear: a **Branch mode** badge and a note telling you which branch is currently being edited.

The note matters, which is why it's spelled out here once more: **what you write on a branch is not stored in bun.ink.** The bun.ink database only holds the main branch. Everything else exists solely in your browser until you write it to GitHub with **Save to branch**.

Two restrictions follow from this, and you'll run into them in branch mode:

- You can only create, rename, move or delete folders and documents on the main branch. The structure is managed in bun.ink, and branch mode doesn't write there.
- A document's version history is likewise only available on the main branch.

So on a branch, save earlier and more often than you're used to.

## Switching between branches

You switch to another branch via the branch list. bun.ink loads its files from GitHub and shows you that state — exactly one branch is active per project at any time.

If you have unsaved changes, bun.ink asks first: save, discard or cancel. Nothing is silently overwritten. On a branch, "discard" is final, because those changes don't exist anywhere else.

With **Reload branches** you fetch the list fresh from GitHub, in case someone else has created a branch there.

## When GitHub has changed the branch

If you're working on a branch while it moves on over on GitHub — because of you on another device, or because of someone else — bun.ink reports a **Conflict**.

You have two options:

- **Merge changes** keeps your edits and adds the new ones. This is the normal route.
- **Reload branch** replaces your state with the one from GitHub. Any changes you haven't saved yet are gone; bun.ink asks you clearly beforehand.

## Merging into main and tidying up

Once the version is finished, you merge it back into the main version with **Merge into main**. After that it's no longer a side road but the regular text.

Two conditions apply:

1. The branch has to be saved. Unsaved changes exist only in your browser and wouldn't be included in the merge — bun.ink points this out to you.
2. The merge has to be possible automatically. If both sides have changed the same spot, bun.ink stops and asks you to reload the branch and check the differences before you try again.

With **Return to main** you leave branch mode again.

Branches you no longer need can be deleted. Read the confirmation prompt carefully: the entire content of that branch on GitHub is permanently lost, and it can't be undone. bun.ink protects the default branch — it can't be deleted.

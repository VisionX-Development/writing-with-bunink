---
title: Connecting GitHub
chapter: 4
slug: connecting-github
description: What a repository is, how to connect your GitHub account, and how to link a project to a repository.
lang: en
status: translated
updated: 2026-09-20
source: de/04-github-verbinden.md
source_hash: 524d2de7443b18398ce965db87df8d5635bd67cdf4a05f23be03d8b961ec74b9
---

# **Connecting GitHub**

Up to now, your texts have lived in [bun.ink](http://bun.ink). From here on, they can also live in your own GitHub repository — and gain a traceable history in the process. This chapter shows you how to set up the connection.

## What a repository is

A repository is a place to store files that remembers every change. Not just today's state, but every earlier one: who changed what and when, and what was there before.

It belongs to you. [bun.ink](http://bun.ink) writes to it and reads from it, but the repository sits in your GitHub account. If you cancel [bun.ink](http://bun.ink), your texts stay right where they are.

So for this chapter and the ones that follow, you'll need a GitHub account. It's free, and private repositories are included — nobody but you sees your texts, as long as you create the repository as a private one.

## Connecting your GitHub account

You set up the connection once, under **Settings › GitHub**. Clicking **Connect GitHub** takes you to GitHub, where you confirm the authorisation.

In doing so, [bun.ink](http://bun.ink) requests repository access: read and write in your public and private repositories, plus your GitHub login. That's more than would be needed for a single repository — GitHub doesn't offer any finer gradation for this route. Which repository a project actually uses is something you decide afterwards, and you can **Disconnect** at any time.

You can connect several GitHub accounts, for instance a private one and a work one. **Connect another GitHub account** adds a second. Each project remembers which account its repository belongs to.

One tip that saves time: GitHub always uses the account you're currently signed in with there. If you want to connect a different one, switch accounts on [github.com](http://github.com) first.

## Linking a repository to a project

Linking happens per project. In the editor, open the **GitHub** section in the sidebar and click **Link repository**.

[bun.ink](http://bun.ink) lists your repositories, public and private alike. Ones that are already linked are hidden from the list and named separately — each repository belongs to exactly one project.

If you've connected several GitHub accounts, [bun.ink](http://bun.ink) first asks which one the repository belongs to. Without that assignment, the project can't sync.

Then comes the question of the destination: **Open as new project** creates a new project in [bun.ink](http://bun.ink) from the repository. **Link with current project** attaches the repository to the project that's currently open.

## When both sides already have texts

The interesting case: there are texts in [bun.ink](http://bun.ink), and there are texts in the repository too. Then the merge dialog opens.

It gives you two numbers: how many files are newly added, and how many exist on both sides but have different content. The new ones are simply taken over. For each file in dispute, you decide yourself:

- **Use GitHub version** — the version from the repository wins.
- **Keep local version** — your version from [bun.ink](http://bun.ink) wins.
- **Keep both as separate files** — nothing gets lost, you end up with two files and can decide at your leisure.

When in doubt, the third option is the right one. You can always delete later; getting something back is more of a chore.

## How your texts sit in the repository

Your project's structure becomes the folder structure in the repository. A project with a **Research** folder turns into:

```
Romanprojekt/
  Kapitel 1.md
  Recherche/
    Szene A.md

```

What gets written to GitHub are Markdown files. Document names are normalised into stable filenames in the process — special characters are reduced so the file works on every operating system.

One exception remains: high-privacy folders are never transferred, and high-privacy projects can't be linked in the first place. Their contents only leave your browser in encrypted form, and encrypted text in a repository would be of no use to anyone.

## Disconnecting and things going wrong

**Unlink repository** dissolves the link. The project stays in [bun.ink](http://bun.ink), the files stay in the repository — only the wire between them is gone.

There are two problem cases that [bun.ink](http://bun.ink) reports on its own. If the linked repository has been deleted on GitHub, or your access to it has been removed, the link is taken out of the project; you'll be asked whether the locally stored project should go as well. The same happens if the connected GitHub account is no longer available. In both cases, "No" is the safe answer as long as you don't know exactly what happened.

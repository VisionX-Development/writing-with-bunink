---
title: Projects, Folders, and Documents
chapter: 2
slug: projects-folders-and-documents
description: How a writing project is structured, where a text belongs, and how you get texts in and out.
lang: en
status: translated
updated: 2026-09-20
source: de/02-projekte-und-dokumente.md
source_hash: fb58d3d5f223fbd98e5ef6774bd77d43ba5a4bd264fc5bd4fd8eb8f5e11bc805
---

# **Projects, folders and documents**

Before you write, you need a place for the text. This chapter shows how projects, folders and documents fit together, how to bring existing texts in and get them back out again, and what an encrypted area is.

## **What a project is**

A project is the largest unit: a book, a column, a series of features. It contains folders, and those contain documents — your actual texts.

Folders are optional. A document can also sit directly in the project, with no folder around it; in the explorer this level is called the **project root**. Folders may be nested inside each other, for chapters, drafts or topics.

The project is also the unit you later connect to GitHub. It's therefore worth putting texts that belong together into a single project rather than spreading them across several.

## **Creating folders and documents**

The **explorer** sits on the left of the editor. It has several views; you can widen it to the right with the mouse, and collapse or fully expand it. For structure you need **Files**.

The buttons let you create new things: a **new project**, a **new folder**, a **new document**. In the dialog you enter the **name** and, if needed, choose a **project** and a **target folder**; **project root** places the document directly in the project. **Create** closes the dialog.

Everything else happens via the right mouse button. A right-click on a project, a folder or a document opens a menu with **Rename**, **Move** and **Delete**. If you want to edit your documents on a phone, press and hold your finger on the document, folder or project in question.

When deleting, [bun.ink](http://bun.ink) asks for confirmation — and it means it: if you delete a project, all the folders and documents inside it disappear. The same goes for a folder, including its subfolders.

Two small notes on names: documents carry the extension `.md` or `.txt` — if it's missing, [bun.ink](http://bun.ink) adds it. And there can't be two documents with the same name on the same level.

## Opening and closing projects

The project tabs sit at the top of the explorer. You can have several projects open at once and switch between them.

Use the folder button and **Open project** to bring another one in. **Close project** removes it from the explorer again — nothing is deleted in the process; the project stays in your account and can be reopened at any time.

If there's nothing there yet, the explorer says so directly: either there are no projects yet, or none is currently open.

## **Uploading and exporting**

You bring existing texts in via **Upload**. `.md` and `.txt` files are accepted.

[bun.ink](http://bun.ink) quietly skips anything that doesn't fit and afterwards tells you what it was: wrong format, too large for a document, or a document with that name already exists on this level. The message names the affected files.

The way out goes through the same context menu. You export a single document as Markdown (`.md`) or as plain text (`.txt`). For a folder or an entire project you get a ZIP archive that preserves the folder structure.

## **Search and replace**

The explorer's **Search** mode searches all documents in a project at once.

You choose the **project**, enter the **search text** and see the hits grouped by document. **Match case** enables exact spelling.

With **Files to include** and **Files to exclude** you narrow down where the search happens. Both fields accept patterns such as `*.md` or `manuskript/**`.

Replacing works on three levels: a single hit with **Replace**, all hits in one document with **Replace in file**, everything at once with **Replace all**. The last one asks for confirmation first and shows you how many files the replacement will affect.

## **High-privacy projects and folders**

Normally all your texts are already stored in encrypted form in the database of the [bun.ink](http://bun.ink) cloud. But to make all of [bun.ink](http://bun.ink)'s features work, the server has to decrypt them with a special key. This key is kept safe and secret by just one person — the [bun.ink](http://bun.ink) server admin. Another chapter explains exactly how this encryption works at [bun.ink](http://bun.ink). A high-privacy area changes that: its contents are encrypted in your browser and only ever leave it encrypted. Nobody with access to the bun.ink server can read it — not even the [bun.ink](http://bun.ink) server admin.

### **Creating an encrypted area**

The creation dialog offers the option **High-privacy project (end-to-end encrypted)** or **High-privacy folder (end-to-end encrypted)**. In a project, every document in it is encrypted, including those outside any folder; with a folder, only what's inside it.

You choose a **passphrase** of at least 8 characters and repeat it. Read the warning before you confirm: if you lose the passphrase, the texts are lost. We can't reset it and can't restore the contents, not even from a backup.

Afterwards [bun.ink](http://bun.ink) shows you a **recovery key**, once. It unlocks the area even without the passphrase. Save it immediately, ideally in your password manager — it won't be shown a second time.

### Unlocking

An encrypted area is locked when you open it. To unlock it you enter the passphrase or the recovery key. This applies to the current browser session; after reloading the page the area is locked again.

While it's locked, its context menu shrinks to **Unlock**. Renaming, moving, deleting and exporting aren't possible then — otherwise you'd be changing structures whose contents you can't currently see. Saving is blocked too, and an export would contain nothing but encrypted text, which is why bun.ink aborts it and prompts you to unlock.

You can change the passphrase via the context menu. To do so you need the old passphrase or the recovery key. Your texts stay encrypted with the same key and don't have to be saved again — and the recovery key remains valid. The recovery key stays in place forever and cannot be changed!

### What is encrypted and what isn't

The contents of your documents are encrypted. What remains visible are the names of folders and documents, their size, the timestamps and the number of saved versions.

To be honest, a second point belongs here too: the encryption protects against anyone with server access. It does not protect against a compromised device — someone who controls your browser, or who sees the content on your monitor, for instance if you left your desk without logging out, can read your documents. But [bun.ink](http://bun.ink) offers protection against the latter as well: auto-logout. When auto-logout is enabled, a logged-in user is automatically logged out after a chosen period of inactivity.

While locked, the statistics count zero words for these high-privacy documents, and the search skips them.

### No GitHub

A high-privacy folder is never transferred to GitHub. It remains part of the project, but its documents never reach the repository — so neither encrypted nor readable text ends up there. It's marked accordingly in the sidebar, and when you link the project, [bun.ink](http://bun.ink) names the affected folders.

A high-privacy **project** can't be linked to GitHub in the first place. There would be nothing to transfer that would make any sense there.
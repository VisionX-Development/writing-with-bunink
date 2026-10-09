---
title: Projects, Folders, and Documents
chapter: 2
slug: projects-folders-and-documents
description: How a writing project is structured, where a text belongs, and how to get texts in and out.
lang: en
status: translated
updated: 2026-08-21
source: de/02-projekte-und-dokumente.md
source_hash: 8c6cbdbffffc3c8dcdb992b57b40f8412765bf3599a772c93e3033f898f0cbff
---

# **Projects, folders and documents**

Before you start writing, you need a place for your text. This chapter shows how projects, folders and documents fit together, how to bring existing texts in and get them out again, and what an encrypted area is.

## **What a project is**

A project is the large unit: a book, a column, a series of reportages. Inside it are folders, and inside those are documents — your actual texts.

Folders are optional. A document can also sit directly in the project, with no folder around it; in the explorer this level is called the **Project root**. Folders may be nested, for chapters, drafts or topics.

The project is also the unit you later connect to GitHub. It is therefore worth putting texts that belong together into one project rather than several.

## **Creating folders and documents**

On the left of the editor is the **explorer**. It has several views; you can widen it to the right with the mouse, and collapse or fully expand it. For structure you need **Files**.

You create new things with the buttons: a **new project**, a **new folder**, a **new document**. In the dialog you enter the **name** and, if needed, choose **Project** and **Target folder**; **Project root** puts the document directly into the project. **Create** closes the dialog.

Everything else happens via the right mouse button. A right-click on a project, a folder or a document opens a menu with **Rename**, **Move** and **Delete**. If you want to edit your documents on a phone, press and hold your finger on the document, folder or project in question.

When deleting, [bun.ink](http://bun.ink) asks for confirmation, and the question is meant seriously: if you delete a project, every folder and document inside it disappears. The same goes for a folder, including its subfolders.

Two small points about names: documents carry the extension `.md` or `.txt` — if it is missing, [bun.ink](http://bun.ink) adds it. And on the same level there cannot be two documents with the same name.

## Opening and closing projects

The project tabs sit at the top of the explorer. You can have several projects open at once and switch between them.

Using the folder button and **Open project** you bring in another one. **Close project** removes it from the explorer again — nothing is deleted in the process, the project stays in your account and can be reopened at any time.

If there is nothing there yet, the explorer says so directly: either there are no projects yet, or none is currently open.

## **Uploading and exporting**

You bring existing texts in via **Upload**. `.md` and `.txt` files are accepted.

[bun.ink](http://bun.ink) quietly skips anything that does not fit, and afterwards tells you what it was: wrong format, too large for a document, or a document with that name already exists on this level. The message names the affected files.

The way out leads through the same context menu. You export a single document as Markdown (`.md`) or as plain text (`.txt`). For a folder or an entire project you get a ZIP archive in which the folder structure is preserved.

## **Searching and replacing**

The explorer mode **Search** searches all documents of a project at once.

You choose the **project**, enter the **Search text** and see the hits grouped by document. **Match case** makes the exact spelling count.

With **Files to include** and **Files to exclude** you narrow down where the search happens. Both fields accept patterns such as `*.md` or `manuskript/**`.

Replacing works in three steps: a single hit with **Replace**, all hits in one document with **Replace in file**, everything at once with **Replace all**. The last one asks for confirmation first and shows you in how many files it will apply the replacement.

## **High-privacy projects and folders**

Normally all your texts already sit in encrypted form in the database of the [bun.ink](http://bun.ink) cloud. But in order to use all of [bun.ink](http://bun.ink)'s functions, the server has to decrypt them with a special key. This key is kept safe and secret by just one person — the [bun.ink](http://bun.ink) server admin. How this encryption works in detail at [bun.ink](http://bun.ink) is explained in another chapter. A high-privacy area changes that: its content is encrypted in your browser and only ever leaves it encrypted. Nobody with access to the bun.ink server can read it — not even the [bun.ink](http://bun.ink) server admin.

### **Creating an encrypted area**

In the creation dialog there is the option **High-privacy project (end-to-end encrypted)** or **High-privacy folder (end-to-end encrypted)**. With a project, every document inside it is encrypted, including those outside any folder; with a folder, only what is inside it.

You set a **passphrase** of at least 8 characters and repeat it. Read the warning before you confirm: if you lose the passphrase, the texts are lost. We cannot reset it and cannot restore the contents, not even from a backup.

Afterwards [bun.ink](http://bun.ink) shows you a **recovery key** once. It unlocks the area even without the passphrase. Save it immediately, ideally in your password manager — it will not be shown a second time.

### Unlocking

An encrypted area is locked when you open it. To unlock it you enter the passphrase or the recovery key. This applies to the current browser session; after reloading the page the area is locked again.

As long as it is locked, its context menu shrinks to **Unlock**. Renaming, moving, deleting and exporting are then not possible — otherwise you would be changing structures whose content you cannot currently see. Saving is blocked as well, and an export would contain only encrypted text, which is why bun.ink cancels it and prompts you to unlock.

You can change the passphrase via the context menu. For that you need the old passphrase or the recovery key. Your texts stay encrypted with the same key and do not have to be saved again — and the recovery key remains valid. The recovery key exists forever and cannot be changed!

### What is encrypted and what is not

The contents of your documents are encrypted. What remains visible are the names of folders and documents, their size, the timestamps and the number of stored versions.

To be honest, a second sentence belongs here: the encryption protects against anyone with server access. It does not protect against a compromised device — someone who controls your browser, or who sees the content on the monitor, for example if you left your workplace without logging out, can read your documents. But [bun.ink](http://bun.ink) offers protection against the latter too: the auto-logout. If auto-logout is enabled, a logged-in user is automatically logged out after a chosen period of inactivity.

While locked, the statistics count zero words for these high-privacy documents, and the search skips them.

### No GitHub

A high-privacy folder is never transferred to GitHub. It remains part of the project, but its documents do not reach the repository — so neither encrypted nor readable text ends up there. It is marked accordingly in the sidebar, and when linking, [bun.ink](http://bun.ink) names the affected folders.

A high-privacy **project** cannot be linked to GitHub at all. There would be nothing to transfer that would make any sense there.

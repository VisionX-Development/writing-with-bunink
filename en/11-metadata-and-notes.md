---
title: Metadata and Notes
chapter: 11
slug: metadata-and-notes
description: How to add metadata to a document and attach notes to your text that stay invisible in the finished view.
lang: en
status: translated
updated: 2026-09-30
source: de/11-metadaten-und-notizen.md
source_hash: 7d119d2e7bb27b6934f4759ea2c95712ad60373aa1390cb87609643c65739e6d
---

# Metadata and notes

A Markdown file can carry more than the text you read. This chapter shows you the two ways to store information in a document in [bun.ink](http://bun.ink) that isn't part of the text itself: **metadata** at the top of the file, and **notes** at a specific place in the text.

## What metadata is for, and what notes are for

Both live in the same file as your text, both are saved along with it and end up in the commit with it. But they answer different questions:

- **Metadata** says something about the document as a whole: title, short description, status, date. It's meant for programs that process your files further — a website, a table of contents, an AI agent.
- **Notes** say something about one particular spot: "add source", "dialogue feels wooden", "cross-check with chapter 4". They're meant for you, while you write.

## Metadata: the block at the top of the file

Metadata sits in a block at the very top of the file, between two lines of three hyphens. This block is called **frontmatter**. Each line is a field with a name and a value:

```markdown
---
title: Das zweite Kapitel
description: In dem Anna die Stadt verlässt.
status: draft
---
```

Which fields exist isn't determined by [bun.ink](http://bun.ink), but by the program that reads the file later. A website generator like Hugo, Jekyll or Astro usually expects `title` and `date`; this handbook also uses `chapter` and `status`.

Stick to one line per field, following the pattern `name: value`.

On GitHub, the block appears in the file view as a small table above the text. In the [bun.ink](http://bun.ink) editor it's a separate box labelled **Metadata**.

## Inserting metadata

1. Open the document.
2. In the toolbar, click **Format**, then **Insert metadata** in the **Document** group.
3. The box appears at the start of the document with the cursor inside it. Type in the fields you want, one per line.

The block always goes to the top, no matter where your cursor happens to be. While it's empty, it shows `title: …` as a hint; that's just a placeholder and isn't saved.

If the document already has metadata, the menu entry is called **Edit metadata** and takes you straight into the existing block. [bun.ink](http://bun.ink) never creates a second block: programs that read metadata only take the first one into account.

## Removing metadata

Click the × on the right in the box's header. The whole block disappears, your text stays. Cmd+Z (Ctrl+Z on Windows) brings it back.

### What to watch out for

Three hyphens that you type yourself in the text become a **horizontal rule**, not a metadata block. That's why you should always create metadata via the menu.

[bun.ink](http://bun.ink) saves the block character for character exactly as it is. If you open a file that already comes with frontmatter — from an existing repository, say — it stays unchanged when you save.

## Notes: annotations at a specific place in the text

A note is an annotation you pin to a particular spot. In the editor it looks like a colour-highlighted card between two paragraphs, labelled **Note**. In every other view it's invisible: in the preview on GitHub, on a website generated from your files, in other Markdown programs.

### Inserting a note

1. Place the cursor in the paragraph the note belongs to.
2. In the toolbar, click **Format**, then **Insert note** in the **Document** group.
3. The note appears as a card with the cursor inside it. Type your annotation.

The note always goes after the whole paragraph, even if your cursor was in the middle of a sentence. If the cursor is in a list or a quote, the note goes after the entire list or the entire quote. That way a note never cuts your text in half.

To get from the note back into the text, just click into the next paragraph or press the down arrow key.

### Faster with the keyboard shortcut

There's a keyboard shortcut for notes, by default **Ctrl+N** (the Control key, on the Mac too). It does the same thing as **Insert note** in the menu.

On Windows and Linux, Ctrl+N opens a new browser window and the browser doesn't pass the key on. Assign the shortcut to a different combination there: in the settings under **Editor**, in the **Shortcuts** section next to **Insert note**, click **Change shortcut** and press the combination you want. **Delete** turns the shortcut off entirely; the menu still works.

### Removing a note

Click the **×** in the note's header. It disappears completely, your text stays unchanged.

### Where the note is stored

The note is part of your document. In the file it's stored as what's called an HTML comment, a form that every Markdown program skips when displaying:

```markdown
Anna stand am Fenster und zählte die Züge.

<!-- bun.ink:note
Wie viele Züge fahren nachts wirklich? Fahrplan prüfen.
-->

Der letzte kam um Viertel nach zwei.
```

This means:

- The note is saved when you save the document, and it moves with its spot when you rewrite the text before or after it.

- On a branch it goes to GitHub with the next commit; on the default branch it goes with saving in [bun.ink](http://bun.ink). It doesn't need a storage place of its own and isn't lost when you log out.

- The word count and the writing statistics don't count notes.
- Search finds notes. That way you can track down all the open "add source" notes in a project, for example.
- In the **Changes** explorer mode and in a pull request, a new note shows up like any other change to the text.

### Who can see your notes

A note is only invisible in the rendered view. In the file itself it's there in plain text: anyone who opens the raw file, looks at a commit or reads a diff will see it. If your repository is public, so are your notes; if an editor works in the same repository, they'll read them too.

So don't write anything in a note that nobody is allowed to see. When you hover over the **Note** label with the mouse, [bun.ink](http://bun.ink) reminds you of this.

### Notes and review comments

Notes are not the same as comments in a pull request. A **review comment** is written by someone else about your text; it lives on GitHub with the pull request, not in the file. A **note** is something you write to yourself, and it lives in the file. For working with an editor, review comments are the right way to go; notes are your own memo pad.

## Other comments in your files

Some files already come with HTML comments that don't originate in [bun.ink](http://bun.ink) — hidden TODOs in a README, say, or instructions for linting tools. [bun.ink](http://bun.ink) shows them in grey in the editor and saves them back unchanged. If such a comment sits in the middle of a sentence, it appears as a small marker; [bun.ink](http://bun.ink) shows its content when you hover over it with the mouse.

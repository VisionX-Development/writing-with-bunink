---
title: The Editor
chapter: 3
slug: the-editor
description: How to write, format, and save in the editor — and speed things up with snippets.
lang: en
status: translated
updated: 2026-10-04
source: de/03-der-editor.md
source_hash: e885e2a1f489d61fce2b4169a99e27b2e8d527daefafb5e0846d88f3e81761a5
---

# **The editor**

The editor is the surface where you actually write. This chapter shows you how to format text, work with several documents at once, save, and see what you've changed.

## Writing with Markdown

What you see is formatted text. What gets saved is Markdown — a plain text format in which formatting is expressed through characters in the text itself. You don't need to know Markdown; you simply benefit from the fact that your texts stay readable everywhere later on.

The fastest way to format is right as you type. A `#` at the start of a line makes a heading, `##` one of the second level. A `-` begins a bullet list, `1.` a numbered list, `>` a quote. Asterisks around a word make it italic, double asterisks bold.

If that's too much syntax for you, use the **Format** button in the toolbar. It gathers all commands into five groups:

- **Text:** **Bold**, **Italic**, **Strikethrough** and **Inline code**.
- **Paragraph:** **Heading 1** through **Heading 3**, **Bullet list** and **Numbered list**; clicking the same entry a second time turns it back into an ordinary paragraph. **Line break** starts a new line within the same paragraph, with no spacing in between — the same as Shift+Enter.
- **Blocks:** **Quote**, **Code block** and **Insert table** (see “Tables” below). A code block shows text in a fixed-width font and with a border; if a language is specified, such as `python`, it appears at the top left of the block. Here too, clicking **Quote** or **Code block** a second time turns it back into an ordinary paragraph.
- **Document:** **Insert metadata** and **Insert note** (both explained in Chapter 11). Both are kept in the file but appear in no preview and not in the published text.
- **Display:** These entries never change the file. **Line spacing** switches between **Tight**, **Compact**, **Normal** and **Wide**; the setting applies to all documents, because Markdown has no concept of line spacing. **Show line breaks** makes paragraph ends and line breaks visible (see below). **Markdown source** shows the document exactly as it is saved: with all characters, metadata and link addresses. This view is read-only; **Back to editor** takes you back to writing.

You won't find underlining. Markdown doesn't have it, and bun.ink doesn't offer anything that would be lost again when saving.

When you select a passage of text, a small bar appears next to it: the formatting bubble. By default it offers **Bold**, **Italic**, **Strikethrough** and **Inline code**. Which commands it shows is up to you — choose them in the settings under **Editor** at **Formatting bubble**. All the formats from the **Text** and **Paragraph** groups are available, plus **Insert metadata** and **Insert note**. You can also turn the bubble off entirely there if it gets in your way; the **Format** button stays in any case.

### Paragraphs and line breaks

A line can end in three ways, and each one means something different:

| You press | What you get | In the file | With **Show line breaks** |
|---|---|---|---|
| Enter | a new paragraph | a blank line | ¶ at the end of the paragraph |
| Shift+Enter or **Format → Paragraph → Line break** | a new line within the same paragraph | two spaces at the end of the line | ↵ |
| – | a soft break | a plain line ending | ↩ |

Unlike `#` or asterisks, line breaks have no typing shortcut: two spaces or a `\` at the end of a line stay exactly that in the editor. For a break within a paragraph, press Shift+Enter; bun.ink writes the Markdown characters for it itself when you save.

You never type a soft break yourself. It comes from files created elsewhere — in another editor, by an AI agent, or in a pull request. Some writers put every sentence on its own line, so that a commit shows exactly the sentence that changed rather than the whole paragraph. To Markdown, such a line ending is a space: on GitHub, on a blog and in every export, the paragraph flows as continuous text. bun.ink shows it the same way, but keeps every line ending and saves the file back exactly as it was. A commit then shows only what you actually changed.

If a line breaks in the middle of a paragraph even though there's still room to the right, there's usually a hard break behind it, which otherwise has no character of its own. Turn on **Format → Display → Show line breaks**: like the formatting marks in Word, ¶ appears at the end of every paragraph, ↵ at every hard break and ↩ at every soft one. The marks exist only on screen, never in the file. You delete an unwanted break like any other character; if you delete a ↩, the two lines are joined in the file too. Clicking the entry a second time hides the marks again.

### Tables

**Format → Blocks → Insert table** places an empty table with three columns, a header row and two rows after the paragraph at the cursor. Tab moves you from cell to cell; after the last cell, Tab adds a new row. You edit tables from other files the same way, and as long as you don't change a table, bun.ink saves it character for character as it was in the file.

When the cursor is in a table, a bar appears above it:

- **+ Row** inserts a new row below the row at the cursor, **+ Column** a new column to the right of the column at the cursor.
- **− Row** and **− Column** delete the row or column the cursor is in. The header row can't be deleted, because a Markdown table needs one.
- **×** removes the whole table. Undo brings it back.

You can't merge cells or align columns in bun.ink; Markdown has no merged cells. If the table is at the end of the document, the down arrow takes you from its last row into a new paragraph below.

## Several documents in tabs

Every open document gets its own tab. So you can write a chapter while your research notes sit open next to it, and switch between them with a single click.

**New document** creates one and opens it right away. **Close tab** closes the current one, **Close all tabs** clears everything out. If there are more tabs than fit on one line, you can scroll the bar left and right.

On a phone, bun.ink shows a more compact selector instead of the tab bar — the editor itself works exactly the same.

## Saving

Saving happens at the press of a key: Ctrl+S by default, Cmd+S on a Mac. You can change the shortcut in the settings under **Editor** in the **Shortcuts** section at **Save**.

As long as a document has unsaved changes, its tab is marked. If you try to leave the page, bun.ink warns you first.

Sometimes the editor reports that the same document has been saved elsewhere in the meantime — in a second browser window, for example. Then you have a choice: **Overwrite anyway** replaces the other version with yours, and the other one is gone. **Save local version** stores your text in the history as a conflict version; nothing is lost that way, and you can compare the two at your leisure later. The second option is the recommended one.

A document can hold around 1 MB of text — enough for a very long book. If you get close, bun.ink tells you in good time and suggests continuing in the next document. If you exceed the limit, bun.ink refuses to save; your text stays in the editor until you've split it up.

## Seeing your changes

The explorer mode **Changes** shows you what you've changed since the last saved state. Additions and deletions are highlighted.

Two views are available: **Inline** shows both versions interleaved, **Side-by-side** shows them next to each other. Which works better depends on your screen and on how large the change is.

If you haven't changed anything, the view says exactly that. That makes it a quick way to check whether anything is still open before you close up.

## Zen mode

Zen mode clears away everything except your text. You start it via **Zen** in the toolbar or with the keyboard shortcut you define in the settings.

Three controls adjust the view: **Text size**, **Transparency** and **Keep current line centered**. The last one lets the text scroll beneath the cursor instead of letting the cursor wander downwards — the line you're writing on stays in the middle.

There's also the stealth key: a key of your choosing that instantly hides the text completely or makes it half visible again. Handy when someone walks up to your desk. You set it in the settings under **Editor**.

**Back** returns you to the normal view.

## Snippets and jump marks

Snippets are text blocks that you insert using a short shortcut — for standard phrases, sender details, recurring question catalogues.

You manage them on the **Snippets** page. **New snippet** needs a **Title**, a **Shortcut**, optionally a **Group**, and the **Text block** itself. Groups sort the collection, and the search finds a snippet by title, shortcut or content.

In the editor, you type the shortcut and press the space bar. The shortcut disappears and the text block is there.

So that a text block doesn't have to be reworked every time you use it, you can place jump marks inside it — placeholders in curly braces, such as `{Name}`. Press Tab to jump to the next mark; its text is selected, so you can either keep it or type straight over it. In the snippet editor, **Insert jump mark** adds one.

Jump marks also work in ordinary text, not just in snippets. Which characters enclose them is set in the settings under **Jump marks**; if you leave the field empty, they're switched off.

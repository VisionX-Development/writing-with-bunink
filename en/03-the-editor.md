---
title: The Editor
chapter: 3
slug: the-editor
description: How to write, format, and save in the editor — and get faster with snippets.
lang: en
status: translated
updated: 2026-10-04
source: de/03-der-editor.md
source_hash: 9f83a93abff7e39aeeecf3efcfe55e6abb461656b7d34a4183efbabd2876df3a
---

# **The Editor**

The editor is the surface you actually write on. This chapter shows you how to format, work with several documents at once, save, and see what you have changed.

## Writing with Markdown

What you see is formatted text. What gets saved is Markdown — a plain text form in which formatting is expressed through characters in the text. You don't need to know Markdown; you simply benefit from the fact that your texts stay readable everywhere later on.

The fastest way to format is right as you type. `#` at the start of a line makes a heading, `##` a second-level one. `-` starts a bullet list, `1.` a numbered list, `>` a quote. Asterisks around a word make it italic, double asterisks bold.

If that's too much syntax for you, use the **Format** button in the toolbar. It gathers all commands into five groups:

- **Text:** **Bold**, **Italic**, **Strikethrough** and **Inline code**.
- **Paragraph:** **Heading 1** through **Heading 3**, **Bullet list** and **Numbered list**; clicking the same entry a second time turns it back into an ordinary paragraph. **Line break** starts a new line within the same paragraph, with no space in between — the same as Shift+Enter.
- **Blocks:** **Quote**, **Code block** and **Insert table** (see "Tables" below). A code block shows text in a fixed-width font and with a border; if a language is specified, such as `python`, it appears at the top left of the block. Here too, clicking **Quote** or **Code block** a second time turns it back into an ordinary paragraph.
- **Document:** **Insert metadata** and **Insert note** (both explained in Chapter 11). Both are stored in the file, but appear in no preview and not in the published text.
- **Display:** These entries never change the file. **Line spacing** switches between **Tight**, **Compact**, **Normal** and **Wide**; the setting applies to all documents, because Markdown has no concept of line spacing. **Show line breaks** makes paragraph ends and breaks visible (see below). **Show line numbers** displays, to the left of the text, which line of the file a block sits on (see "Line numbers" below). **Markdown source** shows the document exactly as it is saved: with all characters, metadata and link addresses. This view is read-only; **Back to editor** takes you back to writing.

You won't find underlining. Markdown doesn't have it, and bun.ink doesn't offer anything that would be lost again on saving.

When you select a passage of text, a small bar appears beside it: the formatting bubble. By default it offers **Bold**, **Italic**, **Strikethrough** and **Inline code**. You choose which commands it shows in the settings under **Editor** at **Formatting bubble** — all formats from the **Text** and **Paragraph** groups are available, plus **Insert metadata** and **Insert note**. You can also switch the bubble off entirely there if it gets in your way; the **Format** button remains in any case.

### Paragraphs and line breaks

A line can end in three ways, and each one means something different:

| You press | What you get | In the file | With **Show line breaks** |
|---|---|---|---|
| Enter | a new paragraph | a blank line | ¶ at the end of the paragraph |
| Shift+Enter or **Format → Paragraph → Line break** | a new line within the same paragraph | two spaces at the end of the line | ↵ |
| – | a soft break | a plain line ending | ↩ |

Unlike `#` or asterisks, line breaks have no typing shortcut: two spaces or a `\` at the end of a line stay exactly what they are in the editor. You make a break within a paragraph with Shift+Enter, and bun.ink writes the Markdown characters for it itself when saving.

You never type a soft break yourself. It occurs in files that were created elsewhere — in another editor, by an AI agent, or in a pull request. Some people put every sentence on its own line so that a commit shows exactly the sentence that changed and not the whole paragraph. For Markdown, such a line ending is a space: on GitHub, on a blog and in every export, the paragraph runs on as continuous text. bun.ink therefore displays it the same way, but keeps every line ending and saves the file back just as it was. A commit then shows only what you actually changed.

If a line breaks in the middle of a paragraph even though there's still room on the right, there's usually a hard break behind it that otherwise has no character of its own. Switch on **Format → Display → Show line breaks**: like the formatting marks in Word, ¶ appears at the end of every paragraph, ↵ at every hard break and ↩ at every soft one. The characters exist only on screen, never in the file. You delete an unwanted break like any other character; if you delete a ↩, the two lines move together in the file as well. Clicking the entry a second time hides the characters again.

### Tables

**Format → Blocks → Insert table** places an empty table with three columns, a header row and two rows after the paragraph at the cursor. Tab moves you from cell to cell; after the last cell, Tab appends a new row. You edit tables from other files in exactly the same way, and as long as you don't change a table, bun.ink saves it character for character just as it stood in the file.

When the cursor is inside a table, a bar appears above it:

- **+ Row** inserts a new row below the row at the cursor, **+ Column** one to the right of the column at the cursor.
- **− Row** and **− Column** delete the row or column the cursor is in. The header row cannot be deleted, because a Markdown table needs it.
- **×** removes the entire table. Undo brings it back.

You cannot merge cells or align columns in bun.ink; Markdown has no concept of merged cells. If the table is at the end of the document, the Down arrow takes you from its last row into a new paragraph below it.

### Line numbers

If someone writes to you "something's wrong in lines 64 to 75", they mean the lines of the Markdown file — that's how GitHub, an AI agent and bun.ink's change and review views count. You don't see these lines in the editor, because it shows formatted text. Switch on **Format → Display → Show line numbers**: to the left of every paragraph, every heading, every list item, every table row and every line of code, the line it occupies in the file appears. The numbers exist only on screen, never in the file. Clicking the entry a second time hides them again; after a reload they are off as well.

What's counted are lines of the file, not lines on the screen. A long paragraph that wraps across five screen lines in the editor often sits on a single line in the file and therefore has only one number. Conversely, a paragraph can consist of several file lines, for example if it contains soft breaks (see "Paragraphs and line breaks").

Sometimes the numbers jump even though nothing appears in between in the editor. In that case the file contains lines that serve only the form and that the editor doesn't show:

- **Blank lines:** In Markdown there is a blank line between two paragraphs. The spacing you see in the editor is purely visual.

- **Code blocks:** In the file, a code block begins and ends with a line of three backticks (`` ``` ``), possibly followed by the language at the top. The editor doesn't show these two lines; it turns them into the border and the label at the top left. A code block with a single line of code therefore takes up three lines of the file.

- **Tables:** Below the header row, the file contains a separator line made of dashes (`| --- | --- |`). It establishes that the row above is the header, and doesn't appear in the editor. The first row below the header therefore carries a number that is two higher.

An example with two short code blocks in a row:

| Line | In the file                        | In the editor (what you see) |
| ---- | ---------------------------------- | ---------------------------- |
| 75   | a paragraph                        | 75 paragraph text            |
| 76   | `` ``` `` (start of the code block) | (not shown)                 |
| 77   | text of code block I               | 77 text of code block I      |
| 78   | `` ``` `` (end of the code block)  | (not shown)                  |
| 79   | blank line                         | (not shown)                  |
| 80   | `` ``` `` (start of the code block) | (not shown)                 |
| 81   | text of code block II              | 81 text of code block II     |
| 82   | `` ``` `` (end of the code block)  | (not shown)                  |
| 83   | blank line                         | (not shown)                  |
| 84   | next paragraph                     | 84 paragraph text            |

So the numbers are correct. "Lines 80 to 82" refers to exactly the second code block, even though you only see one line of it. If you want to see every line of the file, including the invisible ones, open **Format → Display → Markdown source**.

## Several documents in tabs

Every open document gets a tab. So you can work on a chapter while your research notes sit open beside it, and switch with a single click.

**New document** creates one and opens it straight away. **Close tab** closes the current one, **Close all tabs** clears the decks. If there are more tabs than fit in the row, you can scroll the bar left and right.

On a phone, bun.ink shows a more compact selector instead of the tab bar — the editor itself works exactly the same.

## Saving

You save with a keystroke: Ctrl+S by default, Cmd+S on a Mac. You can reassign the shortcut in the settings under **Editor** in the **Shortcuts** section at **Save**.

As long as a document has unsaved changes, its tab is marked. If you try to leave the page, bun.ink warns you first.

Sometimes the editor reports that the same document has meanwhile been saved somewhere else — in a second browser window, for example. Then you have a choice: **Overwrite anyway** replaces the other version with yours, and the other one is gone. **Save local version** files your text in the history as a conflict version; nothing is lost in the process, and you can compare at your leisure later. The second option is the recommended one.

A document may hold around 1 MB of text — enough for a very long book. If you get close, bun.ink tells you in good time and suggests carrying on in the next document. If you exceed the limit, bun.ink refuses to save; your text stays in the editor until you have split it up.

## Seeing changes

The **Changes** explorer mode shows you what you have changed since the last saved state. Additions and deletions are highlighted.

Two views are available: **Inline** shows both states interleaved, **Side-by-side** shows them next to each other. Which is better depends on your screen and on how large the change is.

If you haven't changed anything, the view says exactly that. It's therefore also a quick way to check, before closing, whether anything is still outstanding.

## Zen mode

Zen mode clears away everything except your text. You start it via **Zen** in the toolbar or with the keyboard shortcut you define in the settings.

Three controls adjust the view: **Text size**, **Transparency** and **Keep current line centered**. The last one lets the text scroll beneath the cursor instead of letting the cursor travel downwards — the line you're writing on stays in the middle.

There's also the stealth key: a key of your choice that instantly hides the text completely or makes it half visible again. Handy when someone walks up to your desk. You set it in the settings under **Editor**.

**Back** returns you to the normal view.

## Snippets and jump marks

Snippets are text blocks you insert via a short shortcut — for standard phrases, sender details, recurring sets of questions.

You manage them on the **Snippets** page. **New snippet** needs a **Title**, a **Shortcut**, optionally a **Group**, and the **Text block** itself. Groups organise the collection, and the search lets you find a snippet by title, shortcut or content.

In the editor, you type the shortcut and press the space bar. The shortcut disappears and the text block is there.

So that a text block doesn't have to be reworked every time you use it, you can place jump marks in it — placeholders in curly braces, such as `Name`. Tab takes you to the next mark; its text is selected, so you can either keep it or type straight over it. In the snippet editor, **Insert jump mark** adds one.

Jump marks also work in ordinary text, not just in snippets. You define which characters enclose them in the settings under **Jump marks**; if you leave the field empty, they are off.

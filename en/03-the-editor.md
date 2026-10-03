---
title: The Editor
chapter: 3
slug: the-editor
description: How to write, format, and save in the editor — and speed things up with snippets.
lang: en
status: translated
updated: 2026-10-03
source: de/03-der-editor.md
source_hash: e885e2a1f489d61fce2b4169a99e27b2e8d527daefafb5e0846d88f3e81761a5
---

# **The Editor**

The Writer is the surface where you actually write. This chapter shows you how to format text, work on several documents at once, save, and see what you've changed.

## Writing with Markdown

What you see is formatted text. What gets saved is Markdown — a plain text format in which formatting is expressed through characters in the text itself. You don't need to know Markdown; you simply benefit from the fact that your texts will stay readable everywhere later on.

The quickest way to format is as you type. A `#` at the start of a line makes a heading, `##` a second-level one. A `-` starts a bullet list, `1.` a numbered list, `>` a quote. Asterisks around a word make it italic, double asterisks bold.

If that's too much syntax for you, use the **Format** button in the toolbar. It gathers every command in four groups:

- **Text:** **Bold**, **Italic**, **Strikethrough** and **Inline code**.
- **Paragraph:** **Heading 1** through **Heading 3**, **Bullet list**, **Numbered list**, **Quote** and **Code block**. A code block shows text in a fixed-width font inside a frame; if a language is given, such as `python`, it appears at the top left of the block. A second click on the same entry turns it back into an ordinary paragraph.
- **Display:** **Line break** starts a new line within the same paragraph, with no space in between — the same as Shift+Enter. **Line spacing** switches between **Tight**, **Compact**, **Normal** and **Wide**; the setting applies to every document and never ends up in the file, because Markdown has no notion of line spacing. **Markdown source** shows the document exactly as it is saved: with every character, the metadata and the link addresses. This view is read-only; **Back to editor** takes you back to writing.
- **Document:** **Insert metadata** and **Insert note** (both explained in chapter 11), plus **Show line breaks**.

Sometimes a line breaks in the middle of a paragraph even though there would be room on the right. Usually there's a hard line break behind it, which has no character of its own in the text. **Show line breaks** makes it visible as ↵, and you delete it like any other character. Simple line breaks that exist only in the file and count as spaces everywhere are highlighted in colour. A second click on the entry hides both again.

You won't find underlining. Markdown doesn't have it, and bun.ink doesn't offer anything that would be lost again on saving.

When you select a passage, a small bar appears next to it: the formatting bubble. To begin with it offers **Bold**, **Italic**, **Strikethrough** and **Inline code**. You choose which commands it shows in the settings under **Editor**, at **Formatting bubble** — every format from the **Text** and **Paragraph** groups is available, plus **Insert metadata** and **Insert note**. That's also where you can turn the bubble off entirely if it bothers you; the **Format** button stays either way.

## Several documents in tabs

Every open document gets a tab. So you can work on a chapter while your research notes sit open alongside, and switch with a single click.

**New document** creates one and opens it right away. **Close tab** closes the current one, **Close all tabs** clears the deck. If there are more tabs than fit in the row, you can scroll the bar left and right.

On a phone, bun.ink shows a more compact selector instead of the tab bar — the Writer itself works exactly the same.

## Saving

You save with a keystroke: Ctrl+S by default, Cmd+S on a Mac. You can change the shortcut to something else in the settings under **Editor**, in the **Shortcuts** section at **Save**.

As long as a document has unsaved changes, its tab is marked. If you try to leave the page, bun.ink warns you first.

Sometimes the Writer reports that the same document has meanwhile been saved somewhere else — in a second browser window, for example. Then you have a choice: **Overwrite anyway** replaces the other version with yours, and the other one is gone. **Save local version** files your text in the history as a conflict version; nothing is lost that way, and you can compare the two at your leisure later. The second option is the recommended one.

A document can hold around 1 MB of text — enough for a very long book. If you get close, bun.ink tells you in good time and suggests carrying on in the next document. If you go over the limit, bun.ink refuses to save; your text stays in the Writer until you've split it up.

## Seeing changes

The explorer mode **Changes** shows you what you've changed since the last saved state. Additions and deletions are highlighted.

There are two views to choose from: **Inline** shows both states interwoven, **Side-by-side** shows them next to each other. Which works better depends on your screen and on how large the change is.

If you haven't changed anything, the view says exactly that. That also makes it a quick way to check, before closing, whether anything is still open.

## Zen mode

Zen mode clears away everything except your text. You start it with **Zen** in the toolbar or with the keyboard shortcut you define in the settings.

Three sliders adjust the view: **Text size**, **Transparency** and **Keep current line centered**. The last one scrolls the text beneath the cursor instead of letting the cursor wander downwards — the line you're writing on stays in the middle.

On top of that there's the stealth key: a key of your choice that instantly hides the text completely or makes it half visible again. Handy when someone walks up to your desk. You set it in the settings under **Editor**.

**Back** returns you to the normal view.

## Snippets and jump marks

Snippets are text blocks you insert with a short shortcut — for standard phrases, sender details, recurring sets of questions.

You manage them on the **Snippets** page. **New snippet** needs a **Title**, a **Shortcut**, optionally a **Group**, and the **Text block** itself. Groups sort the collection, and the search finds a snippet by title, shortcut or content.

In the Writer, you type the shortcut and press the space bar. The shortcut disappears, the text block is there.

So that a text block doesn't need reworking every time you use it, you can place jump marks inside it — placeholders in curly braces, such as `{Name}`. Tab jumps you to the next mark; its text is selected, so you can either keep it or overwrite it straight away. In the snippet editor, **Insert jump mark** inserts one.

Jump marks also work in ordinary text, not just in snippets. You define which characters enclose them in the settings under **Jump marks**; leave the field empty and they're off.

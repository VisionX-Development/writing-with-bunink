---
title: The Editor
chapter: 3
slug: the-editor
description: How to write, format and save in the editor — and how snippets make you faster.
lang: en
status: translated
updated: 2026-09-20
source: de/03-der-editor.md
source_hash: 82df1f06c4827080ce249a9502bdc0001c0f136aebc75c547304bf650b8f34d2
---

# **The editor**

The editor is the surface where you actually write. This chapter shows you how to format text, work with several documents at once, save, and see what you've changed.

## Writing with Markdown

What you see is formatted text. What gets saved is Markdown — a plain-text format in which formatting is expressed through characters in the text itself. You don't need to know Markdown; you simply benefit from the fact that your texts stay readable everywhere later on.

The fastest way to format is as you type. A `#` at the start of a line makes a heading, `##` a second-level one. A `-` starts a bullet list, `1.` a numbered list, `>` a quote. Asterisks around a word make it italic, double asterisks bold.

If that's too much syntax for you: select a passage and a small bar appears above the selection with **Bold**, **Italic**, **Strikethrough**, **Inline code**, **Heading 1** through **Heading 3**, **Bullet list**, **Numbered list** and **Quote**. The same commands live in the **Format** button in the toolbar.

You won't find underlining. Markdown doesn't have it, and bun.ink doesn't offer anything that would be lost again on saving.

The bar above the selection can be turned off if it bothers you — in the settings under **Editor**, at **Formatting bubble**.

## Several documents in tabs

Every open document gets a tab. So you can write your chapter while your research notes sit open alongside it, and switch with a single click.

**New document** creates one and opens it right away. **Close tab** closes the current one, **Close all tabs** clears the deck. If there are more tabs than fit on the line, you can scroll the bar left and right.

On a phone, bun.ink shows a more compact selector instead of the tab bar — the editor itself works exactly the same.

## Saving

Saving happens at the press of a key: Ctrl+S by default, Cmd+S on a Mac. You can reassign the shortcut in the settings under **Editor**, at **Save shortcut**.

As long as a document has unsaved changes, its tab is marked. If you try to leave the page, bun.ink warns you first.

Sometimes the editor reports that the same document has since been saved elsewhere — in a second browser window, for instance. Then you have a choice: **Overwrite anyway** replaces the other version with yours, and the other one is gone. **Keep local version** files your text in the history as a conflict version; nothing is lost that way, and you can compare the two at your leisure later. The second option is the recommended one.

A document can hold roughly 1 MB of text — enough for a very long book. If you get close, bun.ink tells you in good time and suggests continuing in the next document. If you exceed the limit, bun.ink refuses to save; your text stays in the editor until you've split it up.

## Seeing changes

The **Changes** explorer mode shows you what you've changed since the last saved state. Additions and deletions are highlighted.

There are two views to choose from: **Inline** shows both states interwoven, **Side-by-side** shows them next to each other. Which works better depends on your screen and on how large the change is.

If you haven't changed anything, the view says exactly that. That makes it a quick way to check whether anything is still open before you close up.

## Zen mode

Zen mode clears everything away except your text. You start it via **Zen** in the toolbar or via the keyboard shortcut you define in the settings.

Three sliders adjust the view: **Text size**, **Transparency** and **Keep current line centred**. The last of these lets the text scroll beneath the cursor instead of letting the cursor wander downwards — the line you're writing on stays in the middle.

There's also the stealth key: a key of your choice that instantly hides the text completely or makes it half-visible again. Handy when someone walks up to your desk. You set it in the settings under **Editor**.

**Back** returns you to the normal view.

## Snippets and jump markers

Snippets are text building blocks you insert via a short abbreviation — for standard phrases, sender details, recurring lists of questions.

You manage them on the **Snippets** page. **New snippet** needs a **Title**, an **Abbreviation**, optionally a **Group**, and the **Text block** itself. Groups organise the collection, and the search finds a snippet by title, abbreviation or content.

In the editor you type the abbreviation and press the space bar. The abbreviation disappears, the text block is there.

So that a text block doesn't have to be reworked every time you use it, you can place jump markers in it — placeholders in curly braces, such as `{Name}`. Tab takes you to the next marker; its text is selected, so you can either keep it or type straight over it. In the snippet editor, **Insert jump marker** adds one.

Jump markers also work in ordinary text, not just in snippets. You define which characters enclose them in the settings under **Jump markers**; leave the field empty and they're off.

# Chapter structure

How the handbook is divided. For what goes *inside* a chapter file, see [`DOCUMENTS.md`](DOCUMENTS.md); for the current list of chapters and their status, see [`CONTENTS.md`](CONTENTS.md).

## One chapter, one file

```
de/03-projekte-und-dokumente.md
   │  │
   │  └─ slug: kebab-case, German, matches the `slug` front-matter field
   └──── two-digit chapter number, zero-padded
```

The English counterpart is generated at `en/<NN>-<slug_en>.md` — same number, translated slug. The number is what pairs the two files across languages, so **it never changes once a chapter is published**.

Chapter `00` is the introduction to the handbook itself and is not counted as a content chapter.

## Order

Numbering is reading order, and reading order is a deliberate arc:

1. **Getting started (01–03)** — what a reader needs before anything else: account, editor, and how projects, folders and documents relate.
2. **The Git part (04–07)** — the actual subject of the app, introduced one concept at a time: connect a repository, then branches, then commits and history, then pull requests. Each of these assumes the previous one.
3. **Everything else (08–10)** — capabilities a reader looks up when they need them: AI agents, encrypted areas, statistics and export.

A reader should be able to work through 01–07 front to back and never meet a term that has not been introduced. From 08 onward, chapters should stand on their own.

## Scope of a chapter

A chapter answers **one question a reader actually has** ("how do I get a second version of this text?"), not one feature area of the app. Rules of thumb:

- If a chapter needs more than about six second-level headings, it is doing two jobs — split it.
- If it is under a page, it is probably a section of its neighbour — merge it.
- If you cannot write its one-sentence purpose (see `description` in the front matter), the chapter is not yet a chapter.

Do not split a chapter into a folder of files. The flat structure is what keeps the numbering, the translation pairing, and the table of contents simple.

## Adding a chapter

1. Pick the number by where it belongs in the reading order.
2. Create `de/<NN>-<slug>.md` with complete front matter (see [`DOCUMENTS.md`](DOCUMENTS.md)), including `slug_en`.
3. Add the row to [`CONTENTS.md`](CONTENTS.md).
4. Write it in bun.ink, on a branch.
5. Run `npm run translate`, then open a pull request with `de/` and `en/` in the same commit.

### Inserting between existing chapters

Renumbering published chapters breaks every link that points at them. Prefer appending at the end of a section, or — where a topic genuinely belongs in the middle — leave gaps: the numbering has no requirement to be contiguous. Renumber only when the reading order is actually wrong, and then renumber in one commit that touches `de/`, `en/`, `CONTENTS.md`, and every cross-reference.

## Removing a chapter

Delete both language files and its row in `CONTENTS.md`, and grep for links to it. If the topic still exists but moved, say where it went in the pull request — readers who bookmarked the file will end up in the Git history looking for it.

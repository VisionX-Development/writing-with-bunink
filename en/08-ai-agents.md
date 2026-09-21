---
title: AI Agents on Your Texts
chapter: 8
slug: ai-agents
description: How an AI agent reads your repository, proposes changes, and how you decide what makes it into your text.
lang: en
status: translated
updated: 2026-09-21
source: de/08-ki-agenten.md
source_hash: 453aa6a643b447f12317a47494aa7c3330ffb5a2a6ceb0dd37d0e4092edac191
---

# AI Agents Working on Your Texts

Because your texts live in a repository, software that isn't you can work on them: an AI agent that reads what's there and proposes changes. This chapter shows how such an agent gets to your texts, how you give it an assignment, and how you review its results before any of it ends up in your version.

## What an Agent Is — and What It Isn't

An AI agent is a program with a language model behind it that doesn't just answer but works: it opens the files in your repository, reads them, changes something, creates a branch, and opens a pull request. What happens after that is up to you — exactly as with the editing workflow in Chapter 7.

The difference from a chat window is access. A chat sees whatever you paste into it. An agent sees your repository and can write in it. That makes it useful for work that affects the whole text — and it's the reason you don't give it the same freedom you give yourself.

Three things an agent explicitly is not:

- **Not a co-author.** It proposes, it doesn't decide. The merge is yours.

- **Not a memory.** Every assignment starts from zero. Whatever the agent should know about your project has to be in the repository (see **Writing Down the House Rules** below).

- **Not a second opinion that takes responsibility.** It states things just as fluently when they're wrong. For facts, quotations, and names, you check yourself.

## What an Agent Is Worth Using For

Well suited are tasks that call for diligence rather than inspiration and that play out in many places at once:

- Spelling, punctuation, and typos across all chapters.

- Consistency: is the character called the same thing everywhere, is the form of address consistently "you", are the spellings of places and titles correct.

- Finding repetitions — phrasings that appear three times without your noticing.

- Checking structure: heading levels, sequence, cross-references that lead nowhere.

- Pulling a synopsis, a summary, or a chapter overview out of the existing text.

Poorly suited is everything that makes up your voice. An agent asked to write a paragraph "more beautifully" reliably delivers a paragraph that sounds like nobody. The narrower the assignment, the more usable the result.

## Letting an Agent into Your Repository

The agent doesn't reach your texts through [bun.ink](http://bun.ink) but through GitHub. For you that means: you give it access to the repository linked to your project, and after that it works there while you keep writing in [bun.ink](http://bun.ink).

How access is set up depends on the provider — most agents install themselves as a GitHub App or connect to your GitHub account, the way [bun.ink](http://bun.ink) does in Chapter 4. Regardless of the provider, three rules apply:

1. **Give access to exactly one repository**, not to all of them. During installation, GitHub asks which repositories an app may see.

2. **Let the agent work on its own branch.** Nobody but you writes directly to `main` — not even an agent.

3. **Choose an agent that opens pull requests.** Then you get the result in the form you already know from Chapter 7, instead of as a done deal.

What the agent sees in the process is the entire content of the repository, and it sends parts of it to the language model provider it works for. With a private repository, your text therefore still leaves your account. Texts that aren't allowed to do that belong in an encrypted area (Chapter 9) or in a project without agents.

## Formulating an Assignment

An assignment to an agent isn't a prompt in the sense of "write me something", but a work instruction with scope, goal, and limits. What works in practice:

- **Say which files you mean.** "Chapters 3 to 5" is an assignment; "the novel" is an invitation to chaos.

- **Say what must not be touched.** Dialogue, quotations, the chapter headings — name them explicitly, otherwise everything counts as fair game.

- **One task per assignment.** Spelling *and* cutting *and* structure produce a pull request you can no longer review sensibly.

- **Ask for small proposals.** You can accept or reject ten individual changes; a rewritten chapter you can only take whole or not at all.

- **Let it ask you.** A good assignment ends with: if something is unclear, write it in the pull request instead of guessing.

So a workable assignment sounds more like this: "Read `kapitel-03.md` through `kapitel-05.md`. Correct spelling and punctuation. Don't change any phrasing and no dialogue. Create a branch, commit once per chapter, and open a pull request against `main`."

## Reviewing the Result

When the agent is finished, its work sits as a pull request on your branch — and therefore in the same workflow as a revision by a human. In [bun.ink](http://bun.ink), the sidebar shows that a revision is waiting; you go through it passage by passage or as a whole in the merge view. Exactly how that works is described in Chapter 7.

While going through it, a different kind of attention pays off than with a human editor. Watch out especially for:

- **Silent changes.** An agent likes to "improve" things on the side that nobody asked about. Every block that doesn't belong to the assignment gets rejected — even if it looks good.

- **Invented certainty.** Names, dates, quotations, and cross-references you verify at the source, not in the proposal.

- **Scope.** A pull request with thirty blocks across ten files is a sign that the assignment was too broad. Close it and set a narrower task.

- **Your voice.** If a sentence ends up more correct and more boring, it wasn't an improvement.

Rejected passages and your own counter-versions are written back to the pull request by [bun.ink](http://bun.ink). With an agent this has no educational effect — it learns nothing from it for next time. Whatever it should know permanently therefore belongs in the repository.

## Writing Down the House Rules

So that you don't repeat the same requirements with every assignment, you put them in a file in your repository. The usual choice is an `AGENTS.md` in the top-level folder; many agents read it of their own accord, and where that isn't the case, you point to it in the assignment.

It should contain what a new colleague would need to know on day one:

- What the project is about and who reads it.

- Which files are the text and which are just accessories.

- The rules that matter to you: form of address, tense, spellings, what must never be changed.

- How the work is done: separate branch, one topic per pull request, questions instead of assumptions.

This handbook does exactly the same — the rules it is worked on by are in the repository and apply equally to humans and agents.

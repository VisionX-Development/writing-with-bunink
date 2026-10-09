---
title: AI Tools and Your Texts
chapter: 8
slug: ai-agents
description: How an AI agent reads your repository, suggests changes, and how you decide what makes it into your text.
lang: en
status: translated
updated: 2026-09-21
source: de/08-ki-agenten.md
source_hash: 6ea77b6442ead9d9b74cffdfe4cc1e0038878e9e04d868a53993a193f3bb918d
---

# AI Tools and Your Texts

Because your texts live in a repository, software other than you can work on them: an AI agent that reads what's there and proposes changes. This chapter shows how such an agent gets to your texts, how you give it a task, and how you review its results before any of it ends up in your version.

## What an Agent Is — and What It Isn't

An AI agent is a program with a language model behind it that doesn't just answer but works: it opens the files in your repository, reads them, changes something, creates a branch, and opens a pull request. What happens after that is up to you — exactly as with the editing process in Chapter 7.

The difference from a chat window is access. A chat sees what you paste into it. An agent sees your repository and can write to it. That makes it useful for work that affects the whole text — for example, style guidelines or background information that applies to every text in your repository (more on this under **Writing Down Rules for Editing**). Used properly, an AI agent is a tool that can move your texts forward.

Two things an agent explicitly is not:

- **Not a co-author.** It proposes, it doesn't decide. The merge is yours.
- **Not a second opinion that carries responsibility.** It states things just as fluently when they're wrong. With facts, quotations, and names, you check for yourself.

## When an Agent Is Worth It

Well suited are tasks that call for diligence rather than inspiration and that play out in many places at once:

- Spelling, punctuation, and typos across all chapters.
- Consistency: is the character's name the same everywhere, is the form of address consistently «du», are place names and titles spelled the same way.
- Finding repetitions — phrasings that occur three times without your noticing.
- Checking structure: heading levels, order, cross-references that lead nowhere.
- Pulling a synopsis, a summary, or a chapter overview out of the existing text.

Poorly suited is everything that makes up your voice. An agent asked to write a paragraph "more beautifully" will reliably deliver a paragraph that sounds like nobody. The narrower the task, the more usable the result.

## Giving an Agent Access to Your Repository

The agent doesn't reach your texts through [bun.ink](http://bun.ink), but through GitHub. For you, that means: you give it access to the repository linked to your project, and from then on it works there while you keep writing in [bun.ink](http://bun.ink).

How access is set up depends on the provider — most agents install themselves as a GitHub App or connect to your GitHub account, just as [bun.ink](http://bun.ink) does in Chapter 4. Whatever the provider, three rules apply:

1. **Give access to exactly one repository**, not to all of them. During installation, GitHub asks which repositories an app may see.
2. **Let the agent work on its own branch.** Nobody but you writes directly to `main` — not even an agent.
3. **Let the agent open pull requests.** Then you get the result in the form you already know from Chapter 7, rather than as a done deal.

What the agent sees in the process is the entire content of the repository, and it sends parts of it to the language model provider it works for. Even with a private repository, your text thus leaves your account. Texts that mustn't do that belong in an encrypted area (Chapter 9) or in a project without agents.

## Formulating a Task

A task for an agent isn't a prompt in the sense of "write me something," but a work instruction with scope, goal, and limits. What works in practice:

- **Say exactly which files you mean.** "Chapters 3 to 5" is a targeted task; "the novel" is an invitation to chaos.
- **Say what must not be touched.** Dialogue, quotations, the chapter headings — name them explicitly, otherwise everything is fair game.
- **One task per assignment.** Spelling *and* cutting *and* structure produce a pull request you can no longer review sensibly.
- **Ask for small proposals.** You can accept or reject ten individual changes; a rewritten chapter you can only take whole or not at all.
- **Invite questions.** A good task ends with: if something is unclear, write it in the pull request instead of guessing.

A usable task therefore sounds more like this: "Read `kapitel-03.md` through `kapitel-05.md`. Correct spelling and punctuation. Don't change any phrasing and no dialogue. Create a branch, make one commit per chapter, and open a pull request against `main`."

## Reviewing the Result

When the agent is done, its work sits as a pull request on your branch — and thus in the same workflow as a revision by a human. In [bun.ink](http://bun.ink), the sidebar shows that a revision is waiting; you go through it passage by passage or as a whole in the merge window. How exactly that works is described in Chapter 7.

When going through it, a different kind of attention pays off than with a human editor. Watch out in particular for:

- **Silent changes.** An agent likes to "improve" things on the side that nobody asked about. Any block that isn't part of the task gets rejected — even if it looks good.
- **Invented certainty.** Names, dates, quotations, and source references are what an agent invents most readily. Check them against the source, not against the proposal.
- **Scope.** A pull request with thirty blocks across ten files is a sign that the task was too broad. Close it and define the task more narrowly.
- **Your voice.** If a sentence ends up more correct and more boring, it wasn't an improvement.

[bun.ink](http://bun.ink) writes rejected passages and your own counter-versions back to the pull request. With an agent, this has no educational effect — it learns nothing from it for next time. Whatever it should know permanently therefore belongs in the repository.

## Writing Down Rules for Editing

So that you don't repeat the same guidelines with every task, you put them in a file in your repository. This creates the memory the agent doesn't have on its own: it re-reads the files at the start of every session. The usual choice is an `AGENTS.md` in the top-level folder; many agents read it by themselves, and where that's not the case, you point to it in the task.

What belongs in it is what a new colleague would need to know on their first day:

- What the project is about and who reads it.
- Which files are the text and which are just supporting material.
- The rules that matter to you: form of address, tense, spellings, what must never be changed.
- How the work is done: own branch, one topic per pull request, questions instead of assumptions.
- References to further rule files, if there are any.

If the file gets too long, move parts into separate rule files, for example for the plot or the writing style. The only important thing is that the main file points to them — otherwise the agent won't know they exist.

This handbook does exactly the same: the main file `AGENTS.md` sits in the repository's top-level folder and refers to `CHAPTERS.md` (how the chapters are structured) and `DOCUMENTS.md` (how an individual document is structured). The rules apply to humans and agents alike.

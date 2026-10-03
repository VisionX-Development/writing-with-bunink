---
title: AI Tools and Your Texts
chapter: 8
slug: ai-agents
description: How an AI agent reads your repository, proposes changes, and how you decide what makes it into your text.
lang: en
status: translated
updated: 2026-09-21
source: de/08-ki-agenten.md
source_hash: 103e97dae67b6c61f8802cf0e81efcb9f70a0e1e5eaff7ab5c1e3562e79f9165
---

# AI Tools and Your Texts

Because your texts live in a repository, software other than you can work on them: an AI agent that reads what's there and proposes changes. This chapter shows how such an agent gets to your texts, how you give it a job, and how you review its results before any of it ends up in your version.

## What an agent is — and what it isn't

An AI agent is a program with a language model behind it that doesn't just answer but works: it opens the files in your repository, reads them, changes something, creates a branch and opens a pull request. What happens next is up to you — exactly as with the editing process in Chapter 7.

The difference from a chat window is access. A chat sees what you paste into it. An agent sees your repository and can write in it. That makes it useful for work that affects the whole text — and it's the reason you don't give it the same freedom you give yourself. Used properly, an AI agent is a tool that can move your texts forward.

Three things an agent explicitly is not:

- **Not a co-author.** It proposes, it doesn't decide. The merge is yours.
- **No memory.** Every job starts from scratch. Whatever the agent should know about your project has to be written down in the repository (see **Writing down the house rules** below).
- **Not a second opinion that carries responsibility.** It states things just as fluently when they're wrong. With facts, quotations and names, you check for yourself.

## What an agent is worth using for

Well suited are tasks that call for diligence rather than inspiration and that play out in many places at once:

- Spelling, punctuation and typos across all chapters.
- Consistency: is the character called the same thing everywhere, is the form of address consistently "you", are place names and titles spelled the same way.
- Finding repetitions — phrasings that turn up three times without you noticing.
- Checking structure: heading levels, order, references that lead nowhere.
- Pulling a synopsis, a summary or a chapter overview out of the existing text.

Poorly suited is everything that makes up your voice. An agent asked to write a paragraph "more beautifully" will reliably deliver a paragraph that sounds like nobody. The narrower the job, the more usable the result.

## Letting an agent into your repository

The agent doesn't reach your texts through [bun.ink](http://bun.ink) but through GitHub. For you that means: you give it access to the repository linked to your project, and from then on it works there while you keep writing in [bun.ink](http://bun.ink).

How access is set up depends on the provider — most agents install themselves as a GitHub App or connect to your GitHub account, the way [bun.ink](http://bun.ink) does in Chapter 4. Whatever the provider, three rules apply:

1. **Give access to exactly one repository**, not to all of them. During installation, GitHub asks which repositories an app may see.
2. **Let the agent work on its own branch.** Nobody writes directly to `main` except you — not even an agent.
3. **Choose an agent that opens pull requests.** Then you get the result in the form you already know from Chapter 7, rather than as a done deal.

What the agent sees in the process is the entire contents of the repository, and it sends parts of that to the language model provider it works for. Even with a private repository, your text therefore leaves your account. Texts that mustn't do that belong in an encrypted area (Chapter 9) or in a project without agents.

## Writing a job description

A job for an agent isn't a prompt in the sense of "write me something", but a work instruction with scope, goal and boundaries. What works in practice:

- **Say which files you mean.** "Chapters 3 to 5" is a job; "the novel" is an invitation to chaos.
- **Say what must not be touched.** Dialogue, quotations, the chapter headings — name them explicitly, otherwise everything counts as fair game.
- **One task per job.** Spelling *and* cutting *and* structure produce a pull request you can no longer review sensibly.
- **Ask for small proposals.** Ten individual changes you can accept or reject; a rewritten chapter you can only take whole or not at all.
- **Let it ask you.** A good job description ends with: if something is unclear, write it in the pull request instead of guessing.

So a usable job sounds more like this: "Read `kapitel-03.md` through `kapitel-05.md`. Correct spelling and punctuation. Don't change any phrasing and no dialogue. Create a branch, commit once per chapter and open a pull request against `main`."

## Reviewing the result

When the agent is done, its work sits as a pull request on your branch — and thus in the same flow as a revision by a human being. In [bun.ink](http://bun.ink), the sidebar tells you that a revision is waiting; you go through it passage by passage or as a whole in the merge window. Exactly how that works is described in Chapter 7.

When going through it, a different kind of attention pays off than with a human editor. Watch out in particular for:

- **Silent changes.** An agent likes to "improve" things on the side that nobody asked about. Every block that doesn't belong to the job gets discarded — even if it looks good.
- **Invented certainty.** Names, dates, quotations and cross-references you check against the source, not against the proposal.
- **Scope.** A pull request with thirty blocks across ten files is a sign that the job was too broad. Close it and define the task more narrowly.
- **Your voice.** If a sentence is more correct and more boring afterwards, it wasn't an improvement.

Discarded passages and your own counter-versions are written back to the pull request by [bun.ink](http://bun.ink). With an agent this has no educational effect — it learns nothing from it for next time. Whatever it should know permanently therefore belongs in the repository.

## Writing down the house rules

So that you don't repeat the same specifications with every job, you put them in a file in your repository. The usual choice is an `AGENTS.md` in the top-level folder; many agents read it of their own accord, and where that isn't the case, you point to it in the job description.

What belongs in it is whatever a new colleague would need to know on day one:

- What the project is about and who reads it.
- Which files are the text and which are just accessories.
- The rules that matter to you: form of address, tense, spellings, what must never be changed.
- How the work is done: separate branch, one topic per pull request, questions instead of assumptions.

This handbook does exactly the same — the rules under which it is worked on are in the repository and apply to humans and agents alike.

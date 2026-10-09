---
title: "Pull Requests: Working with Your Editor"
chapter: 7
slug: pull-requests
description: How to revise your texts with the help of a second person, such as an editor.
lang: en
status: translated
updated: 2026-09-17
source: de/07-pull-requests.md
source_hash: 450a241db90247a6b91d40b09b90bca6ea297c147f67bf3e020d2292d8c4e83f
---

# **Pull Requests: Working with an Editor**

Up to now you have worked on your own. This chapter shows how a second person can revise your text — on a branch of their own, without touching your version — and how, at the end, you accept, discard or answer each suggestion individually with a wording of your own.

## **What a pull request is**

A pull request is a request: «Here is a branch with changes, please take them into yours.» GitHub records which lines differ between the two branches and collects comments and suggestions at exactly those places. In the end the pull request is merged — the changes go into the target branch — or closed without anything being taken over.

In bun.ink the whole process is called **Review**. The person doing the review gets a branch of their own next to yours; the pull request targets your branch. Your version only changes when you accept something.

### **What both sides need**

- **Two accounts.** Author and editor each have their own GitHub account and their own bun.ink account. There is no guest access.
- **Access to the repository.** You grant that on GitHub, not in bun.ink: invite the person in your repository settings under *Collaborators*. Anyone without access there won't see your project in bun.ink.
- **An active subscription or a running trial** on both sides.
- **Write access for merging.** Anyone with read-only access to the repository can make suggestions but cannot merge; the button simply doesn't appear.

## **Starting a review**

The text to be revised has to be on a branch — not on `main`. As the author, create one first, say `kapitel-3`, and save your work there. The review needs a target that can be merged back later.

The editor then proceeds as follows:

1. Open the project and switch to the author's branch via the branch list.
2. In the **Pull Request** section of the sidebar, click **Create review branch**. A dialog explains what happens: the review gets a branch of its own, the pull request targets the author's branch, and the author's version stays untouched.
3. bun.ink creates the branch and switches to it. It's called `bun.ink_review/<branch>`, so for example `bun.ink_review/kapitel-3`, and carries the **Review** badge in the sidebar.

There is exactly one review branch per author branch. If it already exists, the button reads **Continue the review** and switches to it; further changes belong in the same review.

## **Writing suggestions and notes**

On the review branch you first work entirely as usual in the editor: rephrase, shorten, delete. What Chapter 5 says applies — your work stays in your browser until you write it to GitHub with **Save to branch**.

It turns into suggestions for the author via **Write the review** in the sidebar. The **Review to create a pull request** dialog has two parts.

### **Notes on the whole text**

Under **Draft notes** you write remarks that can't be pinned to any one place — about the structure, a character, the tone. A title is optional. **Save note locally** files the note away.

### **Suggestions at a specific place**

Under **Text comparison**, for each document you have changed, the author's version appears on the left and yours on the right. The comparison shows formatting, not Markdown characters; an italic word appears in italics.

To suggest a change at a given place:

1. Click the **+** in the margin of a line (hold Shift for a range). The **Suggest a change** dialog opens and names the lines in question.
2. With **One paragraph more** and **One paragraph less** you adjust the range, as long as you haven't touched the wording yet.
3. Enter the new wording under **Replacement text**. If you leave it as it is and only write something under **Comment (optional)**, the text stays unchanged — the remark goes to that place as a comment.
4. **Save suggestion locally** files the draft away.

Each draft becomes a card below the comparison. It names the lines the wording occupies in the text; clicking it scrolls to that place. Conversely, a marker in the line margin of the comparison shows where a draft sits — clicking it takes you to the card.

Each card has two buttons: the pencil opens the draft for refinement, the x removes it. When removing, bun.ink also takes the wording back out of the text — otherwise a change without a draft would be left over and would go along silently with the commit.

If the text under a draft changes, for instance because you rewrote the paragraph again afterwards, the card gets a red border with a note that the passage now reads differently. Refine the draft, reapply it with **Apply again**, or remove it. As long as such a card is open, no pull request is created.

All drafts stay on your device, even if you close the dialog or reload the browser. The sidebar shows how many notes and suggestions are in progress, and **Continue review** takes you back. Logging out, on the other hand, deletes them — together with everything on the branch you haven't yet saved to GitHub; bun.ink warns you beforehand and names the branches affected. Anything you have secured with **Save to branch** is unaffected.

## **Creating the pull request**

At the bottom of the dialog is **Create commit for PR**. The process has two steps, and bun.ink explains each one in advance:

1. **Commit for pull request** — your changes are committed on the review branch. A pull request needs at least one commit; if your review consists only of remarks without any change to the text, bun.ink creates an empty commit so that the pull request can be created anyway.
2. **Create pull request** — the pull request is opened on GitHub, and your notes and suggestions are published there. You can also postpone this step and keep working.

Two things happen along the way that you should know about:

- A suggestion with new wording lands on GitHub in a form the author can accept with a single click. A pure comment stays a comment.
- Comments on passages your branch doesn't change can't be attached to the line by GitHub. bun.ink publishes them as a post on the pull request instead, with file, lines and a quote of the passage, and tells you how many ended up there that way.

If something else occurs to you later, no second pull request is created. New drafts go to the existing one via **Submit the review** and **Send to pull request**. You'll find the pull request itself in the sidebar under **Pull Request**, with **Open on GitHub** available there too.

## **Going through suggestions as the author**

As soon as a pull request targets your branch, the sidebar says: *There is a review for your branch.* Below it the pull request with its number and two buttons. You have two routes, and you can mix them.

### **In the text, passage by passage**

**Review suggestions in the text** opens the **Review suggestions** panel next to your document, with all suggestions for the document that is currently open. Each card shows the **Marked passage**, the **Proposed text**, the comment and who wrote it. If the suggestions concern another file, bun.ink says so; open that file then.

- **Show in document** jumps to the spot.
- **Apply this suggestion** puts the wording into your document. It's there immediately, and you can carry on writing. It reaches GitHub with **Save to branch**.
- Under **Reply** you answer the editor; the reply appears on GitHub in the same place.

If the proposed wording is already in your text exactly like that, bun.ink says so and changes nothing.

### **The whole review at once**

Clicking the pull request in the sidebar opens **Review PR #… for merging**. Under **Changed files**, each file appears with a comparison: your text on the left, the review's version on the right. The comparison is against the state the review branched off from — whatever you have changed yourself since then is deliberately left out.

Decisions are made not by line but by **block**: contiguous places where something has changed. A suggestion spanning two paragraphs is one block, one card, one decision. The cards sit below each comparison; as in the editor's dialog, line numbers and margin markers lead back and forth. If a block only changes formatting, the card says so, for example *Only the formatting changes: italic → bold*.

Each card shows **Before the review** and **Suggested change** and offers four answers:

- **Keep** — the passage comes along when you merge at the end. Nothing changes in your document yet.
- **Discard suggestion** — the passage stays as it was with you. Under **Why? (optional)** you can give a reason; **Discard this change** confirms.
- **Propose my own wording** — your third version. You write it under **My wording**; **Keep this wording** sets it aside. It goes back to the review as a counter-proposal; it only enters your text on merging.
- **Apply this suggestion** — the wording goes into your document immediately, just as in the suggestions panel. That applies to deletions too: the deleted paragraph is then gone from your side.

bun.ink writes discarded passages and counter-proposals back to the review branch, as a counter-commit with a note on the pull request. That way the editor sees what you didn't want and what you propose instead — rather than having the passages silently disappear.

### **When a passage no longer fits**

If you kept writing while the text was being read, bun.ink may no longer find the place a suggestion refers to unambiguously: it occurs several times in the text, or no longer at all. The card then carries the **Needs your decision** badge, and bun.ink doesn't guess.

**Resolve by hand** opens the **Resolve this passage** dialog. It shows your current text and the **Proposed by the review** side by side and names the lines that would be replaced. Check whether that is the passage meant — the review counted in its own version. Then **Use the proposed wording**, write a version of your own and **Write into the text**, or cancel.

## **Finishing the pull request**

### **Merging**

**Merge PR** takes everything you kept into your branch and deletes the review branch. The button only becomes available once every block has been decided; until then it counts: **3 decisions still open**. An undecided suggestion would otherwise travel along unseen.

Your branch must also be saved. Suggestions you have applied don't count as open work — the merge brings exactly that text. Only your own changes beyond that need to be secured first with **Save to branch**.

If you have saved applied suggestions, GitHub often reports the pull request as not mergeable: both branches changed the same passage, and GitHub doesn't see that it's the same change. bun.ink shows this and offers **Resolve conflicts and merge**. Your text becomes the resolution — what you decided stands — and the merge goes through. No new pull request is created.

After the merge, bun.ink reloads your branch; the merged text is your state from now on. It isn't in `main` yet — that's the **Merge into main** step from Chapter 5, when you're ready.

If the pull request has meanwhile been closed on GitHub, bun.ink asks: **Reopen and merge**, or cancel. An already merged pull request stays merged.

### **Closing without merging**

If you have already applied everything you wanted passage by passage, **Close pull request** ends the process without merging. What you applied stays in your document; everything else is discarded. A note on the pull request tells the editor, per file, how many of the proposed changes were applied.

### **Files that aren't documents**

If the review changes a file that isn't a document in your project, you can't apply it individually in bun.ink. It doesn't count as an open decision, but the merge brings it along all the same.

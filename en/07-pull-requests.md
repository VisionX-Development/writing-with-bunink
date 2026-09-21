---
title: Pull Requests: Collaborating with Your Editor
chapter: 7
slug: pull-requests
description: How to revise your texts with the help of a second person — an editor, for example.
lang: en
status: translated
updated: 2026-09-20
source: de/07-pull-requests.md
source_hash: 14945d9f43bed5272875e90346b547c2c8d2fbca629a2d6e6f028241eb37a76d
---

# **Pull Requests: Working with an Editor**

Up to now you've worked on your own. This chapter shows how a second person can revise your text — on their own branch, without touching your version — and how, at the end, you accept, reject, or answer each suggestion individually with a version of your own.

## **What a pull request is**

A pull request is a request: «Here's a branch with changes, please take them into yours.» To that end, GitHub records which lines differ between the two branches and collects comments and suggestions at exactly those places. In the end the pull request is merged — the changes go into the target branch — or closed without anything being adopted.

In bun.ink the whole process is called a **revision**. The person doing the revising gets a branch of their own alongside yours; the pull request targets your branch. Your version only changes when you accept something.

### **What both sides need**

- **Two accounts.** Author and editor each have their own GitHub account and their own bun.ink account. There is no guest access.
- **Access to the repository.** You grant that on GitHub, not in bun.ink: invite the person in your repository settings under *Collaborators*. Anyone without access there won't see your project in bun.ink.
- **An active subscription or a running trial** on both sides.
- **Write access for merging.** Anyone with read-only access to the repository can make suggestions but can't merge; the button simply won't appear.

## **Starting a revision**

The text to be revised has to live on a branch — not on `main`. As the author, create one first, say `kapitel-3`, and save your work there. A revision needs a target that can be merged back later.

The editor then proceeds like this:

1. Open the project and switch to the author's branch via the branch list.
2. In the **Pull Request** section of the sidebar, click **Create revision branch**. A dialog explains what happens: the revision gets a branch of its own, the pull request targets the author's branch, and the author's version stays untouched.
3. bun.ink creates the branch and switches to it. It's named `bun.ink_review/<branch>`, so for example `bun.ink_review/kapitel-3`, and carries the **Revision** badge in the sidebar.

There is exactly one revision branch per author branch. If it already exists, the button reads **Continue revision** and switches to it; further changes belong in the same revision.

## **Writing suggestions and notes**

On the revision branch you first work in the editor as usual: rephrase, shorten, delete. What Chapter 5 says applies here — your work sits in your browser until you write it to GitHub with **Save to branch**.

It becomes suggestions for the author via **Write revision** in the sidebar. The **Revision for creating a PR** dialog has two parts.

### **Notes on the text as a whole**

Under **Draft: Notes** you write remarks that can't be pinned to a particular spot — on structure, on a character, on tone. A title is optional. **Save note locally** files the note away.

### **Suggestions at a specific spot**

Under **Text comparison**, for each document you've changed, the author's version appears on the left and yours on the right. The comparison shows formatting, not Markdown characters; an italic word appears in italics.

To suggest a change at a particular spot:

1. Click the **+** in the margin of a line (hold Shift for a range). The **Suggest change** dialog opens and names the lines in question.
2. Use **One paragraph more** and **One paragraph less** to adjust the range, as long as you haven't touched the wording yet.
3. Enter the new wording under **Replacement text**. If you leave it as it is and only write under **Comment (optional)**, the text stays unchanged — the remark goes to that spot as a comment.
4. **Save suggestion locally** files the draft away.

Each draft becomes a card below the comparison. It names the lines the wording occupies in the text; clicking it scrolls to the spot. Conversely, a marker appears in the line margin of the comparison wherever a draft sits — clicking it takes you to the card.

Each card has two buttons: the pencil opens the draft for touching up, the x removes it. When removing, bun.ink also takes the wording back out of the text — otherwise a change would be left over without a draft and would go along silently with the commit.

If the text underneath a draft changes, for instance because you rewrote the paragraph afterwards, the card gets a red border with a note that the passage now reads differently. Touch up the draft, re-apply it with **Apply again**, or remove it. As long as such a card is open, no pull request is created.

All drafts stay on your device, even if you close the dialog or reload the browser. The sidebar shows how many notes and suggestions are in progress, and **Continue revision** takes you back. Signing out, on the other hand, deletes them — along with everything on the branch you haven't yet saved to GitHub; bun.ink warns you beforehand and names the branches affected. Anything you've secured with **Save to branch** is unaffected.

## **Creating the pull request**

At the bottom of the dialog is **Create commit for PR**. The process has two steps, and bun.ink explains each one beforehand:

1. **Commit for pull request** — your changes are committed to the revision branch. A pull request needs at least one commit; if your revision consists only of remarks without any text change, bun.ink creates an empty commit so the pull request can be created anyway.
2. **Create pull request** — the pull request is opened on GitHub, and your notes and suggestions are published there. You can also postpone this step and keep working.

Two things happen along the way that you should know about:

- A suggestion with new wording lands on GitHub in a form the author can accept with a single click. A pure comment stays a comment.
- Comments on passages your branch doesn't change can't be attached to the line by GitHub. bun.ink publishes them instead as a post on the pull request, with file, lines, and a quote of the passage, and tells you how many ended up that way.

If something else occurs to you later, no second pull request is created. New drafts go to the existing one via **Submit revision** and **Send to pull request**. You'll find the pull request itself in the sidebar under **Pull Request**, with **Open on GitHub** there as well.

## **Going through suggestions as the author**

As soon as a pull request targets your branch, the sidebar says: *A revision is available for your branch.* Below it the pull request with its number and two buttons. You have two routes, and you can mix them.

### **In the text, spot by spot**

**Go through suggestions in the text** opens the **Review suggestions** panel next to your document, with all suggestions for the document currently open. Each card shows the **Marked passage**, the **Suggested text**, the comment, and who wrote it. If the suggestions belong to a different file, bun.ink says so; open that file then.

- **Show in document** jumps to the spot.
- **Accept this suggestion** puts the wording into your document. It's there immediately, and you can keep writing. It goes to GitHub with **Save to branch**.
- Under **Reply** you answer the editor; the reply appears on GitHub at the same spot.

If the suggested wording is already in your text as it stands, bun.ink says so and changes nothing.

### **The whole revision at once**

Clicking the pull request in the sidebar opens **Review PR #… for merging**. Under **Changed files**, each file appears with a comparison: your text on the left, the revision's version on the right. The comparison is made against the state the revision branched off from — anything you've changed yourself since then is deliberately left out.

Decisions aren't made line by line but by **block**: contiguous passages where something has changed. A suggestion spanning two paragraphs is one block, one card, one decision. The cards sit below each comparison; as in the editor's dialog, line references and margin markers lead back and forth. If a block only changes formatting, the card says so, for instance *Only the formatting changes: italic → bold*.

Each card shows **Before the revision** and **Suggested change** and offers four answers:

- **Keep** — the passage comes along when you merge at the end. Nothing changes in your document just yet.
- **Reject suggestion** — the passage stays as it was in your version. Under **Why? (optional)** you can give a reason; **Reject this change** confirms.
- **Suggest your own version** — your third wording. You write it under **My version**; **Stage this version** queues it up. It goes to the revision as a counter-suggestion; it only enters your text with the merge.
- **Accept this suggestion** — the wording goes into your document immediately, as in the suggestions panel. That applies to deletions too: the deleted paragraph is then gone from your version.

bun.ink writes rejected passages and counter-suggestions back to the revision branch, as a counter-commit with a note on the pull request. That way the editor sees what you didn't want and what you're proposing instead — rather than having the passages silently disappear.

### **When a passage no longer fits**

If you've kept writing while the text was being read, bun.ink may no longer be able to locate a suggestion's passage unambiguously: it occurs more than once in the text, or not at all. The card then carries the **Needs your decision** badge, and bun.ink doesn't guess.

**Resolve manually** opens the **Resolve this passage** dialog. It shows your current text and the **Revision's suggestion** side by side and names the lines that would be replaced. Check whether that's the passage meant — the revision counted in its own version. Then **Insert suggested wording**, write a version of your own and **Apply to the text**, or cancel.

## **Finishing the pull request**

### **Merging**

**Merge PR** brings everything you've kept into your branch and deletes the revision branch. The button only becomes available once every block has been decided; until then it counts: **3 decisions still open**. Otherwise an undecided suggestion would travel along unseen.

Your branch also has to be saved. Suggestions you've accepted don't count as open work here — the merge brings exactly that text. Only changes of your own beyond that need to be secured with **Save to branch** first.

If you've saved accepted suggestions, GitHub often reports the pull request as not mergeable: both branches changed the same passage, and GitHub can't see that it's the same change. bun.ink shows this and offers **Resolve conflicts and merge**. Your text becomes the resolution — what you decided stands — and the merge goes through. No new pull request is created.

After the merge, bun.ink reloads your branch; the merged text is your version from now on. It isn't in `main` yet — that's the **Merge into main** step from Chapter 5, when you're ready for it.

If the pull request has been closed on GitHub in the meantime, bun.ink asks: **Reopen and merge**, or cancel. A pull request that has already been merged stays merged.

### **Closing without merging**

If you've already accepted everything you wanted spot by spot, **Close pull request** ends the process without merging. What you accepted stays in your document; everything else is discarded. A note on the pull request tells the editor, per file, how many of the suggested changes were accepted.

### **Files that aren't documents**

If the revision changes a file that isn't a document in your project, you can't accept it individually in bun.ink. It doesn't count as an open decision, and the merge brings it along anyway.

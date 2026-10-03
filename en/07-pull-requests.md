---
title: "Pull Requests: Working with Your Editor"
chapter: 7
slug: pull-requests
description: How to revise your texts with the help of a second person, such as an editor.
lang: en
status: translated
updated: 2026-09-17
source: de/07-pull-requests.md
source_hash: 164211caddc7345ae36af9a759a7d66716f103bcf9f7fa4a78724bed56d4ebd4
---

# **Pull Requests: Working with Your Editor**

So far you've been working alone. This chapter shows how a second person can revise your text — on their own branch, without touching your version — and how, at the end, you accept, discard or answer each suggestion individually with a wording of your own.

## **What a pull request is**

A pull request is a request: «Here is a branch with changes, please take them into yours.» To that end, GitHub records which lines differ between the two branches, and collects comments and suggestions at exactly those places. In the end the pull request is merged — the changes go into the target branch — or closed without anything being taken over.

In bun.ink the whole procedure is called a **Review**. The person doing the review gets their own branch alongside yours; the pull request targets your branch. Your version only changes once you accept something.

### **What both sides need**

- **Two accounts.** Author and editor each have their own GitHub account and their own bun.ink account. There is no guest access.
- **Access to the repository.** You grant that on GitHub, not in bun.ink: invite the person under *Collaborators* in your repository's settings. Anyone without access there won't see your project in bun.ink.
- **An active subscription or a running trial period** on both sides.
- **Write permission for merging.** Anyone with read-only access to the repository can make suggestions but can't merge; the button simply doesn't appear for them.

## **Starting a review**

The text to be revised has to live on a branch — not on `main`. As the author, create one first, say `kapitel-3`, and save your current state there. The review needs a target that can be merged later on.

The editor then proceeds like this:

1. Open the project and switch to the author's branch via the branch list.
2. In the **Pull Request** section of the sidebar, click **Create review branch**. A window explains what happens: the review gets its own branch, the pull request targets the author's branch, and the author's version stays untouched.
3. bun.ink creates the branch and switches to it. It's called `bun.ink_review/<branch>`, so for example `bun.ink_review/kapitel-3`, and carries the **Review** badge in the sidebar.

There is exactly one review branch per author branch. If it already exists, the button reads **Continue the review** and switches to it; any further changes belong in the same review.

## **Writing suggestions and notes**

On the review branch you first work quite normally in the editor: rephrasing, shortening, deleting. What chapter 5 says applies here — your work stays in your browser until you write it to GitHub with **Save to branch**.

It becomes suggestions for the author via **Write the review** in the sidebar. The **Review to create a pull request** window has two parts.

### **Notes on the text as a whole**

Under **Draft notes** you write remarks that can't be pinned to any particular spot — about structure, about a character, about tone. A title is optional. **Save note locally** files the note away.

### **Suggestions at a specific place**

Under **Text comparison**, for every document you've changed, the author's version appears on the left and yours on the right. The comparison shows formatting, not Markdown characters; an italic word appears in italics.

To suggest a change at a given place:

1. Click the **+** in the margin of a line (hold Shift for a range). The **Suggest a change** window opens and names the lines concerned.
2. **One paragraph more** and **One paragraph less** let you adjust the range, as long as you haven't touched the wording yet.
3. Enter the new wording under **Replacement text**. If you leave it as it is and only write something under **Comment (optional)**, the text stays unchanged — the remark goes to that place as a comment.
4. **Save suggestion locally** files the draft away.

Every draft becomes a card below the comparison. It names the lines the wording occupies in the text; clicking it scrolls to the spot. Conversely, a marker appears in the line margin of the comparison wherever a draft sits — clicking it takes you to the card.

Every card has two buttons: the pencil opens the draft for revision, the x removes it. When you remove one, bun.ink also takes the wording out of the text — otherwise a change without a draft would be left over and would quietly ride along with the commit.

If the text underneath a draft changes, for instance because you rewrote that paragraph again afterwards, the card gets a red frame with a note that the passage now reads differently. Rework the draft, reapply it with **Apply again**, or remove it. As long as such a card is open, no pull request is created.

All drafts stay on your device, even if you close the window or reload the browser. The sidebar shows how many notes and suggestions you've started, and **Continue review** takes you back. Logging out, by contrast, deletes them — along with everything on the branch you haven't yet saved to GitHub; bun.ink warns you beforehand and names the branches affected. Anything you've secured with **Save to branch** is unaffected.

## **Creating the pull request**

At the bottom of the window is **Create commit for PR**. The process has two steps, and bun.ink explains each one beforehand:

1. **Commit for pull request** — your changes are committed on the review branch. A pull request needs at least one commit; if your review consists only of remarks without any change to the text, bun.ink creates an empty commit so the pull request can come into being anyway.
2. **Create pull request** — the pull request is opened on GitHub, and your notes and suggestions are published there. You can also postpone this step and carry on working.

Two things happen in the process that you should know about:

- A suggestion with new wording lands on GitHub in such a way that the author can accept it with a single click. A pure comment stays a comment.
- Comments on passages your branch doesn't change can't be attached to the line by GitHub. Instead, bun.ink publishes them as a post on the pull request, with file, lines and a quote of the passage, and tells you how many ended up that way.

If something else occurs to you later, no second pull request is created. New drafts go to the existing one via **Submit the review** and **Send to pull request**. You can see the pull request itself in the sidebar under **Pull Request**, with **Open on GitHub** available there too.

## **Going through suggestions as the author**

As soon as a pull request targets your branch, the sidebar says: *A review is available for your branch.* Below it, the pull request with its number and two buttons. You have two routes, and you can mix them.

### **In the text, passage by passage**

**Review suggestions in the text** opens the **Review suggestions** panel next to your document, with all the suggestions for the document that's currently open. Each card shows the **Marked passage**, the **Proposed text**, the comment and who wrote it. If the suggestions concern a different file, bun.ink says so; then open that file.

- **Show in document** jumps to the spot.
- **Apply this suggestion** puts the wording into your document. It's there immediately, and you can keep writing. It reaches GitHub with **Save to branch**.
- Under **Reply** you answer the editor; your reply appears on GitHub at the same place.

If the proposed wording already reads that way in your text, bun.ink says so and changes nothing.

### **The whole review at once**

Clicking the pull request in the sidebar opens **Review PR #… for merging**. Under **Changed files**, each file appears with a comparison: your text on the left, the review's version on the right. The comparison is against the state the review branched off from — anything you've changed yourself since then is deliberately left out.

Decisions aren't made line by line but by **block**: contiguous passages where something has changed. A suggestion spanning two paragraphs is one block, one card, one decision. The cards sit below each comparison; as in the editor's window, line numbers and margin markers lead back and forth. If a block only changes the formatting, the card says so, for example *Only the formatting changes: italic → bold*.

Each card shows **Before the review** and **Suggested change** and offers four answers:

- **Keep** — the passage comes along when you merge at the end. Nothing changes in your document just yet.
- **Discard suggestion** — the passage stays as it was with you. Under **Why? (optional)** you can give a reason; **Discard this change** confirms it.
- **Propose my own wording** — your third version. You write it under **My wording**; **Keep this wording** earmarks it. It goes to the review as a counter-proposal; it only enters your text with the merge.
- **Apply this suggestion** — the wording appears in your document immediately, as in the suggestions panel. That also applies to deletions: the deleted paragraph is then gone from your copy.

bun.ink writes discarded passages and counter-proposals back to the review branch, as a counter-commit with a note on the pull request. That way the editor sees what you didn't want and what you propose instead — rather than having the passages quietly disappear.

### **When a passage no longer fits**

If you kept writing while the text was being read, bun.ink may no longer be able to locate a suggestion's passage unambiguously: it appears several times in the text, or not at all. The card then carries the **Needs your decision** badge, and bun.ink doesn't guess.

**Resolve by hand** opens the **Resolve this passage** window. It shows your current text and the **Proposed by the review** side by side and names the lines that would be replaced. Check whether that's the passage meant — the review counted in its own version. Then **Use the proposed wording**, write a version of your own and **Write into the text**, or cancel.

## **Finishing the pull request**

### **Merging**

**Merge PR** takes everything you've kept into your branch and deletes the review branch. The button only becomes available once every block has been decided; until then it counts down: **3 decisions still open**. Otherwise an undecided suggestion would travel along unseen.

Your branch also has to be saved. Suggestions you've accepted don't count as open work here — the merge brings exactly that text. Only changes of your own beyond that need to be secured beforehand with **Save to branch**.

If you've saved accepted suggestions, GitHub will often report the pull request as not mergeable: both branches changed the same passage, and GitHub can't see that it's the same change. bun.ink shows this and offers **Resolve conflicts and merge**. Your text becomes the resolution — what you decided stands — and the merge goes through. No new pull request is created.

After the merge, bun.ink reloads your branch; the merged text is your current state from now on. That doesn't put it in `main` yet — that's the **Merge into main** step from chapter 5, when you're ready.

If the pull request has meanwhile been closed on GitHub, bun.ink asks: **Reopen and merge**, or cancel. A pull request that has already been merged stays merged.

### **Closing without merging**

If you've already accepted everything you wanted, passage by passage, **Close pull request** ends the procedure without merging. What you've accepted stays in your document; everything else is discarded. A note on the pull request tells the editor, for each file, how many of the proposed changes were accepted.

### **Files that aren't documents**

If the review changes a file that isn't a document in your project, you can't accept it individually in bun.ink. It doesn't count as an open decision, but the merge brings it along all the same.

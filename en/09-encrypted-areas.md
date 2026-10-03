---
title: Encrypted Areas – Security for Your Content
chapter: 9
slug: encrypted-areas
description: How bun.ink encrypts your texts, what a high-privacy area protects on top of that, and what it costs you.
lang: en
status: translated
updated: 2026-09-21
source: de/09-verschluesselte-bereiche.md
source_hash: d79bc01e8be1b85dfa685cf188c37fe179ead83d02019b2d9351a90507582029
---

# Encrypted Areas – Security for Your Content

Chapter 2 showed you how to create a high-privacy area and unlock it. This chapter answers the question behind it: what does that actually protect you from, what doesn't it protect you from, and what are you giving up in return? By the end, you should be able to decide which of your texts belong in such an area — and which would only be in the way there.

## Two levels, not one

[bun.ink](http://bun.ink) always encrypts. The difference lies in who holds the key.

**The normal level.** Your texts are stored encrypted in the database. For the app to do its work — searching, counting words, writing to GitHub, comparing versions — the server has to be able to decrypt them. The key for that lies with the server admin. This protects you against a stolen storage device or a glance into the database; it does not protect you against someone with full access to the running server.

**The high-privacy level.** Here the key is derived from your passphrase, and it happens in your browser. The text is encrypted there and leaves your device only in that form. The server stores something it cannot read itself — and neither can the admin. That's what people mean when they talk about end-to-end encryption.

The price is right there in that sentence: what the server cannot read, it also cannot process for you. Almost every limitation that comes up in the rest of this chapter follows from that one fact.

## Passphrase, recovery key, session

Three things are connected here, and it's worth keeping them apart.

The **passphrase** is the thing you remember. The key used for unlocking is derived from it. [bun.ink](http://bun.ink) doesn't know it and cannot reset it — there's no route via support, no recovery from a backup. That isn't unfriendliness, it's the very property that protects the area: a provider who could let you back in could also look in themselves.

The **recovery key** is your second way in. It is shown exactly once, when you create the area. Treat it like the original of your manuscript: in a password manager, printed out in a folder, not in a notes app on the same device. It never expires and cannot be swapped out — not even when you change your passphrase. Whoever has it gets in, forever. Which also means the reverse: once it has fallen into the wrong hands, changing the passphrase won't help — only a new area that you move your texts into.

The **session** is the short-term memory. The area stays unlocked only as long as the page is open; after a reload it's locked again. The **auto-logout** setting fits with this: it signs you out after a period of inactivity. If you work somewhere where other people can get to your screen, that's the second half of the protection.

## What it protects against — and what it doesn't

An encrypted area protects against anyone who gets at the stored data: server, database, backups, operator.

It does not protect against your own device. As soon as you unlock, the text sits in plain form in your browser — and is therefore open to anyone who controls that browser or can see the screen. A compromised computer, a rogue extension, an unlocked workstation: the strongest encryption in the world doesn't help against any of that.

Nor does it hide the fact *that* you're writing. Folder and document names, their size, the timestamps and the number of versions all remain readable. If even the file name would give something away, call it something else — the protection lies in the content, not in the label.

And it doesn't protect you from yourself. The most common way to lose texts in a high-privacy area isn't an attack, it's a forgotten passphrase.

## What you give up

In a high-privacy area, almost everything described in chapters 4 to 8 falls away. That's not a shortcoming, it's the consequence of the server not knowing the text:

- **No GitHub.** A high-privacy folder is never transferred, and a high-privacy project can't be linked in the first place. So there are no branches there, no commits, no pull requests and no history in the repository.
- **No editing via pull requests.** The collaboration described in chapter 7 runs entirely through GitHub. Anyone who is meant to read your encrypted text gets it another way — exported, and then outside of [bun.ink](http://bun.ink).
- **No agents.** An agent reads the repository. What never arrives there, it cannot read, cannot correct and cannot give away. For texts that no model should see, that's exactly the behaviour you want (chapter 8).
- **No search, no statistics while locked.** Search skips locked documents, and the statistics count them as zero words. Don't be surprised by a dip in the curve — unlock and take another look.
- **No export while locked.** An export would otherwise contain unreadable text, so [bun.ink](http://bun.ink) aborts it.

## What belongs in there — and what doesn't

The useful question isn't "how secret is my text", but: what happens if this particular text ends up with someone who shouldn't have it?

Arguments for an encrypted area: research material with the names of sources who must stay anonymous. Diaries and notes that will never be published. Texts under a confidentiality obligation. Anything concerning third parties who were never asked.

Arguments against it: anything you want to work on the way you work on your other texts. A novel that you develop in drafts and have edited is badly served by a high-privacy project — that's precisely where you'd be missing the tools you need.

The middle road is usually the right one: **a high-privacy folder inside a normal project.** The manuscript works with GitHub, the folder with the sources stays encrypted and at home. So you don't have to make the decision for the whole project.

## Your backup is your own

With a normal project, a second copy of your texts lives in your repository. If [bun.ink](http://bun.ink) goes down, if you cancel, if you lose your password — the texts are still there. That backup is completely absent in an encrypted area, for the very reason that nothing goes out of it.

So you make it yourself:

1. **Unlock, then export.** Write out the folder or project as a ZIP via the context menu (chapter 2).
2. **Regularly, not once.** After every stretch of work you care about. An export from last summer is a keepsake, not a backup.
3. **To somewhere that isn't the same device.** An encrypted hard drive, an encrypted archive in the cloud, a storage device in the cupboard.
4. **Passphrase and recovery key kept separately from it.** Both together in one place is an unlocked door with a sign next to it.

That these four points are work is the honest part of this chapter. An area that nobody but you can open is also an area that nobody but you looks after.

---
title: Encrypted Areas
chapter: 9
slug: encrypted-areas
description: "How [bun.ink](http://bun.ink) encrypts your texts, what extra protection a high-privacy area gives you, and what it costs you."
lang: en
status: translated
updated: 2026-09-21
source: de/09-verschluesselte-bereiche.md
source_hash: 6ee3078cd8b74585985468e07aba10cd751254845e688da4fa93fdb48fe88a6c
---

# Encrypted Areas

Chapter 2 showed you how to create a high-privacy area and unlock it. This chapter answers the question behind it: what does that actually protect you from, what doesn't it protect you from, and what do you give up in return. By the end, you should be able to decide which of your texts belong in such an area — and which would only be in the way there.

## Two levels, not one

[bun.ink](http://bun.ink) always encrypts. The difference lies in who holds the key.

**The normal level.** Your texts sit encrypted in the database. For the app to do its work — searching, counting words, writing to GitHub, comparing versions — the server has to be able to decrypt them. The key for that is held by the server admin. This protects against a stolen storage medium or someone looking into the database; it does not protect against someone with full access to the running server.

**The high-privacy level.** Here the key is derived from your passphrase, and it happens in your browser. The text is encrypted there and leaves your device only in that form. The server stores something it cannot read itself — and neither can the admin. This is what's meant by end-to-end encryption.

The price is already in that sentence: what the server cannot read, it also cannot process for you. Almost everything that comes up as a limitation in the rest of this chapter follows from this one fact.

## Passphrase, recovery key, session

Three things are connected here, and it's worth keeping them apart.

The **passphrase** is the thing you remember. It's what the unlocking key is derived from. [bun.ink](http://bun.ink) doesn't know it and cannot reset it — there's no route via support, no recovery from a backup. That's not unkindness, it's the very property that protects the area: a provider who could let you back in could also look in themselves.

The **recovery key** is your second way in. It's shown exactly once, when you create the area. Treat it like the original of your manuscript: in a password manager, printed out in a folder, not in a notes app on the same device. It's valid indefinitely and cannot be replaced — not even if you change your passphrase. Whoever has it gets in, forever. Which also means the reverse: if it ever falls into the wrong hands, changing your passphrase won't help; only a new area, into which you move your texts, will.

The **session** is the short memory. The area stays unlocked only as long as the page is open; after a reload it's closed again. The **auto-logout** setting fits with this: it signs you out after a period of inactivity. If you work somewhere where others can get to your screen, it's the second half of the protection.

## What it protects against — and what it doesn't

An encrypted area protects against anyone who gets at the stored data: server, database, backups, operator.

It doesn't protect against your own device. As soon as you unlock, the text sits in plain form in your browser — and is therefore open to anyone who controls that browser or can see the screen. A compromised computer, a rogue extension, an unlocked workstation: the strongest encryption in the world won't help against any of that.

Nor does it hide the fact *that* you're writing. Folder and document names, their size, timestamps and the number of versions all remain readable. If even the file name would give something away, call it something else — the protection is in the content, not in the label.

And it doesn't protect you from yourself. The most common way to lose texts in a high-privacy area isn't an attack, it's a forgotten passphrase.

## What you give up

In a high-privacy area, almost everything described in chapters 4 to 8 falls away. That's not a shortcoming but a consequence of the server not knowing the text:

- **No GitHub.** A high-privacy folder is never transferred, and a high-privacy project can't be linked in the first place. So there are no branches, no commits, no pull requests and no history in the repository either.

- **No editing via pull requests.** The collaboration described in chapter 7 runs entirely through GitHub. Anyone who is to read your encrypted text gets it another way — exported, and then outside [bun.ink](http://bun.ink).

- **No agents.** An agent reads the repository. What never arrives there, it can't read, can't correct and can't give away. For texts that no model should see, that's exactly the desired behaviour (chapter 8).

- **No search, no statistics while locked.** Search skips locked documents, and statistics count them as zero words. Don't be surprised by a dip in the curve — unlock and look again.

- **No export while locked.** An export would otherwise contain unreadable text, so [bun.ink](http://bun.ink) aborts it.

## What belongs there — and what doesn't

The useful question isn't "how secret is my text", but: what happens if this particular text ends up with someone who shouldn't have it?

Arguments for an encrypted area: research material with the names of sources who must stay anonymous. Diaries and notes that will never be published. Texts under a confidentiality obligation. Anything concerning third parties who were never asked.

It's the wrong choice for anything you want to work on the way you work on your other texts. A novel that you develop in drafts and have edited is badly served by a high-privacy project — that's precisely where you'd be missing the tools you need.

The middle way is usually the right one: **a high-privacy folder inside a normal project.** The manuscript works with GitHub, the folder with the sources stays encrypted and at home. So you don't have to make the decision for the whole project.

## Your backup is your own

With a normal project, a second copy of your texts sits in your repository. If [bun.ink](http://bun.ink) goes down, if you cancel your account, if you lose your password — the texts are still there. That safety net is completely absent in an encrypted area, precisely because nothing leaves it.

So you make it yourself:

1. **Unlock, then export.** Write the folder or project out as a ZIP via the context menu (chapter 2).

2. **Regularly, not once.** After every stretch of work you care about. An export from last summer is a memento, not a backup.

3. **To somewhere that isn't the same device.** An encrypted hard drive, an encrypted archive in the cloud, a storage medium in the cupboard.

4. **Passphrase and recovery key kept separately from it.** Both together in one place is an unlocked door with a sign next to it.

That these four points are work is the honest part of this chapter. An area that nobody but you can open is also an area that nobody but you looks after.

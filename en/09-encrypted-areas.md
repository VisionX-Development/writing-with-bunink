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

Chapter 2 showed you how to create and unlock a high-privacy area. This chapter answers the question behind it: what exactly does that protect you from, what doesn't it protect you from, and what do you give up in return? By the end, you should be able to decide which of your texts belong in such an area — and which would only be in the way there.

## Two Levels, Not One

[bun.ink](http://bun.ink) always encrypts. The difference lies in who holds the key.

**The normal level.** Your texts are stored encrypted in the database. For the app to do its work — searching, counting words, writing to GitHub, comparing versions — the server has to be able to decrypt them. The key for that sits with the server admin. This protects you against a stolen storage device or a glance into the database; it does not protect you against someone with full access to the running server.

**The high-privacy level.** Here the key is derived from your passphrase, and it happens in your browser. The text is encrypted there and leaves your device only in that form. The server stores something it cannot read itself — and neither can the admin. That's what people mean when they talk about end-to-end encryption.

The price is already contained in that sentence: what the server cannot read, it cannot process for you either. Almost every limitation mentioned in the rest of this chapter follows from that single fact.

## Passphrase, Recovery Key, Session

Three things are connected here, and it's worth keeping them apart.

The **passphrase** is the thing you remember. The key used for unlocking is derived from it. [bun.ink](http://bun.ink) doesn't know it and cannot reset it — there's no route via support, no recovery from a backup. That isn't unfriendliness; it's the very property that protects the area: a provider who could let you back in could also look inside themselves.

The **recovery key** is your second way in. It is displayed exactly once, when you create the area. Treat it like the original of your manuscript: password manager, printed out in a folder, not in a notes app on the same device. It never expires and cannot be replaced — not even if you change your passphrase. Whoever has it gets in, forever. Conversely, this means: once it has fallen into the wrong hands, changing the passphrase won't help — only a new area that you move your texts into.

The **session** is the short-term memory. The area stays unlocked only as long as the page is open; after a reload it is locked again. The **auto-logout** setting fits with this: it signs you out after a period without activity. If you work somewhere where others can get to your screen, it's the second half of the protection.

## What It Protects Against — and What It Doesn't

An encrypted area protects you against anyone who gets at the stored data: server, database, backups, operator.

It does not protect you against your own device. The moment you unlock, the text sits in plain form in your browser — and is therefore open to anyone who controls that browser or can see the screen. A compromised computer, a rogue extension, an unlocked workstation: the strongest encryption in the world won't help against any of that.

Nor does it hide the fact *that* you are writing. Folder and document names, their size, the timestamps and the number of versions all remain readable. If the filename alone would give you away, call it something else — the protection is in the content, not in the label.

And it doesn't protect you from yourself. The most common way to lose texts in a high-privacy area isn't an attack, it's a forgotten passphrase.

## What You Give Up

In a high-privacy area, almost everything described in Chapters 4 through 8 falls away. That's not a shortcoming but a consequence of the server not knowing the text:

- **No GitHub.** A high-privacy folder is never transferred, and a high-privacy project can't be linked in the first place. So there are no branches, no commits, no pull requests and no history in the repository.
- **No editing via pull requests.** The collaboration described in Chapter 7 runs entirely through GitHub. Anyone who is meant to read your encrypted text gets it some other way — exported, and then outside of [bun.ink](http://bun.ink).
- **No agents.** An agent reads the repository. What never arrives there, it can't read, can't correct and can't give away. For texts that no model should see, that's exactly the desired behaviour (Chapter 8).
- **No search, no statistics while locked.** Search skips locked documents, and statistics count them as zero words. Don't be puzzled by a dip in the curve — unlock and look again.
- **No export while locked.** An export would otherwise contain unreadable text, so [bun.ink](http://bun.ink) aborts it.

## What Belongs There — and What Doesn't

The useful question isn't "how secret is my text", but: what happens if this particular text ends up with someone who shouldn't have it?

Arguments for an encrypted area: research material with the names of sources who must stay anonymous. Diaries and notes that will never be published. Texts under a confidentiality obligation. Anything concerning third parties who were never asked.

Arguments against it: anything you want to work on the way you work on your other texts. A novel that you develop in drafts and have edited is badly served by a high-privacy project — that's precisely where you'd be missing the tools you need.

The middle way is usually the right one: **a high-privacy folder inside a normal project.** The manuscript works with GitHub, the folder with the sources stays encrypted and at home. So you don't have to make the decision for the whole project.

## Your Backup Is Your Own

In a normal project, a second copy of your texts lives in your repository. If [bun.ink](http://bun.ink) goes down, if you cancel your account, if you lose your password — the texts are still there. That safety net is entirely absent in an encrypted area, precisely because nothing leaves it.

So you create it yourself:

1. **Unlock, then export.** Write out the folder or project as a ZIP via the context menu (Chapter 2).
2. **Regularly, not once.** After every stretch of work you care about. An export from last summer is a keepsake, not a backup.
3. **To somewhere that isn't the same device.** An encrypted hard drive, an encrypted archive in the cloud, a storage medium in the cupboard.
4. **Passphrase and recovery key kept separately from it.** Both together in one place is an unlocked door with a sign next to it.

The honest part of this chapter is that these four points are work. An area that nobody but you can open is also an area that nobody but you looks after.

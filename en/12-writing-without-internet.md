---
title: Writing offline
chapter: 12
slug: writing-without-internet
description: How to prepare a project for a few days offline, what works without a connection, and what happens when you come back.
lang: en
status: translated
updated: 2026-10-15
source: de/12-ohne-internet-schreiben.md
source_hash: d45bed653037690e0f6e5a121e63ece3b6eb30b91ad3925e14ad1bc322307e68
---

# Writing without internet

Train, holiday cottage, aeroplane: with bun.ink you can keep writing for a few days without a connection. You prepare a project once while you're online — after that bun.ink switches to offline mode by itself when the network drops out, and uploads your changes as soon as it's back. After this chapter you'll know what to prepare, what works offline, and what happens to your text when you return.

## Making a project available offline

Only what you've selected beforehand is available offline — per device, not for your whole account.

### Automatically: opened projects

Under **Settings → Account → Offline on this device** you can switch on **Make opened projects available offline automatically**. Every project you open on this device then becomes available offline by itself — there's nothing left to prepare. Only do this on your own devices, not on someone else's or on public computers. A project you deselect in the context menu stays out.

### By hand

1. Open the project while you're online.
2. Right-click the project name in the sidebar (on a phone: press and hold).
3. Choose **Available offline**.

bun.ink stores a copy of the project on the device: every folder, every document, exactly as they are on the server. A small cloud icon next to the project name shows that it's ready offline. You'll find the state of the copy and the offline deadline under **Settings → Account → Offline on this device**.

You don't have to repeat this before every trip. As long as you're online, bun.ink keeps the copy up to date — every time you open the editor and after you've saved.

To remove a project from the device again, choose **Available offline** once more; the checkmark disappears and the copy is deleted.

### iPhone and iPad

On iPhone and iPad, iOS may delete the copy in a browser tab after a few days without use. The app on the home screen is safer: open bun.ink in Safari, tap **Share** and then **Add to Home Screen**. From then on, always open bun.ink via this icon and make the project available offline **there** — the app has its own storage, separate from Safari.

## What works offline

If the connection drops, you open bun.ink as usual. A notice above the editor shows that you're working with the copy on the device. Offline you can:

- edit existing documents,
- create new documents — they appear in the project right away, with a small cloud arrow for "so far only on this device", and are created when you upload,
- unlock high-privacy areas with your passphrase or recovery key and write in them,
- use snippets and export as Markdown.

bun.ink continuously saves what you write on the device, even without you saving. The notice above the editor keeps count of how many documents are waiting to be uploaded.

You can also close documents offline: bun.ink doesn't ask, it keeps your state on the device and shows it again next time you open it. The same goes for new documents: they stay in the project and can be reopened at any time. Because they exist only on your device so far, you can also rename, move, export and delete them again while offline.

## What doesn't work offline

Everything that needs the server or changes the structure of the project waits until you're back online: creating projects and folders, renaming, moving or deleting existing documents, importing files, GitHub, the version history and changing the passphrase. Clicking on these shows **Not available offline** — nothing gets lost in the process.

Projects you haven't prepared aren't there offline. And in high-privacy areas you can't create new documents offline, only edit existing ones.

Signing in also needs a connection. If you're signed out, you'll only see a notice offline; as soon as the network is back, you'll be taken to the sign-in automatically. bun.ink suspends the security logout while offline so you don't lock yourself out. Back online, it applies again.

## The offline deadline

A device may write offline for 14 days after its last contact with the server. During the final four days, the notice reminds you to go online again. Once the deadline passes, you can still read, copy and export your texts, but no longer edit them until the device has been online once. The changes you wrote offline are kept on the device in the meantime.

The deadline renews itself with every online contact. If your trial period or a cancelled subscription ends sooner, the deadline ends with it; if a payment is outstanding, it lasts three days.

## Back online

When the connection returns, the notice shows **You're back online**. Tap **Continue online**: bun.ink loads the normal editor and uploads your changes by itself. Afterwards it reports how many offline changes were uploaded.

If someone has saved the same document elsewhere in the meantime — on a second device or in another window — bun.ink asks rather than overwriting anything. It's the same dialog as when saving normally (chapter 3): **Save local version** puts your text into the history as a conflict version, and nothing is lost.

For high-privacy documents, uploading works even when the area is locked — your text only ever leaves the device encrypted anyway. You only need to unlock the area to compare in such a conflict; until then your text stays on the device.

## What's stored on your device

The offline copy lives in your browser's storage. For normal projects that means: anyone who can use your device can read these texts, even without being signed in to bun.ink. For high-privacy areas, only the encrypted text is stored there; it can only be read with your passphrase.

So only make projects available offline on your own devices. When you sign out, bun.ink deletes the copies and everything still waiting to be uploaded — it warns you beforehand if there are still open changes. The automatic logout after inactivity, on the other hand, deletes nothing, so that no offline work is lost.

### Clearing browser data

The offline copy is part of your browser's website data. If you clear **cookies and website data** in your browser settings (in Safari: **Clear History and Website Data**), it's gone — and with it everything you wrote offline but haven't uploaded yet. The persistent storage of the home screen app doesn't change that; it only protects against the browser clearing up on its own.

The rule is simple: as long as the notice above the editor shows **Changes waiting to be uploaded**, don't clear any browser data. Once bun.ink has reported that the offline changes have been uploaded, everything is on the server. Then you can clear the data without worry; the copy just won't be there any more until you make the project **Available offline** again.

### Passphrase changed on another device

If you've changed the passphrase of a high-privacy area on another device, the old one still unlocks it offline on this device — the copy was created with it. At the next online contact the copy is refreshed, and from then on the new passphrase applies.

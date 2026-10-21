---
title: Writing Offline
chapter: 12
slug: writing-without-internet
description: How to prepare a project for a few days without a connection, what works offline, and what happens when you come back.
lang: en
status: translated
updated: 2026-10-15
source: de/12-ohne-internet-schreiben.md
source_hash: 259e4d32579943f69f0d4ac59a215b44ece03da38d8e410aee692a97fc870f07
---

# Writing without an internet connection

Train, holiday cottage, aeroplane: with bun.ink you can keep writing for a few days without a connection. You prepare a project once while you're online — after that, bun.ink switches to offline mode by itself when the network drops out, and uploads your changes as soon as it's back. By the end of this chapter you'll know what to prepare, what works offline, and what happens to your text when you return.

## Making a project available offline

Only what you've selected beforehand is available offline — per device, not for your whole account.

### Automatically: opened projects

Under **Settings → Account → Offline on this device** you can switch on **Make opened projects available offline automatically**. Every project you open on this device then becomes available offline by itself — you don't have to prepare anything. Only do this on your own devices, not on someone else's or on public computers. A project you deselect in the context menu stays out.

### By hand

1. Open the project while you're online.
2. Right-click the project name in the sidebar (on a phone: press and hold).
3. Choose **Available offline**.

bun.ink stores a copy of the project on the device: all folders, all documents, exactly as they are on the server. A small cloud icon next to the project name shows that it's ready offline. You'll find the state of the copy and the offline deadline under **Settings → Account → Offline on this device**.

You don't have to repeat this before every trip. As long as you're online, bun.ink keeps the copy up to date — every time you open the editor and after you save.

To remove a project from the device again, choose **Available offline** a second time; the checkmark disappears and the copy is deleted.

### iPhone and iPad

On iPhone and iPad, iOS may delete the copy in a browser tab after a few days without use. The app on the home screen is safer: open bun.ink in Safari, tap **Share** and then **Add to Home Screen**. From then on, always open bun.ink through this icon and make the project available offline **there** — the app has its own storage, separate from Safari.

## What works offline

If the connection drops, you open bun.ink as usual. A notice above the editor shows that you're working with the copy on the device. Offline you can:

- edit existing documents,
- create new documents — they appear in the project right away, with a small cloud arrow for "only on this device so far", and are created when they're uploaded,
- unlock high-privacy areas with your passphrase or recovery key and write in them,
- use snippets and export as Markdown.

bun.ink continuously saves what you write on the device, even if you don't save yourself. The notice above the editor keeps count of how many documents are waiting to be uploaded.

You can also close documents offline: bun.ink won't ask, it simply keeps your version on the device and shows it again next time you open it. The same goes for new documents: they stay in the project and can be reopened at any time. Because they only exist on your device so far, you can also rename, move, export and delete them offline.

## What doesn't work offline

Anything that needs the server or changes the structure of the project waits until you're back online: creating projects and folders, renaming, moving or deleting existing documents, importing files, GitHub, the version history and changing your passphrase. Clicking on any of these shows **Not available offline** — nothing is lost in the process.

Projects you haven't prepared aren't there offline. If the network drops while you're working in such a project, you can only read and export it until the connection returns. What you've written up to that point stays on the device and is uploaded as soon as you're online again. That's deliberate: on someone else's computer, in the library for example, no text should be left behind that you don't want there. If you need it, export it before you log out. On your own device, simply make the project available offline.

And in high-privacy areas you can't create new documents offline, only edit existing ones.

Logging in also needs a connection. If you're logged out, you'll only see a notice when offline; as soon as the network is back, it goes to the login by itself. bun.ink suspends the security logout while offline so you don't lock yourself out. Back online, it applies again.

## The offline deadline

A device may write offline for 14 days after its last contact with the server. During the final four days, the notice reminds you to go online again. If the deadline passes, you can still read, copy and export your texts, but not edit them until the device has been online once. The changes you wrote offline stay on the device.

The deadline renews itself with every online contact. If your trial period or a cancelled subscription ends sooner, the deadline ends with it; if a payment is outstanding, it lasts three days.

## Back online

When the connection returns, the notice shows **You're back online**. Tap **Continue online**: bun.ink loads the normal editor and uploads your changes by itself. Afterwards it reports how many offline changes were uploaded.

If someone saved the same document elsewhere in the meantime — on a second device or in another window — bun.ink asks rather than overwriting anything. It's the same dialogue as with normal saving (chapter 3): **Save local version** puts your text into the history as a conflict version, and nothing is lost.

With high-privacy documents, uploading works even when the area is locked — your text only ever leaves the device encrypted. You only need to unlock the area to compare versions in such a conflict; until then, your text stays on the device.

## What's stored on your device

The offline copy lives in your browser's storage. For normal projects, that means: anyone who can use your device can read these texts, even without being logged in to bun.ink. For high-privacy areas, only the encrypted text is stored there; it can only be read with your passphrase.

So only make projects available offline on your own devices. When you log out, bun.ink deletes the copies and everything still waiting to be uploaded — it warns you first if there are still outstanding changes. The automatic logout after inactivity, on the other hand, deletes nothing, so that no offline work is lost.

### Clearing browser data

The offline copy is part of your browser's website data. If you clear **cookies and website data** in your browser settings (in Safari: **Clear History and Website Data**), it's gone — and with it everything you wrote offline but haven't uploaded yet. The persistent storage of the home screen app doesn't change that; it only protects against the browser tidying up on its own.

The rule is simple: as long as the notice above the editor shows **Changes waiting to be uploaded**, don't clear any browser data. Once bun.ink has reported that the offline changes have been uploaded, everything is on the server. Then you can clear the data without worry; the copy just won't be there any more until you make the project **Available offline** again.

### Passphrase changed on another device

If you changed the passphrase of a high-privacy area on another device, the old one still unlocks it offline on this device — the copy was created with it. At the next online contact the copy is refreshed, and from then on the new passphrase applies.

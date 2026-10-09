---
title: Getting Started
chapter: 1
slug: getting-started
description: How to create an account, confirm your email address, sign in, and what you'll find in the settings.
lang: en
status: translated
updated: 2026-08-21
source: de/01-erste-schritte.md
source_hash: 8b34a8ffc4978640a9dc4f06b2a9437daf45cec84e9eb27bb2a03e0f181046b1
---

# **Getting started**

Before you can write, you need an account. This chapter walks you through signing up, confirming your email address and logging in. After that, you'll see what the settings contain and what you can change there.

## What you need

A browser and an email address you have access to. Nothing else.

You only need a GitHub account once you want to store your texts in a repository. Until then, [bun.ink](http://bun.ink) works without one.

## Creating an account

Open [bun.ink](http://bun.ink) and click **Create account**. The form has four fields:

- **Name** — at least 2 characters, at most 128. It doesn't have to be unique; your account is identified by your email address. The name appears in your account and on invoices.
- **Email** — this is where the confirmation link goes, and this is what you log in with later.
- **Password** — at least 8 characters. The eye icon in the field makes your input visible.
- **Confirm password** — must match.

There's also a checkbox: **I have read the privacy policy and the terms and conditions and agree to both.** Without this tick, the form won't be submitted. Depending on the configuration, a short security check against bot registrations also runs; it usually takes care of itself.

Above the submit button there's a list of the requirements. Each line is ticked off as soon as the corresponding field is correct — so you can see what's still missing before you click.

If an account already exists for that address, [bun.ink](http://bun.ink) tells you straight away. In that case, go to the login page or reset your password.

Your account starts with a free 14-day trial. You're logged in immediately, but you first land on the **Email verification required** page.

## Confirming your email address

As long as your address isn't confirmed, the Writer, Snippets and Settings stay locked. A banner points this out, and any attempt to open these areas takes you back to the verification page.

We send you an email with a link. Click it. The page confirms your address automatically; if nothing happens, click **Confirm email address**. The link also works on a device where you're not logged in — so you can open the email on your phone and carry on working on your laptop.

If no email arrives, check your spam folder first. After that you can request it again: on the verification page with **Resend verification email**, or later under **Settings › User data**. Three requests per hour are possible, after that you have to wait.

The link can only be used once. If you open it a second time, [bun.ink](http://bun.ink) tells you that your address has already been confirmed — that's not an error. After confirmation, **Continue** takes you to the Writer.

## Logging in, logging out, forgotten password

To log in, enter your email address and password and click **Log in**. If one of the two is wrong, the message reads **Email or password is incorrect** — [bun.ink](http://bun.ink) doesn't reveal which of the two was the problem. After five failed attempts within 15 minutes, logging in is briefly blocked from your connection; the message tells you how long you have to wait.

You can log out via the user menu at the top right or via **Settings › Account › Log out**. If you have unsaved changes open on a GitHub branch, [bun.ink](http://bun.ink) asks first: changes like that aren't stored in your account and would be lost when you log out.

If you've forgotten your password, click **Forgot password?** on the login page. Enter your address and you'll get a link for setting a new password. The confirmation on screen is deliberately neutral and doesn't reveal whether an account exists for that address. The same applies here: three requests per hour.

If you're already logged in, the password reset runs via **Settings › Security**. The email then goes to the address on file, with no risk of a typo.

## What's in the settings

You reach the settings via your initials at the top right and then **Settings**. They're divided into six areas.

### User data

At the top you'll find the **Name** and **Email** of your account as they're currently stored.

Under **Change name** you enter a new name and save it with **Save name**. The name is also updated on your invoices.

Below that is the status of your email verification. If the address hasn't been confirmed yet, you'll find the button for resending the email here.

### Account

**Subscription** shows your current plan and the date on which the trial or billing period ends. From here you can take out a monthly subscription (8.99 EUR) or an annual subscription (89.00 EUR). A voucher code can be entered optionally. You can choose a subscription during the trial period — you're only charged once the trial ends. Payment and invoices run through Stripe; **Manage billing** opens the Stripe portal, where you can view invoices and cancel.

Below that are **Log out** and **Delete account**.

### Security

**Change email address** requires the new address and your current password. [bun.ink](http://bun.ink) sends a confirmation link to the new address. Your login address only changes once you open that link — and the link is valid for 15 minutes. If you made a typo and sent the email to the wrong address, **Invalidate link now** renders it useless immediately. After confirmation, the new address counts as verified; you don't need a second verification email.

**Password reset** sends a recovery email to your account address.

**Security logout** logs you out automatically after a period of inactivity. You switch it on with a tick and choose the inactivity period: 2, 5, 10, 15, 30 or 60 minutes. Shortly before you're logged out, a countdown runs. [bun.ink](http://bun.ink) saves any open changes to your account beforehand — not to GitHub — and removes the cached content from this browser, exactly as with a normal logout.

### GitHub, Editor and Help

Under **GitHub** you can see your connected GitHub accounts, connect more and disconnect existing ones. What this connection does is explained in the chapter on GitHub.

Under **Editor** you'll find the writing settings: **Jump marks**, **Formatting bubble**, **Typewriter scrolling (Zen mode)**, the stealth key and the keyboard shortcuts for **Save** and **Zen mode**. The Editor chapter explains them in context.

Under **Help** there's a contact form — you choose a topic and write your message, and the answer comes by email. You can also restart the guided tour of the app here.

## Deleting your account

Deletion is under **Settings › Account › Delete account permanently**. A dialog asks you to confirm first.

All projects, documents, snippets and settings held in [bun.ink](http://bun.ink) are deleted. This can't be undone. Texts you've saved to a GitHub repository remain untouched there — they belong to your GitHub account, not to [bun.ink](http://bun.ink).

If your account is only on the free trial, everything is removed immediately. If there's a paid subscription, [bun.ink](http://bun.ink) cancels it right away and sends you a final email. It contains a link that lets you view your Stripe invoices and subscription status for another 30 days.

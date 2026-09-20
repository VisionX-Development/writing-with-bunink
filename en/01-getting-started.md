---
title: Getting Started
chapter: 1
slug: getting-started
description: How to create an account, confirm your email address, sign in, and what you'll find in the settings.
lang: en
status: translated
updated: 2026-09-20
source: de/01-erste-schritte.md
source_hash: 90002eb2abf461a99545a48f515aa106f5ef8180bd1ae6c103c58ab15f7d483b
---

# **Getting Started**

Before you can write, you need an account. This chapter walks you through signing up, confirming your email address, and logging in. After that, you'll see what the settings contain and what you can change there.

## What you need

A browser and an email address you have access to. That's it.

You only need a GitHub account once you want to store your texts in a repository. Until then, [bun.ink](http://bun.ink) works without one.

## Creating an account

Open [bun.ink](http://bun.ink) and click **Create account**. The form has four fields:

- **Name** — at least 2 characters, at most 128. It doesn't have to be unique; your account is identified by your email address. The name appears in your account and on invoices.
- **Email** — this is where the confirmation link goes, and it's what you'll use to log in later.
- **Password** — at least 8 characters. Use the eye icon in the field to make what you type visible.
- **Confirm password** — must match.

There's also a checkbox: **I have read and agree to the privacy policy and the terms and conditions.** Without this checkmark, the form won't be submitted. Depending on the configuration, a brief security check against bot sign-ups also runs; it usually takes care of itself.

Above the submit button is a list of requirements. Each line gets checked off as soon as the corresponding field is valid — so you can see what's still missing before you click.

If an account already exists for that address, [bun.ink](http://bun.ink) tells you right away. In that case, head to the login page or reset your password.

Creating an account starts a free 14-day trial. You're logged in immediately, but you'll first land on the **Email confirmation required** page.

## Confirming your email address

As long as your address isn't confirmed, the editor, snippets, and settings stay locked. A banner points this out, and any attempt to open these areas takes you back to the confirmation page.

We'll send you an email with a link. Click it. The page confirms your address automatically; if nothing happens, click **Confirm email address**. The link also works on a device where you aren't logged in — so you can open the email on your phone and keep working on your laptop.

If no email arrives, check your spam folder first. After that, you can request a new one: on the confirmation page via **Resend confirmation email**, or later under **Settings › User data**. Three requests per hour are possible, after that you'll have to wait.

The link can only be used once. If you open it a second time, [bun.ink](http://bun.ink) will tell you that your address has already been confirmed — that's not an error. After confirmation, **Continue** takes you into the editor.

## Logging in, logging out, forgotten password

To log in, enter your email address and password and click **Log in**. If either one is wrong, the message reads **Email or password is incorrect** — [bun.ink](http://bun.ink) won't reveal which of the two was the problem. After five failed attempts within 15 minutes, logins from your connection are briefly blocked; the message tells you how long you have to wait.

You can log out via the user menu at the top right or via **Settings › Account › Log out**. If you have unsaved changes open on a GitHub branch, [bun.ink](http://bun.ink) asks first: such changes aren't stored in your account and would be lost when you log out.

If you've forgotten your password, click **Forgot password?** on the login page. Enter your address, and you'll receive a link for setting a new password. The confirmation shown on screen is deliberately worded neutrally and doesn't reveal whether an account exists for that address. Here too: three requests per hour.

If you're already logged in, the password reset runs via **Settings › Security**. The email then goes to the address on file, with no risk of typos.

## What's in the settings

You reach the settings via your initials at the top right and then **Settings**. They're divided into six areas.

### User data

At the top are the **Name** and **Email** of your account as they're currently stored.

Under **Change name**, enter a new name and save with **Save name**. The name is also updated on your invoices.

Below that is the status of your email confirmation. If the address isn't confirmed yet, you'll find the button for resending here.

### Account

**Subscription** shows your current plan and the date on which the trial or billing period ends. From here you can take out a monthly subscription (8.99 EUR) or an annual one (89.00 EUR). A voucher code can be entered optionally. You can choose a subscription during the trial period — you'll only be billed once the trial ends. Payment and invoices run through Stripe; **Manage billing** opens the Stripe portal, where you can view invoices and cancel.

Below that are **Log out** and **Delete account**.

### Security

**Change email address** requires the new address and your current password. [bun.ink](http://bun.ink) sends a confirmation link to the new address. Your login address only changes once you open that link — and the link is valid for 15 minutes. If you made a typo and sent the email to the wrong address, **Invalidate link now** renders it useless immediately. After confirmation, the new address counts as confirmed; you don't need a second verification email.

**Reset password** sends a recovery email to your account address.

**Security logout** logs you out automatically after a period of inactivity. You switch it on with a checkmark and choose the inactivity period: 2, 5, 10, 15, 30, or 60 minutes. Shortly before logging you out, a countdown runs. [bun.ink](http://bun.ink) saves any open changes to your account beforehand — not to GitHub — and removes the cached content from this browser, exactly as with a normal logout.

### GitHub, Editor, and Help

Under **GitHub** you'll see your connected GitHub accounts, and you can connect more or disconnect existing ones. What this connection does is explained in the chapter on GitHub.

Under **Editor** you'll find the writing settings: **Jump marks**, **formatting bubble**, **typewriter scrolling (Zen mode)**, the stealth key, and the keyboard shortcuts for **Save** and **Zen mode**. The editor chapter explains them in context.

Under **Help** there's a contact form — you pick a topic and write your message, and the reply comes by email. You can also restart the guided tour of the app from here.

## Deleting your account

Deletion is found under **Settings › Account › Permanently delete account**. A dialog asks for confirmation first.

All projects, documents, snippets, and settings stored in [bun.ink](http://bun.ink) will be deleted. This cannot be undone. Texts you've saved to a GitHub repository remain untouched there — they belong to your GitHub account, not to [bun.ink](http://bun.ink).

If your account is only on the free trial, everything is removed immediately. If there's a paid subscription, [bun.ink](http://bun.ink) cancels it right away and sends you one final email. It contains a link that lets you view your Stripe invoices and subscription status for another 30 days.
---
title: Getting Started
chapter: 1
slug: getting-started
description: How to create an account, confirm your email address, sign in, and what you'll find in the settings.
lang: en
status: translated
updated: 2026-08-21
source: de/01-erste-schritte.md
source_hash: c12caabe3d3094b0393cd8da7e7beb93178b681364a4ce836148fd30add80de2
---

# **Getting Started**

Before you can write, you need an account. This chapter walks you through signing up, confirming your email address and logging in. After that, you'll see what the settings contain and what you can change there.

## What you need

A browser and an email address you have access to. That's it.

You only need a GitHub account once you want to store your texts in a repository. Until then, [bun.ink](http://bun.ink) works without one.

## Creating an account

Open [bun.ink](http://bun.ink) and click **Create account**. The form has four fields:

- **Name** — at least 2 and at most 128 characters. It doesn't have to be unique; your account is identified by your email address. The name appears in your account and on invoices.
- **Email** — this is where the confirmation link goes, and it's what you log in with later.
- **Password** — at least 8 characters. The eye icon in the field lets you make your input visible.
- **Confirm password** — must match.

There's also a checkbox: **I have read the privacy policy and the terms and conditions and agree to both.** Without this tick, the form won't be submitted. Depending on the configuration, a short security check against bot registrations also runs; it usually takes care of itself.

Above the submit button is a list of the requirements. Each line gets ticked off as soon as the field is correct — so you can see what's still missing before you click.

If an account already exists for that address, [bun.ink](http://bun.ink) tells you straight away. In that case, go to the login page, or reset your password.

With the account, a free 14-day trial begins. You're logged in immediately, but you'll first land on the **Email verification required** page.

## Confirming your email address

As long as your address isn't confirmed, the Writer, snippets and settings stay locked. A banner points this out, and every attempt to open these areas takes you back to the verification page.

We'll send you an email with a link. Click it. The page confirms your address automatically; if nothing happens, click **Confirm email address**. The link also works on a device where you're not logged in — so you can open the email on your phone and carry on working on your laptop.

If no email arrives, check your spam folder first. After that, you can request it again: on the verification page with **Resend verification email**, or later under **Settings › User data**. Three requests per hour are possible, after that you have to wait.

The link can only be used once. If you open it a second time, [bun.ink](http://bun.ink) will tell you that your address has already been confirmed — that's not an error. After confirmation, **Continue** takes you into the Writer.

## Logging in, logging out, forgotten password

To log in, enter your email address and password and click **Log in**. If either is wrong, the message reads **Email or password is incorrect** — [bun.ink](http://bun.ink) doesn't reveal which of the two was the problem. After five failed attempts within 15 minutes, logging in is briefly blocked from your connection; the message tells you how long you have to wait.

You can log out via the user menu at the top right or via **Settings › Account › Log out**. If you have unsaved changes open on a GitHub branch, [bun.ink](http://bun.ink) asks first: such changes aren't stored in your account and would be lost when you log out.

If you've forgotten your password, click **Forgot password?** on the login page. Enter your address, and you'll receive a link to set a new password. The confirmation on screen is deliberately neutral and doesn't reveal whether an account exists for that address. The same applies here: three requests per hour.

If you're already logged in, the password reset runs via **Settings › Security**. The email then goes to the address on file, with no risk of a typo.

## What the settings contain

You reach the settings via your initials at the top right and then **Settings**. They're divided into six areas.

### User data

At the top are the **Name** and **Email** of your account, as currently stored.

Under **Change name** you enter a new name and save it with **Save name**. The name is also updated on your invoices.

Below that is the status of your email verification. If the address hasn't been confirmed yet, you'll find the button to resend here.

### Account

**Subscription** shows your current plan and the date on which the trial or billing period ends. From here you can take out a monthly subscription (8.99 EUR) or an annual one (89.00 EUR). A voucher code can be entered optionally. You can choose a subscription during the trial already — you're only billed once the trial ends. Payment and invoices run through Stripe; **Manage billing** opens the Stripe portal, where you can view invoices and cancel.

Below that are **Log out** and **Delete account**.

### Security

**Change email address** requires the new address and your current password. [bun.ink](http://bun.ink) sends a confirmation link to the new address. Your login address only changes once you open that link — and the link is valid for 15 minutes. If you made a typo and sent the email to the wrong address, **Invalidate link now** makes it worthless immediately. After confirmation, the new address counts as verified; you don't need a second verification email.

**Reset password** sends a recovery email to your account address.

**Security logout** logs you out automatically after a period without activity. You switch it on with a tick and choose the inactivity period: 2, 5, 10, 15, 30 or 60 minutes. Shortly before logging out, a countdown runs. [bun.ink](http://bun.ink) saves any open changes to your account beforehand — not to GitHub — and removes the cached content from this browser, exactly as with a normal logout.

### GitHub, Writer and Help

Under **GitHub** you can see your connected GitHub accounts, connect further ones and disconnect existing ones. What this connection does is covered in the chapter on GitHub.

Under **Writer** are the writing settings: **Jump marks**, **Formatting bubble**, **Typewriter scrolling (Zen mode)**, the stealth key and the keyboard shortcuts for **Save** and **Zen mode**. The Writer chapter explains them in context.

Under **Help** there's a contact form — you choose a topic and write your message, and the reply comes by email. You can also restart the guided tour through the app from here.

## Deleting your account

Deletion is under **Settings › Account › Delete account permanently**. A dialog asks you to confirm first.

Everything that lives in [bun.ink](http://bun.ink) is deleted: all projects, documents, snippets and settings. This cannot be undone. Texts you've saved to a GitHub repository remain untouched there — they belong to your GitHub account, not to [bun.ink](http://bun.ink).

If your account is only on the free trial, everything is removed immediately. If there's a paid subscription, [bun.ink](http://bun.ink) cancels it straight away and sends you one final email. It contains a link through which you can still view your Stripe invoices and subscription status for 30 days.

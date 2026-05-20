# Security Policy

## Reporting a vulnerability

Please do **not** open a public GitHub issue for security vulnerabilities.

Email **security@neosim.io** with:

- A clear description of the issue and impact
- Steps to reproduce (proof-of-concept if available)
- Affected version / commit SHA
- Your name & contact for disclosure credit (optional)

We aim to:

- Acknowledge receipt within **48 hours**
- Provide a status update within **7 days**
- Ship a fix or mitigation within **30 days** for high-severity issues

## Scope

In scope:

- The main site (`https://neosim-web.vercel.app` and production domains)
- Source code in this repository
- Supabase backend (auth, RLS policies, edge functions) when added

Out of scope:

- Third-party services we link to (Vercel, Supabase, Stripe dashboards)
- Social engineering, physical attacks, denial-of-service
- Issues requiring physical access to a user's unlocked device

## Coordinated disclosure

We follow a 90-day coordinated disclosure timeline. After a fix is shipped,
we publish a brief advisory and credit the reporter (if they consent).

## What is NOT a vulnerability

- Missing best-practice headers on third-party assets
- Verbose error messages in development builds
- Self-XSS that requires the victim to paste attacker code into devtools
- Email enumeration when the user-facing UX intentionally signals existence

# Digital Architect — Portfolio

A backend engineer portfolio built with **SvelteKit 2**, **Svelte 5**, and **Tailwind CSS v4**.

## Tech Stack

- SvelteKit 2.x + Svelte 5 (runes)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Vite 7
- JavaScript (no TypeScript)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home / Hero with terminal visual + bento grid |
| `/projects` | Projects gallery (asymmetric bento layout) |
| `/about` | About & skills toolbox |
| `/resume` | Resume with print support |
| `/contact` | Contact form wired to API |
| `/api/contact` | POST endpoint for contact form |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Contact Form

The contact form hits `POST /api/contact` and validates all fields server-side. To wire up a real email provider, open `src/routes/api/contact/+server.js` and follow the commented example for **Resend** (or swap in SendGrid, Nodemailer, etc.).

```bash
# Install Resend (optional)
npm install resend

# Add your key to .env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Then uncomment the Resend block in `+server.js` and import the key:

```js
import { RESEND_API_KEY } from '$env/static/private';
```

## Tailwind v4 Notes

Colors are defined as CSS custom properties in `src/app.css` using the `@theme` block — no separate `tailwind.config.js` needed. The design tokens follow the **Synthetix Mono** design system (Deep Sea dark palette, Space Grotesk + JetBrains Mono typography).

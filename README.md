# Nexora Tech — Marketing Site

Single-page React + Vite site, built from the provided `App.jsx`.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (JIT, arbitrary values enabled by default)
- lucide-react for icons

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

Output goes to `dist/`.

## Deploying to Vercel

**Option A — Vercel dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: Vercel auto-detects **Vite**. If it doesn't:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

No environment variables are required — this is a fully static build with no backend calls.

## Things I changed vs. the original file

- Moved the inline `<style>` block (Google Fonts import, keyframes, `::selection`) into `src/index.css`. Same visual result, but the font and animations now load as part of the initial CSS instead of being injected by React after mount — avoids a flash of unstyled text on slow connections.
- Split config into standard Vite/Tailwind/PostCSS files.
- Added SEO meta tags, Open Graph/Twitter card tags, and an `Organization` JSON-LD block in `index.html`.
- Vite build config splits React into its own `vendor` chunk for better browser caching across deploys.

## ⚠️ Things to confirm before you ship this ([CONTENT TO CONFIRM])

1. **Contact form doesn't send anywhere.** `handleSubmit` just flips a `sent` boolean — there's no backend, no email service, no API route. Right now if a real user fills this out, nothing happens except a UI state change. Before launch you need one of:
   - A Vercel serverless function (`/api/contact`) that forwards to Resend/SendGrid/Formspree/etc.
   - A third-party form service (Formspree, Basin) swapped in directly.
2. **Placeholder contact/domain info**: `hello@nexoratech.com`, `https://www.nexoratech.com/` (in `index.html` meta tags and JSON-LD), and the social links (`href="#"` for Twitter/LinkedIn/GitHub) are all placeholders from the source file. Replace with real values — the `og:image` URL in particular points to an image that doesn't exist yet.
3. **Testimonials and project names** (Aurelia Capital, Meridian Health, etc.) read as illustrative/placeholder content, not real client names — confirm before publishing, since presenting fabricated client testimonials publicly is a legal/reputational risk if anyone treats them as real quotes.
4. **`href="#"` on social icons**: clicking them currently jumps the page to the top (default anchor behavior) rather than doing nothing. Either wire up real URLs or change to `<button>`/`e.preventDefault()`.

## Known limitations / gotchas

- **Not tested with a real `npm install`/build in this environment** — outbound network access was unavailable in the sandbox this was built in, so `npm install` couldn't actually be run here. I checked the JSX for syntax errors with the TypeScript compiler (parses clean) and manually verified every import against the installed package versions, but you should still run `npm install && npm run build` yourself before deploying and watch for anything sandbox-specific I couldn't catch.
- **Tailwind arbitrary values** (`bg-[#050505]`, `w-[12%]`, etc.) require Tailwind 3.x JIT, which is what's pinned in `package.json` — don't downgrade to Tailwind 2.
- **`prefers-reduced-motion`** is respected (animations disabled), but there's no `prefers-color-scheme` handling — the site is dark-mode-only by design, which is fine here but worth knowing if you reuse the component elsewhere.
- No React Router — it's a single page with anchor-link navigation (`#about`, `#services`, etc.), which is appropriate for this scope but won't extend cleanly to multi-page needs without adding a router.

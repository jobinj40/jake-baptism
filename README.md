# Jake John Jobin — Holy Baptism Invitation

A mobile-first cinematic invitation built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is written to `dist/`.

## Photographs

Original photographs were read from `~/Desktop/photos` and were never renamed, moved, overwritten, or otherwise modified. Optimized, metadata-stripped website copies live under `public/photos/`. The local development-only photo curation report is intentionally excluded from Git and public deployment.

To change image placement, alt text, dimensions, or focal position, edit `src/data/photos.ts`. Add optimized assets to the matching folder under `public/photos/`; never point browser code at the original photo library.

## Event details and RSVP

All event information is centralized in `src/config/event.ts`. To enable WhatsApp RSVP, set `whatsappRsvpNumber` to a full international number containing digits only. The RSVP control remains hidden while this value is empty.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial baptism invitation website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY
git push -u origin main
```

## Deploy to Vercel (preferred)

1. Push the project to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Keep the build command as `npm run build` and output directory as `dist`.
4. Deploy, then place the final public URL in the `og:url` metadata in `index.html` for the best social preview.

## GitHub Pages fallback

The Vite base is relative (`./`), so the built assets work under a repository subpath. In repository settings, configure Pages to publish an Actions artifact or the contents of `dist/`. If using a custom workflow, run `npm ci`, `npm run build`, and upload `dist/` as the Pages artifact. Vercel remains preferable because it requires no Pages workflow and handles clean HTTPS deployment automatically.

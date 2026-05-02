# Sun's Acupuncture & Herbal Clinic

Marketing website for Sun's Acupuncture & Herbal Clinic in South Setauket, NY.
Built with Vite + React + TypeScript + Tailwind CSS, deployed as a static site
to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:5173/SunsClinic/

## Build & preview

```bash
npm run build       # type-checks and builds to dist/
npm run preview     # serves the built site locally
```

## Project layout

```
src/
├── components/   # Reusable UI: Navbar, Footer, Hero, ServiceCard, ReviewCard, SectionHeading
├── pages/        # Routes: Home, About, Services, Reviews, Contact
├── data/         # Static content: clinicInfo, services, reviews
└── types/        # Shared TypeScript types
```

Edit clinic details in `src/data/clinicInfo.ts`, services in `src/data/services.ts`,
and review quotes in `src/data/reviews.ts`. Pages and components consume these
data files so content updates do not require touching layout code.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

The site is served from the repo's subpath, so `vite.config.ts` sets
`base: '/SunsClinic/'` and `src/main.tsx` uses `<BrowserRouter basename="/SunsClinic">`.
If you switch to a custom domain or rename the repo, update both.

To enable Pages on a fresh repo:
1. Push the project to GitHub.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. The next push to `main` will deploy automatically.

## Roadmap

- [ ] Replace placeholder bio, address, phone, hours with real content
- [ ] Add real clinic photography (replace gradient placeholders in `Hero.tsx`)
- [ ] Live Google reviews via a serverless function (Cloudflare Pages / Netlify)
- [ ] Online contact form / booking integration
- [ ] Custom domain

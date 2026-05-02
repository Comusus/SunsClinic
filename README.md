# Sun's Acupuncture & Herbal Clinic

Marketing website for Sun's Acupuncture & Herbal Clinic in South Setauket, NY.
Built with Vite + React + TypeScript + Tailwind CSS, deployed as a static site
to GitHub Pages and served from `https://suns.clinic`.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:5173/

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

The site is served from the apex domain `suns.clinic`. The `public/CNAME` file
tells GitHub Pages to use that domain on every deploy. `vite.config.ts` uses
`base: '/'` since assets live at the domain root.

To enable Pages on a fresh repo:
1. Push the project to GitHub.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. The next push to `main` will deploy automatically.

### Custom domain (suns.clinic) DNS

Apex (`suns.clinic`) needs four A records pointing at GitHub's Pages servers:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 AAAA records for the apex:

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For the `www` subdomain, a single CNAME pointing at `comusus.github.io`.

## Roadmap

- [ ] Replace the building photo on Home → Meet Your Practitioner with a portrait of Dr. Sun
- [ ] Higher-resolution exterior photography
- [ ] Live Google reviews via a serverless function (Cloudflare Pages / Netlify)
- [ ] Online contact form / booking integration

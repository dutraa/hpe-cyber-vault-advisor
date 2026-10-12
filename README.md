# Design Your Own HPE Cyber Resilience Vault

Internal pre-sales architecture designer. Capture discovery inputs, create a transparent starting design, drag components among Landing Zone, isolation boundary and Vault Zone, edit components, inspect assumptions and gaps, and export a preliminary BOM. **Not authoritative sizing, quoting, compatibility validation or proof of orderability.**

## Screenshots

Add approved screenshots after internal UX review.

## Stack and structure

Next.js App Router, React, TypeScript, Tailwind CSS, dnd-kit, Zod, Zustand, React Hook Form, SheetJS, jsPDF, Vitest, Playwright. `app/` holds routes; `components/` the shell; `data/` versioned reference JSON; `lib/` pure engines, store and exports; `tests/` automated scenarios; `docs/` decisions. No database or authentication in V1.

## Prerequisites and local setup

Node.js 20+ and npm. From the extracted repository:

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js. No required environment variables. `PORT` defaults to 3000; `HOSTNAME` defaults to 0.0.0.0 for standalone deployment.

## Scripts and testing

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run verify
npm run start
```

`verify` runs lint, typecheck, Vitest and production build. This delivered repository has not been run or verified. The lockfile is a root manifest placeholder because registry access was unavailable; run `npm install` to resolve and update it before committing. Install Playwright browsers separately with `npx playwright install chromium` before running e2e. E2E launches a development server.

## Data model and reference catalog

The design contains schema version, discovery, canvas components, original suggestion and assumption ledger. The BOM is derived only from placed components. `data/components.v1.json` contains reference-only seed roles; **models are examples, not confirmed current/orderable configurations**. No SKU is supplied. `data/rules.v1.json` documents rule IDs and versions; `data/questions.v1.json` contains prompts. To update a component, edit the JSON record, retain its source metadata, review zone restrictions and attributes, update tests, then run `npm run verify`. For a new catalog version, copy the JSON to a new versioned filename, update the import and version constants in `lib/model.ts` and health metadata, and document migration decisions. Change rule explanations and implementations together, then increment rule version and tests.

## GitHub

```bash
git init
git add .
git commit -m "Initial CRV designer"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Create an empty private repository in your approved GitHub organization first. Replace the placeholder remote with its actual URL.

## Railway and Docker

In Railway: New Project > Deploy from GitHub repo > select the private repository. Confirm build `npm run build` and start `npm run start` (or use included Dockerfile); generate a domain; visit `/api/health`; verify the wizard and browser exports. `next.config.ts` enables standalone output. The standalone server uses Railway's `PORT` and `HOSTNAME=0.0.0.0`. Docker alternative:

```bash
docker build -t crv-designer .
docker run --rm -p 3000:3000 -e PORT=3000 crv-designer
```

## Environment variables

None required. `PORT` optional, default 3000. `HOSTNAME` optional, default 0.0.0.0 in Docker. No secrets or database connection.

## Security and privacy

Drafts stay in browser localStorage; no telemetry or external customer-data API. Do not enter sensitive or regulated customer information. JSON import is schema-validated and capped at 2 MB. CSV/XLSX cells are escaped against formula injection; filenames are sanitized. Local drafts are not application-encrypted; clearing browser storage deletes them. Hosting and access restrictions must be applied externally before a pilot. Review third-party dependencies and run `npm audit` in your approved environment.

## Accessibility

Visible focus, labeled controls, live save and drag announcements, dnd-kit pointer/touch/keyboard sensors, explicit add/move/reorder/remove controls, and reduced-motion support. Validate WCAG 2.1 AA with assistive technology before pilot release.

## Known limitations and future enhancements

Reference catalog requires governance; no approved SKUs, pricing, licensing or final sizing. Local drafts are device/browser-specific. No authentication or shared persistence. No server-side audit trail. Formal configuration integration and catalog administration are future work. See `docs/ARCHITECTURE.md`.

## Troubleshooting

If a draft cannot be loaded, import a previously exported JSON file or start a new design. If catalog validation fails, check the three versioned JSON files against Zod schemas in `lib/model.ts`. If Railway health checks fail, inspect deployment logs and confirm the build/start commands and `PORT`. If Playwright cannot launch, install its browser with `npx playwright install chromium`.

**Required disclaimer:** Preliminary architecture and component list for discovery and planning. Product availability, compatibility, capacity, performance, licensing, services, quantities, and orderability must be validated through approved HPE design and configuration processes before quotation or implementation.

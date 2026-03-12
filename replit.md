# OhhDenny Services LLC — Business Website

## Overview

This is a multi-page business website for **OhhDenny Services, LLC**, a small IT consulting company based in Maryland. The site showcases their services (web development, networking, cybersecurity, computer repair), pricing, team background, and a contact form. The stack is a full-stack TypeScript monorepo with a React frontend and an Express backend, sharing types and validation schemas through a `shared/` directory.

The only backend functionality is a contact form that stores messages to a PostgreSQL database. The rest of the site is essentially a static marketing/informational site.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Project Structure

```
/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/
│       │   ├── layout/   # Navbar, Footer, PageTransition
│       │   └── ui/       # shadcn/ui component library
│       ├── hooks/        # use-contact, use-mobile, use-toast
│       ├── lib/          # queryClient, utils
│       └── pages/        # Home, About, Services, Pricing, Contact, NotFound
├── server/          # Express backend
│   ├── index.ts     # App entry point
│   ├── routes.ts    # API route handlers
│   ├── storage.ts   # Database access layer (IStorage interface + DatabaseStorage)
│   ├── db.ts        # Drizzle ORM + pg Pool setup
│   ├── static.ts    # Serves built frontend in production
│   └── vite.ts      # Dev-mode Vite middleware integration
├── shared/          # Shared code between client and server
│   ├── schema.ts    # Drizzle table definitions + Zod validation schemas
│   └── routes.ts    # Typed API route definitions (path, method, input/output schemas)
├── script/
│   ├── build.ts     # Custom esbuild + Vite build script
│   └── analyze.js   # Static code analysis utility
└── migrations/      # Drizzle migration output
```

### Frontend Architecture

- **Framework:** React 18 with TypeScript, bundled by Vite
- **Routing:** `wouter` — lightweight client-side routing (no Next.js/React Router)
- **Data fetching:** `@tanstack/react-query` for server state management
- **UI components:** `shadcn/ui` (Radix UI primitives + Tailwind CSS) using the "new-york" style variant
- **Animations:** `framer-motion` for page transitions (via `PageTransition` wrapper component)
- **Forms:** `react-hook-form` + `@hookform/resolvers` + Zod for form validation
- **Styling:** Tailwind CSS with custom CSS variables for the corporate blue/white theme; Google Fonts (Inter, Plus Jakarta Sans)
- **Icons:** `lucide-react` + `react-icons` (for social media icons like X/LinkedIn)
- **SEO:** Per-page `useSEO()` hook (title, description, OG/Twitter tags, canonical URL, GA page_view events); JSON-LD ProfessionalService schema injected into `<head>` via `JsonLd` component; Google Analytics G-JGD15F0GZT loaded in `index.html`
- **Images:** Original site images imported from `attached_assets/` via `@assets/` path alias — includes company logo, hero illustrations, service icons, certification badges, network topology diagram, and SSL trust seal

### Backend Architecture

- **Framework:** Express.js (Node.js) with TypeScript, run via `tsx`
- **API endpoints:** `POST /api/contact` (validated with Zod, honeypot spam check, rate limited 5/15min), `GET /robots.txt`, `GET /sitemap.xml`
- **Security headers:** X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy (applied globally)
- **Storage layer:** `IStorage` interface with `DatabaseStorage` implementation — makes it easy to swap storage backends (e.g., MemStorage for tests)
- **Dev server:** Vite runs in middleware mode inside the Express server during development (HMR via WebSocket at `/vite-hmr`)
- **Production build:** Custom `script/build.ts` runs `vite build` for the client and `esbuild` for the server, bundling an explicit allowlist of server dependencies for faster cold starts

### Shared Layer (`shared/`)

This is the key architectural decision for type safety across the full stack:
- **`shared/schema.ts`** defines the Drizzle ORM table schemas and Zod validation schemas derived from them via `drizzle-zod`
- **`shared/routes.ts`** defines all API routes with typed paths, HTTP methods, input schemas, and response schemas — both the server and client import from here, eliminating duplication and keeping types in sync

### Database

- **Database:** PostgreSQL hosted on Render (external)
- **ORM:** Drizzle ORM (`drizzle-orm/node-postgres`) with `pg` Pool
- **Schema:** Single table — `contact_messages` (id, name, email, phone, message, createdAt)
- **Migrations:** Managed via `drizzle-kit` with `db:push` command
- **Config:** `RENDER_DATABASE_URL` env var (preferred) or `DATABASE_URL` as fallback; SSL auto-enabled for Render connections

### Build & Deployment

- **Dev:** `tsx --env-file=.env server/index.ts` starts Express which serves both the API and Vite dev middleware
- **Build:** `script/build.ts` produces `dist/public/` (Vite output) and `dist/index.cjs` (esbuild server bundle)
- **Production:** `node dist/index.cjs` serves static files from `dist/public/` and handles API routes

---

## External Dependencies

| Dependency | Purpose |
|---|---|
| **PostgreSQL** | Primary database, accessed via `DATABASE_URL` env var |
| **Drizzle ORM** | Type-safe database query builder and schema management |
| **Google Fonts** | Typography — Inter and Plus Jakarta Sans loaded via CDN in `index.html` |
| **Radix UI** | Accessible headless UI primitives (full set installed via shadcn/ui) |
| **Framer Motion** | Page transition animations |
| **TanStack Query** | Client-side server state and mutation management |
| **Zod** | Runtime schema validation shared between client and server |
| **Replit Vite Plugins** | `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — Replit-specific dev tooling, only active in dev on Replit |

### Environment Variables Required

- `RENDER_DATABASE_URL` — External Render PostgreSQL connection string (primary)
- `DATABASE_URL` — Fallback PostgreSQL connection string (auto-provided by Replit if provisioned)
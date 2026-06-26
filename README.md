# Airo

Air quality monitoring and reporting system.

| Layer    | Stack                                              | Port (dev) |
|----------|----------------------------------------------------|------------|
| App      | Next.js 16 App Router, React 19, TypeScript        | `3000`     |
| UI       | Material UI 9, Emotion                             | —          |
| Auth     | Firebase Authentication (SSO)                      | —          |
| Hosting  | Vercel                                             | —          |

---

## Quick start

```bash
npm install
cp .env.example .env.local   # when available
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build check

```bash
npm run lint && npm run build
```

---

## Structure

```
Airo/
├── src/
│   ├── app/                 # App Router: pages, layouts, API routes
│   │   ├── api/             # Route handlers (auth callbacks, webhooks)
│   │   └── (routes)/        # Route groups
│   ├── actions/             # Server Actions
│   ├── components/          # Reusable UI
│   ├── hooks/               # Client hooks
│   ├── lib/                 # Theme, fonts, firebase config, utils
│   ├── providers/           # Global providers (MUI, auth)
│   ├── services/            # Firebase / API adapters
│   └── types/               # Shared types
├── public/                  # Static assets
└── .github/                 # Issue / PR templates, CI
```

---

## Authentication (Firebase SSO)

Auth is handled on the server where possible; the browser only receives what it needs for the SSO redirect flow.

| Concern              | Mechanism              | Location (planned)                    |
|----------------------|------------------------|---------------------------------------|
| SSO redirect / popup | Firebase client SDK    | `src/lib/firebase/`, client components |
| OAuth callback       | API Route              | `src/app/api/auth/callback/route.ts`  |
| Session cookie       | API Route + middleware | `src/app/api/auth/session/route.ts`   |
| Sign-in / sign-out   | Server Actions         | `src/actions/auth.ts`                 |
| Protected UI         | Server Components      | `src/app/(routes)/…`                  |
| Route guard          | Middleware             | `src/middleware.ts`                   |

Typical flow:

1. User starts SSO → Firebase client redirects to the identity provider.
2. Provider returns to **`/api/auth/callback`** → server verifies the token, sets an HTTP-only session cookie.
3. Server Actions read the session server-side for mutations and data access.
4. Middleware rejects unauthenticated requests to protected routes.

---

## Git workflow

Work is tracked in **Jira**. Every branch and pull request must reference the subtask key (`KAN-<number>`).

### Branches

| Type        | Meaning                           | Example                              |
|-------------|-----------------------------------|--------------------------------------|
| `main`      | Default branch                    | —                                    |
| `feature/`  | New features                      | `KAN-17/feature/auth-sso`            |
| `fix/`      | Bug fix                           | `KAN-24/fix/session-cookie`          |
| `refactor/` | Refactoring without logic changes | `KAN-31/refactor/auth-actions`       |
| `chore/`    | Infrastructure, meta files, envs  | `KAN-8/chore/github-actions`         |
| `docs/`     | Documentation                     | `KAN-15/docs/readme`                 |

Format:

```
KAN-<id>/<type>/<short-desc-kebab-case>
```

- `KAN-<id>` — Jira subtask key (required).
- `<type>` — one of: `feature`, `fix`, `refactor`, `chore`, `docs`.
- `<short-desc-kebab-case>` — brief slug for the change.

One subtask → one branch. Do not mix multiple Jira keys on a single branch.

### Pull requests

- **Title:** `KAN-<id> <short description>` — e.g. `KAN-17 Add Firebase SSO callback route`.
- **Branch** must match the Jira key in the title.
- Link the Jira subtask in the PR description (Smart Commits / development panel).

### Conventional Commits

```
<type>(<scope>): <short desc>
```

Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`

Examples:

```
feat(auth): add firebase sso callback route
fix(ui): correct app bar layout on mobile
chore(ci): add github actions workflow
docs: add repository readme and pr template
```

---

## Nomenclature

### Folders

| Domain        | Style       | Example                          |
|---------------|-------------|----------------------------------|
| App routes    | kebab-case  | `app/air-quality/`, `app/api/`   |
| Route groups  | `(name)`    | `app/(auth)/`, `app/(dashboard)/`|
| Components    | `camelCase` | `components/appBar/`, `components/chart/` |
| Hooks         | `camelCase` | `hooks/auth/`, `hooks/airQuality/` |
| Services      | `camelCase` | `services/firebase/`, `services/airQuality/` |
| Server Actions| `camelCase` | `actions/auth.ts`, `actions/report.ts` |

### Files

| Type              | Style                    | Example                              |
|-------------------|--------------------------|--------------------------------------|
| Page              | `page.tsx`               | `app/dashboard/page.tsx`             |
| Layout            | `layout.tsx`             | `app/(dashboard)/layout.tsx`         |
| Loading / Error   | `loading.tsx`, `error.tsx` | `app/dashboard/loading.tsx`        |
| API route handler | `route.ts`               | `app/api/auth/callback/route.ts`     |
| Component         | `PascalCase.tsx`         | `AirQualityChart.tsx`                |
| Hook              | `use` + `PascalCase`.ts  | `useAuth.ts`, `useAirQuality.ts`     |
| Server Action     | `camelCase` verb + noun  | `signInWithSso`, `signOut`           |
| Service function  | `camelCase` verb + noun  | `getSession`, `verifyIdToken`        |
| Barrel export     | `index.ts`               | `components/index.ts`                |
| Types             | `camelCase.ts`           | `auth.ts`, `airQuality.ts`           |

### Components and exports

- File name = main export (`export function AppBar()` → `AppBar.tsx`).
- Compound components via namespace: `Input.Counter`, `Card.Header`.
- Containers: suffix `Container` (`ChartContainer`, `ReportCardContainer`).

### Providers

```
providers/
  GlobalProvider.tsx    # MUI theme, cache, baseline
  AuthProvider.tsx      # client auth context
  index.ts              # public API
```

### Imports

- Alias `@/` → `src/`.
- Prefer barrel exports for `components/`, `hooks/`, `providers/`.

### API routes

- REST-style paths in kebab-case: `/api/auth/callback`, `/api/auth/session`.
- Handler: validate input → call service / Firebase Admin → `NextResponse.json()` or redirect.
- Keep business logic in `services/`, not inside `route.ts`.
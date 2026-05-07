# Amiweb Frontend Structure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganize the Protonlab frontend to adopt the reusable architecture patterns from `amiweb` without importing unsupported business modules.

**Architecture:** Move the current storefront from a template-style structure to layered frontend architecture with `config`, `router`, `features`, and shared `lib` modules. Keep the current catalog, product detail, checkout, and contact flows working against the existing Protonlab backend while introducing cleaner boundaries for future admin/vendor/warehouse work.

**Tech Stack:** React, Vite, TypeScript, React Router, Vitest

---

### Task 1: Add environment/config layer

**Files:**
- Create: `src/config/env.ts`
- Modify: `src/lib/commerce-api.ts`
- Test: `src/config/env.test.ts`

**Step 1: Write the failing test**

Create tests that verify:
- base URL trims quotes and trailing slashes
- default URL falls back to `http://localhost:3000`

**Step 2: Run test to verify it fails**

Run: `npm test -- src/config/env.test.ts`
Expected: FAIL because `src/config/env.ts` does not exist

**Step 3: Write minimal implementation**

Implement:
- `normalizeBaseUrl`
- `API_BASE_URL`
- optional diagnostics flags

Update `src/lib/commerce-api.ts` to read from `src/config/env.ts` instead of directly from `import.meta.env`.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/config/env.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add src/config/env.ts src/config/env.test.ts src/lib/commerce-api.ts
git commit -m "refactor(config): centralize frontend env handling"
```

### Task 2: Introduce shared HTTP client

**Files:**
- Create: `src/lib/httpClient.ts`
- Create: `src/lib/httpClient.test.ts`
- Modify: `src/lib/commerce-api.ts`

**Step 1: Write the failing test**

Create tests for:
- successful envelope parsing
- non-OK responses surfacing a typed request error
- normalized URL composition using the configured API base URL

**Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/httpClient.test.ts`
Expected: FAIL because the module does not exist

**Step 3: Write minimal implementation**

Implement:
- `HttpRequestError`
- `httpRequest`
- envelope parsing for `{ success, data }`

Refactor `src/lib/commerce-api.ts` to build on top of `httpRequest`.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/lib/httpClient.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add src/lib/httpClient.ts src/lib/httpClient.test.ts src/lib/commerce-api.ts
git commit -m "refactor(api): add shared http client"
```

### Task 3: Split catalog into a feature module

**Files:**
- Create: `src/features/catalog/types.ts`
- Create: `src/features/catalog/catalogApi.ts`
- Create: `src/features/catalog/catalogApi.test.ts`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/Shop.tsx`
- Modify: `src/pages/SingleProductDetails.tsx`

**Step 1: Write the failing test**

Create tests for:
- category normalization
- product normalization
- `getProductBySlug` returning `null` on 404

**Step 2: Run test to verify it fails**

Run: `npm test -- src/features/catalog/catalogApi.test.ts`
Expected: FAIL because the feature files do not exist

**Step 3: Write minimal implementation**

Move catalog-specific API logic into `src/features/catalog/catalogApi.ts` and keep page code dependent on this feature layer rather than the generic commerce client.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/features/catalog/catalogApi.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add src/features/catalog src/pages/Home.tsx src/pages/Shop.tsx src/pages/SingleProductDetails.tsx
git commit -m "refactor(catalog): move storefront data access into feature layer"
```

### Task 4: Move route wiring into a router module

**Files:**
- Create: `src/router/index.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Step 1: Write the failing test**

Add a small router smoke test proving the app still exposes the home route through the new router entry point.

**Step 2: Run test to verify it fails**

Run: `npm test -- src/router/router.test.tsx`
Expected: FAIL because the router module does not exist

**Step 3: Write minimal implementation**

Extract route configuration from `src/App.tsx` to `src/router/index.tsx`, then make `App.tsx` a thin shell or remove it from routing responsibilities.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/router/router.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add src/router src/App.tsx src/main.tsx
git commit -m "refactor(router): extract route tree into dedicated module"
```

### Task 5: Add frontend diagnostics bootstrap

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/lib/commerce-api.ts` or `src/lib/httpClient.ts`
- Test: existing tests only

**Step 1: Write the failing test**

Skip new tests if diagnostics only compose already-tested primitives. Use existing tests as the verification surface.

**Step 2: Run focused verification before implementation**

Run: `npm test -- src/config/env.test.ts src/lib/httpClient.test.ts src/features/catalog/catalogApi.test.ts`
Expected: PASS

**Step 3: Write minimal implementation**

On app startup:
- optionally log API diagnostics in development
- keep behavior no-op in production unless enabled by env

**Step 4: Run verification**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add src/main.tsx src/lib/httpClient.ts src/config/env.ts
git commit -m "feat(diagnostics): add frontend API bootstrap diagnostics"
```

### Task 6: Final verification

**Files:**
- Verify only

**Step 1: Run full test suite**

Run: `npm test`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS

**Step 3: Review diff**

Run:

```bash
git status --short
git diff --stat
```

**Step 4: Final commit if needed**

```bash
git add .
git commit -m "refactor(frontend): align protonlab storefront with amiweb structure"
```


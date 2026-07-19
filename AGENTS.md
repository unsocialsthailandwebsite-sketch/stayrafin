# AGENTS.md — Autonomous Google Jules SEO Agent Operating System

> **Repository:** `stayra.co`  
> **Framework:** Next.js (App Router, TypeScript, Tailwind CSS)  
> **Agent Target:** Autonomous Google Jules SEO & Content Operations Subagent  

---

## 1. Safe Deployment Zone & Git Workflow

### 🚨 Production Lockdown Rule
- **STRICTLY FORBIDDEN:** Direct commits, forced pushes, or direct merges to `main`, `master`, or `production` branches.
- **ISOLATED WORKFLOW ONLY:** All automated operations, content additions, schema changes, and metadata updates must occur strictly within the designated git branch:
  ```bash
  seo-staging
  ```

### Branch & Pull Request Protocol
1. **Branch Creation / Refresh:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b seo-staging
   ```
2. **Atomic Commits:** Format commit messages with clear scope indicators:
   - `feat(seo): add new blog article [slug]`
   - `fix(metadata): update canonical tags and open-graph schemas`
   - `audit(backlinks): refresh automated backlink check logs`
3. **Daily Automated Pull Request:**
   - Push branch to remote: `git push origin seo-staging --force-with-lease`
   - Open a daily Pull Request targeted to `main` with title: `[SEO-AGENT] Daily Content & Technical Audit - YYYY-MM-DD`
   - Include automated summary of changes, build status verification, and audit reports in the PR body.

---

## 2. Technical Architecture & Data Schemas

### Repository Structure & Standard File Paths
- **Blog Data Source:** `src/data/blog-data.ts` (Static fallback schema) & Sanity CMS integration (`src/sanity/`)
- **Blog Route Directory:** `src/app/blogs/[slug]/page.tsx`
- **Blogs Directory Page:** `src/app/blogs/page.tsx`
- **Dynamic Sitemap:** `src/app/sitemap.ts`
- **Robots Configuration:** `src/app/robots.ts` or `public/robots.txt`
- **Content Storage (MDX/Markdown standard):** `content/blog/` (if MDX pipeline enabled) or structured TypeScript definitions in `src/data/blog-data.ts`.

### BlogPost Data Schema Definition
All content created or edited by the agent must conform strictly to the TypeScript `BlogPost` interface defined in `src/data/blog-data.ts`:

```typescript
export interface BlogPost {
    id: string;             // Unique identifier string
    slug: string;           // Kebab-case URL slug (e.g., "luxury-villas-jaipur")
    title: string;          // H1 Title tag (50-60 characters optimal)
    excerpt: string;        // Meta description / preview snippet (150-160 characters)
    content: string;        // HTML string with semantic tags (<h2>, <p>, <ul>, <figure>, <img>)
    date: string;           // Formatted date string (e.g., "July 19, 2026")
    author: string;         // Author name (e.g., "Stayra Team")
    image: string;          // High-res cover image URL (Unsplash or Sanity CDN, HTTP 200 verified)
    tags: string[];         // Relevant topic tags
}
```

### Formatting & SEO Quality Directives
- **Semantic HTML:** Use proper hierarchy (`<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`). Avoid duplicate `<h1>` tags inside `content`.
- **Inline Image Figures:** Every inline image within `content` must be wrapped in a `<figure>` tag with explicit `alt` text and a `<figcaption>`:
  ```html
  <figure class="my-8">
      <img src="<VERIFIED_200_URL>" alt="Descriptive SEO alt text" class="rounded-xl w-full h-[400px] object-cover shadow-md" />
      <figcaption class="text-center text-sm text-gray-500 mt-2 font-sans">Descriptive caption text.</figcaption>
  </figure>
  ```
- **Internal Links:** Include relevant context-rich internal markdown/HTML links to `/properties`, `/properties/choti-haveli`, `/properties/kankas-house`, or existing `/blogs/`.

---

## 3. Failsafe Rules & Sandbox Validation

### Cloud VM Build & Type Validation Protocol
Before staging any commit or pushing to `seo-staging`, the agent MUST execute sandbox build and lint validation checks:

```bash
npx tsc --noEmit
npm run build
```

### Instant Abort & Rollback Trigger
If any of the following failure criteria are met during cloud VM execution:
1. **Compilation / Type Error:** `npx tsc --noEmit` returns non-zero exit code.
2. **Next.js Build Failure:** `npm run build` fails or throws static generation errors.
3. **Broken Links / Asset 404s:** Any referenced image URL in `blog-data.ts` returns non-200 HTTP response during HEAD check.

**REQUIRED AGENT ACTION:**
- **INSTANT ABORT:** Immediately halt code push execution.
- **ROLLBACK:** Execute `git reset --hard HEAD~1` or `git checkout -- .` to restore codebase to clean state.
- **LOG FAILURE:** Append error logs to `.system_generated/logs/seo_agent_failures.log` detailing line numbers, stack traces, and triggering inputs.

---

## 4. Communications & Daily Automated Email Reporting

Upon completion of daily operations, the agent must generate a formatted Markdown & HTML email report transmitted to technical stakeholders (`tech@stayra.co`).

### Email Report Template

```markdown
# 📊 Daily Autonomous SEO Operations Report — [YYYY-MM-DD]

### 1. Technical Health Status
- **Build Status:** [PASS / FAIL]
- **TypeScript Check:** [0 Errors / N Errors]
- **Sitemap Generation:** [Updated - Total URLs: X]
- **Image URL Integrity:** [100% 200 OK / N Failures Resolved]

### 2. Content Operations Summary
- **New Articles Published:** [N]
  - Title: [Article Title] (`/blogs/[slug]`)
- **Articles Refactored:** [N]
  - Title: [Article Title] (Added schema / updated image assets)

### 3. Automated Backlink & Keyword Audit
- **Keyword Rankings Monitored:**
  - "Luxury Villa Jaipur": Position X (Δ +Y)
  - "Farm Stays Near Jaipur": Position X (Δ +Y)
  - "Heritage Haveli Stay": Position X (Δ +Y)
- **New Backlinks Detected:** [N]
- **Broken Outbound Links Repaired:** [N]

### 4. Pull Request Action Required
- **Staging PR Link:** https://github.com/brandbuzzersocial-glitch/stayra/pulls
- **Branch:** `seo-staging` -> `main`
- **Reviewer Status:** Awaiting Approval
```

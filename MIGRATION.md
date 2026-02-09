# StudySpark: React to Next.js Migration Guide

## Updated Folder Structure

```
skill-up-schools/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts & providers
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles + Tailwind
│   ├── favicon.ico
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── course/
│   │   └── [courseId]/           # Dynamic route (/course/[id])
│   │       ├── page.tsx          # Server Component with metadata
│   │       └── course-page-client.tsx  # Client Component for interactivity
│   └── api/
│       └── courses/
│           └── route.ts          # API route handler
├── components/
│   ├── providers.tsx             # Client: Auth + OAuth providers
│   ├── login-modal.tsx           # Client: Google OAuth modal
│   ├── user-menu.tsx             # Client: User dropdown
│   ├── sections/                 # Page sections
│   │   ├── navbar.tsx            # Client: Navigation with scroll state
│   │   ├── hero.tsx              # Client: GSAP animations
│   │   ├── topics.tsx            # Server: Static content
│   │   ├── features.tsx          # Server: Static content
│   │   ├── courses.tsx           # Server: Course grid
│   │   ├── testimonials.tsx      # Server: Testimonials
│   │   ├── cta.tsx               # Server: Call to action
│   │   └── footer.tsx            # Server: Footer links
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── progress.tsx
│       ├── sonner.tsx
│       └── loading-spinner.tsx
├── data/
│   └── courses.ts                # Course data (accessible on server)
├── lib/
│   ├── auth-context.tsx          # Client: Auth context provider
│   └── utils.ts                  # Utility functions (cn)
├── types/
│   └── course.ts                 # TypeScript interfaces
├── hooks/
│   └── (custom hooks go here)
├── public/                       # Static assets
│   ├── hero-student.png
│   ├── course-*.png
│   ├── topic-*.png
│   └── testimonial-*.png
├── .env.example                  # Environment variables template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── postcss.config.mjs            # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Route Mapping: React Router → Next.js App Router

| React Router Path | Next.js App Router Path | Notes |
|-------------------|------------------------|-------|
| `/` | `app/page.tsx` | Home page |
| `/course/:courseId` | `app/course/[courseId]/page.tsx` | Dynamic route with params |
| `/about` | `app/about/page.tsx` | Static page |
| `/careers` | `app/careers/page.tsx` | Create as needed |
| `/press` | `app/press/page.tsx` | Create as needed |
| `/blog` | `app/blog/page.tsx` | Create as needed |
| `/blog/:slug` | `app/blog/[slug]/page.tsx` | Dynamic blog route |
| `/courses` | `app/courses/page.tsx` | All courses list |
| `/quiz` | `app/quiz/page.tsx` | Quiz hub |
| `/privacy` | `app/privacy/page.tsx` | Legal pages |
| `/terms` | `app/terms/page.tsx` | Legal pages |

## Server vs Client Components

### Server Components (Default - No `"use client"`)

Use for:
- Static content (Footer, Features, Topics, etc.)
- Data fetching (direct database access)
- SEO-critical content
- Pages without interactivity

**Example: Footer** (`components/sections/footer.tsx`)
```tsx
// No "use client" directive - this is a Server Component
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <Link href="/about">About</Link>
      {/* Static content, no state */}
    </footer>
  );
}
```

### Client Components (`"use client"`)

Use for:
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect, useContext)
- Browser APIs (localStorage, window)
- Third-party libraries requiring DOM

**Example: Navbar** (`components/sections/navbar.tsx`)
```tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Needs window - must be client
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <nav>{/* Interactive navigation */}</nav>;
}
```

## Data Fetching Patterns

### Before (React with API calls)
```tsx
// React: Fetch in useEffect
useEffect(() => {
  fetch('/api/courses')
    .then(res => res.json())
    .then(setData);
}, []);
```

### After (Next.js Server Component)
```tsx
// Next.js: Direct data access in Server Component
import { getCourseById } from "@/data/courses";

export default async function CoursePage({ params }) {
  const course = getCourseById(params.courseId);
  return <CourseView course={course} />;
}
```

### API Route Handlers (for external consumption)
```tsx
// app/api/courses/route.ts
import { NextResponse } from "next/server";
import { getAllCourses } from "@/data/courses";

export async function GET() {
  const courses = getAllCourses();
  return NextResponse.json(courses);
}
```

## SEO & Metadata

### Static Metadata
```tsx
// app/about/page.tsx
export const metadata = {
  title: "About Us",
  description: "Learn about StudySpark...",
};
```

### Dynamic Metadata
```tsx
// app/course/[courseId]/page.tsx
export async function generateMetadata({ params }) {
  const course = getCourseById(params.courseId);
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      images: [course.heroImage],
    },
  };
}
```

## Environment Variables

| Variable | Prefix | Access | Usage |
|----------|--------|--------|-------|
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | NEXT_PUBLIC_ | Client + Server | Google OAuth |
| `GOOGLE_CLIENT_SECRET` | None | Server only | OAuth backend |
| `DATABASE_URL` | None | Server only | Database connection |

## Authentication Migration

The app uses Google OAuth with `@react-oauth/google`. Migration approach:

1. **Keep client-side OAuth** for simplicity (current implementation)
2. Wrap with providers in `components/providers.tsx`
3. Auth context in `lib/auth-context.tsx`
4. For production: Consider NextAuth.js for server-side session management

## Migration Checklist

### Phase 1: Project Setup
- [x] Create Next.js project structure
- [x] Update package.json with dependencies
- [x] Configure tailwind.config.ts
- [x] Configure next.config.ts
- [x] Set up tsconfig.json paths
- [x] Create .env.example

### Phase 2: Core Infrastructure
- [x] Create app/layout.tsx with fonts
- [x] Set up providers (Auth, OAuth)
- [x] Migrate global CSS
- [x] Copy public assets

### Phase 3: Components
- [x] Create UI components (button, progress, etc.)
- [x] Migrate Navbar (Client Component)
- [x] Migrate Footer (Server Component)
- [x] Migrate section components
- [x] Create LoginModal and UserMenu

### Phase 4: Routes
- [x] Create home page (app/page.tsx)
- [x] Create dynamic course route
- [x] Create about page
- [ ] Create remaining pages (blog, quiz, legal, etc.)

### Phase 5: Data & API
- [x] Migrate course data
- [x] Create API route handlers
- [x] Set up types

### Phase 6: Testing & Optimization
- [ ] Add error boundaries
- [ ] Add loading.tsx files
- [ ] Add not-found.tsx files
- [ ] Test all routes
- [ ] Run lighthouse audit

## Commands to Verify

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Type check
pnpm type-check

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Deployment Checklist (Vercel)

1. **Environment Variables**
   - Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
   - Set `NEXT_PUBLIC_BASE_URL` to production URL

2. **Build Settings**
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`

3. **Domain Setup**
   - Configure custom domain
   - Update Google OAuth authorized origins

4. **Performance**
   - Enable Edge caching
   - Configure image optimization
   - Review Core Web Vitals

## Architectural Decisions

### Why Server Components by Default?
- Zero client-side JavaScript for static content
- Better SEO (content rendered on server)
- Direct data access without API calls
- Faster initial page load

### Why Keep Client Components for Interactivity?
- React hooks require client-side execution
- GSAP animations need DOM access
- Google OAuth requires browser APIs
- localStorage for progress persistence

### Why Use App Router over Pages Router?
- Improved layouts and nested routing
- Built-in support for Server Components
- Streaming and Suspense support
- Better data fetching patterns
- Future of Next.js development

### Why Keep Static Data Files?
- Simple migration path
- No backend required
- Easy to replace with database/CMS later
- Data accessible directly in Server Components

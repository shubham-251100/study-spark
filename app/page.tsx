import { Suspense } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Topics } from "@/components/sections/topics";
import { Features } from "@/components/sections/features";
import { Courses } from "@/components/sections/courses";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

/**
 * HOME PAGE - Server Component
 *
 * This is a Server Component by default in Next.js App Router.
 * Benefits:
 * 1. Zero JS sent to client for static parts
 * 2. Direct data access (no API calls needed for static data)
 * 3. SEO-friendly - content rendered on server
 * 4. Faster initial page load
 *
 * Child components that need interactivity (Navbar, Hero animations)
 * are marked as Client Components with "use client".
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Topics />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Courses />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

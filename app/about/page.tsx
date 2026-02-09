import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Target,
  Heart,
  Users,
  Lightbulb,
  Award,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * ABOUT PAGE - Server Component
 *
 * This is a Server Component because:
 * 1. All content is static
 * 2. No client-side interactivity needed
 * 3. Links work without JavaScript
 *
 * Benefits:
 * - Zero client-side JavaScript
 * - Better SEO
 * - Faster page load
 */

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about StudySpark's mission to empower students with essential life skills that school doesn't teach.",
  openGraph: {
    title: "About StudySpark",
    description: "Empowering students with essential life skills",
  },
};

const values = [
  {
    icon: Heart,
    title: "Student-First",
    description: "Every decision we make starts with what's best for students.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore new ways to make learning engaging and effective.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Quality education should be accessible to everyone, everywhere.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we create.",
  },
];

const stats = [
  { value: "50,000+", label: "Students Learning" },
  { value: "6", label: "Core Courses" },
  { value: "48", label: "Expert Lessons" },
  { value: "4.9", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary-purple to-primary-blue text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-white/80 font-medium">Our Story</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Students for Life
              </h1>
              <p className="text-lg text-white/90 mb-8">
                StudySpark was founded with a simple mission: to teach students
                the life skills that school doesn&apos;t cover. From managing
                money to building relationships, we&apos;re here to help you
                navigate the real world with confidence.
              </p>
              <Link href="/course/financial-literacy">
                <Button className="bg-white text-primary-purple hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold">
                  Start Learning Today
                </Button>
              </Link>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src="/about-hero.png"
                alt="StudySpark Team"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary-purple" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            To empower every student with the practical life skills they need to
            thrive—from financial literacy and emotional intelligence to career
            planning and healthy living. We believe that education should prepare
            you for life, not just exams.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-purple/5 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} StudySpark. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

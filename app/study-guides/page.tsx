import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, FileText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Study Guides",
  description:
    "Free downloadable study guides and cheat sheets on life skills, financial literacy, emotional intelligence, and more.",
  openGraph: {
    title: "Study Guides | StudySpark",
    description: "Free downloadable study guides",
  },
};

const guides = [
  {
    title: "The Ultimate Budgeting Cheat Sheet",
    category: "Financial Literacy",
    description:
      "A one-page guide to the 50/30/20 rule, tracking expenses, and building your first budget.",
    pages: "2 pages",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Emotional Intelligence Quick Reference",
    category: "Emotional Intelligence",
    description:
      "Key EQ concepts, emotion identification tips, and self-regulation strategies at a glance.",
    pages: "3 pages",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "Resume & Cover Letter Templates",
    category: "Career Planning",
    description:
      "Professional templates and examples to help you create your first resume and cover letter.",
    pages: "5 pages",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Healthy Communication Handbook",
    category: "Relationships",
    description:
      "Scripts and frameworks for difficult conversations, active listening, and assertive communication.",
    pages: "4 pages",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Stress Management Toolkit",
    category: "Health & Wellness",
    description:
      "Breathing exercises, mindfulness techniques, and daily wellness routines for students.",
    pages: "3 pages",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Exam Prep Strategy Guide",
    category: "Study Skills",
    description:
      "Proven study techniques, time management tips, and a week-before-exam checklist.",
    pages: "4 pages",
    gradient: "from-yellow-500 to-amber-600",
  },
];

export default function StudyGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-white/80 font-medium">Free Resources</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Study Guides
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Downloadable guides, cheat sheets, and templates to help you master
            essential life skills. All free, all yours.
          </p>
        </div>
      </div>

      {/* Guides */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-r ${guide.gradient} p-6 flex items-center justify-center`}>
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary-purple">
                    {guide.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-gray-900 mt-1">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {guide.description}
                  </p>
                  <p className="text-sm text-gray-400 mt-3">{guide.pages}</p>
                  <Button className="mt-4 bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-6 py-3 font-bold w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Want More In-Depth Learning?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our full courses go much deeper with interactive lessons, quizzes,
            and hands-on activities.
          </p>
          <Link href="/courses">
            <Button className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-8 py-6 text-lg font-bold">
              Browse All Courses <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Press",
  description:
    "StudySpark press resources, media kit, and latest news coverage. Get in touch with our communications team.",
  openGraph: {
    title: "StudySpark Press",
    description: "Press resources and media coverage",
  },
};

const pressItems = [
  {
    source: "EdTech Magazine",
    title: "StudySpark Is Closing the Life Skills Gap in Education",
    date: "January 2026",
    excerpt:
      "A deep dive into how StudySpark is making financial literacy and emotional intelligence accessible to students worldwide.",
  },
  {
    source: "Forbes Education",
    title: "10 EdTech Startups Reshaping How Students Learn",
    date: "December 2025",
    excerpt:
      "StudySpark named among the top platforms teaching skills that traditional schools overlook.",
  },
  {
    source: "The Guardian",
    title: "Why Schools Need to Teach Life Skills, Not Just Academics",
    date: "November 2025",
    excerpt:
      "Featuring an interview with StudySpark founders on the importance of practical education.",
  },
];

export default function PressPage() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-white/80 font-medium">Press Room</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                StudySpark in the News
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Read the latest coverage about StudySpark and our mission to
                transform education. For press inquiries, reach out to our
                communications team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primary-purple hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold">
                  <Download className="w-5 h-5 mr-2" />
                  Media Kit
                </Button>
                <Button className="bg-white/10 border-2 border-white text-white hover:bg-white/20 rounded-xl px-8 py-6 text-lg font-bold">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src="/press-hero.png"
                alt="StudySpark Press"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Press Coverage */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Recent Coverage
          </h2>
          <div className="space-y-6">
            {pressItems.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-primary-purple/5 transition-colors"
              >
                <span className="text-sm font-medium text-primary-purple">
                  {item.source}
                </span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.excerpt}</p>
                <p className="text-sm text-gray-400 mt-3">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Press Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            For media inquiries, interviews, or additional information, please
            contact our communications team.
          </p>
          <p className="text-primary-purple font-bold text-lg">
            press@studyspark.com
          </p>
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

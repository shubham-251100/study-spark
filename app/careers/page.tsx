import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the StudySpark team and help us empower students with essential life skills. View open positions.",
  openGraph: {
    title: "Careers at StudySpark",
    description: "Join us in transforming education",
  },
};

const openings = [
  {
    title: "Senior Content Designer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description:
      "Design engaging, interactive educational content that helps students master real-world life skills.",
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and improve our learning platform using Next.js, React, and modern web technologies.",
  },
  {
    title: "Education Outreach Manager",
    department: "Partnerships",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Build relationships with schools and educators to bring StudySpark to more students.",
  },
  {
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Part-time",
    description:
      "Conduct user research with students and educators to improve the learning experience.",
  },
];

const perks = [
  "Flexible remote work",
  "Unlimited PTO",
  "Learning stipend",
  "Health & wellness benefits",
  "Equity for all employees",
  "Annual team retreats",
];

export default function CareersPage() {
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
                <span className="text-white/80 font-medium">Join Our Team</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Build the Future of Education
              </h1>
              <p className="text-lg text-white/90 mb-8">
                We&apos;re on a mission to teach students the life skills that
                school doesn&apos;t cover. Join a passionate team making a real
                difference in students&apos; lives.
              </p>
              <a href="#openings">
                <Button className="bg-white text-primary-purple hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold">
                  View Open Positions
                </Button>
              </a>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src="/careers-hero.png"
                alt="StudySpark Careers"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Work at StudySpark?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-purple/5 transition-colors"
              >
                <p className="font-display font-bold text-lg text-gray-900">
                  {perk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="openings" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{job.description}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-6 py-3 font-bold shrink-0">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
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

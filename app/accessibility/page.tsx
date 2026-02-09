import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Eye, Keyboard, Monitor, Ear } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "StudySpark's commitment to accessibility. Learn about our efforts to make education accessible to all students.",
  openGraph: {
    title: "Accessibility | StudySpark",
    description: "Our commitment to accessible education",
  },
};

const features = [
  {
    icon: Eye,
    title: "Visual Accessibility",
    items: [
      "High contrast color schemes",
      "Scalable text and UI elements",
      "Alt text for all images and media",
      "Clear visual hierarchy and spacing",
    ],
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    items: [
      "Full keyboard navigation support",
      "Visible focus indicators",
      "Skip navigation links",
      "Logical tab order throughout",
    ],
  },
  {
    icon: Monitor,
    title: "Screen Reader Support",
    items: [
      "ARIA labels and landmarks",
      "Semantic HTML structure",
      "Descriptive link text",
      "Form field labels and instructions",
    ],
  },
  {
    icon: Ear,
    title: "Audio & Media",
    items: [
      "Captions for video content",
      "Transcripts for audio lessons",
      "No auto-playing media",
      "Adjustable playback speed",
    ],
  },
];

export default function AccessibilityPage() {
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

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Accessibility
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            At StudySpark, we believe that quality education should be accessible
            to everyone. We are committed to ensuring our platform meets WCAG 2.1
            AA standards and continuously improving the experience for all
            learners, including those with disabilities.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Accessibility Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-purple rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Standards
              </h2>
              <p className="text-gray-600 leading-relaxed">
                StudySpark strives to conform to the Web Content Accessibility
                Guidelines (WCAG) 2.1 at the AA level. We regularly test our
                platform with assistive technologies and conduct accessibility
                audits to identify and address barriers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Continuous Improvement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Accessibility is an ongoing effort. We actively work to improve
                our platform and welcome feedback from users about their
                experience. Our development team receives regular accessibility
                training and follows inclusive design principles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Report an Issue
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you encounter any accessibility barriers while using
                StudySpark, please let us know. We take every report seriously
                and work to resolve issues quickly. Contact our accessibility
                team at{" "}
                <span className="text-primary-purple font-medium">
                  accessibility@studyspark.com
                </span>
                .
              </p>
            </section>
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

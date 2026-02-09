import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "StudySpark Privacy Policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | StudySpark",
    description: "How we handle your data",
  },
};

export default function PrivacyPage() {
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
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 1, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly, such as your name,
                email address, and account details when you register for
                StudySpark. We also collect usage data including course progress,
                quiz results, and learning preferences to personalize your
                experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use your information to provide and improve our educational
                services, personalize your learning experience, communicate with
                you about your account and courses, and ensure the security of
                our platform. We never sell your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                3. Data Protection
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information. All data is encrypted in transit and at
                rest. We regularly audit our security practices and comply with
                applicable data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                4. Cookies & Tracking
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use essential cookies to keep you logged in and remember your
                preferences. Analytics cookies help us understand how students
                use our platform so we can improve the learning experience. You
                can manage your cookie preferences at any time through our{" "}
                <Link
                  href="/cookies"
                  className="text-primary-purple hover:underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, correct, or delete your personal
                information at any time. You can export your learning data,
                update your preferences, or request account deletion through your
                account settings or by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                6. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                StudySpark is designed for students of all ages. For users under
                13, we comply with COPPA regulations and require parental
                consent. We take extra care to protect the privacy of younger
                learners and limit data collection to what is necessary for the
                educational service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy or how we handle
                your data, please contact us at{" "}
                <span className="text-primary-purple font-medium">
                  privacy@studyspark.com
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

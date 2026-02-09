import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "StudySpark Terms of Service. Read the terms and conditions for using our educational platform.",
  openGraph: {
    title: "Terms of Service | StudySpark",
    description: "Terms and conditions for StudySpark",
  },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 1, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using StudySpark, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do
                not use our platform. These terms apply to all users, including
                students, educators, and visitors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                2. Use of Service
              </h2>
              <p className="text-gray-600 leading-relaxed">
                StudySpark provides educational content and tools designed to
                teach essential life skills. You may use our service for personal,
                non-commercial educational purposes. You agree not to misuse the
                platform, share account credentials, or attempt to access content
                or features without proper authorization.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To access certain features, you may need to create an account.
                You are responsible for maintaining the security of your account
                and all activity that occurs under it. You must provide accurate
                information and keep it up to date. Users under 13 require
                parental consent to create an account.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on StudySpark, including courses, lessons, quizzes,
                study guides, graphics, and the underlying technology, is owned
                by StudySpark or our content partners and protected by copyright
                and intellectual property laws. You may not copy, distribute, or
                create derivative works from our content without written
                permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                5. Subscriptions & Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Some features require a paid subscription. Subscription fees are
                billed on a recurring basis. You may cancel your subscription at
                any time through your account settings. Refunds are handled on a
                case-by-case basis and subject to our refund policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                StudySpark provides educational content for informational
                purposes. We do not guarantee specific outcomes from using our
                courses. Our content should not replace professional financial,
                medical, or psychological advice. StudySpark is not liable for
                decisions made based on our educational content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms of Service from time to time. We will
                notify you of significant changes via email or through the
                platform. Continued use after changes constitutes acceptance of
                the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                8. Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms, contact us at{" "}
                <span className="text-primary-purple font-medium">
                  legal@studyspark.com
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

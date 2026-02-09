import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "StudySpark Cookie Policy. Learn about the cookies we use and how to manage your preferences.",
  openGraph: {
    title: "Cookie Policy | StudySpark",
    description: "How we use cookies",
  },
};

const cookieTypes = [
  {
    name: "Essential Cookies",
    description:
      "Required for the platform to function. These keep you logged in, remember your course progress, and ensure security. They cannot be disabled.",
    examples: "Session tokens, CSRF protection, language preferences",
  },
  {
    name: "Analytics Cookies",
    description:
      "Help us understand how students use the platform so we can improve the learning experience. All data is aggregated and anonymized.",
    examples: "Page views, feature usage, navigation patterns",
  },
  {
    name: "Preference Cookies",
    description:
      "Remember your settings and preferences to provide a more personalized experience across sessions.",
    examples: "Theme preferences, notification settings, display options",
  },
  {
    name: "Performance Cookies",
    description:
      "Help us monitor and improve platform performance, including page load times and error tracking.",
    examples: "Load time monitoring, error reports, resource optimization",
  },
];

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 1, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files stored on your device when you visit
                a website. They help websites remember your preferences, keep you
                logged in, and understand how you use the site. StudySpark uses
                cookies to provide you with the best possible learning
                experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Cookies We Use
              </h2>
              <div className="space-y-6">
                {cookieTypes.map((cookie, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-gray-100"
                  >
                    <h3 className="font-display font-bold text-lg text-gray-900">
                      {cookie.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{cookie.description}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      <span className="font-medium">Examples:</span>{" "}
                      {cookie.examples}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Managing Your Preferences
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You can manage your cookie preferences through your browser
                settings. Most browsers allow you to block or delete cookies.
                Please note that disabling essential cookies may affect the
                functionality of the platform, including your ability to stay
                logged in and track course progress.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may use third-party services that set their own cookies, such
                as analytics providers. These cookies are governed by the
                respective third party&apos;s privacy policy. We carefully vet
                all third-party services to ensure they meet our privacy
                standards.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about our cookie practices, contact us at{" "}
                <span className="text-primary-purple font-medium">
                  privacy@studyspark.com
                </span>
                . For more on how we handle your data, see our{" "}
                <Link
                  href="/privacy"
                  className="text-primary-purple hover:underline"
                >
                  Privacy Policy
                </Link>
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

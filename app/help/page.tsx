import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Search,
  BookOpen,
  CreditCard,
  Settings,
  Users,
  MessageCircle,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Get help with StudySpark. Find answers to common questions about courses, accounts, billing, and more.",
  openGraph: {
    title: "Help Center | StudySpark",
    description: "Find answers and get support",
  },
};

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn how to navigate courses and start learning.",
    articles: 8,
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Manage your subscription, payments, and invoices.",
    articles: 6,
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Update your profile, password, and preferences.",
    articles: 5,
  },
  {
    icon: Users,
    title: "For Educators",
    description: "Resources for teachers and schools using StudySpark.",
    articles: 7,
  },
];

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Browse our course catalog, select a course, and click 'Start Learning'. You can begin with free preview lessons before enrolling in the full course.",
  },
  {
    question: "Are StudySpark courses really free?",
    answer:
      "We offer free introductory lessons for every course. Full course access is available with a StudySpark membership.",
  },
  {
    question: "Can I access courses on my phone?",
    answer:
      "Yes! StudySpark is fully responsive and works on phones, tablets, and computers. Learn anywhere, anytime.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "Your progress is automatically saved as you complete lessons. Visit your dashboard to see your progress across all enrolled courses.",
  },
  {
    question: "Can schools use StudySpark for their students?",
    answer:
      "Absolutely! We offer special plans for schools and educators. Contact our partnerships team for more information.",
  },
];

export default function HelpPage() {
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
            <span className="text-white/80 font-medium">We&apos;re Here to Help</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Help Center
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Find answers to your questions or get in touch with our support team.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gray-50 hover:bg-primary-purple/5 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-primary-purple transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {cat.description}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {cat.articles} articles
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg text-gray-900 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary-purple shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 mt-2 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here for you. Reach out and we&apos;ll get back
            to you within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-8 py-6 text-lg font-bold">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl px-8 py-6 text-lg font-bold">
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </Button>
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

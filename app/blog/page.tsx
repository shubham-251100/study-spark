import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights on life skills, financial literacy, emotional intelligence, and more from the StudySpark team.",
  openGraph: {
    title: "StudySpark Blog",
    description: "Insights and tips for students",
  },
};

export default function BlogPage() {
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
                <span className="text-white/80 font-medium">Our Blog</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Insights & Tips for Students
              </h1>
              <p className="text-lg text-white/90">
                Practical advice, study tips, and life skills guides to help you
                succeed in school and beyond.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src="/blog-hero.png"
                alt="StudySpark Blog"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full">
                  <div className="relative h-48 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-medium text-primary-purple">
                      {post.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-gray-900 mt-2 group-hover:text-primary-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-primary-purple font-medium text-sm group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
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

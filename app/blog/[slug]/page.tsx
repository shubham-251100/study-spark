import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

function parseMarkdownContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: { type: string; content: string; items?: string[] }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("# ")) {
      elements.push({ type: "h1", content: line.replace("# ", "") });
    } else if (line.startsWith("### ")) {
      elements.push({ type: "h3", content: line.replace("### ", "") });
    } else if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.replace("## ", "") });
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      i--;
      elements.push({ type: "ul", content: "", items: listItems });
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\. /, ""));
        i++;
      }
      i--;
      elements.push({ type: "ol", content: "", items: listItems });
    } else if (line === "") {
      continue;
    } else {
      elements.push({ type: "p", content: line });
    }
  }

  return elements;
}

function renderInlineFormatting(text: string) {
  // Split on bold markers and render
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-gray-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const parsedContent = parseMarkdownContent(post.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-primary-purple text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Author Card */}
        <div className="flex items-center gap-4 mb-10 p-6 bg-gray-50 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-primary-purple/10 flex items-center justify-center">
            <User className="w-8 h-8 text-primary-purple" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">
                {post.author.name}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{post.author.role}</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {parsedContent.map((element, i) => {
            switch (element.type) {
              case "h1":
                return (
                  <h1
                    key={i}
                    className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-12 mb-6"
                  >
                    {element.content}
                  </h1>
                );
              case "h2":
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4"
                  >
                    {element.content}
                  </h2>
                );
              case "h3":
                return (
                  <h3
                    key={i}
                    className="font-display text-xl font-bold text-gray-900 mt-8 mb-3"
                  >
                    {element.content}
                  </h3>
                );
              case "ul":
                return (
                  <ul
                    key={i}
                    className="list-disc list-inside space-y-2 mb-6 ml-4"
                  >
                    {element.items?.map((item, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed">
                        {renderInlineFormatting(item)}
                      </li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol
                    key={i}
                    className="list-decimal list-inside space-y-2 mb-6 ml-4"
                  >
                    {element.items?.map((item, idx) => (
                      <li key={idx} className="text-gray-700 leading-relaxed">
                        {renderInlineFormatting(item)}
                      </li>
                    ))}
                  </ol>
                );
              default:
                return (
                  <p
                    key={i}
                    className="text-gray-700 leading-relaxed mb-4"
                  >
                    {renderInlineFormatting(element.content)}
                  </p>
                );
            }
          })}
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-primary-purple" />
            <span className="font-semibold text-gray-900">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-primary-purple/10 hover:text-primary-purple transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <span className="text-xs font-medium text-primary-purple uppercase tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display font-bold text-gray-900 mt-1 group-hover:text-primary-purple transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary-purple text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-purple/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Articles
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} StudySpark. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

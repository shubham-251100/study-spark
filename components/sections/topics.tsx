import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * TOPICS - Server Component
 *
 * This can be a Server Component because:
 * 1. Displays static topic data (no client-side state)
 * 2. Uses Next.js Image component (works in server components)
 * 3. Uses Next.js Link for navigation (works in server components)
 *
 * The topic data could be fetched from a database or CMS
 * directly in this server component without API calls.
 */

const topics = [
  {
    id: "financial-literacy",
    title: "Financial Literacy",
    description: "Master budgeting, saving, and smart money decisions",
    image: "/topic-finance.png",
    color: "from-green-500 to-emerald-600",
    lessons: 8,
  },
  {
    id: "emotional-intelligence",
    title: "Emotional Intelligence",
    description: "Understand and manage your emotions effectively",
    image: "/topic-emotions.png",
    color: "from-orange-500 to-amber-600",
    lessons: 6,
  },
  {
    id: "relationships",
    title: "Healthy Relationships",
    description: "Build strong connections with family and friends",
    image: "/topic-relationships.png",
    color: "from-pink-500 to-rose-600",
    lessons: 7,
  },
  {
    id: "career-planning",
    title: "Career Planning",
    description: "Discover your path and prepare for the future",
    image: "/topic-career.png",
    color: "from-purple-500 to-violet-600",
    lessons: 8,
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Take care of your body and mind",
    image: "/topic-health.png",
    color: "from-blue-500 to-cyan-600",
    lessons: 6,
  },
  {
    id: "study-skills",
    title: "Study Skills",
    description: "Learn how to learn effectively",
    image: "/topic-studyskills.png",
    color: "from-yellow-500 to-amber-600",
    lessons: 8,
  },
];

export function Topics() {
  return (
    <section id="topics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
            Life Skills Curriculum
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Topics That <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We teach the essential skills that school doesn&apos;t cover —
            preparing you for real-world success.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/course/${topic.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${topic.color} opacity-60`}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {topic.lessons} Lessons
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-purple transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex items-center text-primary-purple font-medium">
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

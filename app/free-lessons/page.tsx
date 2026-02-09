import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, Play, Clock, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Free Lessons",
  description:
    "Try StudySpark for free! Access sample lessons on financial literacy, emotional intelligence, career planning, and more.",
  openGraph: {
    title: "Free Lessons | StudySpark",
    description: "Try our best lessons for free",
  },
};

const freeLessons = [
  {
    title: "Introduction to Money Management",
    course: "Financial Literacy",
    courseId: "financial-literacy",
    duration: "15 min",
    description:
      "Learn the basics of money management and why financial literacy is the most important skill you'll ever develop.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "What is Emotional Intelligence?",
    course: "Emotional Intelligence",
    courseId: "emotional-intelligence",
    duration: "15 min",
    description:
      "Discover the five pillars of emotional intelligence and why EQ matters more than IQ for life success.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "Discovering Your Strengths",
    course: "Career Planning",
    courseId: "career-planning",
    duration: "20 min",
    description:
      "Uncover your unique strengths and learn how to leverage them for academic and career success.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Foundations of Healthy Relationships",
    course: "Relationships",
    courseId: "relationships",
    duration: "15 min",
    description:
      "Explore what makes relationships healthy and learn the communication foundations that strengthen every connection.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Foundations of Wellness",
    course: "Health & Wellness",
    courseId: "health-wellness",
    duration: "15 min",
    description:
      "Build a strong foundation for lifelong health with practical wellness strategies designed for students.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Learning How to Learn",
    course: "Study Skills",
    courseId: "study-skills",
    duration: "15 min",
    description:
      "Master the science of learning and discover techniques that will transform how you study and retain information.",
    gradient: "from-yellow-500 to-amber-600",
  },
];

export default function FreeLessonsPage() {
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
            <span className="text-white/80 font-medium">Try Before You Commit</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Free Lessons
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get a taste of every course with our free introductory lessons. No
            sign-up required—just start learning.
          </p>
        </div>
      </div>

      {/* Free Lessons */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {freeLessons.map((lesson, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-r ${lesson.gradient} p-4`}>
                  <span className="text-white/80 text-sm font-medium">
                    {lesson.course}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {lesson.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      Free Preview
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Link href={`/course/${lesson.courseId}`}>
                      <Button className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-6 py-3 font-bold">
                        <Play className="w-4 h-4 mr-2" />
                        Start Lesson
                      </Button>
                    </Link>
                    <Link
                      href={`/course/${lesson.courseId}`}
                      className="flex items-center gap-1 text-primary-purple font-medium text-sm hover:gap-2 transition-all"
                    >
                      Full course <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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

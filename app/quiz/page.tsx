import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  HelpCircle,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { getAllCourseIds, getCourseById } from "@/data/courses";

export const metadata: Metadata = {
  title: "Quizzes",
  description:
    "Test your knowledge with StudySpark quizzes on financial literacy, emotional intelligence, career planning, and more.",
  openGraph: {
    title: "Quizzes | StudySpark",
    description: "Test your knowledge across all courses",
  },
};

export default function QuizzesPage() {
  const courseIds = getAllCourseIds();
  const quizzes = courseIds
    .map((id) => {
      const course = getCourseById(id);
      if (!course || course.quizQuestions.length === 0) return null;
      return {
        id,
        title: course.courseInfo.title,
        description: course.courseInfo.description,
        questionCount: course.quizQuestions.length,
        heroImage: course.heroImage,
        gradientColor: course.gradientColor,
        level: course.courseInfo.level,
      };
    })
    .filter(Boolean) as Array<{
    id: string;
    title: string;
    description: string;
    questionCount: number;
    heroImage: string;
    gradientColor: string;
    level: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            <span className="text-white/80 font-medium">
              Test Your Knowledge
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            All Quizzes
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Challenge yourself with quizzes across every course. Score 70% or
            higher to earn your certificate.
          </p>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Card top gradient with image */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${quiz.gradientColor} flex items-center justify-center`}
                >
                  <Image
                    src={quiz.heroImage}
                    alt={quiz.title}
                    width={120}
                    height={120}
                    className="drop-shadow-lg"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                    <Trophy className="w-3 h-3" />
                    Quiz
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-primary-purple transition-colors">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {quiz.description}
                  </p>

                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-4 h-4" />
                      {quiz.questionCount} questions
                    </span>
                    <span className="inline-block text-xs font-medium px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full">
                      {quiz.level}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-primary-purple font-medium text-sm group-hover:gap-2 transition-all">
                    Start Quiz <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
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

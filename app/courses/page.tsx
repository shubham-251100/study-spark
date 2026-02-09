import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Clock, BookOpen, ArrowRight } from "lucide-react";
import { getAllCourseIds, getCourseById } from "@/data/courses";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Browse all StudySpark courses on financial literacy, emotional intelligence, career planning, relationships, health, and study skills.",
  openGraph: {
    title: "StudySpark Courses",
    description: "Browse our full course catalog",
  },
};

export default function CoursesPage() {
  const courseIds = getAllCourseIds();
  const courses = courseIds
    .map((id) => {
      const course = getCourseById(id);
      return course ? { id, ...course } : null;
    })
    .filter(Boolean) as Array<{
    id: string;
    courseInfo: { title: string; description: string; totalLessons: number; totalDuration: string; level: string };
    heroImage: string;
    gradientColor: string;
  }>;

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
            <span className="text-white/80 font-medium">Course Catalog</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            All Courses
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Explore our full range of life skills courses. Each course is
            designed to give you practical knowledge you can use right away.
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/course/${course.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`relative h-48 bg-gradient-to-br ${course.gradientColor} flex items-center justify-center`}>
                  <Image
                    src={course.heroImage}
                    alt={course.courseInfo.title}
                    width={150}
                    height={150}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-primary-purple transition-colors">
                    {course.courseInfo.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {course.courseInfo.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.courseInfo.totalLessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.courseInfo.totalDuration}
                    </span>
                  </div>
                  <span className="inline-block mt-3 text-xs font-medium px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full">
                    {course.courseInfo.level}
                  </span>
                  <div className="mt-4 flex items-center gap-1 text-primary-purple font-medium text-sm group-hover:gap-2 transition-all">
                    Start Learning <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
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

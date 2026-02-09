import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * COURSES - Server Component
 *
 * Displays featured courses with static data.
 * In a real app, this data could be fetched from a database
 * directly in this server component.
 */

const featuredCourses = [
  {
    id: "financial-literacy",
    title: "Financial Literacy for Students",
    instructor: "Sarah Mitchell",
    image: "/course-finance-hero.png",
    duration: "2h 30m",
    lessons: 8,
    level: "Beginner",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "emotional-intelligence",
    title: "Mastering Emotional Intelligence",
    instructor: "Dr. James Chen",
    image: "/course-emotions-hero.png",
    duration: "2h",
    lessons: 6,
    level: "Beginner",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "career-planning",
    title: "Career Planning & Discovery",
    instructor: "Lisa Thompson",
    image: "/course-career-hero.png",
    duration: "3h",
    lessons: 8,
    level: "All Levels",
    color: "from-purple-500 to-violet-600",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-primary-purple/10 text-primary-purple rounded-full text-sm font-medium mb-4">
              Featured Courses
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Start Your <span className="text-gradient">Journey</span>
            </h2>
          </div>
          <Link href="/courses">
            <Button
              variant="outline"
              className="mt-4 md:mt-0 rounded-xl border-2"
            >
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/course/${course.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-40`}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-purple transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  by {course.instructor}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} Lessons
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

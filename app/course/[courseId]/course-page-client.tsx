"use client";

/**
 * COURSE PAGE CLIENT - Client Component
 *
 * This is a Client Component because:
 * 1. Manages lesson progress state (useState)
 * 2. Uses localStorage for persistence
 * 3. Has GSAP animations (useEffect)
 * 4. Interactive lesson navigation
 *
 * Receives course data as props from the Server Component parent.
 */

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { gsap } from "gsap";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  ChevronRight,
  User,
  Target,
  TrendingUp,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LessonView } from "@/components/LessonView";
import type { Lesson, QuizQuestion, CourseInfo } from "@/types/course";

interface CoursePageClientProps {
  courseId: string;
  courseInfo: CourseInfo;
  lessons: Lesson[];
  quizQuestions: QuizQuestion[];
  heroImage: string;
  gradientColor: string;
}

export function CoursePageClient({
  courseId,
  courseInfo,
  lessons,
  quizQuestions,
  heroImage,
  gradientColor,
}: CoursePageClientProps) {
  const router = useRouter();
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem(`${courseId}-completedLessons`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }

    const isCompleted = localStorage.getItem(`${courseId}-completed`);
    if (isCompleted) {
      setCourseCompleted(true);
    }

    // Animate content
    gsap.fromTo(
      ".course-header",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".lesson-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, [courseId]);

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);
      localStorage.setItem(
        `${courseId}-completedLessons`,
        JSON.stringify(newCompleted)
      );
    }
    setActiveLesson(null);
  };

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return completedLessons.includes(lessonId - 1);
  };

  const handleLessonClick = (lessonId: number) => {
    if (isLessonUnlocked(lessonId)) {
      setActiveLesson(lessonId);
    }
  };

  const allLessonsCompleted = completedLessons.length === lessons.length;

  // Render lesson view when a lesson is active
  if (activeLesson !== null) {
    const lesson = lessons.find((l) => l.id === activeLesson);
    if (lesson) {
      return (
        <LessonView
          lesson={lesson}
          onComplete={() => handleLessonComplete(activeLesson)}
          onBack={() => setActiveLesson(null)}
          isLastLesson={activeLesson === lessons.length}
        />
      );
    }
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <span>Your Progress</span>
                <span className="font-bold text-primary-purple">{progress}%</span>
              </div>
              <div className="w-32 sm:w-48">
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Course Header */}
      <div
        className={`course-header bg-gradient-to-br ${gradientColor} text-white py-12 sm:py-16`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  {courseInfo.level}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {courseInfo.totalDuration}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {courseInfo.title}
              </h1>
              <p className="text-lg text-white/90 mb-6">
                {courseInfo.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">{courseInfo.instructor.name}</p>
                    <p className="text-sm text-white/70">
                      {courseInfo.instructor.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src={heroImage}
                alt={courseInfo.title}
                width={400}
                height={400}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Lessons */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary-purple" />
                Course Lessons
              </h2>

              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const isUnlocked = isLessonUnlocked(lesson.id);
                  const isCompleted = completedLessons.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      className={`lesson-card group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                        isUnlocked
                          ? "border-gray-100 hover:border-primary-purple hover:shadow-lg cursor-pointer bg-white"
                          : "border-gray-100 bg-gray-50 cursor-not-allowed"
                      }`}
                      onClick={() => handleLessonClick(lesson.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isCompleted
                              ? "bg-green-500"
                              : isUnlocked
                              ? "bg-primary-purple"
                              : "bg-gray-300"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : isUnlocked ? (
                            <Play className="w-5 h-5 text-white ml-1" />
                          ) : (
                            <Lock className="w-5 h-5 text-white" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-500">
                              Lesson {index + 1}
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {lesson.duration}
                            </span>
                          </div>
                          <h3
                            className={`font-display font-bold text-lg ${
                              isUnlocked ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {lesson.title}
                          </h3>
                        </div>

                        {isUnlocked && (
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-purple group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quiz Button */}
              {allLessonsCompleted && quizQuestions.length > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-r from-primary-purple to-primary-blue rounded-2xl text-white text-center">
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold mb-2">
                    Ready for the Final Quiz?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Test your knowledge and earn your certificate!
                  </p>
                  <Button
                    onClick={() => router.push(`/quiz/${courseId}`)}
                    className="bg-white text-primary-purple hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold"
                  >
                    Start Quiz
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-purple" />
                What You&apos;ll Learn
              </h3>
              <ul className="space-y-3">
                {courseInfo.whatYouWillLearn.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary-purple" />
                Course Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-bold text-gray-900">{lessons.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-bold text-green-600">
                    {completedLessons.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-bold text-primary-purple">{progress}%</span>
                </div>
              </div>
            </div>

            {/* Certificate Preview */}
            {courseCompleted && (
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-sm p-6 text-white text-center">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold mb-2">
                  Certificate Earned!
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Congratulations on completing the course!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

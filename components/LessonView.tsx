"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  ChevronRight,
  Lightbulb,
  Star,
  BookOpen,
  AlertCircle,
  CheckCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Lesson, LessonContent } from "@/types/course";

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
  onBack: () => void;
  isLastLesson?: boolean;
}

export function LessonView({ lesson, onComplete, onBack }: LessonViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".lesson-content-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );

    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);
      return () => content.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const renderContent = (content: LessonContent, index: number) => {
    switch (content.type) {
      case "heading":
        return (
          <h2
            key={index}
            className="lesson-content-item font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-6"
          >
            {content.content}
          </h2>
        );

      case "paragraph":
        return (
          <p
            key={index}
            className="lesson-content-item text-gray-700 text-lg leading-relaxed mb-6"
          >
            {content.content}
          </p>
        );

      case "list":
        return (
          <ul key={index} className="lesson-content-item space-y-3 mb-8">
            {content.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCheck className="w-3.5 h-3.5 text-primary-purple" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        );

      case "tip":
        return (
          <div
            key={index}
            className="lesson-content-item bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl mb-8"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <p className="text-blue-800 font-medium">{content.content}</p>
            </div>
          </div>
        );

      case "example":
        return (
          <div
            key={index}
            className="lesson-content-item bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-purple-500" />
              <h4 className="font-display font-bold text-purple-900">
                {content.title}
              </h4>
            </div>
            <p className="text-purple-800">{content.description}</p>
          </div>
        );

      case "key-point":
        return (
          <div
            key={index}
            className="lesson-content-item bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 mb-8 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h4 className="font-display font-bold text-lg">
                {content.title}
              </h4>
            </div>
            <p className="text-white/90 text-lg">{content.content}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">
                Back to Course
              </span>
            </button>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>Lesson {lesson.id}</span>
              </div>
              <div className="w-24 sm:w-32">
                <Progress value={readingProgress} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Reading Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-primary-purple to-primary-blue transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Lesson Content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span className="px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full font-medium">
                Lesson {lesson.id}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {lesson.duration}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              {lesson.title}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-10">
            {lesson.content.map((item, index) => renderContent(item, index))}
          </div>

          {/* Completion Section */}
          <div className="mt-10">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">
                Ready to Complete?
              </h3>
              <p className="text-white/80 mb-6">
                Great job learning! Mark this lesson as complete to unlock the
                next one.
              </p>
              <Button
                onClick={onComplete}
                className="bg-white text-green-600 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Complete
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="h-20" />
        </div>
      </div>
    </div>
  );
}

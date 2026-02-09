"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  ChevronRight,
  Award,
  RotateCcw,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { QuizQuestion } from "@/types/course";

interface QuizClientProps {
  courseId: string;
  courseTitle: string;
  questions: QuizQuestion[];
  gradientColor: string;
}

export function QuizClient({
  courseId,
  courseTitle,
  questions,
  gradientColor,
}: QuizClientProps) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const questionRef = useRef<HTMLDivElement>(null);

  const question = questions[currentQuestion];
  const progress = Math.round(((currentQuestion + (finished ? 1 : 0)) / questions.length) * 100);

  useEffect(() => {
    if (questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [currentQuestion, finished]);

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
      localStorage.setItem(`${courseId}-completed`, "true");
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  const passed = score >= Math.ceil(questions.length * 0.7);

  if (finished) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => router.push(`/course/${courseId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Course</span>
            </button>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            ref={questionRef}
            className={`rounded-2xl p-8 text-center ${
              passed
                ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white"
                : "bg-white shadow-sm"
            }`}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                passed ? "bg-white/20" : "bg-orange-100"
              }`}
            >
              {passed ? (
                <Award className="w-10 h-10 text-white" />
              ) : (
                <RotateCcw className="w-10 h-10 text-orange-500" />
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {passed ? "Congratulations!" : "Keep Learning!"}
            </h1>

            <p
              className={`text-lg mb-2 ${
                passed ? "text-white/90" : "text-gray-600"
              }`}
            >
              You scored
            </p>
            <p
              className={`text-5xl font-bold mb-2 ${
                passed ? "text-white" : "text-gray-900"
              }`}
            >
              {score}/{questions.length}
            </p>
            <p
              className={`text-lg mb-8 ${
                passed ? "text-white/80" : "text-gray-500"
              }`}
            >
              {passed
                ? "You passed the quiz! Great job mastering this course."
                : "You need 70% to pass. Review the lessons and try again!"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!passed && (
                <Button
                  onClick={handleRetry}
                  className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-8 py-6 text-lg font-bold"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
              )}
              <Button
                onClick={() => router.push(`/course/${courseId}`)}
                className={`rounded-xl px-8 py-6 text-lg font-bold ${
                  passed
                    ? "bg-white text-green-700 hover:bg-gray-100"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Course
              </Button>
              {passed && (
                <Button
                  onClick={() => router.push("/")}
                  className="bg-white/20 text-white hover:bg-white/30 rounded-xl px-8 py-6 text-lg font-bold"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push(`/course/${courseId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-purple transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Exit Quiz</span>
            </button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <div className="w-32 sm:w-48">
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quiz Banner */}
      <div className={`bg-gradient-to-r ${gradientColor} py-6`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-sm font-medium">Quiz</p>
          <h1 className="font-display text-xl sm:text-2xl font-bold text-white">
            {courseTitle}
          </h1>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div ref={questionRef} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;

              let borderClass = "border-gray-200 hover:border-primary-purple";
              let bgClass = "bg-white";

              if (showExplanation) {
                if (isCorrect) {
                  borderClass = "border-green-500";
                  bgClass = "bg-green-50";
                } else if (isSelected && !isCorrect) {
                  borderClass = "border-red-500";
                  bgClass = "bg-red-50";
                } else {
                  borderClass = "border-gray-100";
                }
              } else if (isSelected) {
                borderClass = "border-primary-purple";
                bgClass = "bg-primary-purple/5";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${borderClass} ${bgClass} ${
                    !showExplanation ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        showExplanation && isCorrect
                          ? "bg-green-500 text-white"
                          : showExplanation && isSelected && !isCorrect
                          ? "bg-red-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {showExplanation && isCorrect ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : showExplanation && isSelected && !isCorrect ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span
                      className={`font-medium ${
                        showExplanation && isCorrect
                          ? "text-green-700"
                          : showExplanation && isSelected && !isCorrect
                          ? "text-red-700"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm font-medium text-blue-800 mb-1">
                Explanation
              </p>
              <p className="text-blue-700">{question.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNext}
                className="bg-primary-purple hover:bg-primary-purple/90 text-white rounded-xl px-8 py-6 text-lg font-bold"
              >
                {currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "See Results"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

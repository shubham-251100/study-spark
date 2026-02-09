import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseById, getAllCourseIds } from "@/data/courses";
import { QuizClient } from "./quiz-client";

export async function generateStaticParams() {
  const courseIds = getAllCourseIds();
  return courseIds.map((courseId) => ({ courseId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    return { title: "Quiz Not Found" };
  }

  return {
    title: `Quiz - ${course.courseInfo.title}`,
    description: `Test your knowledge on ${course.courseInfo.title} with this interactive quiz.`,
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course || course.quizQuestions.length === 0) {
    notFound();
  }

  return (
    <QuizClient
      courseId={courseId}
      courseTitle={course.courseInfo.title}
      questions={course.quizQuestions}
      gradientColor={course.gradientColor}
    />
  );
}

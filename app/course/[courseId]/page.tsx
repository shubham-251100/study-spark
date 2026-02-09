import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseById, getAllCourseIds } from "@/data/courses";
import { CoursePageClient } from "./course-page-client";

/**
 * DYNAMIC COURSE PAGE - Server Component with Client Interactivity
 *
 * This page demonstrates:
 * 1. generateStaticParams for static generation (SSG)
 * 2. generateMetadata for dynamic SEO
 * 3. Server-side data fetching
 * 4. Passing data to Client Component for interactivity
 */

// Generate static params for all courses at build time (SSG)
export async function generateStaticParams() {
  const courseIds = getAllCourseIds();
  return courseIds.map((courseId) => ({
    courseId,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseId: string }>;
}): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.courseInfo.title,
    description: course.courseInfo.description,
    openGraph: {
      title: course.courseInfo.title,
      description: course.courseInfo.description,
      type: "article",
      images: [
        {
          url: course.heroImage,
          width: 1200,
          height: 630,
          alt: course.courseInfo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.courseInfo.title,
      description: course.courseInfo.description,
      images: [course.heroImage],
    },
  };
}

// Page component (Server Component)
export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  // Pass data to Client Component for interactivity
  return (
    <CoursePageClient
      courseId={courseId}
      courseInfo={course.courseInfo}
      lessons={course.lessons}
      quizQuestions={course.quizQuestions}
      heroImage={course.heroImage}
      gradientColor={course.gradientColor}
    />
  );
}

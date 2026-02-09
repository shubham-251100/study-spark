import { NextResponse } from "next/server";
import { getAllCourses, getCourseById } from "@/data/courses";

/**
 * API ROUTE HANDLER - /api/courses
 *
 * This is a Next.js Route Handler (replaces pages/api in App Router).
 * Key differences from pages/api:
 * 1. Uses Web Request/Response APIs
 * 2. Supports all HTTP methods via named exports
 * 3. Can be colocated with page routes
 * 4. Supports streaming and edge runtime
 *
 * Use cases for API routes:
 * - External API consumption (mobile apps, third-party services)
 * - Webhook handlers
 * - Form submissions
 * - Authentication endpoints
 *
 * Note: For data fetching within the app, Server Components
 * can access data directly without API routes.
 */

// GET /api/courses - List all courses
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("id");

  // If specific course requested
  if (courseId) {
    const course = getCourseById(courseId);
    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(course);
  }

  // Return all courses
  const courses = getAllCourses();

  // Add caching headers for performance
  return NextResponse.json(courses, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}

// POST /api/courses - Example for course progress update
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { courseId, lessonId, completed } = body;

    // Validate input
    if (!courseId || !lessonId) {
      return NextResponse.json(
        { error: "Missing courseId or lessonId" },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Verify user authentication
    // 2. Update database with progress
    // 3. Return updated progress

    // Mock response
    return NextResponse.json({
      success: true,
      courseId,
      lessonId,
      completed,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

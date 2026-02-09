export interface LessonContent {
  type: "heading" | "paragraph" | "list" | "tip" | "example" | "key-point" | "image";
  content?: string;
  items?: string[];
  title?: string;
  description?: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: LessonContent[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Instructor {
  name: string;
  title: string;
  bio?: string;
}

export interface CourseInfo {
  title: string;
  description: string;
  totalLessons: number;
  totalDuration: string;
  level: string;
  instructor: Instructor;
  whatYouWillLearn: string[];
}

export interface Course {
  courseInfo: CourseInfo;
  lessons: Lesson[];
  quizQuestions: QuizQuestion[];
  heroImage: string;
  gradientColor: string;
}

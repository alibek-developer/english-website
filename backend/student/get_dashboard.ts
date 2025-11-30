import { api } from "encore.dev/api";
import { getAuthData } from "~encore/auth";
import { db } from "../db";

export interface Video {
  id: number;
  courseId: number;
  title: string;
  titleUz: string;
  description: string | null;
  descriptionUz: string | null;
  videoUrl: string;
  duration: number | null;
  orderIndex: number;
}

export interface Homework {
  id: number;
  courseId: number;
  title: string;
  titleUz: string;
  description: string;
  descriptionUz: string;
  deadline: Date | null;
  submitted: boolean;
}

export interface Progress {
  completedVideos: number;
  totalVideos: number;
  completedHomework: number;
  totalHomework: number;
  percentage: number;
}

export interface DashboardData {
  videos: Video[];
  homework: Homework[];
  progress: Progress;
  enrolledCourses: Array<{ id: number; name: string; nameUz: string }>;
}

export const getDashboard = api<void, DashboardData>(
  { auth: true, expose: true, method: "GET", path: "/student/dashboard" },
  async (): Promise<DashboardData> => {
    const auth = getAuthData()!;

    const enrollmentsResult = await db.query<{ course_id: number }>`
      SELECT course_id FROM enrollments WHERE user_id = ${auth.userID} AND payment_status = 'paid'
    `;

    const enrollments = Array.isArray(enrollmentsResult) ? enrollmentsResult : [];
    const courseIds = enrollments.map((e: { course_id: number }) => e.course_id);

    if (courseIds.length === 0) {
      return {
        videos: [],
        homework: [],
        progress: { completedVideos: 0, totalVideos: 0, completedHomework: 0, totalHomework: 0, percentage: 0 },
        enrolledCourses: [],
      };
    }

    const videosResult = await db.query<Video>`
      SELECT id, course_id as "courseId", title, title_uz as "titleUz", content as description, content_uz as "descriptionUz",
             video_url as "videoUrl", duration, order_index as "orderIndex"
      FROM lessons
      WHERE course_id = ANY(${courseIds}) AND video_url IS NOT NULL
      ORDER BY order_index ASC
    `;

    const homeworkResult = await db.query<Homework>`
      SELECT h.id, h.course_id as "courseId", h.title, h.title_uz as "titleUz",
             h.description, h.description_uz as "descriptionUz", h.deadline,
             CASE WHEN hs.id IS NOT NULL THEN true ELSE false END as submitted
      FROM homework h
      LEFT JOIN homework_submissions hs ON h.id = hs.homework_id AND hs.user_id = ${auth.userID}
      WHERE h.course_id = ANY(${courseIds})
      ORDER BY h.deadline ASC NULLS LAST
    `;

    const progressData = await db.queryRow<Progress>`
      SELECT COALESCE(SUM(completed_videos), 0)::int as "completedVideos",
             COALESCE(SUM(total_videos), 0)::int as "totalVideos",
             COALESCE(SUM(completed_homework), 0)::int as "completedHomework",
             COALESCE(SUM(total_homework), 0)::int as "totalHomework"
      FROM user_progress
      WHERE user_id = ${auth.userID}
    `;

    const total = (progressData?.totalVideos || 0) + (progressData?.totalHomework || 0);
    const completed = (progressData?.completedVideos || 0) + (progressData?.completedHomework || 0);
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    const enrolledCoursesResult = await db.query<{ id: number; name: string; nameUz: string }>`
      SELECT c.id, c.title as name, c.title_uz as "nameUz"
      FROM courses c
      WHERE c.id = ANY(${courseIds})
    `;

    return {
      videos: Array.isArray(videosResult) ? videosResult : [],
      homework: Array.isArray(homeworkResult) ? homeworkResult : [],
      progress: {
        completedVideos: progressData?.completedVideos || 0,
        totalVideos: progressData?.totalVideos || 0,
        completedHomework: progressData?.completedHomework || 0,
        totalHomework: progressData?.totalHomework || 0,
        percentage,
      },
      enrolledCourses: Array.isArray(enrolledCoursesResult) ? enrolledCoursesResult : [],
    };
  }
);

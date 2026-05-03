import Link from "next/link";
import { notFound } from "next/navigation";
import { courseStructure } from "@/content/chapters";
import { getSession } from "@/lib/session";
import { db } from "@/lib/db";
import { MarkCompleteButton } from "./mark-complete-button";

type Props = {
  params: Promise<{ chapterId: string; lessonId: string }>;
};

export default async function LessonPage({ params }: Props) {
  const { chapterId, lessonId } = await params;

  // Find chapter and lesson
  const chapterIndex = courseStructure.findIndex((c) => c.id === chapterId);
  const chapter = courseStructure[chapterIndex];
  if (!chapter) notFound();

  const lessonIndex = chapter.lessons.findIndex((l) => l.id === lessonId);
  const lesson = chapter.lessons[lessonIndex];
  if (!lesson) notFound();

  // Load lesson content
  let lessonContent = "";
  try {
    const mod = await import(
      `@/content/lessons/${chapterId.slice(0, 2)}-${lessonId.slice(0, 2)}`
    );
    lessonContent = mod.content;
  } catch {
    lessonContent = "<p>Lesson content is being prepared. Check back soon!</p>";
  }

  // Check progress
  const session = await getSession();
  const existing = await db.lessonProgress.findUnique({
    where: {
      userId_chapterId_lessonId: {
        userId: session!.userId,
        chapterId,
        lessonId,
      },
    },
  });
  const isCompleted = !!existing;

  // Navigation
  const allLessons: { chapterId: string; lessonId: string; title: string }[] =
    [];
  for (const ch of courseStructure) {
    for (const l of ch.lessons) {
      allLessons.push({ chapterId: ch.id, lessonId: l.id, title: l.title });
    }
  }
  const currentIndex = allLessons.findIndex(
    (l) => l.chapterId === chapterId && l.lessonId === lessonId
  );
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/course"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            &larr; Back to Course
          </Link>
          <span className="text-sm text-gray-500">
            Chapter {chapterIndex + 1}, Lesson {lessonIndex + 1}
          </span>
        </div>
      </nav>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div
          className="prose prose-indigo max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: lessonContent }}
        />

        {/* Mark as Complete */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <MarkCompleteButton
            chapterId={chapterId}
            lessonId={lessonId}
            initialCompleted={isCompleted}
          />
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {prevLesson ? (
            <Link
              href={`/course/${prevLesson.chapterId}/${prevLesson.lessonId}`}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              &larr; Previous
            </Link>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <Link
              href={`/course/${nextLesson.chapterId}/${nextLesson.lessonId}`}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Next &rarr;
            </Link>
          ) : (
            <Link
              href="/course"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Dashboard
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}

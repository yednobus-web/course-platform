import Link from "next/link";
import { courseStructure } from "@/content/chapters";
import { getSession } from "@/lib/session";
import { db } from "@/lib/db";
import { logout } from "@/app/actions/auth";

export default async function CourseDashboard() {
  const session = await getSession();
  const progress = await db.lessonProgress.findMany({
    where: { userId: session!.userId },
  });

  const completedSet = new Set(
    progress.map((p) => `${p.chapterId}/${p.lessonId}`)
  );

  const totalLessons = courseStructure.reduce(
    (acc, ch) => acc + ch.lessons.length,
    0
  );
  const completedCount = progress.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Navbar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-indigo-600">
            Career Accelerator
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Log out
            </button>
          </form>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* Progress Overview */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900">Your Course</h1>
          <p className="mt-1 text-sm text-gray-600">
            {completedCount} of {totalLessons} lessons completed
          </p>
          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-2 text-right text-sm font-medium text-indigo-600">
            {progressPercent}%
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-8">
          {courseStructure.map((chapter, chapterIdx) => {
            const chapterCompleted = chapter.lessons.filter((l) =>
              completedSet.has(`${chapter.id}/${l.id}`)
            ).length;

            return (
              <div
                key={chapter.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Chapter {chapterIdx + 1}: {chapter.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      {chapter.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    {chapterCompleted}/{chapter.lessons.length}
                  </span>
                </div>

                <ul className="mt-4 divide-y divide-gray-100">
                  {chapter.lessons.map((lesson) => {
                    const isCompleted = completedSet.has(
                      `${chapter.id}/${lesson.id}`
                    );
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/course/${chapter.id}/${lesson.id}`}
                          className="flex items-center justify-between py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                                isCompleted
                                  ? "bg-indigo-600 text-white"
                                  : "border border-gray-300 text-gray-400"
                              }`}
                            >
                              {isCompleted ? "✓" : ""}
                            </span>
                            <span className="text-sm text-gray-800">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">
                            {lesson.duration}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

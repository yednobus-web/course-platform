import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { chapterId, lessonId, completed } = await request.json();

  if (!chapterId || !lessonId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (completed) {
    await db.lessonProgress.upsert({
      where: {
        userId_chapterId_lessonId: {
          userId: session.userId,
          chapterId,
          lessonId,
        },
      },
      update: {},
      create: {
        userId: session.userId,
        chapterId,
        lessonId,
      },
    });
  } else {
    await db.lessonProgress.deleteMany({
      where: {
        userId: session.userId,
        chapterId,
        lessonId,
      },
    });
  }

  return NextResponse.json({ success: true });
}

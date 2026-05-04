import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export const db = {
  user: {
    findUnique: async ({ where }: { where: { email?: string; id?: string } }) => {
      const query = supabase.from("User").select("*");
      if (where.email) query.eq("email", where.email);
      if (where.id) query.eq("id", where.id);
      const { data } = await query.single();
      return data;
    },
    create: async ({ data }: { data: { name: string; email: string; passwordHash: string } }) => {
      const id = generateId();
      const now = new Date().toISOString();
      const { data: user, error } = await supabase
        .from("User")
        .insert({ id, ...data, hasPaid: true, createdAt: now, updatedAt: now })
        .select()
        .single();
      if (error) throw error;
      return user;
    },
  },
  lessonProgress: {
    findMany: async ({ where }: { where: { userId: string } }) => {
      const { data } = await supabase
        .from("LessonProgress")
        .select("*")
        .eq("userId", where.userId);
      return data || [];
    },
    findUnique: async ({ where }: { where: { userId_chapterId_lessonId: { userId: string; chapterId: string; lessonId: string } } }) => {
      const { userId, chapterId, lessonId } = where.userId_chapterId_lessonId;
      const { data } = await supabase
        .from("LessonProgress")
        .select("*")
        .eq("userId", userId)
        .eq("chapterId", chapterId)
        .eq("lessonId", lessonId)
        .single();
      return data;
    },
    upsert: async ({ where, create }: { where: { userId_chapterId_lessonId: { userId: string; chapterId: string; lessonId: string } }; update: unknown; create: { userId: string; chapterId: string; lessonId: string } }) => {
      const { userId, chapterId, lessonId } = where.userId_chapterId_lessonId;
      const { data: existing } = await supabase
        .from("LessonProgress")
        .select("id")
        .eq("userId", userId)
        .eq("chapterId", chapterId)
        .eq("lessonId", lessonId)
        .single();
      if (!existing) {
        await supabase.from("LessonProgress").insert({
          id: generateId(),
          ...create,
          completedAt: new Date().toISOString(),
        });
      }
    },
    deleteMany: async ({ where }: { where: { userId: string; chapterId: string; lessonId: string } }) => {
      await supabase
        .from("LessonProgress")
        .delete()
        .eq("userId", where.userId)
        .eq("chapterId", where.chapterId)
        .eq("lessonId", where.lessonId);
    },
  },
};

function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

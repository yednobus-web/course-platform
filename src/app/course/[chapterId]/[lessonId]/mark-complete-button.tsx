"use client";

import { useState } from "react";

export function MarkCompleteButton({
  chapterId,
  lessonId,
  initialCompleted,
}: {
  chapterId: string;
  lessonId: string;
  initialCompleted: boolean;
}) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);

  async function toggleComplete() {
    setLoading(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterId, lessonId, completed: !completed }),
      });
      if (res.ok) {
        setCompleted(!completed);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggleComplete}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
        completed
          ? "bg-green-100 text-green-800 hover:bg-green-200"
          : "bg-indigo-600 text-white hover:bg-indigo-500"
      } disabled:opacity-50`}
    >
      {loading
        ? "Saving..."
        : completed
        ? "✓ Completed"
        : "Mark as Complete"}
    </button>
  );
}

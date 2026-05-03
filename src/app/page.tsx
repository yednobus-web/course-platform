import Link from "next/link";
import { courseStructure, totalLessons } from "@/content/chapters";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-indigo-600">
            Career Accelerator
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Get Access
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accelerate Your Corporate Career
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A practical, no-fluff course that teaches you how to build impressive
            projects, craft a standout CV, and position yourself for your next
            promotion — all for the price of lunch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-500"
            >
              Get Access — $15
            </Link>
            <a
              href="#curriculum"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              View Curriculum &darr;
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {totalLessons} lessons &middot; Lifetime access &middot; Instant
            start
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What You&apos;ll Learn
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Build Projects That Matter"
              description="Learn to choose, scope, and ship projects that actually move the needle on your career — not just another todo app."
              icon="🏗️"
            />
            <FeatureCard
              title="Showcase Your CV"
              description="Transform your resume from a boring list of responsibilities into a compelling story that gets callbacks."
              icon="📄"
            />
            <FeatureCard
              title="Get Promoted Faster"
              description="Master the unwritten rules of corporate advancement, from visibility to stakeholder management."
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Course Curriculum
          </h2>
          <p className="mt-4 text-center text-gray-600">
            {courseStructure.length} chapters &middot; {totalLessons} actionable
            lessons
          </p>
          <div className="mt-12 space-y-6">
            {courseStructure.map((chapter, idx) => (
              <div
                key={chapter.id}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Chapter {idx + 1}: {chapter.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {chapter.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {chapter.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-700">{lesson.title}</span>
                      <span className="text-gray-400">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            One Price. Lifetime Access.
          </h2>
          <div className="mt-8 rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-lg">
            <p className="text-5xl font-bold text-gray-900">$15</p>
            <p className="mt-2 text-gray-600">One-time payment</p>
            <ul className="mt-6 space-y-3 text-left text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                All {totalLessons} lessons across 3 chapters
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                Lifetime access — learn at your own pace
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                Actionable frameworks you can use today
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">✓</span>
                Future updates included free
              </li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 block w-full rounded-lg bg-indigo-600 px-4 py-3 text-base font-semibold text-white hover:bg-indigo-500"
            >
              Get Access Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white">
            Ready to accelerate your career?
          </h2>
          <p className="mt-4 text-indigo-100">
            Join professionals from companies like Google, Microsoft, and Amazon
            who are taking their careers to the next level.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Start Learning — $15
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          <p>&copy; 2026 Corporate Career Accelerator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 p-6 text-center">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export type Lesson = {
  id: string;
  title: string;
  duration: string;
};

export type Chapter = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const courseStructure: Chapter[] = [
  {
    id: "01-building-projects",
    title: "How to Build a Project That Gets You Noticed",
    description:
      "Learn to choose, plan, and ship projects that make your corporate career stand out.",
    lessons: [
      {
        id: "01-why-projects-matter",
        title: "Why Side Projects Matter in Corporate",
        duration: "6 min",
      },
      {
        id: "02-choosing-the-right-project",
        title: "Choosing the Right Project",
        duration: "8 min",
      },
      {
        id: "03-planning-and-scoping",
        title: "Planning and Scoping Effectively",
        duration: "7 min",
      },
      {
        id: "04-building-in-public",
        title: "Building in Public",
        duration: "6 min",
      },
      {
        id: "05-documenting-your-work",
        title: "Documenting Your Work",
        duration: "7 min",
      },
    ],
  },
  {
    id: "02-showcasing-your-cv",
    title: "How to Showcase Your CV",
    description:
      "Transform your resume from a list of duties into a compelling career narrative.",
    lessons: [
      {
        id: "01-modern-cv-principles",
        title: "Modern CV Principles for Corporates",
        duration: "7 min",
      },
      {
        id: "02-highlighting-impact",
        title: "Highlighting Impact Over Activity",
        duration: "8 min",
      },
      {
        id: "03-portfolio-website",
        title: "Building a Portfolio Website",
        duration: "6 min",
      },
      {
        id: "04-linkedin-optimization",
        title: "LinkedIn Optimization",
        duration: "7 min",
      },
      {
        id: "05-tailoring-applications",
        title: "Tailoring Applications Strategically",
        duration: "6 min",
      },
    ],
  },
  {
    id: "03-getting-promoted",
    title: "How to Get Promoted",
    description:
      "Master the unwritten rules of corporate advancement and position yourself for your next level.",
    lessons: [
      {
        id: "01-understanding-promotion-criteria",
        title: "Understanding Promotion Criteria",
        duration: "8 min",
      },
      {
        id: "02-visibility-and-advocacy",
        title: "Visibility and Self-Advocacy",
        duration: "7 min",
      },
      {
        id: "03-stakeholder-management",
        title: "Stakeholder Management",
        duration: "7 min",
      },
      {
        id: "04-leading-without-authority",
        title: "Leading Without Authority",
        duration: "8 min",
      },
      {
        id: "05-the-promotion-conversation",
        title: "The Promotion Conversation",
        duration: "6 min",
      },
    ],
  },
];

export const totalLessons = courseStructure.reduce(
  (acc, ch) => acc + ch.lessons.length,
  0
);

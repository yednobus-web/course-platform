export const metadata = {
  title: "Documenting Your Work",
  duration: "9 min",
};

export const content = `
<h1>Documenting Your Work</h1>

<p>You have built something valuable. You have shared it publicly. Now comes the step that separates professionals who get promoted from those who get overlooked: <strong>documentation</strong>. Not just technical documentation (though that matters), but a comprehensive record of what you built, why you built it, what decisions you made, and what impact it had.</p>

<p>This documentation serves two audiences: other people who might use or maintain your project, and future-you who needs to articulate your impact during performance reviews, promotion packets, and interviews.</p>

<h2>README Quality: Your Project's Front Door</h2>

<p>Your README is the first thing anyone sees when they encounter your project. In a corporate context, this includes your manager, skip-level, peers evaluating your work, and future team members who inherit the tool. A great README answers five questions immediately:</p>

<ul>
<li><strong>What does this do?</strong> One to two sentences. No jargon. A non-technical stakeholder should understand the value.</li>
<li><strong>Why does it exist?</strong> What problem did it solve? What was the pain before this existed?</li>
<li><strong>How do I use it?</strong> Step-by-step setup instructions, assuming the reader knows nothing about your environment.</li>
<li><strong>What does it look like?</strong> Screenshots, GIFs, or a link to a live demo. Visual evidence is ten times more compelling than text descriptions.</li>
<li><strong>Who made it?</strong> Your name, your team, how to reach you. Make it easy for people to give you credit.</li>
</ul>

<p>Spend a full hour on your README. It is not an afterthought — it is the primary artifact that people will use to evaluate your project's quality and your professionalism. A sloppy README undermines even excellent code.</p>

<h2>Architecture Decision Records (ADRs)</h2>

<p>An ADR is a short document that captures a significant decision you made during the project, the context that led to it, the alternatives you considered, and why you chose what you chose. This is incredibly powerful for demonstrating senior-level thinking.</p>

<p>Format for each ADR:</p>

<ul>
<li><strong>Title:</strong> A short descriptive name (e.g., "Use PostgreSQL instead of MongoDB for event storage")</li>
<li><strong>Context:</strong> What situation or constraint prompted this decision?</li>
<li><strong>Options considered:</strong> What alternatives did you evaluate? (List 2-3)</li>
<li><strong>Decision:</strong> What did you choose and why?</li>
<li><strong>Consequences:</strong> What trade-offs did you accept? What would you do differently?</li>
</ul>

<p>You do not need many of these — three to five per project is sufficient. But they demonstrate that you think systematically about trade-offs, which is exactly what interviewers and promotion committees look for at senior levels. When someone asks "Tell me about a technical decision you made," you can pull directly from your ADRs.</p>

<h2>Measuring and Stating Impact</h2>

<p>Impact without measurement is just a story. Impact with numbers is evidence. Before you consider your project "done," measure its effect and document it clearly. Here are frameworks for different types of impact:</p>

<p><strong>Time savings:</strong> "Before this tool, [process] took [X hours/week] across [N people]. After adoption, it takes [Y minutes]. Annual time savings: [calculated hours]."</p>

<p><strong>Error reduction:</strong> "Manual process had an error rate of approximately [X%]. Automated process has reduced errors to [Y%] over [time period]."</p>

<p><strong>Adoption:</strong> "[N] people/teams actively using the tool as of [date]. [Growth rate] over [time period]."</p>

<p><strong>Cost savings:</strong> "Eliminated need for [external tool/manual process] that cost [$X/year]."</p>

<p>If you cannot measure impact quantitatively, use qualitative evidence: quotes from users, before/after comparisons, or testimonials from teammates. Something is always better than nothing.</p>

<p>Document these numbers in your README, in a dedicated "Impact" section. Update it quarterly as adoption grows. These numbers will go directly into your promotion packet.</p>

<h2>Creating a Brag Document</h2>

<p>A brag document (a term popularized by Julia Evans) is a running record of your accomplishments, updated throughout the year. Your side project is a major entry, but the brag document should capture the full story. Here is what to include for each project:</p>

<ul>
<li><strong>The problem:</strong> What pain existed and who experienced it?</li>
<li><strong>Your initiative:</strong> How did you identify this and decide to solve it? (This demonstrates proactivity.)</li>
<li><strong>What you built:</strong> Brief technical description — enough to convey complexity without overwhelming.</li>
<li><strong>The process:</strong> How long did it take? What challenges did you overcome? Who did you collaborate with?</li>
<li><strong>The impact:</strong> Your measured outcomes from the previous section.</li>
<li><strong>The reach:</strong> How many people know about it? Did you present it anywhere? Any recognition received?</li>
<li><strong>Skills demonstrated:</strong> Map to promotion criteria. "This project demonstrated [system design / cross-team collaboration / technical leadership]."</li>
</ul>

<p>Update your brag document immediately after completing each phase of your project, while details are fresh. When performance review season arrives, you will have a comprehensive, evidence-rich narrative ready to go instead of scrambling to remember what you did six months ago.</p>

<h2>The Compound Effect of Good Documentation</h2>

<p>Well-documented projects create a flywheel effect. Good documentation leads to easier adoption, which leads to more users, which leads to more visible impact, which leads to more recognition. It also makes the project maintainable after you move on, which means your impact persists even when you are no longer actively working on it. Projects that survive their creator demonstrate true organizational value.</p>

<p>Furthermore, documentation is itself a skill that senior leaders value. The ability to communicate technical work clearly to non-technical audiences is rare and highly prized. Every README you write, every ADR you craft, and every impact statement you compose is building this muscle.</p>

<h2>Key Takeaways</h2>

<ul>
<li>Invest a full hour in your README — it is the primary artifact through which people judge your project and your professionalism.</li>
<li>Write 3-5 Architecture Decision Records to demonstrate systematic, senior-level thinking about trade-offs.</li>
<li>Measure impact quantitatively wherever possible — time saved, errors reduced, adoption numbers, cost eliminated.</li>
<li>Maintain a brag document that captures the full narrative: problem, initiative, solution, impact, and skills demonstrated.</li>
<li>Good documentation creates a flywheel: it drives adoption, which drives impact, which drives recognition.</li>
</ul>
`;

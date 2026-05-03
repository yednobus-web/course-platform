export const metadata = {
  title: "Planning and Scoping Effectively",
  duration: "9 min",
};

export const content = `
<h1>Planning and Scoping Effectively</h1>

<p>You have chosen your project. Now comes the phase where most corporate professionals fail: planning. Not because they cannot plan — you probably write project plans at work all the time — but because they treat side projects like work projects. They create elaborate Gantt charts, schedule kickoff meetings with themselves, and then abandon everything two weeks later when a production incident eats their weekend.</p>

<p><strong>Planning a side project requires a fundamentally different approach.</strong> You need to plan for inconsistency, energy fluctuations, and the reality that your day job will always come first.</p>

<h2>MVP Thinking: Ship the Smallest Useful Thing</h2>

<p>The concept of a Minimum Viable Product is well-known, but most people apply it too generously. Your MVP is not "the product with fewer features." It is <strong>the smallest thing that delivers value to at least one person</strong> (including yourself).</p>

<p>Here is a practical framework for defining your MVP:</p>

<ul>
<li>Write down every feature you imagine your project having.</li>
<li>Cross out everything that is not essential for the core use case.</li>
<li>Of what remains, cross out anything that could be done manually instead of automated.</li>
<li>What is left is your MVP. If it takes more than 2-3 weeks of part-time work, keep cutting.</li>
</ul>

<p>For example, if you are building an internal dashboard, your MVP might be a single static HTML page with hardcoded data that you update manually once a week. It is ugly, it is manual, but it proves the concept and delivers value. You can automate and polish later.</p>

<h2>Phase Your Work</h2>

<p>Break your project into distinct phases, each of which produces something usable. This is critical because you might get pulled into a high-priority work project at any time. If your side project is only valuable when 100% complete, any interruption kills it. If each phase produces a usable artifact, you can pause at any phase boundary and still have something to show.</p>

<p>A typical phasing approach:</p>

<ul>
<li><strong>Phase 1 (Week 1-2):</strong> Core functionality. The ugly but working version. No polish, no edge cases, no documentation. Just prove it works.</li>
<li><strong>Phase 2 (Week 3-4):</strong> Reliability and usability. Handle edge cases, add basic error handling, make it usable by someone who is not you.</li>
<li><strong>Phase 3 (Week 5-6):</strong> Polish and presentation. Clean up the code, write documentation, create a demo. This is where you make it presentable to leadership.</li>
<li><strong>Phase 4 (Optional):</strong> Scale and hand-off. If the project gains traction, make it maintainable by others. Add tests, CI/CD, contribution guidelines.</li>
</ul>

<p>Notice that each phase produces a complete artifact. After Phase 1, you have a working prototype. After Phase 2, you have a usable tool. You can stop at any boundary and still claim a win.</p>

<h2>Setting Realistic Timelines</h2>

<p>The biggest planning mistake is assuming consistent availability. You will not have 8 hours every week. Some weeks you will have zero. Plan for an average of <strong>4-5 hours per week</strong>, with the understanding that some weeks will be 8 hours and some will be none.</p>

<p>Practical time-finding strategies for busy corporate professionals:</p>

<ul>
<li><strong>Block one morning per week.</strong> Tuesday or Wednesday from 7-9 AM, before Slack gets noisy. Protect this time like a meeting with your VP.</li>
<li><strong>Use transition time.</strong> The 30 minutes after lunch when you are not yet in deep work mode. Perfect for small tasks like writing documentation or fixing a minor bug.</li>
<li><strong>Batch similar work.</strong> Do all your coding in one session. Do all your writing in another. Context-switching between building and documenting kills productivity.</li>
<li><strong>Accept zero-weeks gracefully.</strong> When work gets intense, do not force side project time. Just pick it back up the following week without guilt.</li>
</ul>

<h2>Balancing With Your Day Job</h2>

<p>Your side project should <strong>never</strong> come at the expense of your core responsibilities. If your manager notices your work quality dropping, any goodwill from the side project evaporates immediately. Here are rules to maintain balance:</p>

<ul>
<li>Never work on your side project during core working hours unless your manager has explicitly approved it (some companies have "innovation time" or "20% time").</li>
<li>If your day job requires overtime for a sprint or launch, pause the side project entirely. No exceptions.</li>
<li>Use your side project as energy management, not energy depletion. If coding energizes you, use it as a creative outlet. If it drains you, schedule it only when you are fresh.</li>
<li>Keep a clear boundary between side project work and day job work. Different repositories, different browser profiles, different mental contexts.</li>
</ul>

<h2>Your Planning Artifact</h2>

<p>Create a one-page document (literally one page) with the following:</p>

<ul>
<li><strong>One-sentence description:</strong> What does this project do and for whom?</li>
<li><strong>Success metric:</strong> How will you know it worked? (e.g., "3 team members using it weekly")</li>
<li><strong>MVP scope:</strong> Bullet list of exactly what Phase 1 includes (and explicitly what it does not).</li>
<li><strong>Weekly time commitment:</strong> How many hours and when.</li>
<li><strong>Target completion date:</strong> For Phase 1 only. Be conservative — add 50% buffer.</li>
</ul>

<p>This document is for you, not for anyone else. It keeps you honest about scope and prevents the gradual feature creep that kills side projects.</p>

<h2>Key Takeaways</h2>

<ul>
<li>Define your MVP as the smallest thing that delivers value, then cut it in half again.</li>
<li>Phase your work so every phase boundary produces a usable, presentable artifact.</li>
<li>Plan for 4-5 hours per week on average, and accept that some weeks will be zero.</li>
<li>Never let your side project degrade your day job performance — that undermines the entire purpose.</li>
<li>Create a one-page planning document to keep yourself accountable and scope-disciplined.</li>
</ul>
`;

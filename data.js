// ===========================
// RESOURCES DATA
// type: "tutorial" | "study" | "tool"
// ===========================
const resources = [
  {
    type: "tutorial",
    icon: "fa-code",
    title: "Python for Beginners: Crash Course",
    desc: "A hands-on intro to Python covering variables, loops, functions, and your first script — built for first-semester students.",
    meta: "12 lessons · Free",
    link: "https://docs.python.org/3/tutorial/"
  },
  {
    type: "tutorial",
    icon: "fa-laptop-code",
    title: "Building Your First REST API",
    desc: "Learn to design and build a REST API with Node.js and Express, including routing, middleware, and error handling.",
    meta: "8 lessons · Free",
    link: "https://expressjs.com/en/starter/installing.html"
  },
  {
    type: "tutorial",
    icon: "fa-git-alt",
    title: "Git & GitHub for Group Projects",
    desc: "Branching, pull requests, merge conflicts, and a workflow that keeps your team project from turning into chaos.",
    meta: "6 lessons · Free",
    link: "https://docs.github.com/en/get-started"
  },
  {
    type: "tutorial",
    icon: "fa-database",
    title: "SQL Basics: Querying Like You Mean It",
    desc: "SELECT, JOIN, GROUP BY, and subqueries explained with a sample student database you can practice on.",
    meta: "10 lessons · Free",
    link: "https://www.w3schools.com/sql/"
  },
  {
    type: "study",
    icon: "fa-sitemap",
    title: "Data Structures & Algorithms Notes",
    desc: "Condensed lecture notes covering arrays, linked lists, trees, graphs, and common Big-O complexity traps.",
    meta: "PDF · 64 pages",
    link: "#"
  },
  {
    type: "study",
    icon: "fa-microchip",
    title: "Computer Architecture Cheat Sheet",
    desc: "Quick-reference summary of CPU pipelines, cache levels, and memory hierarchy for exam revision.",
    meta: "PDF · 18 pages",
    link: "#"
  },
  {
    type: "study",
    icon: "fa-diagram-project",
    title: "Operating Systems Midterm Pack",
    desc: "Past midterm questions on process scheduling, deadlocks, and virtual memory with worked solutions.",
    meta: "PDF · Solved set",
    link: "#"
  },
  {
    type: "study",
    icon: "fa-square-root-variable",
    title: "Discrete Math Formula Reference",
    desc: "Set theory, combinatorics, graph theory, and logic identities you'll actually need on the exam.",
    meta: "PDF · 22 pages",
    link: "#"
  },
  {
    type: "tool",
    icon: "fa-terminal",
    title: "VS Code Setup for CS Students",
    desc: "Our recommended extensions, themes, and settings for a clean, fast coding environment across languages.",
    meta: "Free · All platforms",
    link: "https://code.visualstudio.com/"
  },
  {
    type: "tool",
    icon: "fa-server",
    title: "Postman for API Testing",
    desc: "Test, debug, and document your APIs without writing a single line of client code.",
    meta: "Free tier available",
    link: "https://www.postman.com/"
  },
  {
    type: "tool",
    icon: "fa-cube",
    title: "Docker Desktop",
    desc: "Containerize your projects so 'it works on my machine' stops being a punchline.",
    meta: "Free · Win/Mac/Linux",
    link: "https://www.docker.com/products/docker-desktop/"
  },
  {
    type: "tool",
    icon: "fa-bolt",
    title: "Student Developer Pack",
    desc: "Free access to dozens of paid dev tools, cloud credits, and domains while you're a student.",
    meta: "Free with student email",
    link: "https://education.github.com/pack"
  }
];

// ===========================
// BLOG DATA
// category: "news" | "student" | "industry"
// ===========================
const posts = [
  {
    category: "news",
    day: "12",
    month: "Jun",
    title: "GitHub Copilot Now Free for Verified Students",
    excerpt: "GitHub has expanded free access to Copilot for students with a verified academic email — here's how to claim it and what's included.",
    author: "CSA Editorial",
    readTime: "3 min read",
    full: "GitHub has expanded free access to Copilot for all students with a verified academic email address through the GitHub Student Developer Pack. The free tier includes code completion, chat-based assistance, and access inside VS Code, JetBrains IDEs, and the GitHub website. To claim it, students need to verify their academic status once through GitHub Education, after which the Copilot subscription activates automatically on their account. For CSA members working on coursework or personal projects, this removes one of the more common cost barriers to using AI-assisted coding tools, though instructors may still set their own policies on tool use for graded assignments — so check your course syllabus before relying on it for assessed work."
  },
  {
    category: "industry",
    day: "08",
    month: "Jun",
    title: "Entry-Level Hiring Is Shifting Toward Project Portfolios",
    excerpt: "Recruiters at this year's tech fair told us they're weighting GitHub portfolios and personal projects more heavily than GPA alone.",
    author: "Industry Desk",
    readTime: "4 min read",
    full: "Several recruiters who attended this year's campus tech fair shared a consistent message: a strong GitHub profile with a handful of well-documented personal projects is increasingly carrying as much weight as a transcript, especially for internship and entry-level roles. The advice was specific — recruiters said they look for projects with clear README files, visible commit history showing iterative work, and at least one project that goes slightly beyond a tutorial copy. Group projects from coursework count too, as long as your individual contribution is clearly described. The takeaway for members is straightforward: treat your GitHub profile as a second resume, and start curating it well before final-year placements begin."
  },
  {
    category: "student",
    day: "03",
    month: "Jun",
    title: "What I Learned Interning at a Local Startup",
    excerpt: "A second-year CSA member shares what surprised them most about their first real-world dev internship — and what they wish they'd known earlier.",
    author: "Priya Sharma, 2nd Year",
    readTime: "5 min read",
    full: "Going into my internship, I expected to spend most of my time writing new features. Instead, the majority of my first month was spent reading existing code, fixing small bugs, and writing tests — work that felt unglamorous but taught me more about real-world software than any class project had. The biggest adjustment was communication: standups, writing clear pull request descriptions, and asking specific questions instead of vague ones. I also learned that 'done' at a company means tested and reviewed, not just working on your machine. If you're considering an internship, my advice is to get comfortable with Git workflows and basic testing before you start — it will save you a lot of early confusion and let you focus on learning the actual codebase instead of the tools."
  },
  {
    category: "news",
    day: "29",
    month: "May",
    title: "Python 3.13 Adoption Notes for Coursework",
    excerpt: "A quick rundown of what's changed in recent Python releases and what to watch for if your lab environment is still on an older version.",
    author: "CSA Editorial",
    readTime: "3 min read",
    full: "If you're working across multiple machines or lab computers, you may have noticed slight differences in Python behavior depending on which version is installed. Recent releases have introduced a faster interpreter, clearer error messages that point more precisely to the source of a bug, and stricter handling of some deprecated syntax that older tutorials still use. For coursework, the practical advice is to check which version your course's grading scripts expect, and to use a virtual environment for each project so a system-wide update doesn't quietly break an assignment that was working last week. The CSA tools section has a short guide on setting up virtual environments if you haven't used them before."
  },
  {
    category: "industry",
    day: "21",
    month: "May",
    title: "Remote Internships Are Becoming More Selective",
    excerpt: "Industry mentors note that fully remote internship roles are seeing far higher applicant volume this cycle, with hybrid roles still easier to land.",
    author: "Industry Desk",
    readTime: "4 min read",
    full: "Mentors connected to CSA's industry network have observed that fully remote internship postings are drawing significantly more applicants this cycle compared to hybrid or in-office roles in the same companies. The practical effect is that remote roles often have a narrower window before they close and tend to favor candidates with a visible portfolio, since interviewers have less opportunity to assess fit informally. Hybrid and on-site roles, while requiring more logistical flexibility from students, are reportedly still easier to land and in some cases offer more structured mentorship. If location flexibility is genuinely open for you, mentors suggest applying broadly rather than concentrating only on remote-only listings."
  },
  {
    category: "student",
    day: "14",
    month: "May",
    title: "Surviving Your First Hackathon: A Survivor's Guide",
    excerpt: "Three CSA members on what they'd do differently after their first 24-hour hackathon — from team picking to what actually matters by hour 20.",
    author: "CSA Hackathon Team",
    readTime: "6 min read",
    full: "Our team's biggest mistake at our first hackathon was spending the first four hours debating the perfect idea instead of picking something achievable and starting to build. By hour 20, what mattered wasn't how original the idea was, but whether we had something that actually ran end to end and could be demoed without crashing. A few things we'd tell any first-timer: pick teammates whose skills you don't already have, decide on a feature you can cut early so you're not scrambling at the deadline, and write your demo script before you finish coding, not after. Sleep is optional but a working five-minute demo is not. We didn't win, but we walked away with a project we were proud to put on GitHub — which, it turns out, was the more useful outcome anyway."
  }
];

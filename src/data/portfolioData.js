export const personalInfo = {
  name: "Shlok Dubey",
  title: "AI/ML Engineer • Full-Stack Developer",
  tagline: "Building intelligent systems, AI-powered applications, and products that solve real-world problems.",
  about: "I am a Computer Science Engineering (AI & ML) student at IES University passionate about building production-grade intelligent systems, autonomous multi-agent workflows, and full-stack web applications. Serving as Vice President of the Student Council, I thrive at the intersection of technological innovation, rapid product execution, and collaborative team leadership.",
  email: "shlokdubey2903@gmail.com",
  location: "Bhopal, India",
  status: "Available for opportunities",
  github: "https://github.com/Shlok-29",
  githubUsername: "Shlok-29",
  githubRepo: "https://github.com/Shlok-29/Shlok-29",
  linkedin: "https://www.linkedin.com/in/shlok-dubey29",
  codingProfiles: {
    leetcode: "https://leetcode.com/u/OZhLNdh8jK/",
    hackerrank: "https://www.hackerrank.com/profile/shlokdubey2903",
    hackerearth: "https://www.hackerearth.com/@shlokdubey2903/",
  },
  terminalContent: {
    user: "shlok-dubey",
    host: "portfolio",
    command: "whoami",
    output: [
      "Role: AI/ML Engineer & Full-Stack Developer",
      "Specialization: Generative AI, Multi-Agent Systems, Web Apps",
      "Status: Building practical AI products & competing in hackathons",
      "Location: Bhopal, MP, India"
    ]
  }
};

export const radarSkills = [
  { subject: 'Python', value: 90, fullMark: 100 },
  { subject: 'Machine Learning', value: 85, fullMark: 100 },
  { subject: 'AI / GenAI', value: 88, fullMark: 100 },
  { subject: 'React', value: 82, fullMark: 100 },
  { subject: 'Node.js', value: 78, fullMark: 100 },
  { subject: 'MongoDB', value: 80, fullMark: 100 },
  { subject: 'NLP', value: 78, fullMark: 100 },
  { subject: 'Cloud', value: 70, fullMark: 100 },
];

export const categorizedSkills = [
  {
    category: "AI / ML & DATA",
    description: "Core algorithms, neural networks & generative AI agents",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "NLP", level: "Intermediate" },
      { name: "Generative AI", level: "Advanced" },
      { name: "LLMs & Prompt Eng", level: "Advanced" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "CrewAI / Agents", level: "Intermediate" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Gemini API", level: "Advanced" },
    ]
  },
  {
    category: "FULL STACK WEB",
    description: "Modern responsive web applications & API architecture",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL / MySQL", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
    ]
  },
  {
    category: "TOOLS & INFRASTRUCTURE",
    description: "Developer tooling, cloud deployment & collaboration",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Basic" },
      { name: "Postman", level: "Advanced" },
      { name: "AWS (S3/EC2)", level: "Intermediate" },
      { name: "Netlify / Render", level: "Advanced" },
      { name: "MongoDB Atlas", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    name: "ChainMind",
    tagline: "Autonomous Multi-Agent Supply Chain Orchestration",
    description: "An AI-powered multi-agent platform that leverages autonomous agents to optimize supply chain operations, automate inventory workflows, and improve real-time decision-making.",
    problemSolved: "Traditional supply chain systems struggle with delayed forecasting and manual coordination. ChainMind deploys collaborating AI agents (demand, procurement, logistics) that operate autonomously.",
    techStack: ["React", "TypeScript", "FastAPI", "CrewAI", "Streamlit", "Machine Learning"],
    github: "https://github.com/Shlok-29/Chain_Mind",
    demo: null,
    category: "AI/ML",
    highlight: "Autonomous Agent System"
  },
  {
    id: "02",
    name: "FinCash",
    tagline: "AI Financial Literacy Platform for First-Time Earners",
    description: "An AI-driven financial education and simulation platform helping young professionals learn budgeting, investment strategies, taxation, and wealth accumulation through interactive simulations.",
    problemSolved: "First-time earners often face confusion with tax regimes and investments. FinCash offers an integrated Gemini-powered AI financial mentor and real-time budget simulator.",
    techStack: ["React", "Node.js", "MongoDB", "FastAPI", "Gemini API"],
    github: "https://github.com/Shlok-29/FinCash",
    demo: null,
    category: "Full Stack",
    highlight: "AI Mentor & Budget Simulator"
  },
  {
    id: "03",
    name: "Questora",
    tagline: "Weekend-First AI Travel Marketplace",
    description: "A smart AI-curated travel marketplace designed specifically for rapid weekend getaways, automated itinerary generation, and synchronized group trip coordination.",
    problemSolved: "Eliminates trip-planning friction by automatically matching budget, destination preferences, and optimal flight/stay packages into seamless micro-itineraries.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/Shlok-29",
    demo: null,
    category: "Full Stack",
    highlight: "AI Itinerary Engine"
  },
  {
    id: "04",
    name: "Collab Study Room",
    tagline: "Real-Time Collaborative Learning Ecosystem",
    description: "A high-performance digital study room platform enhancing student focus and group productivity through AI assistance, real-time shared whiteboards, and synchronized study rooms.",
    problemSolved: "Remote student study groups lack unified tooling for real-time collaboration. StudySpace integrates WebSocket audio/canvas channels with built-in AI tutoring.",
    techStack: ["Next.js", "PostgreSQL", "Docker", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/Shlok-29/Studyspace",
    demo: null,
    category: "Full Stack",
    highlight: "WebSocket Real-Time Engine"
  },
  {
    id: "05",
    name: "SmartMeds",
    tagline: "AI Healthcare & Medicine Intelligence Platform",
    description: "An intelligent medical recommendation and safety checking engine leveraging NLP and predictive machine learning models to analyze drug safety profiles and interactions.",
    problemSolved: "Helps users understand medicine interactions, dosage warnings, and clinical summaries in plain language while flagging dangerous counter-indications.",
    techStack: ["Python", "Scikit-Learn", "React", "FastAPI", "NLP"],
    github: "https://github.com/Shlok-29",
    demo: null,
    category: "AI/ML",
    highlight: "Predictive Health Analytics"
  }
];

export const achievementsData = [
  {
    title: "Udbhav'26 — Top 10 Grand Finalist",
    category: "Hackathon / Innovation",
    organization: "National Innovation Summit",
    date: "2026",
    description: "Selected as Top 10 finalist among 300+ participating teams nationwide for building scalable AI products."
  },
  {
    title: "TIT Srijan 2026 — National Finalist",
    category: "National Hackathon",
    organization: "Technocrats Institute of Technology",
    date: "2026",
    description: "Reached national finals during a 36-hour high-intensity hackathon building autonomous software solutions."
  },
  {
    title: "Vice President — Student Council",
    category: "Leadership",
    organization: "IES University",
    date: "2024 - Present",
    description: "Elected student council leader governing student technical initiatives, event operations, and team coordination."
  },
  {
    title: "Event Head — INFORIA 2024 & 2025",
    category: "Event Leadership",
    organization: "IES Technical Symposium",
    date: "2024 - 2025",
    description: "Spearheaded planning and execution for flagship technical fest attracting 1000+ student attendees."
  },
  {
    title: "TEDx IES University Anchor",
    category: "Public Speaking",
    organization: "TEDx",
    date: "2024",
    description: "Official anchor hosting distinguished keynote speakers and leaders at TEDx IES University."
  }
];

export const experienceData = [
  {
    role: "Vice President",
    organization: "Student Council — IES University",
    period: "2024 — Present",
    type: "Leadership",
    highlights: [
      "Directing student initiatives, technical fests, and student welfare across university departments.",
      "Leading cross-functional student teams and coordinating with campus administration.",
      "Organized major national events including INFORIA 2024/2025 and TEDx conferences."
    ]
  },
  {
    role: "Junior Manager",
    organization: "AIESEC in Bhopal",
    period: "2023 — 2024",
    type: "Management",
    highlights: [
      "Managed international exchange operations and coordinated participant onboarding.",
      "Spearheaded Youth Speak Forum organizing sessions for 50+ participants.",
      "Awarded Official Letter of Excellence for operational leadership."
    ]
  }
];

export const certificationsData = [
  {
    title: "Software Engineering Simulation",
    issuer: "JPMorgan Chase & Co. (Forage)",
    year: "2024",
    badge: "Virtual Internship",
    link: "https://www.theforage.com/"
  },
  {
    title: "GenAI-Powered Data Analytics Simulation",
    issuer: "Tata Group (Forage)",
    year: "2024",
    badge: "GenAI Analytics",
    link: "https://www.theforage.com/"
  },
  {
    title: "NPTEL Certification in Cloud Computing",
    issuer: "IIT Kharagpur / NPTEL",
    year: "2024",
    badge: "National Certification",
    link: "https://nptel.ac.in/"
  },
  {
    title: "NPTEL Certification in Internet of Things (IoT)",
    issuer: "IIT Kharagpur / NPTEL",
    year: "2024",
    badge: "National Certification",
    link: "https://nptel.ac.in/"
  },
  {
    title: "Letter of Excellence",
    issuer: "AIESEC Bhopal",
    year: "2024",
    badge: "Leadership Honor",
    link: null
  }
];

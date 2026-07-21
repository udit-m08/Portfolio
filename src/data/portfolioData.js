// ============================================================
// portfolioData.js — Centralized configuration for Udit Mishra's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Udit Mishra",
  firstName: "Udit",
  brandName: "Udit Mishra",
  title: "Aspiring AI/ML Engineer",
  location: "Ahmedabad, India",
  phone: "+91-9723785830",
  emails: {
    primary: "uditm0807@gmail.com",
    secondary: "uditm0807@gmail.com",
  },
  summary:
    "BCA student and aspiring AI/ML Engineer with hands-on experience building full-stack AI tools, optimizing prompts, and implementing machine learning pipelines. Passionate about translating complex data and user instructions into highly efficient, structured systems.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/udit-m08",
  linkedin: "https://linkedin.com/in/udit-mishra-63470636a",
  instagram: "https://linkedin.com/in/udit-mishra-63470636a", // Mapped to LinkedIn
};

export const heroContent = {
  greeting: "Hi, I'm Udit Mishra",
  titleHighlight: "Aspiring AI/ML Engineer",
  subtitle:
    "I build intelligent models, data pipelines, and optimized AI prompting tools using Python and Machine Learning.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:uditm0807@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Udit,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Udit Mishra</span>, an aspiring AI/ML engineer based in Ahmedabad, India. I am dedicated to bridging the gap between raw data, artificial intelligence, and user experience, building scalable solutions with clean logic and solid design principles.`,
  techStack: ["Python", "Machine Learning", "Prompt Engineering"],
};

export const skillsContent = {
  badge: "My Workflow",
  heading: "How I build and deploy intelligent solutions",
  description:
    "I apply a structured methodology from data analysis to model evaluation to build robust and efficient AI tools.",
  cards: [
    {
      number: "01",
      title: "Analyze",
      text: "Understanding dataset properties, model constraints, and user requirements to lay a rock-solid foundation for the solution.",
    },
    {
      number: "02",
      title: "Model & Engineer",
      text: "Designing efficient data processing pipelines, building machine learning models, and structuring optimized prompt templates.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Integrating models into software applications, establishing reliable API endpoints, and crafting responsive user interfaces.",
    },
    {
      number: "04",
      title: "Evaluate",
      text: "Rigorously testing model metrics, prompt output quality, and token efficiency to optimize overall application performance.",
    },
  ],
  endText: "Ready to innovate!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Prompt Engineering", level: 92 },
        { name: "Data Analytics", level: 88 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "TensorFlow", level: 60 },
        { name: "Scikit-learn", level: 70 },
        { name: "React", level: 65 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "Technical Writing",
  heading: "Documentation & Technical Sharing",
  description: "I document my learning journey, write structured documentation for projects, and share insights on AI development.",
  categories: [
    {
      title: "Technical Documentation",
      description: "Detailed architecture guides and step-by-step documentation for AI tools like Prompt Forge and Vortex Alpha.",
      stats: "Active Docs",
      icon: "📝"
    },
    {
      title: "AI Learning Logs",
      description: "Documenting machine learning experiments, hyperparameter tuning, and model implementation notes.",
      stats: "Personal Logs",
      icon: "🧠"
    },
    {
      title: "Project Walkthroughs",
      description: "Crafting developer-focused walkthroughs to share deployment strategies and clean code architectures.",
      stats: "GitHub Guides",
      icon: "💻"
    },
    {
      title: "Knowledge Sharing",
      description: "Helping peers understand core computer science subjects, database designs, and Python programming.",
      stats: "Community",
      icon: "🤝"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "Academic Projects Coordinator — Kaushalya The Skill University",
    description: "Led student project teams in designing database schemas and software pipelines, ensuring timely delivery and clear coding standards.",
    role: "Project Coordinator",
    badge: "Leadership"
  },
  {
    title: "AI & Tech Peer Mentor",
    description: "Conducted study groups and guided peers through complex machine learning, Python programming, and prompt optimization concepts.",
    role: "Peer Mentor",
    badge: "Education"
  },
  {
    title: "Tech Event Coordinator — University Workshops",
    description: "Managed coordination and logistics for university technology seminars, ensuring smooth operations and speaker arrangements.",
    role: "Coordinator",
    badge: "Activities"
  }
];

// Brand New Internships Data (Mapped to Learning Experience)
export const internshipsList = [
  {
    organization: "Kaushalya The Skill University, Ahmedabad",
    role: "BCA Student Developer",
    duration: "2024 - Present",
    skills: ["Data Structures", "Database Design", "Object-Oriented Programming", "Web Technologies"],
    tech: ["Java", "MySQL", "HTML", "CSS", "Git"]
  },
  {
    organization: "Self-Directed AI & ML Learning",
    role: "ML Researcher & Learner",
    duration: "2024 - Present",
    skills: ["Model Evaluation", "Data Pipelines", "Hyperparameter Tuning", "Predictive Analytics"],
    tech: ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"]
  },
  {
    organization: "Practical AI Project Building",
    role: "AI Project Developer",
    duration: "2025",
    skills: ["Prompt Optimization", "LLM Integration", "Financial Analytics", "Clean Code Architecture"],
    tech: ["Python", "Prompt Engineering", "Git", "VS Code"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Analytical Thinking", icon: "🧠", desc: "Breaking down complex data structures and algorithmic tasks into modular, efficient code." },
  { name: "Communication", icon: "💬", desc: "Translating tech concepts into clear documentation and explaining logic articulately to team members." },
  { name: "Teamwork", icon: "🤝", desc: "Collaborating effectively on group projects and coordinating activities in academic settings." },
  { name: "Adaptability", icon: "🌟", desc: "Rapidly picking up new tools, frameworks, and packages (e.g., TensorFlow, Scikit-learn, React)." },
  { name: "Problem Solving", icon: "🧩", desc: "Debugging syntax and performance issues to optimize software and model metrics." },
  { name: "Leadership", icon: "👑", desc: "Guiding peers through collaborative tasks, leading study groups, and coordinating schedules." },
  { name: "AI-Powered Building", icon: "🤖", desc: "Leveraging AI tools and copilots to rapidly ship full-stack apps, turning ideas into working products in hours." },
  { name: "Rapid Prototyping", icon: "⚡", desc: "Going from concept to deployed prototype fast — using intuition, AI assistance, and creative momentum." }
];

export const projects = [
  {
    id: "prompt-forge",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Prompt Forge",
    description:
      "An AI prompt optimization platform that transforms simple user inputs into highly structured, platform-specific prompts for Large Language Models. Designed to cut wasted credits by reducing token usage and optimizing queries for developers and AI enthusiasts.",
    techTags: [
      "Python",
      "Prompt Engineering",
      "AI",
      "LLM",
      "API Integration"
    ],
    links: {
      github: "https://github.com/udit-m08",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "vortex-alpha",
    number: "02",
    badge: null,
    title: "Vortex Alpha",
    description:
      "An AI-powered financial intelligence platform that tracks upcoming IPOs, analyzes Grey Market Premium (GMP) trends, and processes market sentiment data. Features a rule-based scoring system to determine investment safety metrics at a glance.",
    techTags: ["Python", "Machine Learning", "Data Analytics", "AI", "Financial Intelligence"],
    links: {
      github: "https://github.com/udit-m08",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "personal-portfolio",
    number: "03",
    badge: null,
    title: "Personal Portfolio",
    description:
      "A premium cinematic and animated portfolio showcasing my projects, technical skillset, learning journey, and certifications. Designed with fluid micro-interactions and structured layouts.",
    techTags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/udit-m08",
      demo: "https://github.com/udit-m08",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Python (Basic) Skills Certification",
      issuer: "HackerRank",
      icon: "🐍",
    },
    {
      name: "SQL Skills Certification",
      issuer: "HackerRank",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://github.com/udit-m08",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Kaushalya The Skill University",
  cgpa: "Currently in 5th Semester",
  graduation: "2027",
  twelfth: "12th Grade (Higher Secondary) — IP English School",
  tenth: null,
};

export const footerContent = {
  taglines: [
    "AI & Machine Learning Engineering",
    "Prompt Engineering · Data Analytics",
    "Python · MySQL · React",
  ],
  credential: "BCA Student · Kaushalya The Skill University",
  copyright: `© ${new Date().getFullYear()} Udit Mishra | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

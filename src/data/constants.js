export const Bio = {
  name: "Bhagya Senavirathna",
  roles: ["Computer Engineering Undergraduate"],
  description:
    "Computer Engineering undergraduate at the University of Peradeniya. I enjoy building end-to-end systems that combine software + hardware — from full-stack dashboards to robotics prototypes. I’m especially interested in AI-driven education tools, automation, and reliable system design.",
  github: "https://github.com/bhagyaseela", // OR: your personal github profile link
  resume: "YOUR_RESUME_LINK_HERE",
  linkedin: "https://www.linkedin.com/in/bhagyasenavirathna/",
  twitter: "",
  insta: "",
  facebook: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: "data:image/svg+xml;base64,PHN2ZyB4bWxu..." },
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express Js", image: "data:image/png;base64,iVBORw0KGgoAAA..." },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "Flask", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "REST APIs", image: "" },
    ],
  },
  {
    title: "Robotics / Embedded",
    skills: [
      { name: "Raspberry Pi", image: "" },
      { name: "OpenCV", image: "" },
      { name: "MediaPipe", image: "" },
      { name: "Servo Control (GPIO/PWM)", image: "" },
      { name: "I2C / OLED (SSD1306)", image: "" },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Git", image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "Linux", image: "" },
      { name: "Postman", image: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" },
    ],
  },
];

export const experiences = [
  // If you don’t have internships yet, keep this empty or add club/team roles.
  {
    id: 0,
    img: "",
    role: "Project Member / Developer",
    company: "University of Peradeniya",
    date: "2024 - Present",
    desc: "Worked on multiple academic/team projects including robotics and full-stack systems. Built end-to-end modules spanning backend APIs, UI, hardware integration, and deployment workflows.",
    skills: ["Python", "React", "Node.js", "Raspberry Pi", "OpenCV", "MySQL", "Git"],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "",
    school: "University of Peradeniya",
    date: "2022 - Present",
    grade: "",
    desc: "BSc. Engineering (Computer Engineering). Coursework includes OOP, DBMS, Networks, OS, Embedded Systems, and Software Engineering.",
    degree: "BSc Engineering (Hons) - Computer Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "PEBO Desk Companion",
    date: "2025",
    description:
      "An interactive desk companion robot built on Raspberry Pi. Includes face tracking (dual-axis servos), OLED eye animations, and integrated controller logic to coordinate hardware modules for responsive interaction.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Raspberry Pi", "Python", "OpenCV", "MediaPipe", "OLED", "Servo Control"],
    category: "robotics",
    github: "https://github.com/cepdnaclk/e20-3yp-P-E-BO-Desk-Companion",
    webapp: "https://cepdnaclk.github.io/e20-3yp-P-E-BO-Desk-Companion/",
  },
  {
    id: 1,
    title: "MONA Dashboard",
    date: "2024",
    description:
      "A real-time machine monitoring dashboard. Built full backend + database design and implemented a live machine status view with real-time updates.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "REST APIs"],
    category: "web app",
    github: "https://github.com/cepdnaclk/e20-co227-MONA-Dashboard", // update if different
    webapp: "https://cepdnaclk.github.io/e20-co227-MONA-Dashboard/",
  },
  {
    id: 2,
    title: "SmartTutorX (FYP) - AI-Driven Automated Feedback & Tutoring System",
    date: "2025 - Present",
    description:
      "An AI-powered platform to automatically analyze student submissions, generate structured feedback, and support tutoring workflows. Integrates with Moodle LMS via APIs and stores submissions and evaluation data for scalable grading pipelines.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Python", "Moodle API", "AI/NLP", "MySQL", "REST APIs"],
    category: "ai system",
    github: "YOUR_FYP_REPO_LINK_HERE",
    webapp: "",
  },
];

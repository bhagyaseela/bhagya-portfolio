import UOPLogo from "../images/UOP.png";
import TCLogo from "../images/TC.png";
import PERASWM from "../images/PERASWM.jpg";
import hackers from "../images/hackers.png";
import PERASHOOT from "../images/PERASHOOT.jpg";
import image1 from "../images/awards/1.jpeg";
import image2 from "../images/awards/2.jpeg";
import image3 from "../images/awards/3.jpeg";
import image4 from "../images/awards/4.jpeg";
import image5 from "../images/awards/5.jpeg";



export const Bio = {
  name: "Bhagya Senavirathna",
  roles: ["Computer Engineering Undergraduate"],
  description:
    "Computer Engineering undergraduate focused on building practical systems across full-stack web development, and hardware-software integration. Experienced in developing real-time web applications, robotics prototypes, and embedded solutions through university and personal projects. Motivated to apply engineering skills to real-world problems",
  github: "https://github.com/bhagyaseela", // OR: your personal github profile link
  resume: "YOUR_RESUME_LINK_HERE",
  linkedin: "https://www.linkedin.com/in/bhagyasenavirathna/",
  twitter: "",
  insta: "https://www.instagram.com/bhagya_pranama",
  facebook: "https://www.facebook.com/bhagya.pranama",
};

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "SQL",
        image: "https://www.svgrepo.com/show/331760/api.svg",
      },
      {
        name: "Verilog HDL",
        image: "https://www.svgrepo.com/show/303271/chip.svg",
      },
      {
        name: "ARM Assembly",
        image: "https://www.svgrepo.com/show/303271/chip.svg",
      },
      {
        name: "MATLAB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",
      },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      {
        name: "TensorFlow",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "OpenCV",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
      {
        name: "NumPy",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      },
      {
        name: "ONNX (Lightweight Inference)",
        image: "https://onnx.ai/images/onnx-logo.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "Spring Boot",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      },
      {
        name: "WebSockets",
        image: "https://www.svgrepo.com/show/374110/websocket.svg",
      },
      {
        name: "Socket.io",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
      },
      {
        name: "AWS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      },

    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Three.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
      },
      {
        name: "React Native",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
            {
        name: "Firebase",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Hardware",
    skills: [
      {
        name: "Raspberry Pi",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg",
      },
      {
        name: "Arduino",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg",
      },
      {
        name: "FPGA",
        image: "https://www.svgrepo.com/show/303271/chip.svg",
      },
    ],
  },
];


export const experiences = [
  // If you don’t have internships yet, keep this empty or add club/team roles.
  {
    id: 0,
    img: UOPLogo,
    role: "Project Member / Developer",
    company: "University of Peradeniya",
    date: "2024 - Present",
    desc: "Worked on multiple academic/team projects including robotics and full-stack systems. Built end-to-end modules spanning backend APIs, UI, hardware integration, and deployment workflows.",
    skills: ["Python", "React", "Node.js", "Raspberry Pi", "OpenCV", "MySQL", "Git"],
    doc: "",
  },
    {
    id: 1,
    img: UOPLogo,
    role: "Casual Instructor",
    company: "Department of Computer Engineering, University of Peradeniya",
    date: "2024 - Present",
    desc: "Instructed 4-hour weekly lab sessions for CO222 (Programming Methodology) and CO224 (Computer Architecture). Supported and coordinated laboratory sessions with instructors and assisted students in understanding core concepts during lab activities.",
    skills: [
      "Teaching",
      "Lab Instruction",
      "C",
      "Python",
      "Computer Architecture",
      "Verilog",
      "Debugging",
      "Communication",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: UOPLogo,
    school: "University of Peradeniya",
    date: "2022 - Present",
    grade: "",
    desc: "BSc. Engineering (Hons) in Computer Engineering. Key areas: Programming (Python/C/Java), OOP, Data Structures & Algorithms, DBMS (SQL), Computer Networks, Operating Systems, Embedded Systems, Digital Design (Verilog/FPGA), and Software Engineering.",
    degree: "BSc Engineering (Hons) - Computer Engineering",
  },
  {
    id: 1,
    img: TCLogo,
    school: "Thurstan College, Colombo 07",
    date: "2012-2020", 
    grade: "AL results: 2As, 1B  z=2.0025", // optional (A/L results, etc.)
    desc: "Completed secondary education with a strong foundation in mathematics and science, and actively participated in clubs, competitions, and team activities.",
    degree: "G.C.E. Advanced Level / Ordinary Level",
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
      "A real-time industrial dashboard for monitoring mold protector machines with live status and stage tracking. Implemented backend endpoints, database handling, and real-time updates via Socket.io with a Python simulator for realistic event testing.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "REST APIs", "Python"],
    category: "web app",
    github: "https://github.com/cepdnaclk/e20-co227-MONA-Dashboard",
    webapp: "https://cepdnaclk.github.io/e20-co227-MONA-Dashboard/",
  },
  {
    id: 2,
    title: "SmartTutorX (FYP) - AI-Driven Automated Feedback & Tutoring System",
    date: "2025 - Present",
    description:
      "An AI-powered platform to analyze student submissions and generate structured feedback to improve turnaround time and consistency. Integrates with Moodle LMS via REST APIs and stores evaluation data for scalable grading and tutoring workflows.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Python", "Moodle API", "AI/NLP", "MySQL", "REST APIs"],
    category: "ai system",
    github: "YOUR_FYP_REPO_LINK_HERE",
    webapp: "",
  },

  // ✅ Added Projects
  {
    id: 3,
    title: "RV32IM Pipelined Processor",
    date: "2024",
    description:
      "Designed a 32-bit RV32IM five-stage pipelined processor (IF, ID, EX, MEM, WB) supporting the full RV32IM instruction set. Implemented hazard handling with forwarding, stalling, and branch prediction, and performed timing/power analysis.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Verilog", "RISC-V", "GTKWave", "PrimeTime", "PrimePower"],
    category: "hardware",
    github:
      "https://github.com/cepdnaclk/e20-co502-RV32IM_Pipelined_Processor_Group-05.git",
    webapp: "",
  },
  {
    id: 4,
    title: "8-bit Single-Cycle Processor",
    date: "2023",
    description:
      "Designed and implemented an 8-bit single-cycle processor supporting arithmetic, logical, move, immediate, jump, and branch instructions. Built core modules (ALU, register file, control logic, datapath) and extended the design with data memory and cache for read/write operations.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Verilog", "Computer Architecture", "GTKWave"],
    category: "hardware",
    github: "", // add repo link if you have it
    webapp: "",
  },
  {
    id: 5,
    title: "Colorization of Grayscale Images (Image Processing)",
    date: "2024",
    description:
      "Implemented grayscale-to-color conversion using classical image processing techniques, exploring spatial and frequency domain approaches. Useful for restoring historical photos and enhancing domain-specific imagery.",
    image: "YOUR_PROJECT_IMAGE_LINK_HERE",
    tags: ["Python", "Image Processing", "OpenCV", "NumPy"],
    category: "ai/ml",
    github:
      "https://github.com/cepdnaclk/e20-co543-Colorization-of-Grayscale-Images-Using-Image-Processing-Techniques.git",
    webapp: "",
  },
];

export const leadership = [
  {
    id: 0,
    role: "President",
    company: "Hackers' Club, University of Peradeniya",
    date: "2025 - Present",
    desc: "Leading planning and execution of technical events and community initiatives.",
    points: [
      "Led end-to-end event planning and execution",
      "Coordinated teams, timelines, and communications",
      "Drove student engagement and community initiatives",
    ],
    tags: ["Leadership", "Event Planning", "Community"],
    icon: "★",
    img: hackers,
    link: "",
    doc: "",
  },
  {
    id: 1,
    role: "Secretary",
    company: "Hackers' Club, University of Peradeniya",
    date: "2024 - 2025",
    desc: "Supported club operations, event coordination, and student engagement activities.",
    points: [
      "Supported operations and internal coordination",
      "Assisted event logistics and documentation",
      "Helped improve member engagement activities",
    ],
    tags: ["Coordination", "Operations", "Communication"],
    icon: "★",
    img: hackers,
    link: "",
    doc: "",
  },
  {
    id: 2,
    role: "Member / Athlete",
    company: "Rifle Shooting Club, University of Peradeniya",
    date: "2023 - Present",
    desc: "Competitive shooting participation with multiple sharpshooter-grade achievements.",
    points: [
      "Sharpshooter (95%, A+) — Air Rifle & Air Pistol Shooting Competition (2025)",
      "Sharpshooter (90%, A+) — Air Rifle & Air Pistol Shooting Competition (2024)",
      "Sharpshooter (80%, A+) — Air Rifle & Air Pistol Shooting Competition (2023)",
      "3rd Place (Team) — Magam Sports Rifle Shooting Championship (2025)",
      "Sharpshooter — Magam Sports Rifle Shooting Championship (2025)",
    ],
    tags: ["Sports", "Discipline", "Performance"],
    icon: "🏅",
    img: PERASHOOT,
    link: "",
    doc: "",
  },
  {
    id: 3,
    role: "Swimmer",
    company: "University of Peradeniya",
    date: "2023",
    desc: "Represented the Faculty of Engineering at the Freshers Meet 2023 and won multiple awards.",
    points: ["Won multiple awards at the Freshers Meet (2023)."],
    tags: ["Sports", "Teamwork", "Consistency"],
    icon: "🏊",
    img: PERASWM,
    link: "",
    doc: "",
  },
];


export const awards = [
  {
    id: 0,
    title: "3rd Place — I-to-I 2025 International Innovation Competition",
    org: "I-to-I 2025 / ICIIS 2025",
    year: "2025",
    desc: "Won third place at the I-to-I 2025 International Innovation Competition, which qualified our team to present the project at ICIIS 2025.",
    image: image1, // AwardI2I or "https://..."
    tags: ["Innovation", "International", "ICIIS 2025"],
    link: "",
  },
  {
    id: 1,
    title: "Top 10 Finalist — UIY Competition (IESL)",
    org: "Institution of Engineers Sri Lanka (IESL)",
    year: "2025",
    desc: "Recognized among the Top 10 undergraduate innovations nationwide for the PEBO desk companion robot and showcased at Techno 2025.",
    image: image2, // AwardUIY or "https://..."
    tags: ["Top 10", "Techno 2025", "PEBO"],
    link: "",
  },
  {
    id: 2,
    title: "National Rank 9 — ACES Coders v11.0 (Team Semicolons)",
    org: "ACES Coders v11.0",
    year: "2024",
    desc: "Secured National Rank 9 in a 12-hour algorithmic programming competition against 80+ teams and 250+ participants.",
    image: image3,
    tags: ["Competitive Programming", "Algorithms"],
    link: "",
  },
  {
    id: 3,
    title: "Qualified — ACES PreCoders v11.0 (Team Semicolons)",
    org: "ACES PreCoders v11.0",
    year: "2024",
    desc: "Qualified for ACES Coders v11.0 through the preliminary 6-hour algorithmic programming round, representing University of Peradeniya.",
    image: image4,
    tags: ["Qualification", "Algorithms"],
    link: "",
  },
  {
  id: 4, // make sure this id is unique
  title:
    "1st Place (Team) — Invitational Inter University Air Rifle & Air Pistol Shooting Championship",
  org: "Rifle Shooting Club, University of Peradeniya",
  year: "2025",
  desc: "Won 1st place (Team) at the Invitational Inter University Air Rifle & Air Pistol Shooting Championship 2025.",
  image: image5, // add certificate/award photo URL or imported image here
  tags: ["1st Place", "Team", "Air Rifle", "Air Pistol"],
  link: "", // optional
},

];

import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaLinux 
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase, 
  SiFastapi, 
  SiPostman, 
  SiScikitlearn,
  SiExpress,
  SiGooglecloud,
  SiCloudinary,
  SiVercel,
  SiOpenai
} from "react-icons/si";

export const personalInfo = {
  name: "Mayank Kumar",
  title: "Full Stack Developer & AI Enthusiast",
  email: "mayankkumar2777@gmail.com",
  phone: "+91-9310900626",
  location: "Delhi, India",
  github: "https://github.com/Mayankkr2705",
  linkedin: "https://linkedin.com/in/mayank-kumar-379430352/",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { 
    category: "Languages", 
    items: [
      { name: "Java", icon: FaJava, color: "text-[#ed8b00]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599c]" },
      { name: "Python", icon: FaPython, color: "text-[#3776ab]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#f7df1e]" }
    ] 
  },
  { 
    category: "Frontend", 
    items: [
      { name: "React.js", icon: FaReact, color: "text-[#61dafb]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06b6d4]" },
      { name: "HTML/CSS", icon: FaHtml5, color: "text-[#e34f26]" }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-zinc-800 dark:text-zinc-200" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#ffca28]" },
      { name: "FastAPI", icon: SiFastapi, color: "text-[#05998b]" }
    ] 
  },
  { 
    category: "Tools & AI", 
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-[#f05032]" },
      { name: "Linux", icon: FaLinux, color: "text-[#fcc624]" },
      { name: "Postman", icon: SiPostman, color: "text-[#ff6c37]" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#f7931e]" }
    ] 
  },
];

export const experience = [
  {
    role: "Society Head",
    organization: "Algorithm Society of NSUT",
    location: "Delhi",
    period: "Oct 2024 - Present",
    description: [
      "Led a team of 7 members to manage technical events and coding competitions, increasing participation by 65%.",
      "Coordinated with multiple departments to ensure smooth execution of large-scale events.",
      "Mentored students in data structures, algorithms, and competitive programming.",
      "Improved engagement through structured problem-solving sessions and hackathons.",
    ],
  },
  {
    role: "Ethical Hacking Intern",
    organization: "CDAC",
    location: "Noida",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Conducted Vulnerability assessment using OSINT tools, identifying 150+ security vulnerabilities.",
      "Performed API analysis and reconnaissance on domains and email systems to detect potential attack surfaces.",
      "Improved system security by recommending patches and risk mitigation strategies.",
      "Applied cross-platform tools for network scanning and threat intelligence.",
    ],
  },
  
];

export const projects = [
  {
    title: "GreatWear",
    description: "A full-stack fashion content sharing platform with secure authentication and interactive community feed.",
    image: "/GreatWear.png",
    tech: [
      { name: "React", icon: FaReact, color: "text-[#61dafb]" },
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#ffca28]" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-[#3448c5]" }
    ],
    links: { github: "https://github.com/Mayankkr2705/GreatWear", live: "https://great-wear.vercel.app/" },
    accent: "from-blue-600 to-cyan-500"
  },
  {
    title: "Appointment Booking Platform",
    description: "AI-powered diagnostics platform integrated with Google Gemini to reduce patient wait times and provide smart scheduling.",
    image: "/Qmedx%20Appointment.png",
    tech: [
      { name: "ReactJs", icon: FaReact, color: "text-[#61dafb]" },
      { name: "ExpressJs", icon: SiExpress, color: "text-zinc-800 dark:text-zinc-200" },
      { name: "Gemini AI", icon: SiGooglecloud, color: "text-[#4285f4]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#ffca28]" }
    ],
    links: { github: "https://github.com/ogjash/OncoSense",live:"https://qmedix.vercel.app/" },
    accent: "from-purple-600 to-pink-500"
  },
  {
    title: "Mentor Signal",
    description: "Scalable predictive analytics system handling 10,000+ users with 90% prediction accuracy for at-risk students.",
    image: "/MentorSignal.png",
    tech: [
      { name: "FastAPI", icon: SiFastapi, color: "text-[#05998b]" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#f7931e]" },
      { name: "Vercel", icon: SiVercel, color: "text-zinc-900 dark:text-white" },
      { name: "XGBoost", icon: SiOpenai, color: "text-[#00a67e]" }
    ],
    links: { github: "https://github.com/Mayankkr2705/Student-Drop-Prediction-SIH" ,live:"https://sih-impact-crew.vercel.app/"},
    accent: "from-emerald-600 to-teal-500"
  },
];

export const education = [
  {
    degree: "B.Tech (ITNS)",
    institution: "Netaji Subhas University of Technology",
    period: "2023 - 2027",
    score: "7.30 CGPA",
    coursework: "Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks",
  },
  {
    degree: "Board (Class XII)",
    institution: "Sumermal Jain Public School, New Delhi",
    period: "2023",
    score: "84%",
  },
  {
    degree: "Board (Class X)",
    institution: "Sumermal Jain Public School, New Delhi",
    period: "2021",
    score: "88%",
  },
];

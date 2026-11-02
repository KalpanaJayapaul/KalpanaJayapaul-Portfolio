import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BrushIcon from "@mui/icons-material/Brush";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NorthIcon from '@mui/icons-material/North';

const BASE_URL = import.meta.env.BASE_URL;

const github = "https://github.com/KalpanaJayapaul";
const linkedin = "https://www.linkedin.com/in/kalpana-j-1370912bb";
const email = "j.kalpana.jks@gmail.com";
const technologies = [
  "React.js",
  "Angular",
  "Python",
  "Django REST Framework",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "OpenAI",
  "Gemini",
  "n8n",
];

const skills = [
  ["React.js", 95],
  ["Django REST Framework", 90],
  ["Laravel / PHP", 75],
  ["Python", 88],
  ["JavaScript / TypeScript", 90],
  ["SQL Databases", 85],
  ["AI / LLM Integration", 88],
  ["REST APIs", 92],
];

const projects = [
  {
    name: "Explainable Pneumonia Detection",
    category: "MACHINE LEARNING",
    status: "Completed",
    summary:
      "Developed a deep learning-based chest X-ray classification system for pneumonia detection, integrating Grad-CAM and LIME for model explainability and visual interpretation.",
    stack: ["Python", "ResNet50", "TensorFlow", "Grad-CAM", "LIME"],
    icon: "◉",
    tone: "pink",
    image: BASE_URL + "/projects/pneumonia-detection.png",
    link: "https://github.com/KalpanaJayapaul/explainable-pneumonia-detection",
  },
  {
    name: "RAG PDF Chatbot",
    category: "GENERATIVE AI",
    status: "In Progress",
    summary:
      "Building a Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and ask context-aware questions using document extraction, text chunking, retrieval and LLM-powered responses.",
    stack: ["React", "Django", "Python", "RAG", "LLMs"],
    icon: "⌘",
    tone: "violet",
    image: BASE_URL + "/projects/rag-chatbot.jfif",
    link: "https://github.com/KalpanaJayapaul/rag-pdf-chatbot",
  },
  {
    name: "College ERP System",
    category: "FULL-STACK DEVELOPMENT",
    status: "In Progress",
    summary:
      "Developed a full-stack College ERP application to streamline academic and administrative operations, including student management, admissions, attendance tracking and examination management.",
    stack: ["Angular", "Laravel", "MySQL"],
    icon: "🎓",
    tone: "violet",
    image: BASE_URL + "/projects/college-erp.jfif",
    link: "https://github.com/KalpanaJayapaul/college-erp-system",
  },
  {
    name: "AI Chat & Voice Agent",
    category: "AI ENGINEERING",
    status: "In Progress",
    summary:
      "Built an AI-powered conversational assistant with knowledge-base integration, LLM-based responses and real-time voice interactions using speech processing technologies.",
    stack: ["React", "Django", "Twilio", "LLMs"],
    icon: "✦",
    tone: "blue",
    image: BASE_URL + "/projects/ai-voice-agent.jfif",
    link: "https://github.com/KalpanaJayapaul/ai-chat-voice-agent",
  },
  {
    name: "LLM Gateway & Fallback Routing",
    category: "GENERATIVE AI / BACKEND",
    status: "In Progress",
    summary:
      "Designed a centralized multi-provider LLM gateway with intelligent provider routing, automatic fallback, retry handling, token tracking and usage analytics.",
    stack: [
      "React.js",
      "Python",
      "Django REST",
      "MySQL",
      "OpenAI",
      "Gemini",
      "Groq",
      "REST APIs",
    ],
    icon: "▦",
    tone: "cyan",
    image: BASE_URL + "/projects/llm-gateway.jfif",
    link: "https://github.com/KalpanaJayapaul/llm-gateway-fallback-routing",
  },
  {
    name: "AI Resume Analyzer",
    category: "GENERATIVE AI / FULL-STACK",
    status: "In Progress",
    summary:
      "An AI-powered resume analysis application designed to extract candidate information, evaluate technical skills against job descriptions and generate personalized recommendations for resume improvement.",
    stack: ["React", "Python", "Django REST", "LLMs"],
    icon: "✿",
    tone: "pink",
    image: BASE_URL + "/projects/ai-resume-analyzer.jpg",
    link: "https://github.com/KalpanaJayapaul/ai-resume-analyzer",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [message, setMessage] = useState("");
  const nav = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];
  const send = () =>
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Inquiry&body=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  return (
    <div className="site" id="home">
      <header className="header">
        <div className="shell nav">
          <a href="#home" className="brand">
            <span className="brand-icon">&lt;/&gt;</span> Kalpana
            <span className="dot">.</span>
          </a>
          <nav className={menu ? "navlinks open" : "navlinks"}>
            {nav.map((n) => (
              <a
                key={n}
                onClick={() => setMenu(false)}
                href={"#" + n.toLowerCase()}
              >
                {n}
              </a>
            ))}
          </nav>
          <div className="navright">
            <a className="button small" href="#contact">
              Let's Talk <ArrowOutwardIcon fontSize="small" />
            </a>
            <button
              className="menu"
              aria-label="Toggle navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES
            </div>
            <p className="hello">Hello, I'm</p>
            <h1>
              Kalpana <span>J.</span>
            </h1>
            <h2>
              AI Full Stack <em>Developer</em>
            </h2>
            <p className="lead">
              I build scalable full-stack applications and AI-powered solutions
              using React.js, Python, Django REST Framework and modern LLM
              technologies. Passionate about developing intelligent systems,
              robust APIs and seamless user experiences.
            </p>
            <div className="actions">
              <a href="#projects" className="button">
                Explore My Work <ArrowOutwardIcon fontSize="small" />
              </a>
              <a
                href={BASE_URL + "resume/Kalpana_Resume.pdf"}
                download="Kalpana_Resume.pdf"
                className="button ghost"
              >
                <DownloadIcon fontSize="small" />
                Download Resume
              </a>
              <a href="#contact" className="button ghost">
                Get In Touch
              </a>
            </div>
            <div className="social">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a href={"mailto:" + email} aria-label="Email">
                <EmailIcon />
              </a>
              <span className="social-label">CONNECT WITH ME</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="halo" />
            <div className="portrait">
              <img src={BASE_URL + "JKS.png"} alt="Kalpana J" />
            </div>
            <div className="float-card card-one">
              <CodeIcon />{" "}
              <div>
                <b>Full Stack</b>
                <small>React · Django · Laravel</small>
              </div>
            </div>
            <div className="float-card card-two">
              <AutoAwesomeIcon />{" "}
              <div>
                <b>AI Powered</b>
                <small>Intelligent applications</small>
              </div>
            </div>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>
                1.8<span>+</span>
              </strong>
              <small>YEARS EXPERIENCE</small>
            </div>
            <div>
              <strong>
                10<span>+</span>
              </strong>
              <small>PROJECTS BUILT</small>
            </div>
            <div>
              <strong>AI</strong>
              <small>DRIVEN SOLUTIONS</small>
            </div>
          </div>
        </section>
        <section id="about" className="shell section about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-grid">
            <div>
              <h2 className="section-heading">
                A little about <span>me.</span>
              </h2>
              <p className="bodycopy">
                I'm an AI Full Stack Developer with professional experience in
                building scalable web applications, REST APIs and intelligent
                AI-powered solutions. My primary technical strengths include
                React.js, Python, Django REST Framework, PostgreSQL and modern
                frontend technologies. I also work with Laravel, Angular and AI
                integrations using OpenAI, Gemini and Groq APIs. I enjoy solving
                real-world problems through clean architecture, efficient
                backend development, database design and practical AI-driven
                solutions.
              </p>
              <p className="bodycopy">
                I enjoy turning complex requirements into reliable systems that
                are simple to use.
              </p>
              <div className="pills">
                <span>📍 Tamil Nadu, India</span>
                <span>💻 Open to opportunities</span>
                <span>⚡ Backend & AI</span>
              </div>
            </div>
            <div className="about-panel">
              <div className="panel-heading">
                <RocketLaunchIcon /> MY APPROACH
              </div>
              <blockquote>
                “Interfaces should feel obvious. Systems should feel invisible.”
              </blockquote>
              <div className="panel-foot">
                DESIGN MINDED. ENGINEERING DRIVEN.
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="shell section skills-section">
          <div className="section-label">02 / MY EXPERTISE</div>

          <div className="section-top">
            <div>
              <h2 className="section-heading">
                Skills & <span>technologies.</span>
              </h2>
              <p className="skills-intro">
                Tools, technologies and creative skills I use to build modern,
                scalable digital products.
              </p>
            </div>
            <div className="expertise-caption">
              <span className="caption-dot" />
              CONTINUOUSLY LEARNING & BUILDING
            </div>
          </div>

          {/* EXPERTISE CATEGORIES */}
          <div className="expertise-grid">
            <article className="expertise-card frontend-card">
              <div className="expertise-card-top">
                <div className="expertise-icon">
                  <CodeIcon />
                </div>
                <span>01</span>
              </div>
              <h3>Frontend Development</h3>
              <p className="expertise-desc">
                Creating responsive, intuitive and engaging user interfaces.
              </p>
              <div className="expertise-details">
                <div>
                  <small>LANGUAGES</small>
                  <p>HTML5 · CSS3 · JavaScript (ES6+)</p>
                </div>
                <div>
                  <small>FRAMEWORKS</small>
                  <p>React.js · Angular </p>
                </div>
                <div>
                  <small>STYLING</small>
                  <p>Material UI · Tailwind CSS · SCSS</p>
                </div>
                <div>
                  <small>TOOLS</small>
                  <p>Vite · Git</p>
                </div>
              </div>
            </article>

            <article className="expertise-card backend-card">
              <div className="expertise-card-top">
                <div className="expertise-icon">
                  <StorageIcon />
                </div>
                <span>02</span>
              </div>
              <h3>Backend Development</h3>
              <p className="expertise-desc">
                Building secure APIs, database-driven applications and scalable
                backend systems.
              </p>
              <div className="expertise-details">
                <div>
                  <small>LANGUAGES</small>
                  <p>Python · JavaScript · PHP</p>
                </div>
                <div>
                  <small>FRAMEWORKS</small>
                  <p>Django REST Framework · Laravel</p>
                </div>
                <div>
                  <small>DATABASES</small>
                  <p>PostgreSQL · MySQL </p>
                </div>
                <div>
                  <small>TOOLS & API</small>
                  <p>Postman · SQLyog · REST APIs · Git</p>
                </div>
              </div>
            </article>

            <article className="expertise-card design-card">
              <div className="expertise-card-top">
                <div className="expertise-icon">
                  <BrushIcon />
                </div>
                <span>03</span>
              </div>
              <h3>UI / UX Design</h3>
              <p className="expertise-desc">
                Turning ideas into clean, accessible and user-friendly digital
                experiences.
              </p>
              <div className="expertise-details">
                <div>
                  <small>DESIGN TOOLS</small>
                  <p>Figma · Canva</p>
                </div>
                <div>
                  <small>DESIGN SKILLS</small>
                  <p>Wireframing · Visual Design</p>
                </div>
                <div>
                  <small>FOCUS</small>
                  <p>Responsive Layouts · User Experience</p>
                </div>
              </div>
            </article>

            <article className="expertise-card ai-card">
              <div className="expertise-card-top">
                <div className="expertise-icon">
                  <PsychologyIcon />
                </div>
                <span>04</span>
              </div>
              <h3>AI Technologies</h3>
              <p className="expertise-desc">
                Integrating intelligent capabilities into real-world web
                applications.
              </p>
              <div className="expertise-details">
                <div>
                  <small>AI PLATFORMS</small>
                  <p>OpenAI · Gemini · LLM APIs</p>
                </div>
                <div>
                  <small>CORE INTERESTS</small>
                  <p>
                    Generative AI · Intelligent Assistants · AI Agents · RAG ·
                    LLM Integration
                  </p>
                </div>
                <div>
                  <small>APPLICATIONS</small>
                  <p>AI Agents · Chatbots · Automation</p>
                </div>
              </div>
            </article>
          </div>

          {/* TECHNICAL PROFICIENCY & TECH STACK */}
          <div className="skills-subheading">
            <div>
              <span className="section-label">MY DEVELOPMENT TOOLKIT</span>
              <h3>
                Technical <span>expertise.</span>
              </h3>
            </div>
            <p>A closer look at my core technical strengths.</p>
          </div>
          <div className="skills-panel">
            <div className="skills-panel-heading">
              <div className="panel-icon">
                <StorageIcon />
              </div>
              <div>
                <h3>Technical proficiency</h3>
                <p>My core development skills</p>
              </div>
            </div>

            <div className="skill-grid">
              {skills.map(([n, v]) => (
                <div className="skill" key={n}>
                  <div className="skill-title">
                    <b>{n}</b>
                    <span>{v}%</span>
                  </div>
                  <div className="track">
                    <i style={{ width: v + "%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*<div className="skills-layout">

    <div className="skills-panel">
      <div className="skills-panel-heading">
        <div className="panel-icon"><StorageIcon /></div>
        <div>
          <h3>Technical proficiency</h3>
          <p>My core development skills</p>
        </div>
      </div>

      <div className="skill-grid">
        {skills.map(([n, v]) => (
          <div className="skill" key={n}>
            <div className="skill-title">
              <b>{n}</b>
              <span>{v}%</span>
            </div>
            <div className="track">
              <i style={{ width: v + "%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="stack-panel">
      <div className="skills-panel-heading">
        <div className="panel-icon"><AutoAwesomeIcon /></div>
        <div>
          <h3>My tech stack</h3>
          <p>Technologies I work with</p>
        </div>
      </div>

      <div className="tech-grid">
        {technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="stack-footer">
        <span className="caption-dot" />
        From interfaces to APIs, cloud services and AI integrations.
      </div>
    </div>

  </div>*/}
        </section>

        <section id="projects" className="shell section">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-top">
            <h2 className="section-heading">
              Featured <span>projects.</span>
            </h2>
            <button
  className="view-all-projects"
  onClick={() => setShowAll(!showAll)}
>
  <span>{showAll ? "Show less" : "View all projects"}</span>
  <ArrowOutwardIcon className="view-all-arrow" />
</button>
          </div>
          <div className="project-grid">
            {projects.slice(0, showAll ? projects.length : 4).map((p, i) => (
              <article className={"project-card " + p.tone} key={p.name}>
                <div className="project-art">
                  <img src={p.image} alt={p.name} className="project-image" />

                  <span className="art-number">0{i + 1}</span>
                </div>
                <div className="project-content">
                  <small>{p.category}</small>
                  <div className="project-title-row">
                    <h3>{p.name}</h3>

                    {p.status && (
                      <span
                        className={`project-status ${
                          p.status === "Completed" ? "completed" : "in-progress"
                        }`}
                      >
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p>{p.summary}</p>
                  <div className="tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <a
                    href={p.link || github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Explore project <ArrowOutwardIcon fontSize="small" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="shell section career">
          <div id="experience" className="career-panel">
            <div className="section-label">04 / EXPERIENCE</div>
            <h2 className="section-heading">
              My <span>journey.</span>
            </h2>
            <div className="timeline">
              <div className="timeline-icon">
                <WorkOutlineIcon />
              </div>
              <div>
                <h3>AI Full Stack Developer</h3>
                <p className="muted">
                  Malaris Software Solutions · Tirunelveli
                </p>
                <p className="date">MAR 2025 — AUG 2026</p>
                <p>
                  Developed full-stack web applications using React.js, Angular
                  and Django REST Framework, integrating REST APIs and
                  relational databases. Worked on AI-powered features using
                  OpenAI, Gemini and Groq APIs, including conversational AI,
                  voice processing and knowledge-base integrations.
                </p>
              </div>
            </div>
          </div>
          <div id="education" className="career-panel">
            <div className="section-label">05 / EDUCATION</div>
            <h2 className="section-heading">
              Academic <span>path.</span>
            </h2>
            <div className="timeline">
              <div className="timeline-icon">
                <SchoolIcon />
              </div>
              <div>
                <h3>
                  M.E. Computer Science & Engineering | PSN College of
                  Engineering & Technology, 2025.
                </h3>
                <p className="muted">Final semester · 2026</p>
              </div>
            </div>
            <div className="timeline">
              <div className="timeline-icon">
                <SchoolIcon />
              </div>
              <div>
                <h3>
                  B.E. Computer Science & Engineering | PSN College of
                  Engineering & Technology, 2025.
                </h3>
                <p className="muted">Graduated · 2025</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="shell section">
          <div className="contact-panel">
            <div>
              <div className="section-label">06 / LET'S CONNECT</div>
              <h2>
                Have a project in mind?
                <br />
                <span>Let's make it happen.</span>
              </h2>
              <p>
                I'm open to full-time opportunities, interesting projects and
                collaborations.
              </p>
              <a className="email-link" href={"mailto:" + email}>
                {email} ↗
              </a>
            </div>
            <div className="contact-action">
              <label htmlFor="message">SEND A QUICK MESSAGE</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your idea..."
              />
              <button className="button" onClick={send}>
                Compose Email <ArrowOutwardIcon fontSize="small" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <a href="#home" className="brand">
          Kalpana<span className="dot">.</span>
        </a>
        <span>© {new Date().getFullYear()} Kalpana J All Rights Reserved</span>
       <a href="#home" className="back-to-top">
  <span>Back to top</span>
  <NorthIcon className="back-to-top-arrow" />
</a>
      </footer>
    </div>
  );
}
export default App;

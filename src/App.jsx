import React, { useState, useEffect } from "react";

// --- IMPORT IMAGES ---
import IRCITEImage from "/IRCITE.png";
import CLICKNCHICKImage from "/CLICK_N_CHICK.png";
import SAKSESImage from "/SAKSES.jpg";
import DREAMLOGImage from "/DREAMLOG1.png";
import PSITEImage from "/TAKEOVER.png";
import MRICTImage from "/MRICT.jpg";
import PSASImage from "/SIGNAGE.png";
import YUMYANImage from "/YUMYAN.jpg";
import RIAMImage from "/RIAM.png";
import CASE1229Image from "/1229.png"; 
import ResumePDF from "/Francois_Dungca_Resume.pdf";


// About Section Images
import jmjLogo from "/assets/jmj.png";
import mhsLogo from "/assets/mhs.png";
import lvccLogo from "/assets/lvcc.png";


// --- UPDATED PROJECT DATA ---
const projectData = [
  {
    title: "IRCITE Agu-Ed",
    short: "PM, UI & UIX - AI-Based Learning Application",
    description:
      "AguhEd is an inclusive digital learning platform that uses gesture-based navigation, sign language recognition, and AI-powered text capture to make education interactive and accessible for all learners. It breaks language barriers and provides alternative ways to engage, ensuring every student can participate fully.",
    link: "https://www.figma.com/proto/C0k4lF95468LVrrG9JH6WG/Untitled?node-id=3-24&starting-point-node-id=3%3A24&t=83DXsKVmUOiWrRqE-1",
    image: IRCITEImage,
  },
  {
    title: "SAKSES",
    short: "PM - AI-Powered Business Analytics",
    description:
      "SAKSES is an AI-powered business platform that provides real-time insights, forecasts, and strategic recommendations. Acting as a virtual advisor, it helps businesses make smarter decisions, optimize resources, and adapt quickly to changing market conditions for greater efficiency and long-term success.",
    link: "https://www.figma.com/proto/BG44WJ2l0yoaKwJ8S8lsT0/IT-Marketing?node-id=101-203&starting-point-node-id=101%3A203&t=0CQnjSfiElHsB04Q-1",
    image: SAKSESImage,
  },
  {
    title: "YUM YAN",
    short: "Finance Manager & Magazine Creator — LVCC 2nd Year Project",
    description:
      "I served as the Finance Manager and Magazine Creator for YumYan, a school-based food stall business offering affordable snacks and drinks. Our signature product, the Lumpianada, combines the flavors of lumpia and empanada, alongside favorites like fries, fried tofu, banana milk, dalgona, and Magic Water.",
    link: "https://online.fliphtml5.com/rukrk/aery/?fbclid=IwY2xjawNaExpleHRuA2FlbQIxMABicmlkETFkc1B2SFRWcFZiODZyY3pzAR6PXEPaKrWQDZlQJDSklI9OgKqpyjSQR_CaMSK1Jz77hDFEWYj6YSshAdkuBw_aem_rd4oeV3Gm8rJbjygRkJR9w#p=1",
    image: YUMYANImage,
  },
  {
    title: "Mr. ICT",
    short: "Year 2023 - 2024",
    description:
      "During ICT Week 2023–2024, I was honored as Mr. ICT under the theme “Beyond Boundaries: Embracing AI & Human Ingenuity,” showcasing my skills in integrating technology and creativity while inspiring others to explore the potential of AI and human innovation.",
    link: "https://www.facebook.com/share/1a429XBmec/",
    image: MRICTImage,
  },  
  {
    title: "PSITE",
    short: "Editor - LVCC Video Editing Screening Entry",
    description:
      "This short film explores the impact of AI on cities, problem-solving, and human creativity. Through compelling storytelling, it showcases the students’ technical and creative skills while sparking reflection on technology, humanity, and the future.",
    link: "https://www.facebook.com/share/v/1C7biHfw1c/",
    image: PSITEImage,
  },
  {
    title: "R.I.A.M (Rat in a Maze)",
    short: "Editor & Director",
    description:
      "R.I.A.M (Rat in a Maze) is a short film we created for our Data Structures and Algorithms subject. The story revolves around Job and how he solved the mystery behind the tragic incident involving Jamela — using logic and problem-solving inspired by the Rat in a Maze algorithm. I served as the director, editor, and story writer, developing the concept and narrative for the film. Our team’s effort paid off, as we received an excellent grade of 98/100 for the project.",
    link: "https://drive.google.com/drive/folders/1QqZQrz7KbAhhZjwX84hGcd7uG6FX80zK?fbclid=IwY2xjawNa54JleHRuA2FlbQIxMABicmlkETE1NjB2Mm94bzBqazA0WWFVAR6ZBAOIeG306gdQPbw4_L7CMJ2OT55l9_rhaDdq7xWlet8tqcBSMDfk9agYeA_aem_pS44aOUpihF5_i4incPFuQ",
    image: RIAMImage,
  },
  {
    title: "CASE 1229",
    short: "Director, Videographer, & Plot Maker",
    description:
      "CASE 1229 is a collaborative short film connected to R.I.A.M (Rat in a Maze). While R.I.A.M reveals the suspect behind Jamela’s tragedy, CASE 1229 uncovers the motive behind the suspect’s actions. Together, the two films form a connected narrative that blends mystery, logic, and emotion.",
    link: "https://drive.google.com/drive/folders/1bnOhzptn2JIwy2215b5-784fZIgn6U67?fbclid=IwY2xjawNa8YNleHRuA2FlbQIxMABicmlkETE1NjB2Mm94bzBqazA0WWFVAR44xsQQXGYeaUpo79k9eA8zypsz7Mxck83qIjcADBVyWnL0zngUiCM_XoZw1Q_aem_bcDDdpuRAkxJwfwzDDYXxA",
    image: CASE1229Image,
  },
  {
    title: "CLICK N CHICK",
    short: "UI/UX - Ecommerce Application",
    description:
      "BES Click ’n’ Chick Online Ordering System is a user-friendly platform that allows customers to easily browse the menu, place orders, and pay online. It streamlines order processing, reduces errors, and ensures faster, more convenient service for both customers and BES House of Chicken staff.",
    link: "https://www.figma.com/proto/23yfZFcz3C805MNCSojChJ/HOUSE-OF-CHICKEN?node-id=101-27&starting-point-node-id=101%3A27&t=0ngZt3FQHBbIsGLw-1",
    image: CLICKNCHICKImage,
  },
  {
    title: "DREAMLOG",
    short: "PM - Blogging Website",
    description:
      "Dreamlog is a modern blogging platform that allows users to create, manage, and view blog posts through a clean, responsive, and user-friendly interface. Built with Laravel, React, and Inertia.js, it offers smooth navigation and real-time-like page transitions. Key features include blog creation, editing, viewing, and category management, making it easy to organize and maintain content across devices.",
    link: "https://www.figma.com/proto/QN1ciWkcKIMqVOS6GO8UAq/DreamLog?node-id=183-12&starting-point-node-id=183%3A12&t=oephYqaF8xIFXnV0-1",
    image: DREAMLOGImage,
  },
  {
    title: "PSAS",
    short: "Multimedia Editor - Branding & Signage",
    description:
      "I worked at PSAS from 2024–2025 as a Multimedia Editor, handling signage, videos, and editing the Guidance and Counseling Office logo at La Verdad Christian College. I also proposed designs for other logos, including the Discipline Office, Student Organization Office, and Student Assistant Office, contributing to creative branding and visual identity projects.",
    link: "https://drive.google.com/drive/folders/1vBxjCRp9APIbx-2G3LDe52zxrAoEhLWW?usp=sharing",
    image: PSASImage,
  },
];


export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const currentProject = projectData[currentIndex];

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  const handleBack = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
  const handleSelect = (index) => setCurrentIndex(index);


  return (
    <div className="app">
      {/* Cursor follower */}
      <div
        className="cursor-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <header className="header fade-in">
        <div className="header-inner">
          <h1 className="logo">
            <span className="logo-bracket">&lt;</span>
            ACOIS
            <span className="logo-bracket">/&gt;</span>
          </h1>
          <nav className="nav">
            {/* Nav links updated: removed the numbering span (nav-number) */}
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="home fade-in">
        <div
          className="home-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="grid-overlay" />
        </div>

        <div className="home-content">
          <div className="glitch-wrapper">
            <h2
              className="home-name"
              data-text="ALLAIN FRANCOIS D. DUNGCA"
            >
              ALLAIN FRANCOIS D. DUNGCA
            </h2>
          </div>

          <div className="role-container">
            <div className="role-line" />
            <h3 className="home-role">
              <span className="typing-text">
                Project Manager & Multimedia Designer
              </span>
            </h3>
            <div className="role-line" />
          </div>

          <p className="home-text">
            Aspiring Multimedia Designer and Project Manager, with a passion for
            combining creativity and functionality. Actively joins competitions
            and explores new tools to stay updated and deliver impactful results.
            Always eager to collaborate on innovative projects that challenge
            both artistic vision and strategic thinking.
          </p>

          {/* Social Icons with hover effect - UPDATED WITH REVISED LINKEDIN LINK */}
          <div className="home-logos">
            <a
              href="https://www.linkedin.com/in/francois-dungca-8b6655379"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-circle"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://github.com/ACO1S"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-circle"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/francois.dungca.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-circle"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                {/* FACEBOOK ICON PATH */}
                <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
              </svg>
            </a>
          </div>

            <a
              href={ResumePDF}
              download="Francois_Dungca_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              <span>Download Résumé</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10l5 5 5-5M12 15V3m9 12v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                />
              </svg>
            </a>

          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
            <p>Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about fade-in">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
          <div className="title-underline" />
        </h2>

        <div className="about-card">
          <div className="about-left">
            <div className="about-image">
              {/* === UPDATED IMAGE SRC HERE === */}
              <img
                src={avatarImage} // FIXED: Used the imported image
                alt="Allain Francois D. Dungca Profile"
                className="profile-picture"
              />
              <div className="image-overlay" />
            </div>
          </div>
          <div className="about-right">
            <h3 className="name">DUNGCA, ALLAIN FRANCOIS D.</h3>
            <p className="role">Project Manager | UI/UX Designer</p>
            <p className="school">
              3rd-year BS Information Systems — La Verdad Christian College
            </p>
            <div className="bio-container">
              <div className="quote-mark">"</div>
              <p className="bio">
              Hi! I’m Francois Dungca, a 3rd-year BS Information Systems student at La Verdad Christian College.
              I aspire to become a Multimedia Designer and Project Manager, passionate about blending creativity
              and functionality in design. I’ve worked on various projects like magazines, videos, websites, and
              systems, and I continuously grow my skills through competitions and exploring new tools.

              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="edu-section">
          <h3 className="sub-title">
            <span className="accent-bar" />
            Education Journey
          </h3>
          <div className="edu-timeline">
            {[
              {
                school: "JESUS MARY JOSEPH MONTESSORI SCHOOL",
                level: "Elementary & Junior High School Level",
                desc: "I completed my elementary education up to Grade 8 at Jesus Mary Joseph Montessori School, where I gained foundational knowledge and values that shaped my academic journey.",
                logo: jmjLogo,
                year: "2011-2018",
              },
              {
                school: "MACABEBE HIGH SCHOOL",
                level: "Junior High School Level",
                desc: "I continued my junior high school education at Macabebe High School, enrolling in the selective TLE program with a focus on ICT. I graduated with honors.",
                logo: mhsLogo,
                year: "2018-2021",
              },
              {
                school: "LA VERDAD CHRISTIAN COLLEGE",
                level: "Senior High School and College Level",
                desc: "I completed my senior high school at La Verdad Christian College, then continued my college education pursuing BS Information Systems.",
                logo: lvccLogo,
                year: "2021-Present",
              },
            ].map((edu, idx) => (
              <div
                key={edu.school}
                className="edu-item"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="edu-year">{edu.year}</div>
                <div className="edu-connector" />
                <div className="edu-content">
                  <div className="edu-logo-wrapper">
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="edu-logo"
                    />
                  </div>
                  <div className="edu-text">
                    <h4>{edu.school}</h4>
                    <p className="edu-level">{edu.level}</p>
                    <p className="edu-desc">{edu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Development */}
        <section id="skills" className="skills fade-in">
          <h3 className="sub-title">
            <span className="accent-bar" />
            Skills & Development
          </h3>
          <div className="dev-columns">
            <div className="dev-panel">
              <div className="panel-icon">💻</div>
              <h4>Software & Website Development</h4>
              <p>
                At La Verdad Christian College, I gained hands-on experience with
                various development tools, IDEs, programming languages, and web
                technologies, building a strong foundation in both front-end and
                back-end development.
              </p>
              <div className="skills-grid">
                {[
                  "VS Code",
                  "C#",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Python",
                  "React (JSX)",
                  "Tailwind CSS",
                  "Laravel",
                  "HTTPS",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="dev-panel">
              <div className="panel-icon">🎨</div>
              <h4>UI/UX & Multimedia Design</h4>
              <p>
                Throughout the years, I've explored various applications to
                enhance my skills in multimedia creation and UI/UX design,
                allowing me to deliver more engaging and user-centered outputs.
              </p>
              <div className="skills-grid">
                {[
                  "Adobe Illustrator",
                  "Adobe Photoshop",
                  "Canva",
                  "CapCut",
                  "Figma",
                  "PowerPoint",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects fade-in">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Featured Projects
          <div className="title-underline" />
        </h2>

        <div className="project-hero">
          <div className="hero-left">
            <div className="hero-image">
              <img
                src={currentProject.image} // Used imported image from projectData
                alt={currentProject.title}
                className="project-main-image"
              />
              <div className="project-overlay">
                <span className="project-number">0{currentIndex + 1}</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="project-tag">FEATURED PROJECT</div>
            <h3 className="hero-title">{currentProject.title}</h3>
            <p className="hero-short">{currentProject.short}</p>
            <div className="hero-desc-box">
              <p className="hero-desc">{currentProject.description}</p>
            </div>
            <a
              href={currentProject.link}
              className="hero-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="hero-nav">
            <button onClick={handleBack} className="nav-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="nav-counter">
              {currentIndex + 1} / {projectData.length}
            </span>
            <button onClick={handleNext} className="nav-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="project-thumbnails">
          {projectData.map((proj, idx) => (
            <div
              key={proj.title}
              className={`thumbnail ${idx === currentIndex ? "active" : ""}`}
              onClick={() => handleSelect(idx)}
            >
              <div className="thumb-image">
                <img
                  src={proj.image} // Used imported image from projectData
                  alt={proj.title}
                  className="thumb-preview"
                />
                <div className="thumb-overlay" />
              </div>
              <div className="thumb-text">
                <span className="thumb-number">0{idx + 1}</span>
                <h4>{proj.title}</h4>
                <p>{proj.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact fade-in">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Get In Touch
          <div className="title-underline" />
        </h2>

        <div className="contact-container">
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-card-grid">
              {/* EMAIL Contact Card (from previous request) */}
              <div className="contact-card">
                <div className="contact-icon">
                  {/* STANDARD EMAIL ICON */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h4>Email</h4>
                <p>francoisdungca0521@gmail.com</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h4>Phone</h4>
                <p>0981-028-3913</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4>Location</h4>
                <p>Macabebe, Pampanga</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer fade-in">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-logo">ACOIS</h3>
            <p>Building digital experiences that matter.</p>
          </div>
          <div className="footer-right">
            <p>© 2025 Allain Francois D. Dungca</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
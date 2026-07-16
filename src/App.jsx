import { useState, useEffect } from "react";
import "./App.css";
import GeminiChat from "./components/GeminiChat";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const roles = ["Founder", "Software Engineer", "Builder", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  const achievements = [
    { event: "Founder", achievement: "CoreArch - 2026" },
    {
      event: "Excelerate",
      achievement: "Paid Mobile Engineering Intern - 2026",
    },
    { event: "JTG Cyber Exercise", achievement: "Top 3 Finalist - 2025" },
    { event: "DICT Hack4Gov CTF", achievement: "Top 7 Finalist - 2025" },
    { event: "AI Factory Hackathon", achievement: "Finalist - 2026" },
    { event: "AI Infra Summit Hackathon", achievement: "Finalist - 2026" },
    { event: "AI GENESIS Hackathon", achievement: "Finalist - 2026" },
    { event: "DICT Project Pitch", achievement: "Finalist - 2024" },
    { event: "IEEE Global Challenge", achievement: "Participant - 2026" },
  ];

  const experience = [
    {
      title: "Founder & Fullstack Developer",
      company: "CoreArch",
      period: "2026 - Present",
      description:
        "Architect and develop end-to-end fullstack solutions for scalable software applications.",
    },
    {
      title: "Mobile Software Engineer (Intern)",
      company: "Excellence",
      period: "2026",
      description:
        "Develop and maintain mobile applications using Flutter with cross-functional teams.",
    },
    {
      title: "Student Assistant (BAC & Planning Engineering)",
      company: "Leyte Normal University",
      period: "2025 - 2026",
      description:
        "Organized documentation, architected filing structures, and coordinated departmental scheduling.",
    },
    {
      title: "Freelance Developer / Consultant",
      company: "Web, GIS, Prototyping & Mobile Apps Specialist",
      period: "2024 - Present",
      description:
        "Developed websites for international (USA) and local clients (Robo Rides, LBMS). Delivered professional GIS mapping, UI/UX prototyping (Figma), custom web solutions, and mobile applications tailored to client needs.",
    },
  ];

  const projects = [
    {
      category: "IEEE / Python",
      items: [
        {
          name: "Secure Federated Learning",
          description:
            "GitHub CI/CD Vulnerabilities and Job Failure Prediction",
          stack: "Flask",
          link: "https://github.com/nyel-101",
        },
      ],
    },
    {
      category: "Web / Systems",
      items: [
        {
          name: "Robo Rides (USA)",
          description: "International client web development",
          stack: "REACT/SQL",
          link: "https://github.com/nyel-101/sunday-robo-rides",
        },
        {
          name: "LBMS (Barangay System)",
          description: "Local barangay management system",
          stack: "PHP/LARAVEL",
          link: "https://github.com/nyel-101/LBMS-Barangay-System-",
        },
        {
          name: "Mobile Repair Shop",
          description: "Repair shop operations system",
          stack: "Java",
          link: "https://github.com/nyel-101/My-Mobile-Repair-Shop-Management-System",
        },
        {
          name: "Hotel Management",
          description: "Hotel operations management",
          stack: "PHP/LARAVEL",
          link: "https://github.com/nyel-101/Dan-Daniel-Hotel-Management-System",
        },
        {
          name: "PA-HULUGAN",
          description: "Micro-installment and credit ledger system",
          stack: "PHP",
          link: "https://github.com/nyel-101/PA-HULUGAN-A-Neighborhood-Micro-Installment-and-Credit-Ledger-System",
        },
        {
          name: "Digits Central Processing",
          description: "Digital operations management",
          stack: "PHP",
          link: "https://github.com/nyel-101/Digits-Central-Processing-Management-System",
        },
        {
          name: "Personal Health Recommendations",
          description:
            "PHP/MySQL app for health records with tailored recommendations",
          stack: "PHP/MYSQL",
          link: "https://github.com/nyel-101/personal-health-recommendation-system",
        },
        {
          name: "My Static Portfolio v2.0",
          description:
            "A simple static portfolio showcasing projects and skills.",
          stack: "HTML,CSS,JS",
          link: "https://github.com/nyel-101/portfolio",
        },
        {
          name: "Tasks-Records",
          description: "Lightweight PHP/MySQL task manager with full CRUD.",
          stack: "PHP/MYSQL",
          link: "https://github.com/nyel-101/Tasks-Records",
        },
        {
          name: "Student Grade Management System",
          description:
            "A Dart OOP app to manage students, compute averages, and assign grades.",
          stack: "Dart(OOP)",
          link: "https://github.com/nyel-101/dart_roadmap",
        },
      ],
    },
    {
      category: "Mobile Applications",
      items: [
        {
          name: "Buhay Estudyante",
          description: "Student empowerment platform",
          stack: "Flutter",
          link: "https://github.com/nyel-101/buhay-estudyante",
        },
        {
          name: "Excelerate Internship Support App",
          description: "Internship management platform",
          stack: "Flutter",
          link: "https://github.com/FlutterExcelerate/Excelerate-Internship-Support-App",
        },
        {
          name: "Todo App",
          description: "A Flutter app to add, track, and manage tasks",
          stack: "Flutter",
          link: "https://github.com/nyel-101/Todo-App-",
        },
      ],
    },
    {
      category: "Python & Java  Projects",
      items: [
        {
          name: "Bank Account System",
          description:
            "OOP banking system with deposits, withdrawals, and balance tracking",
          stack: "Python",
          link: "https://github.com/nyel-101/bank_acc",
        },
        {
          name: "Inventory Management",
          description:
            "CRUD operations for inventory items with stock tracking",
          stack: "Python",
          link: "https://github.com/nyel-101/inventory_item",
        },
        {
          name: "Employee Management",
          description:
            "Employee records with OOP principles and data persistence",
          stack: "Python",
          link: "https://github.com/nyel-101/employee",
        },
        {
          name: "Music Track Analytics",
          description: "Data analysis and visualization for music tracks",
          stack: "Python",
          link: "https://github.com/nyel-101/music_track_analytics",
        },
        {
          name: "Smart Thermostat",
          description: "Temperature control system with OOP design",
          stack: "Python",
          link: "https://github.com/nyel-101/SmartThermostat",
        },
        {
          name: "Todo List Manager",
          description: "Task management with CRUD operations",
          stack: "Python",
          link: "https://github.com/nyel-101/todo-list",
        },
        {
          name: "Java Crud Projects",
          description:
            "Java + MySQL demo of Create, Read, Update, Delete operations.",
          stack: "Java",
          link: "https://github.com/nyel-101/JavaProjects-",
        },
        {
          name: "Calculator",
          description: "Calculator using Java drag‑and‑drop.",
          stack: "Java",
          link: "https://github.com/nyel-101/calculator",
        },
        {
          name: "Number Guessing Game",
          description: "A Java app where users guess a random number.",
          stack: "Java",
          link: "https://github.com/nyel-101/Number_Guessing_Game",
        },
      ],
    },
    {
      category: "GIS Mapping",
      items: [
        {
          name: "Tacloban Regional Map",
          description: "Regional GIS mapping for Tacloban City",
          stack: "QGIS",
          link: "https://github.com/nyel-101/GIS_Municipality_Of_Tacloban",
        },
        {
          name: "Locator Map Of LNU",
          description: "Regional GIS Locator Maps for LNU",
          stack: "QGIS",
          link: "https://github.com/nyel-101/Locator-Map-of-LNU",
        },
        {
          name: "Tacloban City Land Use Change (2005–2025)",
          description:
            "Regional GIS Land Use Change Raster and Vector Data Models",
          stack: "QGIS",
          link: "https://github.com/nyel-101/Tacloban-City-2005---2025-Mapping-Land-Use-Change-Raster-and-Vector-Data-Models-",
        },
      ],
    },
    {
      category: "Arduino Prototypes",
      items: [
        {
          name: "LED Blink",
          description: "Basic LED control",
          stack: "Arduino",
          link: "https://github.com/nyel-101/blink-and-led",
        },
        {
          name: "Potentiometer Control",
          description: "LED blink rate control",
          stack: "Arduino",
          link: "https://github.com/nyel-101/Control-LED-Blink-Rate-with-Potentiometer",
        },
        {
          name: "Button LED Control",
          description: "LED control with button",
          stack: "Arduino",
          link: "https://github.com/nyel-101/controlling-led-by-button",
        },
      ],
    },
  ];

  const techStack = {
    Languages: [
      "Dart",
      "Python",
      "PHP",
      "Java",
      "C",
      "Kotlin",
      "TypeScript",
      "JavaScript",
      "BASIC",
    ],
    "Web/Mobile/Frameworks": [
      "Angular",
      "MERN Stack",
      "Flutter",
      "React",
      "Flask",
      "Tailwind",
    ],
    "Backend/DB": [
      "Laravel",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Supabase",
    ],
    "Cloud and DevOps": ["Vercel", "Netlify", "Docker", "Git"],
    "Tools and IDEs": [
      "VS Code",
      "Android Studio",
      "NetBeans",
      "Visual Studio",
      "Arduino IDE",
      "QB64",
    ],
    "UI/UX, Design & Mapping Tools": [
      "Figma",
      "Draw.io",
      "Tinkercad",
      "Excalidraw",
      "Qgis",
    ],
  };

  const certificates = [
    {
      id: 1,
      name: "DICT Hack4Gov CTF",
      image: "/Hack4Gov.png",
      description: "Top 7 Finalist - 2025",
    },
    {
      id: 2,
      name: "JTG Cyber Exercise Competition",
      image: "/JTG.png",
      description: "Top 3 Finalist - 2025",
    },
    {
      id: 3,
      name: "Other Certificates",
      image: "",
      description: "Currently pending",
      pending: true,
    },
  ];

  const hackathons = [
    {
      id: 1,
      name: "JTG Cyber Exercise",
      image: "/jtg-cyber.jpg",
      achievement: "Top 3 Finalist - 2025",
    },
    {
      id: 2,
      name: "DICT Hack4Gov CTF",
      image: "/hack4gov.jpg",
      achievement: "Top 7 Finalist - 2025",
    },
    {
      id: 3,
      name: "AI Factory Hackathon",
      image: "/ai-factory.jpg",
      achievement: "Finalist - 2026",
    },
    {
      id: 4,
      name: "AI Infra Summit Hackathon",
      image: "/ai-infra.jpg",
      achievement: "Finalist - 2026",
    },
    {
      id: 5,
      name: "AI GENESIS Hackathon",
      image: "/ai-genesis.jpg",
      achievement: "Finalist - 2026",
    },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-daniel-prudenciado.pdf";
    link.download = "cv-daniel-prudenciado.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <nav className="mobile-nav">
        <div className="mobile-nav-inner">
          <a href="/" className="mobile-logo">
            Daniel Prudenciado
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>
            Stack
          </a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificates
          </a>
          <a href="#hackathons" onClick={() => setMenuOpen(false)}>
            Hackathons
          </a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>
            Achievements
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <div className="mobile-divider"></div>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="mobile-theme-btn"
          >
            {darkMode ? "Light Theme" : "Dark Theme"}
          </button>
          <button
            onClick={() => {
              downloadCV();
              setMenuOpen(false);
            }}
            className="mobile-cv-btn"
          >
            Download CV
          </button>
        </div>
      </nav>

      <aside className="sidebar">
        <div className="sidebar-inner">
          <a href="/" className="logo">
            Daniel Prudenciado
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#certificates">Certificates</a>
            <a href="#hackathons">Hackathons</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="sidebar-bottom">
            <button onClick={downloadCV} className="cv-btn">
              Download CV
            </button>
            <div className="theme-switch">
              <button
                className={`theme-opt ${!darkMode ? "is-active" : ""}`}
                onClick={() => setDarkMode(false)}
              >
                Light
              </button>
              <button
                className={`theme-opt ${darkMode ? "is-active" : ""}`}
                onClick={() => setDarkMode(true)}
              >
                Dark
              </button>
            </div>
            <div className="sidebar-contact">
              <p className="sidebar-label">Connect</p>
              <a href="mailto:dandeyjr@gmail.com">Email</a>
              <a
                href="https://www.linkedin.com/in/daniel-prudenciado-4225543a5"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nyel-101"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="hero">
          <div className="hero-grid">
            <div className="hero-image">
              <img
                src="/profile.jpg"
                alt="Daniel Prudenciado"
                className="profile-img"
                onError={(e) =>
                  (e.target.src =
                    "https://ui-avatars.com/api/?background=000&color=fff&bold=true&size=200&name=Daniel+P")
                }
              />
            </div>
            <div className="hero-text">
              <h1>Daniel Prudenciado</h1>
              <h2>{roles[roleIndex]}</h2>
              <p>
                Building scalable software solutions, modern mobile
                applications, and impactful digital experiences.
              </p>
              <div className="hero-links">
                <a
                  href="https://core-architecture.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoreArch
                </a>
                <a href="mailto:dandeyjr@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/daniel-prudenciado-4225543a5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nyel-101"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/synyel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/syny.el/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am Daniel Prudenciado, a Software Engineer and the founder of
            CoreArch. I enjoy building projects and learning along the way, with
            a strong focus on mobile development and creating impactful
            solutions.
          </p>
          <p className="about-text goal">
            My goal is simple: Build software that solves real-world problems.
          </p>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          {experience.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-header">
                <h3>{exp.title}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          {projects.map((category, idx) => (
            <div key={idx} className="project-category">
              <h3>{category.category}</h3>
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="project-item">
                  <div className="project-info">
                    <span className="project-name">{item.name}</span>
                    <span className="project-desc">{item.description}</span>
                    {item.stack && (
                      <span className="project-stack">{item.stack}</span>
                    )}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Code
                  </a>
                </div>
              ))}
            </div>
          ))}
          <p className="project-note">
            These projects demonstrate my focus on implementing CRUD operations,
            modular code architecture, and core Object-Oriented Programming
            principles.
          </p>
        </section>

        <section id="stack" className="section">
          <h2 className="section-title">Tech Stack</h2>
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="tech-category">
              <h3>{category}</h3>
              <div className="tech-items">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="certificates" className="section">
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                {cert.pending ? (
                  <div className="certificate-pending">
                    <div className="pending-icon"></div>
                    <h3>{cert.name}</h3>
                    <p>{cert.description}</p>
                    <span className="pending-badge">Pending</span>
                  </div>
                ) : (
                  <>
                    <div className="certificate-image">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            '<div class="cert-placeholder"></div>';
                        }}
                      />
                    </div>
                    <div className="certificate-info">
                      <h3>{cert.name}</h3>
                      <p>{cert.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="certificate-note">
            * Other certificates are currently pending and will be added soon.
          </p>
        </section>

        <section id="hackathons" className="section">
          <h2 className="section-title">Hackathons Gallery</h2>
          <div className="hackathons-grid">
            {hackathons.map((hack) => (
              <div key={hack.id} className="hackathon-card">
                <div className="hackathon-image">
                  <img
                    src={hack.image}
                    alt={hack.name}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="hack-placeholder"></div>';
                    }}
                  />
                </div>
                <div className="hackathon-info">
                  <h3>{hack.name}</h3>
                  <p>{hack.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="section">
          <h2 className="section-title">Achievements</h2>
          <div className="table">
            <div className="table-header">
              <span>Event</span>
              <span>Achievement</span>
            </div>
            {achievements.map((item, idx) => (
              <div key={idx} className="table-row">
                <span>{item.event}</span>
                <span>{item.achievement}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Connect</h2>
          <p className="contact-text">
            Open to collaborations, co-founder opportunities, and meaningful
            work.
          </p>
          <div className="contact-links">
            <a
              href="https://core-architecture.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoreArch
            </a>
            <a href="mailto:dandeyjr@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/daniel-prudenciado-4225543a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nyel-101"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/synyel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/syny.el/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>Copyright {new Date().getFullYear()} Daniel Prudenciado</p>
        </footer>
      </main>

      {/* Dito na-add yung chatbot mo para palagi siyang mag-render sa app */}
      <GeminiChat />
    </div>
  );
}

export default App;

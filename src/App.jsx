import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Theme handling (dark/light)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Typewriter effect para sa dynamic roles
  const dynamicRoles = [
    "Flutter · Dart · Mobile Dev",
    "Laravel · API Integration",
    "Project Manager · Agile",
    "Full-Stack · Cloud ready",
    "Deployment · CI/CD expert",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // Apply theme to body and save to localStorage
  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Rotate dynamic roles every 2.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Portfolio data (lahat ng iyong content)
  const portfolio = {
    name: "DANIEL S. PRUDENCIADO",
    role: "Founder / Project Manager · Mobile Dev · Full-Stack",
    bio: "I lead CORE Tech Architecture in Tacloban City. I connect mobile development, backend systems, and cloud infrastructure to deliver high-impact digital products. Precision, performance, and clean code define every layer of my work.",
    techCards: [
      {
        title: "Core Mobile Development",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        desc: "Flutter and Dart – cross-platform apps for iOS and Android, state management with BLoC and Riverpod, custom animations, native integrations.",
        badges: ["Flutter", "Dart", "Riverpod"],
      },
      {
        title: "Backend & API Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        desc: "Laravel with PHP – RESTful API design, authentication, middleware, Eloquent ORM, third-party integrations, scalable microservices.",
        badges: ["Laravel", "PHP", "REST API"],
      },
      {
        title: "Database Management",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        desc: "MySQL and Firebase – relational schema design, query optimization, real-time sync with Firestore, data integrity, indexing strategies.",
        badges: ["MySQL", "Firebase", "Firestore"],
      },
      {
        title: "Cloud Infrastructure",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        desc: "AWS services like EC2, S3, RDS, API Gateway – cloud architecture, cost-efficient deployments, scalable server setups.",
        badges: ["AWS EC2/S3", "RDS", "CloudFront"],
      },
      {
        title: "Deployment & Version Control",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        desc: "Git and GitHub workflows, CI/CD pipelines, Docker containerization, automated deployments, release management, DevOps best practices.",
        badges: ["Git", "Docker", "CI/CD"],
      },
    ],
    extended: ["GitHub Actions", "Docker", "RESTful APIs", "Firebase Auth"],
    achievements: [
      "Hack4Gov DICT – Top 7 Finalist",
      "JTG Cybersecurity – Top 3",
      "DICT Final Fetching – National Finalist",
      "58+ shipped projects including mobile, web, and backend",
    ],
    github: "https://github.com/nyel-101",
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="portfolio-container">
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <span>{theme === "light" ? "☀️" : "🌙"}</span>
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>

      {/* Header */}
      <div className="header">
        <div className="title-section">
          <h1>{portfolio.name}</h1>
          <div className="role-tag">{portfolio.role}</div>
          <div className="moving-words">
            <span className="typewriter-text">{dynamicRoles[roleIndex]}</span>
          </div>
        </div>
        <img
          src="./profile.jpg"
          alt="Daniel Prudenciado"
          className="profile-img"
          onError={(e) => {
            e.target.src =
              "https://ui-avatars.com/api/?background=000&color=fff&bold=true&size=130&name=Daniel+P";
          }}
        />
      </div>

      {/* Bio */}
      <p className="bio">{portfolio.bio}</p>

      {/* Dev Stack */}
      <h2 className="section-title">DEV STACK</h2>
      <div className="tech-grid">
        {portfolio.techCards.map((card, idx) => (
          <div key={idx} className="tech-card">
            <img src={card.icon} alt={card.title} className="card-icon" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="badge-row">
              {card.badges.map((b) => (
                <span key={b} className="badge">
                  {b}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Extended toolkit */}
      <div className="expertise-area">
        <div className="expertise-header">
          <strong>Extended toolkit</strong>
          <div className="badge-row">
            {portfolio.extended.map((ext) => (
              <span key={ext} className="badge">
                {ext}
              </span>
            ))}
          </div>
        </div>
        <p className="expertise-text">
          Full lifecycle management from local development to cloud deployment,
          monitoring, and iteration.
        </p>
      </div>

      {/* Track record */}
      <div className="track-section">
        <h2 className="section-title">Track record</h2>
        <div className="track-flex">
          <div>
            {portfolio.achievements.map((ach) => (
              <p key={ach}>{ach}</p>
            ))}
          </div>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fab fa-github"></i> GitHub Archive (58+ repositories)
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-card">
        <div className="contact-icon">
          <i className="fas fa-comment"></i>
        </div>
        <div className="quote-text">
          Have a project in mind? Whether it is a Flutter mobile app, Laravel
          backend, AWS deployment, full-stack dashboard, or a custom business
          system — I am ready to help.
        </div>
        <form
          className="contact-form"
          action="https://formsubmit.co/dandevjr@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Project Inquiry from Portfolio"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="name" placeholder="Your name" required />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
          ></textarea>
          <button type="submit">Send message directly</button>
          <div className="form-status"></div>
        </form>
      </div>

      <footer>© {new Date().getFullYear()} Daniel Prudenciado</footer>
    </div>
  );
}

export default App;

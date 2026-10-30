import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "PERSONAL",
    title: "Portfolio",
    description: "A minimal personal website presenting my skills, development journey, and selected work.",
    label: "View portfolio",
    href: "#home"
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT",
    title: "Apple Website Clone",
    description: "A static Apple-inspired website recreation focused on layout, responsive design, and visual detail.",
    label: "View project",
    href: "https://github.com/M3moria"
  }
];

const skills = [
  ["5", "HTML"],
  ["3", "CSS"],
  ["↔", "Responsive Design"],
  ["JS", "JavaScript"],
  ["C++", "CPP"],
  ["J", "Java"],
  ["DSA", "Data Structures & Algorithms"],
  ["OS", "Operating Systems"],
  ["N", "Networking"],
  ["R", "React"],
  ["G", "Git"],
  ["GH", "GitHub"]
];

function Mark({ dark = false }) {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="13" fill={dark ? "currentColor" : "var(--text)"} />
      <path d="M13 14L23 30L33 14M23 30V36" fill="none" stroke="var(--mark-stroke)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThemeIcon({ dark }) {
  return dark ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M4.7 4.7l1.4 1.4m11.8 11.8 1.4 1.4M2.5 12h2m15 0h2M4.7 19.3l1.4-1.4M17.9 6.1l1.4-1.4" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.2A8.3 8.3 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" /></svg>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#111111" : "#ffffff");
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <>
      <header className="navbar container">
        <a href="#home" className="logo" aria-label="Yabets Melese home"><Mark /></a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setDark(value => !value)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
          <ThemeIcon dark={dark} />
        </button>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Yabets Melese</h1>
            <h2>Frontend Developer</h2>
            <p className="intro">I build clean, responsive, and user-friendly web interfaces, turning ideas into Reality digital experiences.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">View Projects</a>
              <a href="#contact" className="text-link">Contact Me <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>Skills</h2>
          </div>
          <ul className="skills">
            {skills.map(([symbol, name]) => (
              <li className="skill" key={name}>
                <span aria-hidden="true">{symbol}</span>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>Projects</h2>
          </div>
          <div className="projects">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <p className="project-number">{project.number} / {project.type}</p>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer noopener" : undefined}>
                    {project.label} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="learning container" aria-labelledby="learning-title">
          <span className="learning-icon" aria-hidden="true">↗</span>
          <div>
            <h3 id="learning-title">Currently learning</h3>
            <p>Building better interfaces and writing cleaner code.</p>
          </div>
        </section>

        <section className="contact container" id="contact">
          <p className="eyebrow">03 / CONTACT</p>
          <h2>Let's connect<span>.</span></h2>
          <p>Interested in collaborating or discussing a project? Get in touch.</p>
          <div className="contact-links">
            <a href="https://github.com/M3moria" target="_blank" rel="noreferrer noopener">GitHub ↗</a>
            <a href="mailto:yabex19@gmail.com">Email ↗</a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a href="#home" className="footer-logo">Yabets<span>.</span></a>
        <p>© 2026 Yabets Melese</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
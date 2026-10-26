
import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "EVANS KOFI FOSU",
  role: "Computer Science Graduate & IT Professional",
  location: "Ghana",
  email: "evans.fosu371@gmail.com",
  github: "https://github.com/LouisDrake371",
  linkedin: "https://www.linkedin.com/in/EVANS KOFI FOSU/",
};

const skills = [
  {
    title: "Software Development",
    icon: Code2,
    description: "Applications, APIs, databases and web technologies.",
    items: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL", "Python"],
  },
  {
    title: "Networking & Infrastructure",
    icon: Network,
    description: "Network configuration, troubleshooting and infrastructure design.",
    items: ["TCP/IP", "VLANs", "Cisco Packet Tracer", "Subnetting", "DNS", "DHCP"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Security fundamentals, system hardening and authorized lab testing.",
    items: ["Network Security", "Access Control", "Linux", "Security Fundamentals"],
  },
  {
    title: "AI, Data & Problem Solving",
    icon: BrainCircuit,
    description: "Data-driven applications and intelligent software prototypes.",
    items: ["Python", "Data Analysis", "Machine Learning Fundamentals", "SQL"],
  },
];

const projects = [
  {
    number: "01",
    category: "NETWORKING",
    title: "Enterprise Network Design",
    description:
      "An enterprise finance-floor network design featuring VLAN segmentation, IP addressing, access controls and a scalable switch architecture.",
    tools: ["Cisco Packet Tracer", "VLANs", "TCP/IP"],
    icon: Network,
    status: "LAB PROJECT",
    github: "",
    demo: "",
  },
  {
    number: "02",
    category: "SOFTWARE DEVELOPMENT",
    title: "Hostel Booking Application",
    description:
      "A web application project for managing users, hostel listings, rooms and reservations through an API and relational database.",
    tools: ["React", "Node.js", "Express", "PostgreSQL"],
    icon: Code2,
    status: "DEVELOPMENT PROJECT",
    github: "",
    demo: "",
  },
  {
    number: "03",
    category: "AI & HEALTH TECHNOLOGY",
    title: "Patient Diagnosis Prototype",
    description:
      "An educational clinical decision-support project exploring symptom inputs, data processing and machine-learning-assisted predictions.",
    tools: ["Python", "Machine Learning", "Data Analysis"],
    icon: BrainCircuit,
    status: "RESEARCH PROJECT",
    github: "",
    demo: "",
  },
  {
    number: "04",
    category: "CYBERSECURITY",
    title: "Security Testing Lab",
    description:
      "A planned or ongoing lab for learning network discovery, security assessment and vulnerability analysis on authorized test systems.",
    tools: ["Linux", "Networking", "Security Testing"],
    icon: ShieldCheck,
    status: "LAB PROJECT",
    github: "",
    demo: "",
  },
];

const experience = [
  {
    title: "Bachelor's Degree in Computer Science",
    organization: "UNIVERSITY OF BUSINESS AND INTEGRATED DEVELOPMENT STUDIES (UBIDS)",
    period: "2022 – 2025",
    description:
      "Intensive relevant coursework, academic achievements, research and practical technical work.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            &lt;{profile.name.split(" ")[0]} <span>/&gt;</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE · TECHNOLOGY
            </div>

            <h1>
              Building technology
              <br />
              that solves <span>real problems.</span>
            </h1>

            <p className="hero-description">
              I'm {profile.name}, a technology professional interested in
              software development, IT infrastructure, cybersecurity and
              intelligent applications. I turn technical ideas into practical
              solutions through continuous learning and hands-on projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my projects <ArrowDownRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span><Globe size={15} /> {profile.location}</span>
              <span><Terminal size={15} /> Practical learning</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Technical profile summary">
            <div className="visual-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span>profile.jsx</span>
              <Code2 size={17} />
            </div>
            <div className="code-panel">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"{profile.name}"</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; focus: [</p>
              <p><span className="code-muted">04</span> &nbsp; &nbsp; <span className="code-green">"Software"</span>,</p>
              <p><span className="code-muted">05</span> &nbsp; &nbsp; <span className="code-green">"Networking"</span>,</p>
              <p><span className="code-muted">06</span> &nbsp; &nbsp; <span className="code-green">"Security"</span>,</p>
              <p><span className="code-muted">07</span> &nbsp; &nbsp; <span className="code-green">"AI & Data"</span></p>
              <p><span className="code-muted">08</span> &nbsp; ],</p>
              <p><span className="code-muted">09</span> &nbsp; mindset: <span className="code-blue">"Always learning"</span></p>
              <p><span className="code-muted">10</span> {"}"};</p>
              <p className="code-comment">// Turning ideas into working solutions.</p>
            </div>
            <div className="visual-footer">
              <span><CheckCircle2 size={15} /> Building. Testing. Improving.</span>
              <span className="visual-live">PORTFOLIO</span>
            </div>
          </div>

          <a className="scroll-hint" href="#about">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        <section className="about section container" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT"
            title="Curiosity backed by practical work."
            description="A growing technical skill set built through study, experimentation and project-based learning."
          />
          <div className="about-grid">
            <div className="about-copy">
              <p>
                My background in Computer Science has given me a foundation in
                computational thinking, software, data and problem-solving.
                I am interested in how technology can help organizations work
                more efficiently, securely and intelligently.
              </p>
              <p>
                I use projects to develop my skills, understand real-world
                technical challenges and document what I learn. My goal is to
                keep building reliable solutions while growing as a technology
                professional.
              </p>
              <a className="text-link" href="#contact">
                Let's connect <ArrowRight size={16} />
              </a>
            </div>
            <div className="about-points">
              {[
                ["01", "Problem solving", "Break challenges into practical, testable steps."],
                ["02", "Continuous learning", "Build skills through hands-on practice."],
                ["03", "Security awareness", "Consider reliability and security in technical work."],
                ["04", "Documentation", "Explain decisions, implementation and outcomes."],
              ].map(([number, title, text]) => (
                <div className="about-point" key={number}>
                  <span className="point-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="02 / TECHNICAL SKILLS"
              title="Tools for solving problems."
              description="Replace or remove technologies to reflect the skills you can confidently demonstrate."
            />
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article className="skill-card" key={skill.title}>
                    <div className="skill-icon"><Icon size={23} /></div>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <div className="tag-list">
                      {skill.items.map((item) => (
                        <span className="tag" key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects section container" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Projects that show the process."
            description="Each project should demonstrate the problem, your contribution, the tools used and the result."
          />
          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <Icon size={24} className="project-icon" />
                  </div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.tools.map((tool) => (
                      <span className="tag" key={tool}>{tool}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    <span className="project-status">{project.status}</span>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Source code for ${project.title}`}>
                        <Code2 size={19} />
                      </a>
                    ) : (
                      <span className="link-placeholder" title="Add your repository URL in App.jsx">
                        <Code2 size={19} />
                      </span>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Demo of ${project.title}`}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="section-note">
            Project descriptions are starting examples. Update each card to
            accurately reflect the current status of your work.
          </p>
        </section>

        <section className="education section" id="education">
          <div className="container">
            <SectionHeading
              eyebrow="04 / EDUCATION"
              title="Learning and development."
              description="Show relevant qualifications, certifications and practical training."
            />
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-icon"><GraduationCap size={22} /></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.organization}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
              <article className="timeline-item">
                <div className="timeline-icon"><ShieldCheck size={22} /></div>
                <div className="timeline-content">
                  <span className="timeline-period">CERTIFICATIONS</span>
                  <h3>Professional development</h3>
                  <h4>CCNA, Network+, Security+, CompTIA A+</h4>
                  <p>
                    Obtained through rigorous training and examination processes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section container" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">05 / CONTACT</span>
            <h2>Have a project or opportunity in mind?</h2>
            <p>
              I'm open to professional connections, technical collaboration
              and opportunities to keep learning and contribute.
            </p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Contact me <ArrowUpRight size={17} />
            </a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home">&lt;{profile.name.split(" ")[0]} <span>/&gt;</span></a>
        <p>Designed and built with React.</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;

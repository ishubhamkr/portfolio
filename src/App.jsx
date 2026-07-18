import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
]

const RESUME_URL = 'https://raw.githubusercontent.com/ishubhamkr/Resume/main/Shubham_Resume.pdf'

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:mshubham0309@gmail.com', icon: 'email' },
  { label: 'Call', href: 'tel:+918002887706', icon: 'phone' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imshubhamkumar/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/ishubhamkr', icon: 'github' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/_mshubham', icon: 'hackerrank' }
]

const SKILL_GROUPS = [
  {
    title: 'Languages & Frameworks',
    skills: ['Java', 'Spring Boot', 'React', 'Redux', 'Python', 'C++', 'FastAPI', 'JavaScript', 'HTML', 'CSS', 'GraphQL']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Jenkins', 'GitHub Actions', 'Git']
  },
  {
    title: 'Data & Messaging',
    skills: ['MongoDB', 'SQL', 'Kafka']
  },
  {
    title: 'Testing & Quality',
    skills: ['JUnit', 'Mockito', 'Postman', 'SonarQube', 'JMeter']
  },
  {
    title: 'Monitoring & Observability',
    skills: ['Splunk', 'Kibana', 'New Relic', 'Grafana', 'Lens', 'OpenLens', 'ServiceNow']
  },
  {
    title: 'Security & Identity',
    skills: ['Spring Security', 'JWT', 'CodeQL', 'Prisma Cloud', 'HashiVault', 'Secure Coding', 'Cybersecurity', 'Threat Detection', 'Authentication', 'Authorization', 'Encryption', 'IAM', 'Security by Design']
  },
  {
    title: 'AI & Emerging Tech',
    skills: ['RAG', 'MCP Servers', 'AI Agents', 'LLMs', 'GitHub Copilot']
  },
  {
    title: 'Enterprise & Delivery Tools',
    skills: ['Rally', 'Pega', 'Zenmap']
  }
]

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Optum Global Solutions (UHG)',
    period: 'March 2025 – Present',
    location: 'Noida, Uttar Pradesh, India',
    points: [
      'Enhanced Kafka streams and RESTful architecture through targeted code refactoring, improving API performance by 10%.',
      'Resolved critical high-priority ServiceNow incidents while maintaining 99.95% system uptime by strengthening security protocols and system stability.',
      'Refactored the Provider Digital Security application, integrating React, Node.js (Abyss), and MongoDB, eliminating critical and high vulnerabilities, and migrating to the latest Spring and Java 21, improving ticket resolution time by 20%.',
      'Integrated CodeQL and Prisma Cloud security scanning into Jenkins and GitHub Actions pipelines to strengthen secure delivery and catch vulnerabilities early.',
      'Built monitoring dashboards in Splunk, Kibana, New Relic, and Grafana, and established war-room alerts and pager notifications for faster issue resolution.',
      'Mentored new engineers and streamlined onboarding, reducing onboarding time by 30%, while leading daily scrums and code reviews for secure, high-quality releases.',
      'Uses AI tools such as GitHub Copilot to boost day-to-day development productivity and troubleshooting.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Optum Global Solutions (UHG)',
    period: 'July 2022 – February 2025',
    location: 'Noida, Uttar Pradesh, India',
    points: [
      'Optimized MongoDB through migration scripts, schema validation, index tuning, and aggregation pipelines to accelerate performance.',
      'Resolved 200+ high-priority ServiceNow incidents, maintaining 99.9% system uptime and strengthening security protocols.',
      'Built frontend and backend APIs for the Digital Security Helpdesk Portal using React, Node.js (Abyss), and MongoDB, improving ticket resolution time by 15%.',
      'Deployed production monitoring using Splunk, Kibana, and New Relic, and automated database maintenance with cron jobs, reducing downtime by 10%.',
      'Contributed to automated testing with JUnit, Mockito, and JMeter within Agile Scrum delivery.'
    ]
  },
  {
    role: 'Teaching Assistant',
    company: 'Indian Institute of Information Technology, Gwalior',
    period: 'January 2022 – May 2022',
    location: 'Gwalior, Madhya Pradesh, India',
    points: [
      'Supported 1st-year B.Tech students in the C Programming Lab and 2nd-year students in the AI Lab, delivering live coding sessions.',
      'Guided students through C programming and AI-related coding assignments, promptly resolving queries and doubts.'
    ]
  }
]

const PROJECTS = [
  {
    title: 'Provider Digital Security',
    description: 'A security-first digital security system for the UnitedHealthcare (UHC) Provider Portal, enabling authorization for 1.4M+ users and processing 1.2B+ transactions annually while protecting sensitive data from unauthorized internal and external access.',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Spring Security', 'JWT', 'HashiVault', 'Kafka']
  },
  {
    title: 'Enhanced Provider Validation (EPV) Portal',
    description: 'A web application enabling Out Of Network (OON) providers to register their Taxpayer Identification Number (TIN) and manage credentialing information, streamlining validation and maintenance of provider data for compliance and ease of use.',
    tags: ['Spring Boot', 'React', 'MongoDB', 'Spring Security', 'JWT', 'Kafka', 'Pega']
  },
  {
    title: 'AI Digital Security Chatbot',
    description: 'An AI-powered chatbot built with FastAPI that indexes and understands the team\'s repositories, then answers engineering and security questions instantly using retrieval-augmented generation over the codebase.',
    tags: ['FastAPI', 'Python', 'RAG', 'LLMs', 'AI Agents', 'Secure Coding']
  },
  {
    title: 'AI Allure Report Agent',
    description: 'An AI-powered agent built with FastAPI that analyzes Allure test execution reports and automatically emails detailed, actionable summaries to stakeholders after every test run.',
    tags: ['FastAPI', 'Python', 'AI Agents', 'Automation', 'Reporting']
  }
]

const EDUCATION = [
  {
    degree: 'M.Tech in Information Security',
    school: 'Indian Institute of Information Technology, Gwalior',
    location: 'Gwalior, Madhya Pradesh, India',
    period: 'July 2020 – June 2022'
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'West Bengal University of Technology',
    location: 'Kolkata, West Bengal, India',
    period: 'June 2015 – July 2019'
  }
]

const PUBLICATIONS = [
  {
    title: 'Securing IoT with Blockchain: Detecting Malicious Nodes with TLS Certificates',
    description: 'International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3), June 8, 2023',
    href: 'https://ieeexplore.ieee.org/document/10262746'
  }
]

const CERTIFICATIONS = [
  { title: 'React - The Complete Guide 2024', href: 'https://www.udemy.com/certificate/UC-c1382b60-775e-4ed0-a988-68856bd119f7/' },
  { title: 'Core Java - Full Course', href: 'https://www.udemy.com/certificate/UC-7967db37-7322-4c3e-be14-d5b41f7c5c33/' },
  { title: 'Programming Foundations: Secure Coding', href: 'https://www.linkedin.com/learning/certificates/3ea82b8ea8e97c950d6f44143bbe317f3a1d911a17fdb8dfa6df3bec311c8b1a' },
  { title: 'Blockchain Basics', href: 'https://www.coursera.org/verify/NNSN6HC6FJTE' },
  { title: 'AWS Certified Cloud Practitioner', href: 'https://www.credly.com/badges/25fc2b7a-686d-4e8a-8bf8-e2ed30814de0/linked_in_profile' },
  { title: 'AWS S3 Basics', href: 'https://www.coursera.org/account/accomplishments/certificate/C2MFU7WWF39U' },
  { title: 'Optum AI Dojo Certification' }
]

const ACHIEVEMENTS = [
  'Qualified GATE-CS in 2019, 2020 and 2022',
  'Global Rank 148 in CodeChef September Challenge 2021 Division 3',
  '5-star rating in C++ on HackerRank'
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const SOCIAL_ICON_PATHS = {
  email: {
    viewBox: '0 0 512 512',
    path: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
  },
  phone: {
    viewBox: '0 0 512 512',
    path: 'M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z'
  },
  linkedin: {
    viewBox: '0 0 448 512',
    path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
  },
  github: {
    viewBox: '0 0 24 24',
    path: 'M12 0C5.37 0 0 5.373 0 12C0 17.303 3.438 21.8 8.205 23.385C8.805 23.495 9.025 23.14 9.025 22.81C9.025 22.5 9.015 21.807 9.01 21.11C5.672 21.823 4.968 19.534 4.968 19.534C4.422 18.18 3.633 17.845 3.633 17.845C2.546 17.135 3.72 17.15 3.72 17.15C4.922 17.235 5.555 18.414 5.555 18.414C6.633 20.29 8.396 19.785 9.081 19.485C9.189 18.7 9.496 18.18 9.83 17.905C7.14 17.625 4.305 16.605 4.305 11.995C4.305 10.694 4.77 9.61 5.572 8.765C5.444 8.477 5.07 7.31 5.68 5.605C5.68 5.605 6.705 5.29 9 6.56C9.957 6.28 11.035 6.14 12.115 6.14C13.195 6.14 14.273 6.28 15.23 6.56C17.523 5.29 18.548 5.605 18.548 5.605C19.16 7.31 18.788 8.477 18.66 8.765C19.462 9.61 19.923 10.694 19.923 11.995C19.923 16.615 17.084 17.62 14.388 17.885C14.82 18.245 15.21 19.02 15.21 20.185C15.21 21.81 15.195 22.88 15.195 22.81C15.195 23.14 15.405 23.495 16.005 23.385C20.77 21.8 24.21 17.303 24.21 12C24.21 5.373 18.627 0 12 0Z'
  },
  hackerrank: {
    viewBox: '0 0 512 512',
    path: 'M477.5 128C463 103.1 285.1 0 256.2 0S49.3 102.8 34.8 128s-14.5 230.8 0 256 192.4 128 221.3 128S463 409.1 477.5 384s14.5-231 0-256zM316.1 414.2c-4 0-40.9-35.8-38-38.7 .9-.9 6.3-1.5 17.6-1.8 0-26.2 .6-68.6 .9-86.3 0-2-.4-3.4-.4-5.9h-79.9c0 7.1-.5 36.2 1.4 72.9 .2 4.5-1.6 6-5.7 5.9-10.1 0-20.3-.1-30.4-.1-4.1 0-5.9-1.5-5.7-6.1 .9-33.4 3-84-.2-212.7v-3.2c-9.7-.4-16.4-1-17.3-1.8-2.9-2.9 34.5-38.7 38.5-38.7s41.2 35.8 38.3 38.7c-.9 .9-7.9 1.5-16.8 1.8v3.2c-2.4 25.8-2 79.6-2.6 105.4h80.3c0-4.6 .4-34.7-1.2-83.6-.1-3.4 1-5.2 4.2-5.2 11.1-.1 22.2-.1 33.2-.1 3.5 0 4.6 1.7 4.5 5.4C333 354.6 336 341.3 336 373.7c8.9 .4 16.8 1 17.7 1.8 2.9 2.9-33.6 38.7-37.6 38.7z'
  }
}

function SocialIcon({ href, label, icon }) {
  const isExternal = href.startsWith('http')
  const iconData = SOCIAL_ICON_PATHS[icon]
  return (
    <a
      className="social-btn"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
    >
      <svg viewBox={iconData.viewBox} fill="currentColor" aria-hidden="true">
        <path d={iconData.path} />
      </svg>
    </a>
  )
}

function Nav({ open, setOpen }) {
  const handleClick = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={handleClick}>
          SK<span className="brand-dot">.</span>
        </a>
        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={handleClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={`nav-toggle ${open ? 'nav-toggle-open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="glow glow-1" aria-hidden="true"></div>
      <div className="glow glow-2" aria-hidden="true"></div>
      <div className="glow glow-3" aria-hidden="true"></div>
      <div className="section-inner hero-inner reveal">
        <p className="eyebrow">Full-Stack AI Developer · AI Engineer · Secure Software Builder</p>
        <h1>
          Hi, I'm <span className="gradient-text">Shubham Kumar</span>
        </h1>
        <p className="hero-headline">
          I architect intelligent, secure, enterprise-grade systems — engineering
          AI-driven platforms with the precision of a security specialist. Senior
          Software Engineer at Optum Global Solutions (UHG), building resilient,
          scalable systems that perform under real-world conditions.
        </p>
        <p className="hero-location">📍 Noida, Uttar Pradesh, India</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Download Resume</a>
        </div>
        <div className="hero-socials">
          {SOCIAL_LINKS.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">About Me</h2>
        <div className="glass-card about-card">
          <p>
            Senior Software Engineer at Optum Global Solutions (UHG) with 4+ years of
            experience building and supporting enterprise healthcare applications used by
            millions, specializing in Java, Spring Boot, React, Kafka, MongoDB, and AWS.
          </p>
          <p>
            Skilled in secure software development, code reviews, mentoring, and Agile
            delivery, with a track record of resolving high-priority incidents, hardening
            APIs, and maintaining 99.9%+ system uptime across critical provider platforms.
          </p>
          <p>
            My work sits at the intersection of AI engineering and secure enterprise
            systems — leveraging RAG, AI agents, LLMs, and tools like GitHub Copilot to
            boost productivity, while embedding authentication, authorization,
            encryption, and security-by-design into every layer of the stack.
          </p>
          <p>
            Holds an M.Tech in Information Security from IIIT Gwalior and continues
            exploring modern web development, automation, and applied AI.
          </p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <div className="glass-card skill-group reveal" style={{ '--i': i }} key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-badges">
                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    <span className="skill-icon">{skill.charAt(0)}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div className="timeline-item reveal" style={{ '--i': i }} key={item.role + item.period}>
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-head">
                  <h3>{item.role}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-company">{item.company} · {item.location}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div className="glass-card project-card reveal" style={{ '--i': i }} key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Education</h2>
        <div className="cards-grid">
          {EDUCATION.map((edu, i) => (
            <div className="glass-card reveal" style={{ '--i': i }} key={edu.degree}>
              <h3>{edu.degree}</h3>
              <p className="muted">{edu.school}</p>
              <p className="muted">{edu.location}</p>
              <p className="muted">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Publications</h2>
        <div className="cards-grid">
          {PUBLICATIONS.map((pub, i) => (
            <div className="glass-card reveal" style={{ '--i': i }} key={pub.title}>
              <h3>
                <a href={pub.href} target="_blank" rel="noopener noreferrer">{pub.title}</a>
              </h3>
              <p className="muted">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Certifications</h2>
        <div className="pill-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <div className="glass-card pill-card reveal" style={{ '--i': i }} key={cert.title}>
              {cert.href ? (
                <a href={cert.href} target="_blank" rel="noopener noreferrer">{cert.title}</a>
              ) : (
                cert.title
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Achievements</h2>
        <div className="pill-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <div className="glass-card pill-card reveal" style={{ '--i': i }} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner reveal">
        <h2 className="section-title">Contact</h2>
        <div className="glass-card contact-card">
          <p>
            Open to conversations on AI engineering, secure enterprise systems, and
            impactful software. Reach out anytime.
          </p>
          <div className="contact-links">
            <a href="mailto:mshubham0309@gmail.com" className="btn btn-primary">
              mshubham0309@gmail.com
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Download Resume
            </a>
          </div>
          <div className="hero-socials contact-socials">
            {SOCIAL_LINKS.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <p>© {new Date().getFullYear()} Shubham Kumar. All rights reserved.</p>
        <p className="muted">Full-Stack AI Developer / Senior Software Engineer</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  useReveal()

  return (
    <div className="app">
      <Nav open={navOpen} setOpen={setNavOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

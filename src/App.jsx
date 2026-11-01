import { useEffect, useMemo, useState } from 'react';
import './styles.css';

const PHOTO_URL = 'https://raw.githubusercontent.com/ishubhamkr/portfolio/refs/heads/main/images/shubham_kumar.png';

const DEVICON = (name, file = `${name}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}`;
const SIMPLE_ICON = (name, color = 'ffffff') => `https://cdn.simpleicons.org/${name}/${color}`;

const NAV_ITEMS = [
  { id: 'home', label: 'Home', number: '01', icon: 'home' },
  { id: 'about', label: 'About', number: '02', icon: 'user' },
  { id: 'experience', label: 'Experience', number: '03', icon: 'briefcase' },
  { id: 'projects', label: 'Projects', number: '04', icon: 'code' },
  { id: 'stack', label: 'Tech Stack', number: '05', icon: 'layers' },
  { id: 'education', label: 'Education', number: '06', icon: 'graduation' },
  { id: 'credentials', label: 'Credentials', number: '07', icon: 'award' },
  { id: 'contact', label: 'Contact', number: '08', icon: 'mail' },
];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ishubhamkr',
    logo: SIMPLE_ICON('github', 'ffffff'),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imshubhamkumar',
    logo: SIMPLE_ICON('linkedin', '0A66C2'),
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com/_mshubham',
    logo: SIMPLE_ICON('hackerrank', '00EA64'),
  },
];

const TECH_GROUPS = [
  {
    title: 'Core Engineering',
    note: 'Production application development across backend and frontend systems.',
    items: [
      { name: 'Java', logo: DEVICON('java') },
      { name: 'Spring Boot', logo: DEVICON('spring') },
      { name: 'Python', logo: DEVICON('python') },
      { name: 'FastAPI', logo: DEVICON('fastapi') },
      { name: 'JavaScript', logo: DEVICON('javascript') },
      { name: 'React', logo: DEVICON('react') },
      { name: 'C++', logo: DEVICON('cplusplus') },
      { name: 'HTML5', logo: DEVICON('html5') },
      { name: 'CSS3', logo: DEVICON('css3') },
    ],
  },
  {
    title: 'Cloud & Platform',
    note: 'Cloud modernization, container platforms, IaC and automated delivery.',
    items: [
      { name: 'Microsoft Azure', logo: DEVICON('azure') },
      { name: 'AWS', logo: DEVICON('amazonwebservices', 'amazonwebservices-original-wordmark.svg') },
      { name: 'Docker', logo: DEVICON('docker') },
      { name: 'Kubernetes', logo: DEVICON('kubernetes') },
      { name: 'Terraform', logo: DEVICON('terraform') },
      { name: 'GitHub Actions', logo: DEVICON('githubactions') },
      { name: 'Jenkins', logo: DEVICON('jenkins') },
      { name: 'Git', logo: DEVICON('git') },
    ],
  },
  {
    title: 'Data, Messaging & Observability',
    note: 'Distributed data flows, operational visibility and production diagnostics.',
    items: [
      { name: 'Apache Kafka', logo: DEVICON('apachekafka') },
      { name: 'MongoDB', logo: DEVICON('mongodb') },
      { name: 'MySQL', logo: DEVICON('mysql') },
      { name: 'Splunk', logo: SIMPLE_ICON('splunk', 'ffffff') },
      { name: 'Grafana', logo: DEVICON('grafana') },
      { name: 'New Relic', logo: SIMPLE_ICON('newrelic', '1CE783') },
      { name: 'Postman', logo: DEVICON('postman') },
    ],
  },
  {
    title: 'AI & Secure Delivery',
    note: 'Practical AI adoption supported by secure SDLC and quality automation.',
    items: [
      { name: 'OpenAI', logo: SIMPLE_ICON('openai', 'ffffff') },
      { name: 'GitHub Copilot', logo: SIMPLE_ICON('githubcopilot', 'ffffff') },
      { name: 'OWASP', logo: SIMPLE_ICON('owasp', 'ffffff') },
      { name: 'SonarQube', logo: SIMPLE_ICON('sonarqubeserver', '4E9BCD') },
      { name: 'Prisma Cloud', logo: SIMPLE_ICON('prisma', 'ffffff') },
      { name: 'HashiCorp Vault', logo: SIMPLE_ICON('vault', 'FFEC6E') },
    ],
  },
];

const ALL_TECH = TECH_GROUPS.flatMap((group) => group.items);

const EXPERIENCE = [
  {
    role: 'Software Engineer Lead',
    company: 'Optum · UnitedHealth Group',
    period: 'Sep 2026 — Present',
    location: 'Noida, Uttar Pradesh, India',
    mode: 'Full-time',
    featured: true,
    bullets: [
      'Leading secure Microsoft Azure modernization using App Services, Azure Functions, Key Vault, Storage, private networking, managed identity, RBAC and observability services.',
      'Driving Infrastructure-as-Code and delivery automation with Terraform, GitHub Actions, Azure OIDC, reusable modules and production-ready CI/CD patterns.',
      'Building AI-enabled engineering workflows with Python, APIs and cloud services to improve operational efficiency and developer productivity.',
      'Providing technical leadership across architecture, cloud security, modernization, code reviews, mentoring and cross-functional delivery.',
    ],
    tags: ['Azure', 'Terraform', 'GitHub Actions', 'Java', 'Spring Boot', 'React', 'AI Engineering'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Optum · UnitedHealth Group',
    period: 'Mar 2025 — Aug 2026',
    location: 'Noida, Uttar Pradesh, India',
    mode: 'Full-time',
    bullets: [
      'Integrated OWASP-aligned secure coding standards and CodeQL / Prisma Cloud scanning into Jenkins and GitHub Actions pipelines.',
      'Designed conversational AI solutions with FastAPI or Flask, OpenAI models and vector-based retrieval for context-aware engineering knowledge discovery.',
      'Led code reviews across Java Spring Boot services and React applications, strengthening performance, maintainability and regulatory security compliance.',
      'Mentored new graduates and collaborated with Product, QA and DevOps teams to refine requirements and deliver scalable features.',
    ],
    tags: ['Secure SDLC', 'CodeQL', 'Prisma Cloud', 'FastAPI', 'RAG', 'LLMs', 'Mentorship'],
  },
  {
    role: 'Software Engineer',
    company: 'Optum · UnitedHealth Group',
    period: 'Jul 2022 — Feb 2025',
    location: 'Noida, Uttar Pradesh, India',
    mode: 'Full-time',
    bullets: [
      'Developed enterprise digital-security applications using Java, Spring Boot, React, REST APIs, Kafka and MongoDB.',
      'Optimized Kafka streams and REST APIs, contributing to a 10% improvement in API performance through focused refactoring.',
      'Resolved 200+ high-priority production incidents while supporting 99.9% system uptime and stronger security controls.',
      'Built full-stack portal features and MongoDB migration scripts that improved reliability, access workflows and supportability.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'Kafka', 'MongoDB', 'REST APIs', 'ServiceNow'],
  },
  {
    role: 'Teaching Assistant',
    company: 'ABV-IIITM, Gwalior',
    period: 'Jan 2022 — May 2022',
    location: 'Gwalior, Madhya Pradesh, India',
    mode: 'Academic',
    bullets: [
      'Supported first-year C Programming labs and second-year Artificial Intelligence labs.',
      'Delivered live coding sessions and provided timely guidance for assignments and technical questions.',
    ],
    tags: ['C', 'Artificial Intelligence', 'Live Coding', 'Mentoring'],
  },
];

const EARLY_EXPERIENCE = [
  {
    role: 'Campus Ambassador',
    company: 'Techkriti · IIT Kanpur',
    period: 'Oct 2017 — Apr 2018',
  },
  {
    role: 'Campus Ambassador',
    company: 'Unmaad · IIM Bangalore',
    period: 'Oct 2017 — Mar 2018',
  },
];

const PROJECTS = [
  {
    number: '01',
    type: 'AI Engineering',
    title: 'AI Digital Security Chatbot',
    summary:
      'A FastAPI-powered assistant that indexes engineering repositories and enables context-aware security and implementation questions through retrieval-augmented generation.',
    impact: 'Makes distributed technical knowledge easier to discover and reuse across engineering teams.',
    tags: ['FastAPI', 'Python', 'RAG', 'LLMs', 'AI Agents', 'Secure Coding'],
    icon: 'spark',
    visual: 'network',
  },
  {
    number: '02',
    type: 'Agentic Automation',
    title: 'AI Allure Report Agent',
    summary:
      'An AI agent that interprets Allure test execution reports and automatically produces detailed, actionable stakeholder summaries after test runs.',
    impact: 'Reduces manual reporting effort and shortens the feedback loop between test execution and action.',
    tags: ['FastAPI', 'Python', 'AI Agents', 'Automation', 'Reporting'],
    icon: 'bot',
    visual: 'report',
  },
  {
    number: '03',
    type: 'Enterprise Security',
    title: 'Digital Security for Provider Portal',
    summary:
      'Authorization workflows for a large enterprise provider platform, supporting organization access, TIN registration and secure user-management journeys.',
    impact: 'Supported workflows serving 1.4M+ users and 1.2B annual transactions.',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'JWT', 'Kafka', 'HashiCorp Vault'],
    icon: 'shield',
    visual: 'security',
  },
  {
    number: '04',
    type: 'Full-stack Platform',
    title: 'Enhanced Provider Validation Portal',
    summary:
      'Provider registration and validation workflows built with Spring Boot and React, including document submission, REST integrations and Kafka-based tracking.',
    impact: 'Improved registration visibility and verification workflows for external organizations.',
    tags: ['Spring Boot', 'React', 'MongoDB', 'REST APIs', 'Kafka', 'Pega'],
    icon: 'workflow',
    visual: 'workflow',
  },
];

const EDUCATION = [
  {
    degree: 'Master of Technology (M.Tech)',
    field: 'Information Security',
    institution: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management',
    short: 'ABV-IIITM, Gwalior',
    period: 'Aug 2020 — May 2022',
    location: 'Gwalior, Madhya Pradesh, India',
    monogram: 'IIITM',
    highlights: ['Information Security', 'Artificial Intelligence', 'Core Java', 'Teaching Assistant'],
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'West Bengal University of Technology, Kolkata',
    short: 'Techno India Salt Lake · Main Campus',
    period: 'Aug 2015 — Jul 2019',
    location: 'Kolkata, West Bengal, India',
    monogram: 'WBUT',
    highlights: ['Computer Science', 'Software Engineering', 'Core Java', 'Campus Leadership'],
  },
];

const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    meta: 'Issued Oct 2026 · Expires Oct 2027',
    href: 'https://learn.microsoft.com/en-gb/users/kumarshubham-4869/credentials/3e4c40f0ae5ca0f1',
    logo: SIMPLE_ICON('microsoftazure', '0078D4'),
    category: 'Cloud',
    accent: 'azure',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    meta: 'Issued Jan 2026 · Expires Jan 2029',
    href: 'https://www.credly.com/badges/25fc2b7a-686d-4e8a-8bf8-e2ed30814de0/linked_in_profile',
    logo: SIMPLE_ICON('amazonwebservices', 'FF9900'),
    category: 'Cloud',
    accent: 'aws',
  },
  {
    title: 'React - The Complete Guide 2024',
    issuer: 'Udemy',
    meta: 'React, Next.js & Redux',
    href: 'https://www.udemy.com/certificate/UC-c1382b60-775e-4ed0-a988-68856bd119f7/',
    logo: SIMPLE_ICON('udemy', 'A435F0'),
    category: 'Frontend',
    accent: 'purple',
  },
  {
    title: 'Core Java - Full Course',
    issuer: 'Udemy',
    meta: 'Java programming foundations',
    href: 'https://www.udemy.com/certificate/UC-7967db37-7322-4c3e-be14-d5b41f7c5c33/',
    logo: DEVICON('java'),
    category: 'Backend',
    accent: 'red',
  },
  {
    title: 'Programming Foundations: Secure Coding',
    issuer: 'LinkedIn Learning',
    meta: 'Secure software development',
    href: 'https://www.linkedin.com/learning/certificates/3ea82b8ea8e97c950d6f44143bbe317f3a1d911a17fdb8dfa6df3bec311c8b1a',
    logo: SIMPLE_ICON('linkedin', '0A66C2'),
    category: 'Security',
    accent: 'linkedin',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera',
    meta: 'Distributed ledger foundations',
    href: 'https://www.coursera.org/verify/NNSN6HC6FJTE',
    logo: SIMPLE_ICON('coursera', '0056D2'),
    category: 'Blockchain',
    accent: 'blue',
  },
  {
    title: 'AWS S3 Basics',
    issuer: 'Coursera',
    meta: 'Object storage fundamentals',
    href: 'https://www.coursera.org/account/accomplishments/certificate/C2MFU7WWF39U',
    logo: SIMPLE_ICON('coursera', '0056D2'),
    category: 'Cloud',
    accent: 'blue',
  },
  {
    title: 'Optum AI Dojo Certification',
    issuer: 'Optum',
    meta: 'Internal AI engineering credential',
    href: '',
    logo: 'https://logo.clearbit.com/optum.com',
    category: 'AI',
    accent: 'optum',
  },
];

function readRoute() {
  const value = window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();
  return NAV_ITEMS.some((item) => item.id === value) ? value : 'home';
}

function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  const icons = {
    home: (
      <svg {...common}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    ),
    user: (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20c.9-4.1 3.4-6 7.5-6s6.6 1.9 7.5 6" />
      </svg>
    ),
    briefcase: (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
    graduation: (
      <svg {...common}>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c2.8 2.6 9.2 2.6 12 0v-4.5" />
        <path d="M22 9v6" />
      </svg>
    ),
    award: (
      <svg {...common}>
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 12-2 9 5.5-3 5.5 3-2-9" />
        <path d="m10 8 1.3 1.3L14 6.8" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),
    external: (
      <svg {...common}>
        <path d="M14 4h6v6" />
        <path d="m10 14 10-10" />
        <path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
      </svg>
    ),
    location: (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    copy: (
      <svg {...common}>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
        <path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z" />
        <path d="m5 14 .8 3.2L9 18l-3.2.8L5 22l-.8-3.2L1 18l3.2-.8L5 14Z" />
      </svg>
    ),
    bot: (
      <svg {...common}>
        <rect x="4" y="7" width="16" height="12" rx="3" />
        <path d="M12 3v4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M8 12h.01M16 12h.01" />
        <path d="M8 16h8" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    workflow: (
      <svg {...common}>
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
        <path d="M9 6h3a3 3 0 0 1 3 3v6" />
        <path d="m12 12 3 3 3-3" />
      </svg>
    ),
    terminal: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3" />
        <path d="M13 15h4" />
      </svg>
    ),
    calendar: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </svg>
    ),
    book: (
      <svg {...common}>
        <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z" />
        <path d="M18 20a3 3 0 0 0-3-3H4" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  };

  return icons[name] || icons.code;
}

function Logo({ src, alt, fallback, className = '' }) {
  const [failed, setFailed] = useState(false);
  return failed || !src ? (
    <span className={`logo-fallback ${className}`} aria-label={alt}>
      {fallback || alt.slice(0, 2).toUpperCase()}
    </span>
  ) : (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function AmbientBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        left: `${(index * 37 + 11) % 100}%`,
        top: `${(index * 53 + 7) % 100}%`,
        delay: `${(index % 9) * -0.8}s`,
        duration: `${5 + (index % 7)}s`,
        size: `${1 + (index % 3)}px`,
      })),
    [],
  );

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__mesh" />
      <div className="ambient__grid" />
      <div className="ambient__orb ambient__orb--cyan" />
      <div className="ambient__orb ambient__orb--violet" />
      <div className="ambient__orb ambient__orb--blue" />
      <div className="ambient__beam ambient__beam--one" />
      <div className="ambient__beam ambient__beam--two" />
      <div className="ambient__stars">
        {stars.map((star, index) => (
          <i
            key={index}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>
      <div className="ambient__noise" />
    </div>
  );
}

function TiltCard({ children, className = '', as: Element = 'article' }) {
  const handleMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -7;
    const ry = ((x / rect.width) - 0.5) * 7;
    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const handleLeave = (event) => {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <Element className={`tilt-card ${className}`} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      {children}
    </Element>
  );
}

function Pill({ children, tone = 'default' }) {
  return <span className={`pill pill--${tone}`}>{children}</span>;
}

function Header({ route, menuOpen, setMenuOpen }) {
  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === route);

  return (
    <>
      <div className="route-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${(activeIndex + 1) / NAV_ITEMS.length})` }} />
      </div>
      <header className="site-header">
        <a className="brand" href="#/home" aria-label="Shubham Kumar — home">
          <span className="brand__mark">SK</span>
          <span className="brand__dot">.</span>
          <span className="brand__text">Shubham Kumar</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              className={route === item.id ? 'is-active' : ''}
              href={`#/${item.id}`}
              aria-current={route === item.id ? 'page' : undefined}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="availability" href="#/contact">
            <span className="availability__pulse" />
            Let&apos;s connect
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__inner">
          <p className="eyebrow">Navigate</p>
          <nav aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={route === item.id ? 'is-active' : ''}
                href={`#/${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu__number">{item.number}</span>
                <Icon name={item.icon} size={22} />
                <span>{item.label}</span>
                <Icon name="arrow" size={19} />
              </a>
            ))}
          </nav>
          <div className="mobile-menu__socials">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PageShell({ route, eyebrow, title, description, children, compact = false }) {
  const routeItem = NAV_ITEMS.find((item) => item.id === route);
  return (
    <section className={`page page--${route} ${compact ? 'page--compact' : ''}`}>
      <div className="page__index" aria-hidden="true">
        <span>{routeItem?.number}</span>
        <i />
        <span>08</span>
      </div>
      <div className="page__head reveal reveal--1">
        <p className="eyebrow">
          <span>{routeItem?.number}</span>
          {eyebrow}
        </p>
        <h1>{title}</h1>
        {description && <p className="page__description">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function NextPage({ current }) {
  const index = NAV_ITEMS.findIndex((item) => item.id === current);
  const next = NAV_ITEMS[(index + 1) % NAV_ITEMS.length];
  return (
    <a className="next-page reveal" href={`#/${next.id}`}>
      <span>
        <small>Next page</small>
        <strong>{next.label}</strong>
      </span>
      <span className="next-page__icon">
        <Icon name="arrow" size={24} />
      </span>
    </a>
  );
}

function SocialRow({ compact = false }) {
  return (
    <div className={`social-row ${compact ? 'social-row--compact' : ''}`}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
          <Logo src={link.logo} alt={link.label} fallback={link.label.slice(0, 1)} />
          {!compact && <span>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__copy">
        <div className="status-chip reveal reveal--1">
          <span />
          Software Engineer Lead · Noida, India
        </div>
        <p className="home-kicker reveal reveal--2">Secure systems. Intelligent workflows. Reliable delivery.</p>
        <h1 className="home-title reveal reveal--3">
          I build software that is
          <span className="gradient-text"> scalable, secure & AI-powered.</span>
        </h1>
        <p className="home-summary reveal reveal--4">
          Full-stack engineering leader specializing in Java, Spring Boot, React, Python, FastAPI, Azure,
          AWS, distributed systems, RAG and agentic automation.
        </p>
        <div className="home-actions reveal reveal--5">
          <a className="button button--primary" href="#/projects">
            Explore my work <Icon name="arrow" size={19} />
          </a>
          <a className="button button--ghost" href="#/credentials">
            View credentials <Icon name="award" size={18} />
          </a>
        </div>
        <div className="home-meta reveal reveal--6">
          <SocialRow compact />
          <div className="home-meta__divider" />
          <span>
            <Icon name="location" size={17} /> Noida, Uttar Pradesh
          </span>
        </div>
      </div>

      <div className="portrait-stage reveal reveal--3">
        <div className="portrait-stage__halo" />
        <div className="portrait-stage__orbit portrait-stage__orbit--one">
          <i />
        </div>
        <div className="portrait-stage__orbit portrait-stage__orbit--two">
          <i />
        </div>
        <div className="portrait-stage__frame">
          <div className="portrait-stage__scan" />
          <img src={PHOTO_URL} alt="Shubham Kumar" fetchPriority="high" />
          <div className="portrait-stage__fade" />
        </div>
        <div className="floating-card floating-card--ai">
          <span className="floating-card__icon">
            <Icon name="spark" size={20} />
          </span>
          <span>
            <small>Current focus</small>
            <strong>Agentic AI</strong>
          </span>
        </div>
        <div className="floating-card floating-card--cloud">
          <Logo src={DEVICON('azure')} alt="Microsoft Azure" fallback="AZ" />
          <span>
            <small>Cloud platform</small>
            <strong>Azure</strong>
          </span>
        </div>
        <div className="floating-card floating-card--backend">
          <Logo src={DEVICON('spring')} alt="Spring Boot" fallback="SB" />
          <span>
            <small>Backend</small>
            <strong>Spring Boot</strong>
          </span>
        </div>
        <div className="code-chip">
          <span className="code-chip__dots"><i /><i /><i /></span>
          <code>
            <span>ship</span>(secure, scalable, intelligent)
          </code>
        </div>
      </div>

      <div className="home-stats reveal reveal--6">
        <div>
          <strong>4+</strong>
          <span>Years building enterprise software</span>
        </div>
        <div>
          <strong>200+</strong>
          <span>Priority incidents resolved</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Production uptime supported</span>
        </div>
        <div>
          <strong>2</strong>
          <span>AI engineering systems featured</span>
        </div>
      </div>

      <a className="scroll-cue" href="#/about" aria-label="Go to About page">
        <span>Discover more</span>
        <i><Icon name="arrow" size={18} /></i>
      </a>
    </section>
  );
}

function AboutPage() {
  const principles = [
    {
      icon: 'shield',
      title: 'Secure by design',
      text: 'Security is part of architecture, delivery and operations—not a late-stage checklist.',
    },
    {
      icon: 'layers',
      title: 'Built for production',
      text: 'I optimize for maintainability, observability, reliability and calm ownership under pressure.',
    },
    {
      icon: 'spark',
      title: 'AI with intent',
      text: 'I use RAG, LLMs and agents where they reduce friction, unlock knowledge or automate real work.',
    },
  ];

  return (
    <PageShell
      route="about"
      eyebrow="Profile"
      title={<>Engineering with <span className="gradient-text">clarity and ownership.</span></>}
      description="A security-minded software engineer and technical lead who connects architecture, delivery, operations and practical AI adoption."
    >
      <div className="about-grid">
        <TiltCard className="about-story glass-panel reveal reveal--2">
          <div className="about-story__quote">“</div>
          <p>
            I work across the full engineering lifecycle: designing services, reviewing code, improving CI/CD,
            resolving production incidents, mentoring engineers and modernizing cloud platforms.
          </p>
          <p>
            My Information Security background shapes how I approach distributed systems. Reliability,
            resilience, access control and maintainability are foundational—not optional extras.
          </p>
          <div className="about-story__signature">
            <span>SK</span>
            <div>
              <strong>Shubham Kumar</strong>
              <small>Software Engineer Lead</small>
            </div>
          </div>
        </TiltCard>

        <div className="about-focus reveal reveal--3">
          <p className="mini-title">What I bring</p>
          <ul className="check-list">
            {[
              'Java / Spring Boot microservices and React applications',
              'Azure and AWS cloud engineering with DevOps automation',
              'RAG applications, LLM assistants and agentic workflows',
              'Secure SDLC, OWASP, SAST and cloud-security tooling',
              'Code reviews, mentoring and cross-functional technical leadership',
              'Production support, observability and incident resolution',
            ].map((item) => (
              <li key={item}>
                <span><Icon name="check" size={15} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="principles-grid">
        {principles.map((principle, index) => (
          <TiltCard key={principle.title} className={`principle-card reveal reveal--${index + 3}`}>
            <span className="principle-card__icon"><Icon name={principle.icon} size={24} /></span>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
            <span className="principle-card__line" />
          </TiltCard>
        ))}
      </div>

      <div className="about-band reveal reveal--5">
        <div>
          <small>Primary domains</small>
          <strong>Enterprise software · Cloud modernization · AI engineering · Application security</strong>
        </div>
        <a href="#/experience">See career journey <Icon name="arrow" size={18} /></a>
      </div>
      <NextPage current="about" />
    </PageShell>
  );
}

function ExperiencePage() {
  return (
    <PageShell
      route="experience"
      eyebrow="Career"
      title={<>From production engineering to <span className="gradient-text">technical leadership.</span></>}
      description="A career grounded in enterprise systems, secure delivery, cloud modernization, operational ownership and team enablement."
    >
      <div className="experience-layout">
        <aside className="experience-summary reveal reveal--2">
          <div className="company-card">
            <div className="company-card__logo">O</div>
            <div>
              <small>Primary company</small>
              <strong>Optum</strong>
              <span>UnitedHealth Group</span>
            </div>
          </div>
          <div className="experience-summary__stat">
            <strong>4+ years</strong>
            <span>Enterprise software experience</span>
          </div>
          <div className="experience-summary__stat">
            <strong>3 roles</strong>
            <span>Progressive engineering growth at Optum</span>
          </div>
          <div className="experience-summary__stat">
            <strong>Lead + build</strong>
            <span>Architecture, delivery, mentoring and operations</span>
          </div>
        </aside>

        <div className="timeline">
          {EXPERIENCE.map((item, index) => (
            <article key={`${item.role}-${item.period}`} className={`timeline-item reveal reveal--${Math.min(index + 2, 6)}`}>
              <div className="timeline-item__rail">
                <span className={item.featured ? 'is-featured' : ''} />
                <i />
              </div>
              <div className="timeline-item__content">
                <div className="timeline-item__top">
                  <div>
                    <div className="timeline-item__labels">
                      {item.featured && <Pill tone="accent">Current</Pill>}
                      <Pill>{item.mode}</Pill>
                    </div>
                    <h2>{item.role}</h2>
                    <h3>{item.company}</h3>
                  </div>
                  <div className="timeline-item__meta">
                    <span><Icon name="calendar" size={16} />{item.period}</span>
                    <span><Icon name="location" size={16} />{item.location}</span>
                  </div>
                </div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tag-row">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="early-career reveal reveal--5">
        <div>
          <p className="mini-title">Early leadership</p>
          <h2>Community and campus experience</h2>
        </div>
        <div className="early-career__items">
          {EARLY_EXPERIENCE.map((item) => (
            <article key={item.company}>
              <span><Icon name="briefcase" size={18} /></span>
              <div>
                <strong>{item.role}</strong>
                <small>{item.company}</small>
              </div>
              <time>{item.period}</time>
            </article>
          ))}
        </div>
      </div>
      <NextPage current="experience" />
    </PageShell>
  );
}

function ProjectVisual({ type, icon }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="project-visual__grid" />
      <div className="project-visual__core"><Icon name={icon} size={32} /></div>
      <span className="node node--1" />
      <span className="node node--2" />
      <span className="node node--3" />
      <span className="node node--4" />
      <i className="line line--1" />
      <i className="line line--2" />
      <i className="line line--3" />
      <div className="project-visual__pulse" />
    </div>
  );
}

function ProjectsPage() {
  return (
    <PageShell
      route="projects"
      eyebrow="Selected work"
      title={<>Systems that connect <span className="gradient-text">security, scale and intelligence.</span></>}
      description="Representative engineering work across AI assistants, agentic automation, enterprise authorization and full-stack workflow platforms."
    >
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <TiltCard key={project.title} className={`project-card reveal reveal--${Math.min(index + 2, 6)}`}>
            <div className="project-card__topline">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>
            <ProjectVisual type={project.visual} icon={project.icon} />
            <div className="project-card__body">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-impact">
                <span><Icon name="chart" size={18} /></span>
                <p>{project.impact}</p>
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="project-philosophy glass-panel reveal reveal--6">
        <div className="project-philosophy__icon"><Icon name="terminal" size={28} /></div>
        <div>
          <p className="mini-title">Engineering approach</p>
          <h2>Useful AI, secure defaults and operationally boring production.</h2>
          <p>
            The best systems feel simple to their users because complexity is managed deliberately behind the scenes—through clear boundaries, observable workflows, automated controls and strong ownership.
          </p>
        </div>
      </div>
      <NextPage current="projects" />
    </PageShell>
  );
}

function StackPage() {
  return (
    <PageShell
      route="stack"
      eyebrow="Capabilities"
      title={<>A production-focused <span className="gradient-text">technology stack.</span></>}
      description="Real tools used across enterprise applications, cloud platforms, secure delivery, observability and AI engineering."
    >
      <div className="stack-hero reveal reveal--2">
        <div className="stack-orbit">
          <div className="stack-orbit__ring stack-orbit__ring--one" />
          <div className="stack-orbit__ring stack-orbit__ring--two" />
          <div className="stack-orbit__center">
            <Icon name="layers" size={34} />
            <strong>AI + Cloud</strong>
            <span>Full-stack engineering</span>
          </div>
          {[
            { name: 'Java', logo: DEVICON('java'), className: 'orbit-logo--1' },
            { name: 'Azure', logo: DEVICON('azure'), className: 'orbit-logo--2' },
            { name: 'React', logo: DEVICON('react'), className: 'orbit-logo--3' },
            { name: 'Python', logo: DEVICON('python'), className: 'orbit-logo--4' },
            { name: 'Docker', logo: DEVICON('docker'), className: 'orbit-logo--5' },
            { name: 'Spring', logo: DEVICON('spring'), className: 'orbit-logo--6' },
          ].map((item) => (
            <span key={item.name} className={`orbit-logo ${item.className}`}>
              <Logo src={item.logo} alt={item.name} fallback={item.name.slice(0, 2)} />
            </span>
          ))}
        </div>
        <div className="stack-hero__copy">
          <p className="mini-title">How the stack connects</p>
          <h2>Backend depth. Frontend fluency. Cloud-native delivery. Secure AI.</h2>
          <p>
            I work across service design, APIs, event-driven systems, user interfaces, cloud infrastructure, CI/CD, security controls and operational observability.
          </p>
          <div className="ai-chip-cloud">
            {['RAG', 'LLMs', 'AI Agents', 'Prompt Engineering', 'Vector Search', 'Automation'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logo-marquee reveal reveal--3" aria-label="Technology logos">
        <div className="logo-marquee__track">
          {[...ALL_TECH.slice(0, 18), ...ALL_TECH.slice(0, 18)].map((item, index) => (
            <span key={`${item.name}-${index}`} aria-hidden={index >= 18}>
              <Logo src={item.logo} alt={item.name} fallback={item.name.slice(0, 2)} />
              <strong>{item.name}</strong>
            </span>
          ))}
        </div>
      </div>

      <div className="stack-groups">
        {TECH_GROUPS.map((group, groupIndex) => (
          <section key={group.title} className={`stack-group reveal reveal--${Math.min(groupIndex + 3, 6)}`}>
            <div className="stack-group__head">
              <div>
                <span>0{groupIndex + 1}</span>
                <h2>{group.title}</h2>
              </div>
              <p>{group.note}</p>
            </div>
            <div className="tech-grid">
              {group.items.map((item) => (
                <TiltCard key={item.name} className="tech-card">
                  <span className="tech-card__logo"><Logo src={item.logo} alt={item.name} fallback={item.name.slice(0, 2)} /></span>
                  <strong>{item.name}</strong>
                  <i />
                </TiltCard>
              ))}
            </div>
          </section>
        ))}
      </div>
      <NextPage current="stack" />
    </PageShell>
  );
}

function EducationPage() {
  return (
    <PageShell
      route="education"
      eyebrow="Education"
      title={<>Computer science foundations with a <span className="gradient-text">security specialization.</span></>}
      description="Formal education in Computer Science and Information Security, strengthened through teaching, live coding and technical mentorship."
    >
      <div className="education-grid">
        {EDUCATION.map((item, index) => (
          <TiltCard key={item.degree} className={`education-card reveal reveal--${index + 2}`}>
            <div className="education-card__seal">
              <span>{item.monogram}</span>
              <i />
            </div>
            <div className="education-card__content">
              <div className="education-card__top">
                <Pill tone={index === 0 ? 'accent' : 'default'}>{index === 0 ? 'Postgraduate' : 'Undergraduate'}</Pill>
                <span>{item.period}</span>
              </div>
              <h2>{item.degree}</h2>
              <h3>{item.field}</h3>
              <p className="education-card__institution">{item.institution}</p>
              <p className="education-card__short">{item.short}</p>
              <p className="education-card__location"><Icon name="location" size={16} />{item.location}</p>
              <div className="tag-row">
                {item.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="teaching-feature reveal reveal--4">
        <div className="teaching-feature__visual">
          <div className="teaching-feature__terminal">
            <span><i /><i /><i /></span>
            <code>
              <b>for</b> (student <em>of</em> cohort) {'{'}
              <br />&nbsp;&nbsp;explain();
              <br />&nbsp;&nbsp;codeLive();
              <br />&nbsp;&nbsp;answerQuestions();
              <br />{'}'}
            </code>
          </div>
        </div>
        <div className="teaching-feature__copy">
          <p className="mini-title">Teaching experience</p>
          <h2>Teaching Assistant · ABV-IIITM</h2>
          <p>
            Supported C Programming and Artificial Intelligence labs, delivered live coding sessions and helped first- and second-year students turn concepts into working solutions.
          </p>
          <div className="teaching-feature__meta">
            <span><Icon name="calendar" size={17} />Jan 2022 — May 2022</span>
            <span><Icon name="location" size={17} />Gwalior, India</span>
          </div>
        </div>
      </div>
      <NextPage current="education" />
    </PageShell>
  );
}

function CredentialCard({ certificate, index }) {
  const content = (
    <>
      <div className={`credential-card__glow credential-card__glow--${certificate.accent}`} />
      <div className="credential-card__head">
        <span className="credential-card__logo">
          <Logo src={certificate.logo} alt={certificate.issuer} fallback={certificate.issuer.slice(0, 2)} />
        </span>
        <Pill>{certificate.category}</Pill>
      </div>
      <div className="credential-card__body">
        <h2>{certificate.title}</h2>
        <p>{certificate.issuer}</p>
        <small>{certificate.meta}</small>
      </div>
      <div className="credential-card__foot">
        <span>{certificate.href ? 'View credential' : 'Internal credential'}</span>
        {certificate.href ? <Icon name="external" size={18} /> : <Icon name="shield" size={18} />}
      </div>
    </>
  );

  return certificate.href ? (
    <a
      className={`credential-card reveal reveal--${Math.min(index + 3, 6)}`}
      href={certificate.href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  ) : (
    <article className={`credential-card credential-card--disabled reveal reveal--${Math.min(index + 3, 6)}`}>
      {content}
    </article>
  );
}

function CredentialsPage() {
  return (
    <PageShell
      route="credentials"
      eyebrow="Credentials & publication"
      title={<>Validated learning. Published <span className="gradient-text">security research.</span></>}
      description="Cloud, software engineering, secure coding and AI credentials—together with an IEEE-indexed publication."
    >
      <TiltCard className="publication-card reveal reveal--2">
        <div className="publication-card__brand">
          <Logo src={SIMPLE_ICON('ieee', '00B5E2')} alt="IEEE" fallback="IEEE" />
          <span>IEEE Xplore</span>
        </div>
        <div className="publication-card__content">
          <div>
            <Pill tone="accent">Publication · 2023</Pill>
            <h2>Securing IoT with Blockchain: Detecting Malicious Nodes with TLS Certificates</h2>
            <p>
              Published at the International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3).
            </p>
          </div>
          <a
            className="button button--primary"
            href="https://ieeexplore.ieee.org/document/10262746"
            target="_blank"
            rel="noreferrer"
          >
            Read on IEEE Xplore <Icon name="external" size={18} />
          </a>
        </div>
        <div className="publication-card__graphic" aria-hidden="true">
          <div className="publication-chain">
            <span>IoT</span><i /><span>TLS</span><i /><span>BLOCK</span>
          </div>
          <div className="publication-card__shield"><Icon name="shield" size={38} /></div>
        </div>
      </TiltCard>

      <div className="credentials-heading reveal reveal--3">
        <div>
          <p className="mini-title">Certifications</p>
          <h2>Continuous learning, independently verifiable.</h2>
        </div>
        <span>{CERTIFICATIONS.length} credentials</span>
      </div>

      <div className="credentials-grid">
        {CERTIFICATIONS.map((certificate, index) => (
          <CredentialCard key={certificate.title} certificate={certificate} index={index} />
        ))}
      </div>

      <p className="credential-note reveal reveal--6">
        The Optum AI Dojo certification is an internal credential and therefore has no public verification URL.
      </p>
      <NextPage current="credentials" />
    </PageShell>
  );
}

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'mshubham0309@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <PageShell
      route="contact"
      eyebrow="Contact"
      title={<>Let&apos;s build something <span className="gradient-text">reliable and intelligent.</span></>}
      description="Open to conversations around engineering leadership, cloud modernization, secure platforms and practical AI systems."
      compact
    >
      <div className="contact-layout">
        <div className="contact-main reveal reveal--2">
          <div className="contact-main__badge"><span />Available for meaningful conversations</div>
          <h2>Have a role, platform challenge or AI engineering idea?</h2>
          <p>
            Share the context, the problem and the outcome you are aiming for. Email is the fastest way to start a focused conversation.
          </p>
          <div className="contact-email">
            <a href={`mailto:${email}`}>{email}</a>
            <button type="button" onClick={copyEmail} aria-label="Copy email address">
              <Icon name={copied ? 'check' : 'copy'} size={19} />
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="contact-actions">
            <a className="button button--primary" href={`mailto:${email}`}>
              Start a conversation <Icon name="arrow" size={19} />
            </a>
            <a className="button button--ghost" href="https://www.linkedin.com/in/imshubhamkumar" target="_blank" rel="noreferrer">
              Connect on LinkedIn <Icon name="external" size={17} />
            </a>
          </div>
        </div>

        <div className="contact-portrait reveal reveal--3">
          <div className="contact-portrait__ring" />
          <img src={PHOTO_URL} alt="Shubham Kumar" />
          <div className="contact-portrait__card">
            <strong>Shubham Kumar</strong>
            <span>Software Engineer Lead</span>
            <small><Icon name="location" size={14} />Noida, India</small>
          </div>
        </div>
      </div>

      <div className="contact-links reveal reveal--4">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            <span><Logo src={link.logo} alt={link.label} fallback={link.label.slice(0, 1)} /></span>
            <div>
              <small>Find me on</small>
              <strong>{link.label}</strong>
            </div>
            <Icon name="external" size={18} />
          </a>
        ))}
      </div>

      <div className="contact-footer reveal reveal--5">
        <span>Designed and engineered with React, native CSS and zero UI libraries.</span>
        <a href="#/home">Back to home <Icon name="arrow" size={17} /></a>
      </div>
    </PageShell>
  );
}

function RouteView({ route }) {
  switch (route) {
    case 'about':
      return <AboutPage />;
    case 'experience':
      return <ExperiencePage />;
    case 'projects':
      return <ProjectsPage />;
    case 'stack':
      return <StackPage />;
    case 'education':
      return <EducationPage />;
    case 'credentials':
      return <CredentialsPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(readRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const current = NAV_ITEMS.find((item) => item.id === route);
    document.title = `${current?.label || 'Home'} · Shubham Kumar`;
    document.body.dataset.route = route;
  }, [route]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const moveSpotlight = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', moveSpotlight, { passive: true });
    return () => window.removeEventListener('pointermove', moveSpotlight);
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AmbientBackground />
      <Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content" className="page-stage" key={route} tabIndex="-1">
        <RouteView route={route} />
      </main>
      <div className="route-announcer" aria-live="polite">{NAV_ITEMS.find((item) => item.id === route)?.label} page</div>
    </div>
  );
}

import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import shubhamPhoto from './shubham_kumar.png';

const PHOTO_URL = shubhamPhoto;
const RESUME_URL = 'https://raw.githubusercontent.com/ishubhamkr/portfolio/refs/heads/main/Shubham_Kumar_Resume.pdf';

const DEVICON = (name, file = `${name}-original.svg`) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${file}`;
const SIMPLE_ICON = (name, color = '111111') => `https://cdn.simpleicons.org/${name}/${color}`;

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

const MOBILE_NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'projects', label: 'Work', icon: 'code' },
  { id: 'experience', label: 'Career', icon: 'briefcase' },
  { id: 'about', label: 'Bio', icon: 'user' },
  { id: 'contact', label: 'Contact', icon: 'arrow' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ishubhamkr', logo: SIMPLE_ICON('github', 'ffffff') },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/imshubhamkumar', logo: DEVICON('linkedin') },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/_mshubham', logo: SIMPLE_ICON('hackerrank', '00EA64') },
  { label: 'LeetCode', href: 'https://leetcode.com/u/dracogeek/', logo: SIMPLE_ICON('leetcode', 'FFA116') },
];

const CAPABILITIES = [
  {
    icon: 'spark',
    title: 'LLM + RAG systems',
    text: 'Grounded retrieval and incident intelligence that turn operational context into useful engineering action.',
    tags: ['OpenAI', 'RAG', 'ServiceNow'],
  },
  {
    icon: 'layers',
    title: 'Secure Azure platforms',
    text: 'Functions, Web Apps, identity, private networking, observability and infrastructure as code.',
    tags: ['Azure', 'Terraform', 'OIDC'],
  },
  {
    icon: 'terminal',
    title: 'Production engineering',
    text: 'Python, FastAPI, Java and Spring Boot services built for reliability, clarity and maintainability.',
    tags: ['Python', 'FastAPI', 'Java'],
  },
];

const EXPERIENCE = [
  {
    role: 'Software Engineer Lead',
    company: 'Optum · UnitedHealth Group',
    period: 'Sep 2026 — Present',
    location: 'Noida, Uttar Pradesh, India',
    mode: 'Full-time',
    featured: true,
    bullets: [
      'Leading an LLM-powered incident intelligence platform that analyzes ServiceNow incidents, retrieves relevant operational context and helps support teams move toward grounded resolution steps faster.',
      'Engineering the AI service layer with Python and FastAPI, including model integration, retrieval workflows, secure APIs and enterprise automation patterns.',
      'Designing the Azure platform end to end with Function Apps, Web Apps, Key Vault, Storage, managed identity, Application Insights and Log Analytics.',
      'Owning infrastructure and network controls with Terraform, VNets, subnets, private endpoints, firewall rules, RBAC, Azure OIDC and automated CI/CD.',
    ],
    tags: ['LLMs', 'RAG', 'ServiceNow', 'Python', 'FastAPI', 'Azure', 'Terraform'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Optum · UnitedHealth Group',
    period: 'Mar 2025 — Aug 2026',
    location: 'Noida, Uttar Pradesh, India',
    mode: 'Full-time',
    bullets: [
      'Integrated OWASP-aligned secure coding standards and CodeQL / Prisma Cloud scanning into Jenkins and GitHub Actions pipelines.',
      'Designed conversational AI solutions with FastAPI or Flask, OpenAI models and vector retrieval for context-aware engineering knowledge discovery.',
      'Led code reviews across Java Spring Boot services and React applications, strengthening performance, maintainability and security compliance.',
      'Mentored new graduates and collaborated with Product, QA and DevOps teams to refine requirements and deliver scalable features.',
    ],
    tags: ['Secure SDLC', 'CodeQL', 'Prisma Cloud', 'RAG', 'Mentorship'],
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
      'Resolved 200+ high-priority ServiceNow incidents while supporting 99.9% system uptime and stronger security controls.',
      'Built full-stack portal features and MongoDB migration scripts that improved reliability, access workflows and supportability.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'Kafka', 'MongoDB', 'ServiceNow'],
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
  { role: 'Campus Ambassador', company: 'Techkriti · IIT Kanpur', period: 'Oct 2017 — Apr 2018' },
  { role: 'Campus Ambassador', company: 'Unmaad · IIM Bangalore', period: 'Oct 2017 — Mar 2018' },
];

const PROJECTS = [
  {
    number: '01',
    type: 'Current AI + Azure',
    title: 'LLM Incident Resolution Copilot',
    summary: 'An enterprise AI system that reads ServiceNow incidents, retrieves historical context and operational knowledge, and helps engineers develop grounded troubleshooting and resolution steps.',
    impact: 'Connects LLM reasoning with production context on a secure Azure foundation built for identity, private networking, observability and controlled delivery.',
    tags: ['LLMs', 'RAG', 'ServiceNow', 'Python', 'FastAPI', 'Azure', 'Terraform'],
    icon: 'spark',
    visual: 'incident',
    status: 'Private enterprise build',
    featured: true,
  },
  {
    number: '02',
    type: 'Enterprise Security',
    title: 'Digital Security for Provider Portal',
    summary: 'Authorization and organization-access workflows for a large provider platform, including secure user management and TIN registration journeys.',
    impact: 'Supported workflows serving 1.4M+ users and approximately 1.2B annual transactions.',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'JWT', 'Kafka', 'Vault'],
    icon: 'shield',
    visual: 'security',
    href: 'https://apps.uhcprovider.com/digital-security/#',
    linkLabel: 'Open product',
  },
  {
    number: '03',
    type: 'Provider Platform',
    title: 'Enhanced Provider Validation Portal',
    summary: 'Provider registration and validation workflows built with Spring Boot and React, including document submission, REST integrations and Kafka-based tracking.',
    impact: 'Improved registration visibility and verification workflows for organizations outside direct network relationships.',
    tags: ['Spring Boot', 'React', 'MongoDB', 'REST APIs', 'Kafka', 'Pega'],
    icon: 'workflow',
    visual: 'workflow',
    href: 'https://apps.uhcprovider.com/outofnetwork/#/',
    linkLabel: 'Open product',
  },
  {
    number: '04',
    type: 'Agentic Automation',
    title: 'AI Allure Report Agent',
    summary: 'An AI agent that interprets Allure test execution reports and automatically produces detailed, actionable stakeholder summaries after test runs.',
    impact: 'Reduces manual reporting effort and shortens the feedback loop between test execution and action.',
    tags: ['FastAPI', 'Python', 'AI Agents', 'Automation', 'Reporting'],
    icon: 'bot',
    visual: 'report',
    status: 'Engineering automation',
  },
];

const TECH_GROUPS = [
  {
    title: 'Core Engineering',
    note: 'Backend, frontend and AI service development.',
    items: [
      ['Java', DEVICON('java')],
      ['Spring Boot', DEVICON('spring')],
      ['Python', DEVICON('python')],
      ['FastAPI', DEVICON('fastapi')],
      ['JavaScript', DEVICON('javascript')],
      ['React', DEVICON('react')],
      ['C++', DEVICON('cplusplus')],
      ['HTML5', DEVICON('html5')],
      ['CSS3', DEVICON('css3')],
    ],
  },
  {
    title: 'Azure, Cloud & Platform',
    note: 'Cloud architecture, private connectivity, IaC and delivery.',
    items: [
      ['Microsoft Azure', DEVICON('azure')],
      ['AWS', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'],
      ['Terraform', DEVICON('terraform')],
      ['Docker', DEVICON('docker')],
      ['Kubernetes', DEVICON('kubernetes')],
      ['GitHub Actions', DEVICON('githubactions')],
      ['Jenkins', DEVICON('jenkins')],
      ['Git', DEVICON('git')],
    ],
  },
  {
    title: 'Data & Observability',
    note: 'Distributed data flows and operational visibility.',
    items: [
      ['Apache Kafka', DEVICON('apachekafka')],
      ['MongoDB', DEVICON('mongodb')],
      ['MySQL', DEVICON('mysql')],
      ['ServiceNow', 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg'],
      ['Splunk', SIMPLE_ICON('splunk', 'ffffff')],
      ['Grafana', DEVICON('grafana')],
      ['New Relic', SIMPLE_ICON('newrelic', '1CE783')],
      ['Postman', DEVICON('postman')],
    ],
  },
  {
    title: 'LLM, AI & Secure Delivery',
    note: 'Grounded AI supported by identity, quality and secure SDLC.',
    items: [
      ['OpenAI', SIMPLE_ICON('openai', 'ffffff')],
      ['LangChain', SIMPLE_ICON('langchain', 'ffffff')],
      ['Azure AI', DEVICON('azure')],
      ['GitHub Copilot', SIMPLE_ICON('githubcopilot', 'ffffff')],
      ['OWASP', SIMPLE_ICON('owasp', 'ffffff')],
      ['SonarQube', SIMPLE_ICON('sonarqubeserver', '4E9BCD')],
      ['Prisma Cloud', SIMPLE_ICON('prisma', 'ffffff')],
      ['HashiCorp Vault', SIMPLE_ICON('vault', 'FFEC6E')],
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Master of Technology (M.Tech)',
    department: 'Information Security',
    institution: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management',
    logo: 'https://www.iiitm.ac.in/public/header_image/1770627993_logo.png',
    fallback: 'IIITM',
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    department: 'Computer Science',
    institution: 'West Bengal University of Technology, Kolkata',
    logo: 'https://www.makautwb.ac.in/notun/images/logo.png',
    fallback: 'WBUT',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft Azure',
    meta: 'Issued Oct 2026 · Expires Oct 2027',
    href: 'https://learn.microsoft.com/en-gb/users/kumarshubham-4869/credentials/3e4c40f0ae5ca0f1',
    logo: DEVICON('azure'),
    category: 'Cloud',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    meta: 'Issued Jan 2026 · Expires Jan 2029',
    href: 'https://www.credly.com/badges/25fc2b7a-686d-4e8a-8bf8-e2ed30814de0/linked_in_profile',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'Cloud',
  },
  {
    title: 'React - The Complete Guide 2024',
    issuer: 'Udemy',
    meta: 'React, Next.js & Redux',
    href: 'https://www.udemy.com/certificate/UC-c1382b60-775e-4ed0-a988-68856bd119f7/',
    logo: DEVICON('react'),
    category: 'Frontend',
  },
  {
    title: 'Core Java - Full Course',
    issuer: 'Udemy',
    meta: 'Java programming foundations',
    href: 'https://www.udemy.com/certificate/UC-7967db37-7322-4c3e-be14-d5b41f7c5c33/',
    logo: DEVICON('java'),
    category: 'Backend',
  },
  {
    title: 'Programming Foundations: Secure Coding',
    issuer: 'LinkedIn Learning',
    meta: 'Secure software development',
    href: 'https://www.linkedin.com/learning/certificates/3ea82b8ea8e97c950d6f44143bbe317f3a1d911a17fdb8dfa6df3bec311c8b1a',
    logo: DEVICON('linkedin'),
    category: 'Security',
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera',
    meta: 'Distributed ledger foundations',
    href: 'https://www.coursera.org/verify/NNSN6HC6FJTE',
    logo: SIMPLE_ICON('coursera', '0056D2'),
    category: 'Blockchain',
  },
  {
    title: 'AWS S3 Basics',
    issuer: 'Coursera',
    meta: 'Amazon S3 object storage fundamentals',
    href: 'https://www.coursera.org/account/accomplishments/certificate/C2MFU7WWF39U',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'Cloud',
  },
  {
    title: 'Optum AI Dojo Certification',
    issuer: 'Optum',
    meta: 'Internal AI engineering credential',
    href: '',
    logo: 'https://www.optum.com/content/dam/optum4/images/logos/optum-logo-ora-rgb1.svg',
    category: 'AI',
  },
];

function readRoute() {
  if (typeof window === 'undefined') return 'home';
  const value = window.location.hash.replace(/^#\/?/, '').split('?')[0].toLowerCase();
  return NAV_ITEMS.some((item) => item.id === value) ? value : 'home';
}

async function downloadResume() {
  try {
    const response = await fetch(RESUME_URL);
    if (!response.ok) throw new Error('Resume fetch failed');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shubham_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  }
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
    home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M9.5 20v-6h5v6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.9-4.1 3.4-6 7.5-6s6.6 1.9 7.5 6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c2.8 2.6 9.2 2.6 12 0v-4.5M22 9v6" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-2 9 5.5-3 5.5 3-2-9" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    menu: <path d="M5 7h14M5 12h14M5 17h14" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    external: <><path d="M14 4h6v6M10 14 20 4" /><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></>,
    spark: <><path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" /><path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h3a3 3 0 0 1 3 3v6m-3-3 3 3 3-3" /></>,
    bot: <><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8" /><circle cx="12" cy="3" r="1" /></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{icons[name] || icons.code}</svg>;
}

function Logo({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <span className="logo-fallback" aria-label={alt}>{fallback || alt.slice(0, 2).toUpperCase()}</span>;
  return <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} />;
}

function AmbientBackground() {
  const stars = useMemo(
    () => Array.from({ length: 24 }, (_, index) => ({
      left: `${(index * 41 + 9) % 100}%`,
      top: `${(index * 53 + 11) % 100}%`,
      delay: `${(index % 8) * -0.7}s`,
      size: `${1 + (index % 2)}px`,
    })),
    [],
  );

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__glow ambient__glow--blue" />
      <div className="ambient__glow ambient__glow--coral" />
      <div className="ambient__grid" />
      <div className="ambient__stars">
        {stars.map((star, index) => <i key={index} style={{ left: star.left, top: star.top, width: star.size, height: star.size, animationDelay: star.delay }} />)}
      </div>
      <div className="ambient__noise" />
    </div>
  );
}

function Header({ route, menuOpen, setMenuOpen }) {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#/home" aria-label="Shubham Kumar home">
          <span className="brand__shadow" aria-hidden="true" />
          <span className="brand__mark">SK</span>
          <span className="brand__copy">
            <strong>Shubham Kumar</strong>
            <small>Azure + AI engineering</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#/${item.id}`} className={route === item.id ? 'is-active' : ''} aria-current={route === item.id ? 'page' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-cta" href="#/contact"><span />Let&apos;s connect</a>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__panel">
          <div className="mobile-menu__head"><span>Navigation</span><small>01 — 08</small></div>
          <nav aria-label="Mobile menu">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#/${item.id}`} className={route === item.id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>
                <span>{item.number}</span>
                <Icon name={item.icon} size={22} />
                <strong>{item.label}</strong>
                <Icon name="arrow" size={20} />
              </a>
            ))}
          </nav>
          <div className="mobile-menu__socials">
            {SOCIAL_LINKS.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
          </div>
        </div>
      </div>
    </>
  );
}

function MobileDock({ route }) {
  return (
    <nav className="mobile-dock" aria-label="Quick mobile navigation">
      {MOBILE_NAV_ITEMS.map((item) => (
        <a key={item.id} href={`#/${item.id}`} className={route === item.id ? 'is-active' : ''} aria-current={route === item.id ? 'page' : undefined}>
          <Icon name={item.icon} size={20} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="status-dot" />{children}</div>;
}

function ButtonLink({ href, children, primary = false, external = false }) {
  return (
    <a className={`button ${primary ? 'button--primary' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      <span>{children}</span><Icon name={external ? 'external' : 'arrow'} size={20} />
    </a>
  );
}

function VisualBoard() {
  return (
    <div className="visual-board">
      <div className="visual-board__topbar">
        <span><i /><i /><i /></span>
        <b>SHUBHAM_PORTFOLIO / FRAME 01</b>
        <em>AZURE × AI</em>
      </div>
      <div className="visual-board__grid" />
      <div className="visual-board__monogram" aria-hidden="true">SK</div>
      <div className="visual-board__status"><i />Production systems</div>
      <div className="visual-board__portrait">
        <img src={PHOTO_URL} alt="Shubham Kumar" width="435" height="521" fetchPriority="high" decoding="async" />
      </div>
      <div className="visual-board__caption">
        <div><small>Engineering profile</small><strong>Shubham Kumar</strong></div>
        <span>NOIDA / INDIA</span>
      </div>
      <div className="visual-chip visual-chip--one"><b>AI</b><span>LLM + RAG</span></div>
      <div className="visual-chip visual-chip--two"><b>AZ</b><span>Secure Azure</span></div>
      <div className="visual-chip visual-chip--three"><b>TF</b><span>Infrastructure</span></div>
      <i className="visual-node visual-node--a" /><i className="visual-node visual-node--b" /><i className="visual-node visual-node--c" /><i className="visual-node visual-node--d" />
    </div>
  );
}

function HomePage() {
  return (
    <section className="home-page">
      <div className="hero-copy">
        <Eyebrow>Available for engineering leadership and AI platform conversations</Eyebrow>
        <div className="hero-disciplines" aria-label="Focus areas">
          <span>LLM systems</span><span>Azure platforms</span><span>Secure delivery</span><span>Enterprise engineering</span>
        </div>
        <h1 className="hero-title" aria-label="Secure systems in motion">
          <span>Secure</span>
          <span className="hero-title__outline">Systems</span>
          <span className="hero-title__accent">In motion.</span>
        </h1>
        <p className="hero-summary">
          <strong>Shubham Kumar</strong> is a Software Engineer Lead building LLM-powered incident intelligence, secure Microsoft Azure platforms, Python and FastAPI services, and dependable enterprise systems.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#/projects" primary>Explore selected work</ButtonLink>
          <ButtonLink href="#/experience">View experience</ButtonLink>
        </div>
      </div>

      <div className="hero-visual"><VisualBoard /></div>

      <div className="hero-stats" aria-label="Career highlights">
        <div><strong>Lead</strong><span>Azure + AI engineering</span></div>
        <div><strong>200+</strong><span>Priority incidents resolved</span></div>
        <div><strong>99.9%</strong><span>Production uptime supported</span></div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div><span>LLM Engineering</span><span>Microsoft Azure</span><span>FastAPI</span><span>Terraform</span><span>Enterprise Java</span><span>Secure Cloud Delivery</span><span>LLM Engineering</span><span>Microsoft Azure</span><span>FastAPI</span><span>Terraform</span><span>Enterprise Java</span><span>Secure Cloud Delivery</span></div>
      </div>
    </section>
  );
}

function PageShell({ route, eyebrow, title, description, children }) {
  const item = NAV_ITEMS.find((navItem) => navItem.id === route);
  return (
    <section className={`page page--${route}`}>
      <header className="page-head">
        <div className="page-head__meta"><span>{item?.number}</span><i /><small>08</small></div>
        <p className="page-kicker">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </header>
      {children}
      <NextPage current={route} />
    </section>
  );
}

function NextPage({ current }) {
  const index = NAV_ITEMS.findIndex((item) => item.id === current);
  const next = NAV_ITEMS[(index + 1) % NAV_ITEMS.length];
  return (
    <a className="next-page" href={`#/${next.id}`}>
      <span><small>Next page</small><strong>{next.label}</strong></span>
      <i><Icon name="arrow" size={24} /></i>
    </a>
  );
}

function AboutPage() {
  return (
    <PageShell
      route="about"
      eyebrow="Profile"
      title={<>Engineering cloud platforms where <span className="accent-text">AI does useful work.</span></>}
      description="A security-minded software engineering lead connecting LLM applications, Azure infrastructure, enterprise systems and production operations."
    >
      <div className="about-grid">
        <article className="story-card panel">
          <div className="story-card__quote">“</div>
          <p>I work across the full system: the LLM workflow, Python and FastAPI services, Azure Functions and Web Apps, identity, networking, Terraform, CI/CD and the production signals that keep everything dependable.</p>
          <p>My goal is straightforward: transform complex enterprise context into software that feels clear, secure and genuinely helpful to the people operating it.</p>
          <div className="story-card__signature">
            <img src={PHOTO_URL} alt="" />
            <div><strong>Shubham Kumar</strong><small>Software Engineer Lead · Azure + AI</small></div>
          </div>
        </article>

        <div className="capability-list">
          {CAPABILITIES.map((item, index) => (
            <article className="capability-card panel" key={item.title}>
              <span className="capability-card__number">0{index + 1}</span>
              <i className="capability-card__icon"><Icon name={item.icon} size={24} /></i>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>

      <section className="resume-band panel">
        <div className="resume-band__mark">CV</div>
        <div><p className="mini-kicker">Résumé</p><h2>Systems, platforms and teams I help move forward.</h2><p>Download a focused overview of Azure engineering, LLM and RAG solutions, enterprise Java platforms, secure delivery and production ownership.</p></div>
        <button type="button" className="button button--primary" onClick={downloadResume}><span>Download résumé</span><Icon name="download" size={19} /></button>
      </section>
    </PageShell>
  );
}

function ExperiencePage() {
  return (
    <PageShell
      route="experience"
      eyebrow="Career"
      title={<>Engineering leadership across <span className="accent-text">AI, Azure and enterprise platforms.</span></>}
      description="A progression from full-stack production engineering to leading secure cloud modernization and LLM-enabled operational systems."
    >
      <div className="experience-grid">
        <aside className="experience-aside panel">
          <p className="mini-kicker">Career signal</p>
          <h2>Lead + build</h2>
          <p>Architecture, delivery, mentoring and operational reliability across the full platform lifecycle.</p>
          <div className="experience-aside__stats">
            <div><strong>AI + Azure</strong><span>Models, apps, network and IaC</span></div>
            <div><strong>Enterprise scale</strong><span>Secure workflows and production ownership</span></div>
            <div><strong>End to end</strong><span>Design, delivery, observability and support</span></div>
          </div>
        </aside>

        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <article className={`timeline-card panel ${item.featured ? 'is-featured' : ''}`} key={`${item.role}-${item.period}`}>
              <div className="timeline-card__rail"><span /><i /></div>
              <div className="timeline-card__content">
                <div className="timeline-card__top">
                  <div>{item.featured && <span className="pill pill--lime">Current role</span>}<span className="pill">{item.mode}</span><h2>{item.role}</h2><h3>{item.company}</h3></div>
                  <div className="timeline-card__meta"><span><Icon name="calendar" size={15} />{item.period}</span><span><Icon name="location" size={15} />{item.location}</span></div>
                </div>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="early-career panel">
        <div><p className="mini-kicker">Early leadership</p><h2>Community and campus roles</h2></div>
        <div>{EARLY_EXPERIENCE.map((item) => <article key={item.company}><i><Icon name="award" size={20} /></i><span><strong>{item.role}</strong><small>{item.company}</small></span><time>{item.period}</time></article>)}</div>
      </section>
    </PageShell>
  );
}

function ProjectGraphic({ type, icon }) {
  return (
    <div className={`project-graphic project-graphic--${type}`} aria-hidden="true">
      <div className="project-graphic__grid" />
      <span className="project-graphic__core"><Icon name={icon} size={34} /></span>
      <i className="project-node project-node--1" /><i className="project-node project-node--2" /><i className="project-node project-node--3" /><i className="project-node project-node--4" />
      <b className="project-line project-line--1" /><b className="project-line project-line--2" /><b className="project-line project-line--3" />
    </div>
  );
}

function ProjectsPage() {
  return (
    <PageShell
      route="projects"
      eyebrow="Selected work"
      title={<>Systems that turn <span className="accent-text">complex operations into clear action.</span></>}
      description="Representative work across LLM incident intelligence, Azure platforms, enterprise authorization and provider-validation workflows."
    >
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article className={`project-card panel ${project.featured ? 'project-card--featured' : ''}`} key={project.title}>
            <div className="project-card__top"><span>{project.number}</span><small>{project.type}</small></div>
            <ProjectGraphic type={project.visual} icon={project.icon} />
            <div className="project-card__body">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-impact"><i><Icon name="chart" size={18} /></i><p>{project.impact}</p></div>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-card__foot">
                {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <Icon name="external" size={17} /></a> : <span><Icon name="shield" size={16} />{project.status}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="approach-card panel">
        <i><Icon name="terminal" size={30} /></i>
        <div><p className="mini-kicker">Engineering approach</p><h2>Grounded AI, secure defaults and cloud infrastructure designed as one system.</h2><p>Useful AI needs trusted context, clear APIs, identity, private connectivity, observability, repeatable infrastructure and an operating model teams can rely on.</p></div>
      </section>
    </PageShell>
  );
}

function StackPage() {
  const featured = ['LLMs', 'RAG', 'ServiceNow', 'Python', 'FastAPI', 'Azure Functions', 'Private Networking', 'Terraform'];
  return (
    <PageShell
      route="stack"
      eyebrow="Capabilities"
      title={<>A stack built for <span className="accent-text">LLM products and enterprise reliability.</span></>}
      description="Technologies used across AI services, Azure infrastructure, secure applications, data flows, delivery automation and production operations."
    >
      <section className="stack-intro panel">
        <div className="stack-orbit" aria-hidden="true"><i /><i /><span><Icon name="layers" size={32} /><strong>LLM + Azure</strong><small>End-to-end engineering</small></span><b className="orbit-dot orbit-dot--1">AI</b><b className="orbit-dot orbit-dot--2">AZ</b><b className="orbit-dot orbit-dot--3">TF</b><b className="orbit-dot orbit-dot--4">API</b></div>
        <div><p className="mini-kicker">How the stack connects</p><h2>Model intelligence, secure APIs, cloud infrastructure and production signals.</h2><p>I connect retrieval workflows to Python and FastAPI services, Azure Functions and Web Apps, private networking, Terraform delivery and enterprise Java systems.</p><div className="tag-row tag-row--large">{featured.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      </section>

      <div className="stack-groups">
        {TECH_GROUPS.map((group, index) => (
          <section className="stack-group" key={group.title}>
            <div className="stack-group__head"><span>0{index + 1}</span><div><h2>{group.title}</h2><p>{group.note}</p></div></div>
            <div className="tech-grid">
              {group.items.map(([name, logo]) => <article className="tech-card panel" key={name}><i><Logo src={logo} alt={name} fallback={name.slice(0, 2)} /></i><strong>{name}</strong><span /></article>)}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

function EducationPage() {
  return (
    <PageShell
      route="education"
      eyebrow="Education"
      title={<>Academic foundations for <span className="accent-text">engineering and security.</span></>}
      description="Institution, degree and department—kept focused and easy to scan."
    >
      <div className="education-grid">
        {EDUCATION.map((item, index) => (
          <article className="education-card panel" key={item.institution}>
            <div className="education-card__top"><i><Logo src={item.logo} alt={item.institution} fallback={item.fallback} /></i><span>0{index + 1}</span></div>
            <div><small>Institution</small><h2>{item.institution}</h2></div>
            <div className="education-card__degree"><i><Icon name="graduation" size={26} /></i><span><strong>{item.degree}</strong><small>{item.department}</small></span></div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function CredentialsPage() {
  return (
    <PageShell
      route="credentials"
      eyebrow="Credentials & publication"
      title={<>Validated learning. Published <span className="accent-text">security research.</span></>}
      description="Cloud, software engineering, secure coding and AI credentials—together with an IEEE-indexed publication."
    >
      <section className="publication-card panel">
        <div className="publication-card__brand"><Logo src={SIMPLE_ICON('ieee', '00B5E2')} alt="IEEE" fallback="IEEE" /><span>IEEE Xplore</span></div>
        <div><span className="pill pill--lime">Publication · 2023</span><h2>Securing IoT with Blockchain: Detecting Malicious Nodes with TLS Certificates</h2><p>Published at the International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3).</p><ButtonLink href="https://ieeexplore.ieee.org/document/10262746" primary external>Read on IEEE Xplore</ButtonLink></div>
        <div className="publication-card__graphic" aria-hidden="true"><span>IoT</span><i /><span>TLS</span><i /><span>BLOCK</span><b><Icon name="shield" size={34} /></b></div>
      </section>

      <div className="section-title"><div><p className="mini-kicker">Certifications</p><h2>Continuous learning, independently verifiable.</h2></div><span>{CERTIFICATIONS.length} credentials</span></div>
      <div className="credentials-grid">
        {CERTIFICATIONS.map((certificate) => {
          const content = <><div className="credential-card__head"><i><Logo src={certificate.logo} alt={certificate.title} fallback={certificate.title.slice(0, 2)} /></i><span className="pill">{certificate.category}</span></div><h2>{certificate.title}</h2><p>{certificate.issuer}</p><small>{certificate.meta}</small><div className="credential-card__foot"><span>{certificate.href ? 'View credential' : 'Internal credential'}</span><Icon name={certificate.href ? 'external' : 'shield'} size={18} /></div></>;
          return certificate.href ? <a className="credential-card panel" href={certificate.href} target="_blank" rel="noreferrer" key={certificate.title}>{content}</a> : <article className="credential-card panel credential-card--disabled" key={certificate.title}>{content}</article>;
        })}
      </div>
      <p className="credential-note">The Optum AI Dojo certification is an internal credential and therefore has no public verification URL.</p>
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
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <PageShell
      route="contact"
      eyebrow="Contact"
      title={<>Let&apos;s build something <span className="accent-text">useful, secure and intelligent.</span></>}
      description="Open to conversations around engineering leadership, Azure platforms, LLM applications, secure enterprise systems and practical AI delivery."
    >
      <div className="contact-grid">
        <section className="contact-main panel">
          <Eyebrow>Available for meaningful conversations</Eyebrow>
          <h2>Have a platform challenge, AI use case or engineering leadership opportunity?</h2>
          <p>Share the context, the users affected and the outcome you are aiming for. Email is the fastest way to start a focused conversation.</p>
          <div className="contact-email"><a href={`mailto:${email}`}>{email}</a><button type="button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={18} /><span>{copied ? 'Copied' : 'Copy'}</span></button></div>
          <div className="contact-actions"><ButtonLink href={`mailto:${email}`} primary>Start a conversation</ButtonLink><button className="button" type="button" onClick={downloadResume}><span>Download résumé</span><Icon name="download" size={18} /></button></div>
        </section>

        <aside className="about-story__signature about-story__signature--no-photo">
          <div><small>Engineering profile</small><h2>Shubham Kumar</h2><p>Software Engineer Lead · Azure + AI</p><span><Icon name="location" size={15} />Noida, India</span></div>
        </aside>
      </div>

      <div className="social-grid">
        {SOCIAL_LINKS.map((link) => <a className="social-card panel" key={link.label} href={link.href} target="_blank" rel="noreferrer"><i><Logo src={link.logo} alt={link.label} fallback={link.label.slice(0, 1)} /></i><span><small>Find me on</small><strong>{link.label}</strong></span><Icon name="external" size={18} /></a>)}
      </div>
    </PageShell>
  );
}

function RouteView({ route }) {
  switch (route) {
    case 'about': return <AboutPage />;
    case 'experience': return <ExperiencePage />;
    case 'projects': return <ProjectsPage />;
    case 'stack': return <StackPage />;
    case 'education': return <EducationPage />;
    case 'credentials': return <CredentialsPage />;
    case 'contact': return <ContactPage />;
    default: return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(readRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
    const handleEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AmbientBackground />
      <Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content" className="page-stage" key={route} tabIndex="-1"><RouteView route={route} /></main>
      <MobileDock route={route} />
      <div className="route-announcer" aria-live="polite">{NAV_ITEMS.find((item) => item.id === route)?.label} page</div>
    </div>
  );
}

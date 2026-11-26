import { useState } from 'react'
import {
  ArrowDown, Braces, Building2, ChevronDown, Cloud, CodeXml, Database,
  GitBranch, Github, GraduationCap, HeartPulse, Landmark, Layers3,
  Linkedin, Mail, Menu, Search, ShieldCheck, Sparkles, X,
} from 'lucide-react'
import { contact, engagements, projects, skills } from './content'

const sections = [
  ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['education', 'Education'],
]
const skillIcons = [Braces, CodeXml, Cloud, Database, Sparkles, ShieldCheck]
const projectIcons = { court: Landmark, search: Search, health: HeartPulse, finance: Building2 }

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}><span>PK</span> Pragathi Korrapati</a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav id="site-nav" data-open={open} aria-label="Main navigation" onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false)
            document.querySelector('.menu-toggle')?.focus()
          }
        }}>
          {sections.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

function SystemGraphic() {
  return (
    <div className="system" role="img" aria-label="Illustration of .NET at the center of web applications, APIs, cloud infrastructure, and data">
      <div className="system-caption"><span className="system-dot" /> Full stack engineering</div>
      <div className="system-map" aria-hidden="true">
        <div className="orbits" />
        <div className="core"><Layers3 size={37} strokeWidth={1.45} /><strong>.NET</strong></div>
        <span className="node node-web"><CodeXml /> Web apps</span>
        <span className="node node-api"><GitBranch /> APIs</span>
        <span className="node node-cloud"><Cloud /> Cloud</span>
        <span className="node node-data"><Database /> Data</span>
      </div>
      <div className="system-footer"><span>C# / ASP.NET CORE</span><span>AZURE / AWS</span></div>
    </div>
  )
}

function SectionTitle({ label, children }) {
  return <div className="section-title"><p className="eyebrow">{label}</p><h2>{children}</h2></div>
}

function ProjectCard({ project }) {
  const Icon = projectIcons[project.visual]

  return (
    <article className="project">
      <div className={`project-visual ${project.visual}`} aria-hidden="true"><div><Icon size={36} strokeWidth={1.4} /></div></div>
      <div className="project-body">
        <p className="project-client">{project.client}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <p className="outcome"><strong>Outcome</strong> {project.outcome}</p>
        <details>
          <summary>Implementation details <ChevronDown size={18} aria-hidden="true" /></summary>
          <p>{project.details}</p>
        </details>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="hero" aria-labelledby="name">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Senior Full Stack .NET Developer</p>
              <h1 id="name">Pragathi<br /><span>Korrapati.</span></h1>
              <p className="hero-intro">I build enterprise applications, secure APIs, and cloud integrations for complex workflows.</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">Explore my work</a>
                <a className="button secondary" href="#contact"><Mail size={17} aria-hidden="true" /> Get in touch</a>
              </div>
            </div>
            <SystemGraphic />
          </div>
          <div className="shell outcomes-bar">
            <div><strong>11+ years</strong><span>Enterprise software development</span></div>
            <div><strong>4 industries</strong><span>Government, healthcare, finance, retail</span></div>
            <div><a href="#about" aria-label="Scroll to About"><ArrowDown size={23} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section id="about" className="section shell about-grid">
          <SectionTitle label="About me">From interface<br />to infrastructure.</SectionTitle>
          <div className="about-copy">
            <p>I’m a Senior Full Stack .NET Developer with 11+ years of experience delivering enterprise applications across government, healthcare, finance, and retail.</p>
            <p>I work across the stack, from Angular, React, and Blazor interfaces to ASP.NET Core APIs, database optimization, and deployment on Azure and AWS. My recent work includes retrieval-augmented search for legal records and event-driven services for court workflows.</p>
          </div>
        </section>

        <section id="skills" className="section tinted">
          <div className="shell">
            <SectionTitle label="Technical skills">Technology stack</SectionTitle>
            <div className="skill-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map(([name, list], index) => {
                const Icon = skillIcons[index]
                return <article className="skill" key={name}><Icon size={24} aria-hidden="true" /><h3>{name}</h3><p>{list}</p></article>
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section shell">
          <SectionTitle label="Experience">Client engagements</SectionTitle>
          <ol className="timeline">
            {engagements.map((item) => (
              <li key={item.company}>
                <div className="timeline-date"><strong>{item.dates}</strong><span>{item.place}</span></div>
                <article>
                  <p className="eyebrow">{item.sector}</p>
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                  <p>{item.work}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section tinted">
          <div className="shell">
            <SectionTitle label="Projects">Selected case studies</SectionTitle>
            <div className="grid items-start gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          </div>
        </section>

        <section id="education" className="section shell">
          <SectionTitle label="Education">Academic background</SectionTitle>
          <article className="education-card"><GraduationCap size={32} aria-hidden="true" /><div><h3>Bachelor of Technology in Computer Science</h3><p>KL University</p></div></article>
        </section>

        <section id="contact" className="section contact-section">
          <div className="shell contact-grid">
            <div><SectionTitle label="Contact">Let’s connect.</SectionTitle><p>Reach out about .NET engineering roles or discuss the work featured here.</p></div>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`}><Mail size={21} aria-hidden="true" /><span><strong>Email</strong><small>{contact.email}</small></span></a>
              <a href={contact.linkedin}><Linkedin size={21} aria-hidden="true" /><span><strong>LinkedIn</strong><small>pragathi-k27</small></span></a>
              <a href={contact.github}><Github size={21} aria-hidden="true" /><span><strong>GitHub</strong><small>Pragathikorrapati</small></span></a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="shell"><span>© {new Date().getFullYear()} Pragathi Korrapati</span><a href="#home">Back to top</a></div></footer>
    </>
  )
}

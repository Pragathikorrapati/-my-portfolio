import { useState } from 'react'
import { Activity, Braces, Cloud, Database, Github, Layers, Linkedin, Mail, Pause, Play } from 'lucide-react'
import { contact, engagements, profile, projects, skills } from './content'

const links = [
  ['work', 'Case studies'], ['journey', 'Experience'], ['toolkit', 'Skills'], ['about', 'About'], ['contact', 'Contact'],
]

const routes = {
  court: ['Angular', 'ASP.NET Core', 'Azure Service Bus', 'Azure AI Search'],
  health: ['Member portals', '.NET services', 'FHIR / HL7', 'X12 EDI'],
  finance: ['React', 'Web API', 'AWS Lambda', 'RabbitMQ'],
}
const mapLabels = { court: 'Court systems', health: 'Healthcare', finance: 'Finance' }
const nodeIcons = [Layers, Braces, Database, Cloud]
const points = [[17, 23], [65, 23], [65, 71], [20, 71]]

function SystemMap({ project }) {
  const [paused, setPaused] = useState(false)
  const labels = routes[project.visual] ?? project.stack.slice(0, points.length)
  return (
    <figure className="system-map">
      <div className="map-header">
        <span><Activity size={17} aria-hidden="true" /> Architecture view</span>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          {paused ? 'Play motion' : 'Pause motion'}
        </button>
      </div>
      <div className="map-plane" data-paused={paused}>
        <div className="map-path" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <ol aria-label="Selected technologies">
          {labels.map((label, index) => {
            const Icon = nodeIcons[index]
            const [x, y] = points[index]
            return <li key={label} style={{ '--node-x': `${x}%`, '--node-y': `${y}%` }}>
              <Icon size={20} aria-hidden="true" /><span>{label}</span>
            </li>
          })}
        </ol>
      </div>
      <figcaption aria-live="polite">{project.title} · Illustrative technology map</figcaption>
    </figure>
  )
}

function CaseStudies({ active, select }) {
  const project = projects[active]
  return (
    <section id="work" className="section page-width">
      <p className="eyebrow">Case studies</p>
      <h2>Engineering in practice.</h2>
      <div className="work-grid">
        <div className="case-selector" role="group" aria-label="Select a case study">
          {projects.map(({ title, client }, index) => (
            <button type="button" key={title} aria-pressed={index === active} onClick={() => select(index)}>
              <span>{client}</span><strong>{title}</strong>
            </button>
          ))}
        </div>
        <article className="case-detail" aria-live="polite">
          <p className="eyebrow">{project.client}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tags" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <p className="result"><strong>Outcome</strong> {project.outcome}</p>
          <details key={project.title}><summary>Implementation details</summary><p>{project.details}</p></details>
        </article>
      </div>
    </section>
  )
}

export default function Atlas() {
  const [active, setActive] = useState(0)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="atlas-header">
        <div className="page-width header-content">
          <a className="brand" href="#home"><span>{profile.initials}</span>{profile.name}</a>
          <nav aria-label="Main navigation">{links.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1>Pragathi <em>Korrapati</em></h1>
              <p>{profile.introduction}</p>
              <div className="hero-actions"><a className="action" href="#work">Explore my work</a><a className="action secondary" href="#contact">Get in touch</a></div>
            </div>
            <div>
              <SystemMap project={projects[active]} />
              <div className="map-select" role="group" aria-label="Preview an architecture">
                {projects.map(({ title, visual }, index) => (
                  <button type="button" title={title} aria-pressed={active === index} key={visual} onClick={() => setActive(index)}>
                    {mapLabels[visual] ?? title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="page-width context-strip"><strong>{profile.experience} in enterprise software</strong><span>{profile.sectors}</span></div>
        </section>
        <CaseStudies active={active} select={setActive} />
        <section id="journey" className="journey">
          <div className="section page-width">
            <p className="eyebrow">Experience</p><h2>Client engagements.</h2>
            <ol className="timeline">
              {engagements.map(item => (
                <li key={item.company}>
                  <div className="date"><strong>{item.dates}</strong><span>{item.place}</span></div>
                  <details>
                    <summary><span><strong>{item.company}</strong><small>{item.role}</small></span></summary>
                    <p>{item.work}</p>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="toolkit" className="section page-width">
          <p className="eyebrow">Skills</p><h2>Across the stack.</h2>
          <div className="skills-grid">{skills.map(([name, list]) => <article key={name}><h3>{name}</h3><p>{list}</p></article>)}</div>
        </section>
        <section id="about" className="about">
          <div className="section page-width about-grid">
            <div><p className="eyebrow">About</p><h2>From interface to infrastructure.</h2></div>
            <div><p>{profile.background}</p><h3>Education</h3>{profile.education.map(item => <p key={item.degree}><strong>{item.degree}</strong> · {item.institution}</p>)}</div>
          </div>
        </section>
        <section id="contact" className="section page-width">
          <p className="eyebrow">Contact</p><h2>Let’s talk about your team.</h2>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}><Mail size={19} aria-hidden="true" />Email</a>
            <a href={contact.linkedin}><Linkedin size={19} aria-hidden="true" />LinkedIn</a>
            <a href={contact.github}><Github size={19} aria-hidden="true" />GitHub</a>
          </div>
        </section>
      </main>
      <footer><div className="page-width"><span>{profile.name}</span><a href="#home">Back to top</a></div></footer>
    </>
  )
}

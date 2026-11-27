import { useEffect, useState } from 'react'
import { Activity, Braces, Cloud, Database, Github, Layers, Linkedin, Mail, Pause, Play, Search, X } from 'lucide-react'
import { clientProjects, contact, engagements, featuredStack, profile, projects, resumeSkills, skills } from './content'

const links = [
  ['work', 'Case studies'], ['journey', 'Experience'], ['toolkit', 'Skills'], ['about', 'About'], ['contact', 'Contact'],
]

const routes = {
  court: ['Angular', 'ASP.NET Core', 'Azure Service Bus', 'Azure AI Search'],
  health: ['Member portals', '.NET services', 'FHIR / HL7', 'X12 EDI'],
  finance: ['React', 'Web API', 'AWS Lambda', 'RabbitMQ'],
  retail: ['Angular', 'ASP.NET MVC', 'SQL Server', 'Azure Service Bus'],
  claims: ['WebForms', 'SOAP', 'ADO.NET', 'SQL Server'],
}
const mapLabels = { court: 'Court systems', health: 'Healthcare', finance: 'Finance', retail: 'Retail', claims: 'Claims' }
const nodeIcons = [Layers, Braces, Database, Cloud]
const points = [[17, 23], [65, 23], [65, 71], [20, 71]]

function SystemMap({ project, paused, setPaused }) {
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

function CaseStudies({ active, select, caseStudies, showEnvironment }) {
  const project = caseStudies[active]
  const engagement = showEnvironment ? engagements.find(({ company }) => company === project.client) : undefined
  return (
    <section id="work" className="section page-width">
      <p className="eyebrow">Case studies</p>
      <h2>Engineering in practice.</h2>
      <div className="work-grid">
        <div className="case-selector" role="group" aria-label="Select a case study">
          {caseStudies.map(({ title, client }, index) => (
            <button type="button" key={title} aria-pressed={index === active} onClick={() => select(index)}>
              <span>{client}</span><strong>{title}</strong>
            </button>
          ))}
        </div>
        <article className="case-detail" aria-live="polite">
          <p className="eyebrow">{project.client}</p>
          <h3>{project.title}</h3>
          {engagement && <p className="case-role">{engagement.role} · {engagement.dates}</p>}
          <p>{project.description}</p>
          <ul className="tags" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <p className="result"><strong>Outcome</strong> {project.outcome}</p>
          <details key={project.title}><summary>Implementation details</summary><p>{project.details}</p></details>
          {engagement && <details key={engagement.company + '-stack'}><summary>Full client technology stack</summary>
            <ul className="tags" aria-label="Client technology stack">{engagement.environment.map(tech => <li key={tech}>{tech}</li>)}</ul>
          </details>}
        </article>
      </div>
    </section>
  )
}

function SkillExplorer({ query, setQuery }) {
  const [selected, setSelected] = useState(null)
  const term = query.toLowerCase().trim()
  const categories = (selected === null ? resumeSkills : [resumeSkills[selected]])
    .map(([name, list]) => [name, name.toLowerCase().includes(term) ? list : list.filter(skill => skill.toLowerCase().includes(term))])
    .filter(([, list]) => list.length > 0)
  return (
    <>
      <div className="skill-search">
        <label htmlFor="skill-query">Find a skill</label>
        <div className="skill-search-field">
          <Search size={18} aria-hidden="true" />
          <input id="skill-query" type="search" value={query} placeholder="Search .NET, Azure, React, or FHIR" onChange={(event) => setQuery(event.target.value)} />
          {query && <button type="button" aria-label="Clear search" onClick={() => {
            setQuery('')
            document.getElementById('skill-query').focus()
          }}><X size={17} aria-hidden="true" /></button>}
        </div>
      </div>
      <div className="skill-filter" role="group" aria-label="Filter technical skills">
        <button type="button" aria-pressed={selected === null} onClick={() => setSelected(null)}>All skills</button>
        {resumeSkills.map(([name], index) => (
          <button key={name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{name}</button>
        ))}
      </div>
      <p className="skills-status" role="status">
        {categories.length ? `Showing ${categories.length} of ${resumeSkills.length} skill categories` : 'No matching skills. Try a different search or category.'}
      </p>
      <div className="skills-grid" key={selected ?? 'all'}>
        {categories.map(([name, list]) => (
          <article key={name}><h3>{name}</h3>
            <ul className="skill-chips">{list.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </>
  )
}

export default function Atlas({ kinetic = false }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [skillQuery, setSkillQuery] = useState('')
  const [skillReset, setSkillReset] = useState(0)
  const caseStudies = kinetic ? clientProjects : projects
  useEffect(() => {
    if (!kinetic) return
    document.body.classList.add('kinetic-page')
    return () => document.body.classList.remove('kinetic-page')
  }, [kinetic])

  return (
    <div className={kinetic ? 'kinetic' : undefined} data-motion-paused={paused}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="atlas-header">
        <div className="page-width header-content">
          <a className="brand" href="#home"><span>{profile.initials}</span>{profile.name}</a>
          <nav aria-label="Main navigation">{links.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero" onPointerMove={kinetic ? (event) => {
          if (paused || event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
          const hero = event.currentTarget
          const bounds = hero.getBoundingClientRect()
          hero.style.setProperty('--point-x', `${event.clientX - bounds.left}px`)
          hero.style.setProperty('--point-y', `${event.clientY - bounds.top}px`)
        } : undefined}>
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1>Pragathi <em>Korrapati</em></h1>
              <p>{profile.introduction}</p>
              <div className="hero-actions">
                <a className="action" href="#work">Explore my work</a>
                {kinetic && <a className="action secondary" href="#toolkit">Browse technical skills</a>}
                <a className="action secondary" href="#contact">Get in touch</a>
              </div>
            </div>
            <div>
              <SystemMap project={caseStudies[active]} paused={paused} setPaused={setPaused} />
              <div className="map-select" role="group" aria-label="Preview an architecture">
                {caseStudies.map(({ title, visual }, index) => (
                  <button type="button" title={title} aria-pressed={active === index} key={visual} onClick={() => setActive(index)}>
                    {mapLabels[visual] ?? title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {kinetic ? (
            <div className="page-width kinetic-highlights">
              <div><strong>{profile.experience}</strong><span>Enterprise software development</span></div>
              <a href="#journey"><strong>{engagements[0].company}</strong><span>Latest engagement · {engagements[0].role}</span></a>
              <a href="#toolkit"><strong>{resumeSkills.length} skill categories</strong><span>Explore the full technical stack</span></a>
            </div>
          ) : <div className="page-width context-strip"><strong>{profile.experience} in enterprise software</strong><span>{profile.sectors}</span></div>}
        </section>
        {kinetic && <section className="section page-width featured-stack" aria-labelledby="featured-stack">
          <p className="eyebrow">Key technologies</p>
          <h2 id="featured-stack">My core stack.</h2>
          <div className="featured-grid">{featuredStack.map(([name, list]) => (
            <article key={name}>
              <h3>{name}</h3>
              <ul className="tags" aria-label={name}>{list.map(tech => (
                <li key={tech}><a href="#toolkit" onClick={() => {
                  setSkillQuery(tech)
                  setSkillReset(value => value + 1)
                }}>{tech}</a></li>
              ))}</ul>
            </article>
          ))}</div>
        </section>}
        <CaseStudies active={active} select={setActive} caseStudies={caseStudies} showEnvironment={kinetic} />
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
          {kinetic ? <SkillExplorer key={skillReset} query={skillQuery} setQuery={setSkillQuery} /> :
            <div className="skills-grid">{skills.map(([name, list]) => <article key={name}><h3>{name}</h3><p>{list}</p></article>)}</div>}

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
    </div>
  )
}

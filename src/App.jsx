import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import {
  ArrowDown, Braces, ChevronDown, Cloud, CodeXml, Database, Github, GraduationCap, Maximize, Minimize,
  Linkedin, Mail, Menu, Pause, Play, Search, ShieldCheck, Sparkles, X,
} from 'lucide-react'
import { clientProjects, contact, engagements, featuredStack, innovation, profile, skillContext, skills } from './content'

import SkillExplorer from './SkillExplorer'

const Scene = lazy(() => import('./Scene'))
const navigation = [
  ['home', 'Home'], ['about', 'About'],
  ...(engagements.length ? [['experience', 'Journey']] : []),
  ...(skills.length ? [['skills', 'Skills']] : []),
  ...(clientProjects.length ? [['projects', 'Projects']] : []),
  ...(innovation.length ? [['lab', 'Innovation Lab']] : []),
  ...(profile.education.length ? [['education', 'Education']] : []),
  ['contact', 'Contact'],
]
const skillIcons = [Braces, CodeXml, Cloud, Database, Sparkles, ShieldCheck]
function SectionTitle({ label, children }) {
  return <div className="section-title"><p className="eyebrow">{label}</p><h2>{children}</h2></div>
}

function TechGlobe({ scroll, animated, onSkill }) {
  return (
    <div className="globe-stage">
      <div className="globe-fallback" aria-hidden="true"><i /><i /><i /></div>
      {animated.enabled && <Suspense fallback={null}><Scene scroll={scroll} active={animated.playing} /></Suspense>}
      <div className="scene-skills" aria-label="Explore featured skills">
        {profile.sceneSkills.filter((skill) => skills[skill.category]).map((skill, index) => (
          <a key={skill.label} href="#skills" className={`scene-skill scene-skill-${index}`} onClick={() => onSkill(skill.category)}>
            <span />{skill.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function Skills({ active, setActive }) {
  return (
    <div className="skill-universe">
      <div className="skill-orbit" role="group" aria-label="Skill categories">
        <div className="skill-core" aria-hidden="true"><CodeXml size={24} />{profile.specialization}</div>
        {skills.map(([name], index) => {
          const Icon = skillIcons[index] ?? Braces
          return <button className="orbit-node" key={name} type="button" aria-pressed={index === active} onClick={() => setActive(index)}>
            <Icon aria-hidden="true" size={19} /><span>{name}</span>
          </button>
        })}
      </div>
      <div className="glass skill-detail" aria-live="polite">
        <h3>{skills[active][0]}</h3>
        <ul className="tags" aria-label="Technologies in this category">
          {skills[active][1].split(', ').map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        {skillContext[active] && <p>{skillContext[active]}</p>}
      </div>
    </div>
  )
}

function Innovation() {
  const [step, setStep] = useState(0)
  if (!innovation.length) return null

  return (
    <section id="lab" className="section shell">
      <SectionTitle label="Innovation Lab">Inside a retrieval workflow.</SectionTitle>
      <div className="glass lab">
        <p>Explore an illustrative walkthrough based on my work with contextual search for court records.</p>
        <div className="lab-steps" role="group" aria-label="Retrieval workflow steps">
          {innovation.map(({ label }, index) => <button key={label} type="button" aria-pressed={index === step} onClick={() => setStep(index)}>{label}</button>)}
        </div>
        <div aria-live="polite"><h3>{innovation[step].title}</h3><p>{innovation[step].detail}</p></div>
      </div>
    </section>
  )
}

function Contact() {
  const [feedback, setFeedback] = useState('')
  function draft(event) {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(values.get('subject')).trim())
    const body = encodeURIComponent(String(values.get('message')).trim())
    if (!subject || !body) {
      setFeedback('Enter a subject and message to prepare a draft.')
      return
    }
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setFeedback('Continue in your email app to review and send the draft.')
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-grid">
        <div>
          <SectionTitle label="Contact">Let’s build something meaningful.</SectionTitle>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}><Mail size={20} aria-hidden="true" />{contact.email}</a>
            {contact.linkedin && <a href={contact.linkedin}><Linkedin aria-hidden="true" size={20} />LinkedIn</a>}
            {contact.github && <a href={contact.github}><Github aria-hidden="true" size={20} />GitHub</a>}
          </div>
        </div>
        <form className="glass contact-form" onSubmit={draft}>
          <label>Subject<input name="subject" required maxLength={120} /></label>
          <label>Message<textarea name="message" rows={4} required maxLength={1200} /></label>
          <button className="button primary" type="submit">Open email draft</button>
          <p role="status">{feedback}</p>
        </form>
      </div>
    </section>
  )
}

function usePageProgress(scroll, progress) {
  const [section, setSection] = useState('home')
  useEffect(() => {
    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      progress.current?.style.setProperty('--progress', scroll.current)
      progress.current?.parentElement.style.setProperty('--chapter-progress', scroll.current)
      const current = navigation.findLast(([id]) => document.getElementById(id)?.getBoundingClientRect().top <= 160)
      setSection(current?.[0] ?? 'home')
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)
    window.addEventListener('scroll', schedule, { passive: true })
    update()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
    }
  }, [scroll, progress])
  return section
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [motion, setMotion] = useState(null)
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [desktop, setDesktop] = useState(() => matchMedia('(min-width: 760px) and (pointer: fine)').matches)
  const [activeSkill, setActiveSkill] = useState(0)
  const [skillQuery, setSkillQuery] = useState('')
  const [skillReset, setSkillReset] = useState(0)
  const [command, setCommand] = useState('')
  const dialog = useRef(null)
  const menu = useRef(null)
  const scroll = useRef(0)
  const progress = useRef(null)
  const activeSection = usePageProgress(scroll, progress)
  const enabled = desktop && !compact && (!reduced || motion === true)
  const playing = !compact && (motion ?? !reduced)

  useEffect(() => {
    const motionQuery = matchMedia('(prefers-reduced-motion: reduce)')
    const desktopQuery = matchMedia('(min-width: 760px) and (pointer: fine)')
    const updateMotion = () => setReduced(motionQuery.matches)
    const updateDesktop = () => setDesktop(desktopQuery.matches)
    const updateFullscreen = () => setFullscreen(Boolean(document.fullscreenElement))
    const shortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        if (dialog.current.open) dialog.current.close()
        else dialog.current.showModal()
      }
    }
    motionQuery.addEventListener('change', updateMotion)
    desktopQuery.addEventListener('change', updateDesktop)
    window.addEventListener('keydown', shortcut)
    document.addEventListener('fullscreenchange', updateFullscreen)
    return () => {
      motionQuery.removeEventListener('change', updateMotion)
      desktopQuery.removeEventListener('change', updateDesktop)
      window.removeEventListener('keydown', shortcut)
      document.removeEventListener('fullscreenchange', updateFullscreen)
    }
  }, [])

  return (
    <div className="quantum" data-compact={compact} data-motion={playing}>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header" ref={progress}>
        <div className="shell header-inner">
          <a className="brand" href="#home"><span>{profile.initials}</span>{profile.name}</a>
          <nav id="site-nav" aria-label="Main navigation" data-open={open} onKeyDown={(event) => {
            if (event.key === 'Escape' && open) {
              setOpen(false)
              menu.current.focus()
            }
          }}>
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
          <div className="header-controls">
            <button className="icon-control" type="button" onClick={() => dialog.current.showModal()} aria-label="Open command palette"><Search size={18} /></button>
            <button ref={menu} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>
      <dialog className="glass command" ref={dialog} aria-labelledby="command-title" onClose={() => setCommand('')}>
        <div className="command-title"><h2 id="command-title">Jump to a section</h2><button className="icon-control" type="button" aria-label="Close command palette" onClick={() => dialog.current.close()}><X size={19} /></button></div>
        <input aria-label="Filter sections" placeholder="Search sections" value={command} onChange={(event) => setCommand(event.target.value)} />
        <ul>
          {navigation.filter(([, label]) => label.toLowerCase().includes(command.toLowerCase().trim())).map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => dialog.current.close()}>{label}</a></li>
          ))}
        </ul>
      </dialog>
      <main id="main" tabIndex={-1}>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1 id="hero-title" className="hero-name">{profile.name}</h1>
              <p className="hero-headline">{profile.headline}</p>
              <p className="hero-intro">{profile.introduction}</p>
              <div className="hero-actions">
                {clientProjects.length > 0 && <a className="button primary" href="#projects">Explore projects</a>}
                <a className="button secondary" href="#skills">Explore my stack</a>
                <a className="button secondary" href="#contact">Get in touch</a>
              </div>
            </div>
            <TechGlobe scroll={scroll} animated={{ enabled, playing }} onSkill={setActiveSkill} />
          </div>
          <div className="shell hero-controls">
            <div><strong>{profile.experience}</strong><span>{profile.sectors}</span></div>
            <div className="view-controls">
              {!compact && (desktop || !reduced) && <button className="button secondary" type="button" onClick={() => setMotion(!playing)}>{playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}{playing ? 'Pause motion' : 'Play motion'}</button>}
              <button className="button secondary" type="button" aria-pressed={compact} onClick={() => setCompact(!compact)}>{compact ? 'Cinematic view' : 'Quick view'}</button>
              {document.fullscreenEnabled && <button className="icon-control" type="button"
                aria-label={fullscreen ? 'Exit full screen' : 'Enter full screen'} onClick={() => {
                  const action = fullscreen ? document.exitFullscreen() : document.documentElement.requestFullscreen()
                  action.catch(() => setFullscreen(Boolean(document.fullscreenElement)))
                }}>{fullscreen ? <Minimize size={17} aria-hidden="true" /> : <Maximize size={17} aria-hidden="true" />}</button>}
              <a href="#about" className="icon-control" aria-label="Scroll to About"><ArrowDown size={20} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
        <section id="about" className="section shell about-grid">
          <SectionTitle label="About">From interface to infrastructure.</SectionTitle>
          <p className="about-copy">{profile.background}</p>
        </section>
        {!!engagements.length && <section id="experience" className="section tinted">
          <div className="shell">
            <SectionTitle label="Career journey">Client engagements</SectionTitle>
            <ol className="timeline">
              {engagements.map((item) => (
                <li key={item.company}>
                  <div className="timeline-date"><strong>{item.dates}</strong><span>{item.place}</span></div>
                  <details className="glass milestone">
                    <summary><span><span className="eyebrow">{item.sector}</span><strong className="milestone-company">{item.company}</strong><span>{item.role}</span></span><ChevronDown size={20} aria-hidden="true" /></summary>
                    <p>{item.work}</p>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </section>}
        {!!skills.length && <section id="skills" className="section shell">
          <SectionTitle label="Technical skills">Technology stack</SectionTitle>
          <div className="core-stack" aria-label="Key technologies">
            {featuredStack.map(([label, list, description]) => (
              <article className="glass" key={label}>
                <h3>{label}</h3>
                <p>{description}</p>
                <ul className="tags">{list.map(tech => (
                  <li key={tech}><a href="#technical-skills" onClick={() => {
                    setSkillQuery(tech)
                    setSkillReset(value => value + 1)
                  }}>{tech}</a></li>
                ))}</ul>
              </article>
            ))}
          </div>
          <Skills active={activeSkill} setActive={setActiveSkill} />
          <div id="technical-skills" className="quantum-skill-explorer">
            <h3>Full technical skills</h3>
            <SkillExplorer key={skillReset} query={skillQuery} setQuery={setSkillQuery} />
          </div>
        </section>}
        {!!clientProjects.length && <section id="projects" className="section tinted">
          <div className="shell">
            <SectionTitle label="Projects">Selected case studies</SectionTitle>
            <div className="case-grid">
              {clientProjects.map((project) => {
                const engagement = engagements.find(item => item.company === project.client)
                return <article className="glass quantum-project" key={project.title}>
                  <p className="eyebrow">{project.client}</p>
                  <h3>{project.title}</h3>
                  {engagement && <p className="project-role">{engagement.role} · {engagement.dates}</p>}
                  <p>{project.description}</p>
                  <ul className="project-highlights" aria-label="Project highlights">
                    {project.highlights.map(([title, detail]) => <li key={title}><strong>{title}</strong><p>{detail}</p></li>)}
                  </ul>
                  <ul className="tags" aria-label="Technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                  <p className="outcome"><strong>Outcome</strong> {project.outcome}</p>
                  <details><summary>Implementation details <ChevronDown size={18} aria-hidden="true" /></summary><p>{project.details}</p></details>
                  {engagement && <details>
                    <summary>Full client technology stack <ChevronDown size={18} aria-hidden="true" /></summary>
                    <ul className="tags" aria-label="Client technology stack">{engagement.environment.map(tech => <li key={tech}>{tech}</li>)}</ul>
                  </details>}
                </article>
              })}
            </div>
          </div>
        </section>}
        <Innovation />
        {!!profile.education.length && <section id="education" className="section tinted">
          <div className="shell">
            <SectionTitle label="Credentials">Education</SectionTitle>
            {profile.education.map(({ degree, institution }) => (
              <article key={degree} className="glass education-card"><GraduationCap size={30} aria-hidden="true" /><div><h3>{degree}</h3><p>{institution}</p></div></article>
            ))}
          </div>
        </section>}
        <Contact />
      </main>
      <footer><div className="shell"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top</a></div></footer>
    </div>
  )
}

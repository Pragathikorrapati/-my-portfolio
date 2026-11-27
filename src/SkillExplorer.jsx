import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { resumeSkills } from './content'

export default function SkillExplorer({ query, setQuery, showSearch = true }) {
  const [selected, setSelected] = useState(null)
  const term = query.toLowerCase().trim()
  const categories = (selected === null ? resumeSkills : [resumeSkills[selected]])
    .map(([name, list]) => [name, name.toLowerCase().includes(term) ? list : list.filter(skill => skill.toLowerCase().includes(term))])
    .filter(([, list]) => list.length > 0)
  function selectCategory(category) {
    setSelected(category)
    if (!showSearch) setQuery('')
  }

  return (
    <>
      {showSearch && <div className="skill-search">
        <label htmlFor="skill-query">Find a skill</label>
        <div className="skill-search-field">
          <Search size={18} aria-hidden="true" />
          <input id="skill-query" type="search" value={query} placeholder="Search .NET, Azure, React, or FHIR" onChange={(event) => setQuery(event.target.value)} />
          {query && <button type="button" aria-label="Clear search" onClick={() => {
            setQuery('')
            document.getElementById('skill-query').focus()
          }}><X size={17} aria-hidden="true" /></button>}
        </div>
      </div>}
      <div className="skill-filter" role="group" aria-label="Filter technical skills">
        <button type="button" aria-pressed={selected === null && (showSearch || !term)} onClick={() => selectCategory(null)}>All skills</button>
        {resumeSkills.map(([name], index) => (
          <button key={name} type="button" aria-pressed={selected === index} onClick={() => selectCategory(index)}>{name}</button>
        ))}
      </div>
      <p className="skills-status" role="status">
        {categories.length ? `Showing ${categories.length} of ${resumeSkills.length} skill categories${!showSearch && term ? ` for “${query}”` : ''}` : 'No matching skills. Select a category or choose All skills.'}
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

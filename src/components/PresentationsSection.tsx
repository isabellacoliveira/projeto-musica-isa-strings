import { useState } from 'react'
import presentationsData from '../data/apresentacoes.json'
import type { Presentation } from '../types/music'
import { SectionHeading } from './SectionHeading'

const presentations = presentationsData.apresentacoes as Presentation[]
const years = Array.from({ length: 10 }, (_, index) => 2017 + index)
const presentationImages = import.meta.glob<string>('../assets/apresentacoes/*', { eager: true, import: 'default', query: '?url' })

function presentationTitle(presentation: Presentation) {
  return presentation.titulo || presentation.grupo
}

function presentationImage(presentation: Presentation) {
  return presentation.imagem ? presentationImages[`../assets/apresentacoes/${presentation.imagem}`] : undefined
}
 
export function PresentationsSection() {
  const [selectedYear, setSelectedYear] = useState(2026)
  const filteredPresentations = presentations.filter((presentation) => presentation.ano === selectedYear)

  return <section className="content-section presentations-section" id="apresentacoes"><SectionHeading eyebrow="03 / apresentações" title="Palcos, encontros e apresentações." description="Registros de apresentações que fazem parte da trajetória." /><div className="presentation-filters" aria-label="Filtrar apresentações por ano">{years.map((year) => <button className={selectedYear === year ? 'is-active' : ''} type="button" key={year} aria-pressed={selectedYear === year} onClick={() => setSelectedYear(year)}>{year}</button>)}</div>{filteredPresentations.length ? <div className="presentation-grid">{filteredPresentations.map((presentation) => <article className="presentation-card" key={`${presentation.ano}-${presentation.mes}-${presentationTitle(presentation)}-${presentation.local}`}><div className="presentation-image">{presentationImage(presentation) ? <img src={presentationImage(presentation)} alt={presentationTitle(presentation)} /> : <span>imagem<br />em breve</span>}</div><div className="presentation-card-body"><p>{presentation.mes} de {presentation.ano}</p><h3>{presentationTitle(presentation)}</h3><span>{presentation.instrumento}</span><p className="presentation-place">{presentation.local}, {presentation.cidade}</p>{presentation.grupo && presentation.titulo && <p className="presentation-group">Com {presentation.grupo}</p>}</div></article>)}</div> : <p className="presentations-empty">Em breve apresentações de {selectedYear}.</p>}</section>
}
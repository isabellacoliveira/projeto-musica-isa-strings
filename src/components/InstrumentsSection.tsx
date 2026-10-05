import { ArrowUpRight } from 'lucide-react'
import { instruments } from '../data/music'
import { SectionHeading } from './SectionHeading'

export function InstrumentsSection() {
  return <section className="content-section instruments-section" id="instrumentos"><SectionHeading eyebrow="02 / instrumentos" title="Oito encontros com as cordas." /><div className="instrument-grid">{instruments.map((instrument, index) => <article className="instrument-card" key={instrument.id}><p className="instrument-number">0{index + 1}</p><div><span className={instrument.status === 'Ativo' ? 'status active' : 'status'}>{instrument.status}</span><h3>{instrument.name}</h3><p>desde {instrument.startedIn}</p><p className="instrument-description">{instrument.relationship}</p></div><button type="button" aria-label={`Ver detalhes sobre ${instrument.name}`}><ArrowUpRight size={19} /></button></article>)}</div></section>
}
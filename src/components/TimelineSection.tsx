import { timeline } from '../data/music'
import { SectionHeading } from './SectionHeading'

export function TimelineSection() {
  return <section className="content-section timeline-section" id="trajetoria"><SectionHeading eyebrow="01 / minha história" title="Minha trajetória" description="Uma linha do tempo em construção: os detalhes, memórias e registros vão sendo adicionados conforme a história continua." /><ol className="timeline">{timeline.map((entry) => <li key={entry.instrument}><p>{entry.year}</p><div><span>{entry.instrument}</span><h3>{entry.title}</h3><p>{entry.description}</p></div></li>)}</ol></section>
}
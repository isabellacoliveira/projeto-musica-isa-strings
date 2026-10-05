import { groups } from '../data/music'
import { SectionHeading } from './SectionHeading'

export function GroupsSection() {
  return <section className="content-section groups-section" id="grupos"><SectionHeading eyebrow="03 / grupos e projetos" title="Musica tambem e encontro." /><div className="groups-list">{groups.map((group) => <article className="group-item" key={group.name}><p>{group.period}</p><div><span>{group.instrument}</span><h3>{group.name}</h3><p>{group.description}</p></div>{group.upcoming && <span className="upcoming">em breve</span>}</article>)}</div></section>
}
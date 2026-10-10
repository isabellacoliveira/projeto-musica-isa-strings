import { currentActivities } from '../data/music'
import { SectionHeading } from './SectionHeading'

export function CurrentSection() {
  return <section className="current-section" id="hoje"><div className="current-inner"><SectionHeading eyebrow="04 / hoje" title="A história segue em movimento."/><div className="current-list">{currentActivities.map((activity) => <article key={activity.value}><p>{activity.label}</p><h3>{activity.value}</h3><span>{activity.detail}</span></article>)}</div></div></section>
}
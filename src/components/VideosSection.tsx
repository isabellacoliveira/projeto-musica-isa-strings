import { ExternalLink, Search } from 'lucide-react'
import { useState } from 'react'
import { youtubeService } from '../services/youtubeService'
import type { Video } from '../types/music'
import { SectionHeading } from './SectionHeading'

export function VideosSection() {
  const [query, setQuery] = useState('')
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setVideos(await youtubeService.search(query))
    setHasSearched(true)
    setIsLoading(false)
  }

  return <section className="content-section videos-section" id="videos"><SectionHeading eyebrow="05 / meus videos" title="Registros para ouvir e rever." description="Em breve, os videos do canal estarao reunidos aqui." /><form className="video-search" onSubmit={handleSearch}><label htmlFor="video-search">Buscar no canal</label><div><input id="video-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Canon, cello, violao..." /><button type="submit" aria-label="Buscar videos"><Search size={19} /></button></div></form>{isLoading && <p className="feedback" role="status">Buscando no canal...</p>}{hasSearched && !isLoading && videos.length === 0 && <p className="video-empty">A integracao com o canal esta em preparacao. Por enquanto, acompanhe os registros diretamente no YouTube.</p>}<a className="channel-link" href="https://www.youtube.com/@AquelaDasCordas-Isa" target="_blank" rel="noreferrer">Visitar canal <ExternalLink size={16} /></a></section>
}
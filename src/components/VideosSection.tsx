import { ChevronLeft, ChevronRight, ExternalLink, Play, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { youtubeService } from '../services/youtubeService'
import type { Video } from '../types/music'
import { SectionHeading } from './SectionHeading'

export function VideosSection() {
  const [query, setQuery] = useState('')
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const videosPerPage = 5
  const pageCount = Math.ceil(videos.length / videosPerPage)
  const visibleVideos = videos.slice(currentPage * videosPerPage, (currentPage + 1) * videosPerPage)

  useEffect(() => {
    void loadVideos('')
  }, [])

  async function loadVideos(searchQuery: string) {
    setIsLoading(true)
    setVideos(await youtubeService.search(searchQuery))
    setCurrentPage(0)
    setIsLoading(false)
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setHasSearched(true)
    await loadVideos(query)
  }

  function handleQueryChange(value: string) {
    setQuery(value)
    setHasSearched(true)
    void loadVideos(value)
  }

  function changePage(direction: 'previous' | 'next') {
    setCurrentPage((page) => direction === 'next' ? Math.min(page + 1, pageCount - 1) : Math.max(page - 1, 0))
  }

  return <section className="content-section videos-section" id="videos"><SectionHeading eyebrow="04 / meus vídeos" title="Registros para ouvir e rever." description="Covers, estudos e momentos guardados no canal Aquela Das Cordas." /><div className="videos-content"><form className="video-search" onSubmit={handleSearch}><label htmlFor="video-search">Buscar no canal</label><div><input id="video-search" value={query} onChange={(event) => handleQueryChange(event.target.value)} placeholder="Canon, cello, violão..." /><button type="submit" aria-label="Buscar vídeos"><Search size={19} /></button></div></form><div className="carousel-controls"><button type="button" onClick={() => changePage('previous')} aria-label="Cinco vídeos anteriores" disabled={currentPage === 0}><ChevronLeft size={19} /></button><span aria-live="polite">{pageCount ? `${currentPage + 1} / ${pageCount}` : '0 / 0'}</span><button type="button" onClick={() => changePage('next')} aria-label="Próximos cinco vídeos" disabled={currentPage >= pageCount - 1}><ChevronRight size={19} /></button></div></div>{isLoading && <p className="feedback" role="status">Buscando no canal...</p>}{hasSearched && !isLoading && videos.length === 0 && <p className="video-empty">Nenhum registro encontrado para esta busca.</p>}{visibleVideos.length > 0 && <div className="video-carousel">{visibleVideos.map((video) => <article className="video-card" key={video.id}><a className="video-thumbnail" href={video.url} target="_blank" rel="noreferrer"><img src={video.thumbnail} alt={`Capa do vídeo ${video.title}`} /><span><Play size={17} fill="currentColor" /></span></a><div className="video-card-body"><p>{new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' }).format(new Date(video.publishedAt))}</p><h3>{video.title}</h3><span className="video-instrument">{video.instrumento || 'Instrumento a adicionar'}</span><a href={video.url} target="_blank" rel="noreferrer">Assistir no YouTube <ExternalLink size={14} /></a></div></article>)}</div>}<a className="channel-link" href="https://www.youtube.com/@AquelaDasCordas-Isa" target="_blank" rel="noreferrer">Visitar canal <ExternalLink size={16} /></a></section>
}
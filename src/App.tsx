import { ArrowDownRight, AtSign, Guitar, Menu, Play, X } from 'lucide-react'
import { useState } from 'react'
import { site } from './data/site'
import './App.css'
import { CurrentSection } from './components/CurrentSection'
import { GallerySection } from './components/GallerySection'
import { GroupsSection } from './components/GroupsSection'
import { InstrumentsSection } from './components/InstrumentsSection'
import { MusicRequestForm } from './components/MusicRequestForm'
import { TimelineSection } from './components/TimelineSection'
import { VideosSection } from './components/VideosSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="isa.strings, inicio">
          isa<span>.</span>strings
        </a>
        <nav className={isMenuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegacao principal">
          <a href="#trajetoria" onClick={() => setIsMenuOpen(false)}>Trajetória</a>
          <a href="#instrumentos" onClick={() => setIsMenuOpen(false)}>Instrumentos</a>
          <a href="#hoje" onClick={() => setIsMenuOpen(false)}>Hoje</a>
          <a href="#videos" onClick={() => setIsMenuOpen(false)}>Vídeos</a>
          <a href="#pedidos" onClick={() => setIsMenuOpen(false)}>Peça uma música</a>
        </nav>
        <a className="header-social" href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram de isa.strings">
          <AtSign size={18} />
        </a>
        <button className="menu-button" type="button" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Aquela das cordas</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="hero-title">{site.title}</p>
          <p className="hero-description">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#trajetoria">Conheça minha trajetória <ArrowDownRight size={18} /></a>
            <a className="button button-secondary" href="#videos"><Play size={16} fill="currentColor" /> Assistir vídeos</a>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Espaco reservado para foto de Isa Oliveira">
          {site.profileImage ? <img src={site.profileImage} alt="Isa Oliveira com um instrumento de cordas" /> : <div className="portrait-placeholder"><div className="placeholder-violin"><Guitar aria-hidden="true" size={126} strokeWidth={1.1} /><span>cordas<br />em movimento</span></div></div>}
        </div>
        <a className="scroll-prompt" href="#trajetoria">explorar <ArrowDownRight size={18} /></a>
      </section>
      <TimelineSection />
      <InstrumentsSection />
      <GroupsSection />
      <CurrentSection />
      <VideosSection />
      <GallerySection />
      <MusicRequestForm />
      <footer><a className="wordmark" href="#inicio">isa<span>.</span>strings</a><p>Uma história musical em movimento.</p><a href={site.instagramUrl} target="_blank" rel="noreferrer">@isa.strings</a></footer>
    </main>
  )
}

export default App

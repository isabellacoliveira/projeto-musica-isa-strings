import { Images } from 'lucide-react'

export function GallerySection() {
  return <section className="gallery-section" aria-labelledby="gallery-title"><Images size={21} /><div><p className="eyebrow">galeria</p><h2 id="gallery-title">Registros em breve.</h2></div><p>Ensaios, instrumentos, apresentacoes e bastidores ganharao lugar aqui.</p></section>
}
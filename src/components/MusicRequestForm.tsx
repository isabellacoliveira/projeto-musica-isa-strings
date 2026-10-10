import { Send } from 'lucide-react'
import { useState } from 'react'
import { instrumentOptions } from '../data/music'
import { isMusicRequestConfigured, musicRequestService } from '../services/musicRequestService'
import type { MusicRequest } from '../types/music'
import { SectionHeading } from './SectionHeading'

const initialRequest: MusicRequest = { name: '', instagram: '', artist: '', song: '', instrument: '', message: '' }

export function MusicRequestForm() {
  const [request, setRequest] = useState(initialRequest)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  function updateField(field: keyof MusicRequest, value: string) { setRequest((current) => ({ ...current, [field]: value })) }
  async function submitRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!request.name || !request.artist || !request.song || !request.instrument) { setError('Preencha nome, artista, música e instrumento.'); setStatus('error'); return }
    if (!musicRequestService) { setError('O recebimento de pedidos está sendo configurado.'); setStatus('error'); return }
    setStatus('loading'); setError('')
    try { await musicRequestService.submit(request); setStatus('success'); setRequest(initialRequest) } catch { setStatus('error'); setError('Não foi possível enviar agora. Tente novamente.') }
  }

  return <section className="request-section" id="pedidos"><div className="request-inner"><SectionHeading eyebrow="06 / peça uma música" title="Qual som você quer ouvir?" description="Mande uma ideia. O pedido chega para a Isa e pode inspirar um próximo registro." /><form className="request-form" onSubmit={submitRequest} noValidate><div className="form-grid"><label>Nome<input value={request.name} onChange={(event) => updateField('name', event.target.value)} required /></label><label>Instagram<input value={request.instagram} onChange={(event) => updateField('instagram', event.target.value)} placeholder="@seuusuario" /></label><label>Artista<input value={request.artist} onChange={(event) => updateField('artist', event.target.value)} required /></label><label>Música<input value={request.song} onChange={(event) => updateField('song', event.target.value)} required /></label><label>Instrumento<select value={request.instrument} onChange={(event) => updateField('instrument', event.target.value)} required><option value="">Escolha um instrumento</option>{instrumentOptions.map((instrument) => <option key={instrument}>{instrument}</option>)}</select></label><label className="message-field">Observações<textarea value={request.message} onChange={(event) => updateField('message', event.target.value)} rows={3} /></label></div>{!isMusicRequestConfigured && <p className="form-message error" role="status">O recebimento de pedidos está sendo configurado.</p>}{status === 'success' && <p className="form-message success" role="status">Pedido recebido. Obrigada por compartilhar!</p>}{status === 'error' && <p className="form-message error" role="alert">{error}</p>}<button className="button button-primary" type="submit" disabled={status === 'loading' || !isMusicRequestConfigured}>{status === 'loading' ? 'Enviando...' : 'Enviar pedido'} <Send size={16} /></button></form></div></section>
}
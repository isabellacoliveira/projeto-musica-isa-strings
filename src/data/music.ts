import type { Instrument, MusicGroup, TimelineEntry } from '../types/music'

export const instruments: Instrument[] = [
  { id: 'violao', name: 'Violão', startedIn: '2017', status: 'Ativo', relationship: 'Em estudo no Conservatório de Cubatão.' },
  { id: 'ukulele', name: 'Ukulele', startedIn: '2018', status: 'Eventual / hobby', relationship: 'Presença leve e afetiva na trajetória.' },
  { id: 'violino', name: 'Violino', startedIn: '2020', status: 'Eventual / hobby', relationship: 'Exploração entre as cordas friccionadas.' },
  { id: 'baixo', name: 'Baixo', startedIn: '2022', status: 'Eventual / hobby', relationship: 'Uma nova perspectiva para escutar conjuntos.' },
  { id: 'guitarra', name: 'Guitarra', startedIn: '2023', status: 'Eventual / hobby', relationship: 'Mais uma textura no universo das cordas.' },
  { id: 'viola-de-arco', name: 'Viola de arco', startedIn: '2023', status: 'Eventual / hobby', relationship: 'Descoberta dentro da família das cordas de arco.' },
  { id: 'cello', name: 'Cello', startedIn: '2024', status: 'Ativo', relationship: 'Em estudo com aulas particulares.' },
  { id: 'viola-caipira', name: 'Viola caipira', startedIn: '2026', status: 'Eventual / hobby', relationship: 'O encontro mais recente da trajetória.' },
]

export const timeline: TimelineEntry[] = instruments.map((instrument) => ({
  year: instrument.startedIn,
  instrument: instrument.name,
  title: `Início com ${instrument.name}`,
  description: 'Marco inicial registrado. Os detalhes desta fase serão adicionados em breve.',
}))

export const groups: MusicGroup[] = [
  { name: 'Grupo Stacatto', period: 'desde 2024', instrument: 'Violão', description: 'Grupo de violão.' },
  { name: 'Camerata Jovem Santista', period: 'desde 2026', instrument: 'Cello', description: 'Atuação com cello.' },
  { name: 'Orquestra Lana de Castro', period: 'desde 2026', instrument: 'Cello', description: 'Chefe de naipe de cello.' },
//   { name: 'Orquestra Unisantos', period: 'em breve', instrument: 'Cello', description: 'Proximo capitulo da trajetoria.', upcoming: true },
//   { name: 'Orquestra MINC', period: 'em breve', instrument: 'Cello', description: 'Proximo capitulo da trajetoria.', upcoming: true },
]

export const currentActivities = [
  { label: 'Formação', value: 'Conservatório de Cubatão', detail: 'Violão | 2026 - 2031' },
  { label: 'Estudo', value: 'Cello', detail: 'Aulas particulares' },
  { label: 'Palco', value: 'Grupo Stacatto', detail: 'Violão | desde 2024' },
  { label: 'Orquestra', value: 'Camerata Jovem Santista', detail: 'Cello | desde 2026' },
  { label: 'Orquestra', value: 'Orquestra Lana de Castro', detail: 'Chefe de naipe de cello | desde 2026' },
]

export const instrumentOptions = instruments.map((instrument) => instrument.name)
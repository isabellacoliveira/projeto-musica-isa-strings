export type InstrumentStatus = 'Ativo' | 'Eventual / hobby'

export interface Instrument {
  id: string
  name: string
  startedIn: string
  status: InstrumentStatus
  relationship: string
}

export interface TimelineEntry {
  year: string
  instrument: string
  title: string
  description: string
}

export interface MusicGroup {
  name: string
  period: string
  instrument: string
  description: string
  upcoming?: boolean
}

export interface Video {
  id: string
  title: string
  publishedAt: string
  description: string
  thumbnailUrl: string
  url: string
}

export interface MusicRequest {
  name: string
  instagram: string
  artist: string
  song: string
  instrument: string
  message: string
}
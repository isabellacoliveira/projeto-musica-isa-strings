import emailjs from '@emailjs/browser'
import type { MusicRequest } from '../types/music'

export interface MusicRequestService {
  submit(request: MusicRequest): Promise<void>
}

interface EmailJsConfig {
  serviceId: string
  templateId: string
  publicKey: string
}

export class EmailJsMusicRequestService implements MusicRequestService {
  private readonly config: EmailJsConfig

  constructor(config: EmailJsConfig) {
    this.config = config
  }

  async submit(request: MusicRequest): Promise<void> {
    await emailjs.send(
      this.config.serviceId,
      this.config.templateId,
      {
        requester_name: request.name,
        requester_instagram: request.instagram || 'Não informado',
        requested_artist: request.artist,
        requested_song: request.song,
        requested_instrument: request.instrument,
        request_message: request.message || 'Sem observações.',
      },
      { publicKey: this.config.publicKey },
    )
  }
}

const emailJsConfig: Partial<EmailJsConfig> = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const isMusicRequestConfigured = Boolean(
  emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey,
)

export const musicRequestService = isMusicRequestConfigured
  ? new EmailJsMusicRequestService(emailJsConfig as EmailJsConfig)
  : null
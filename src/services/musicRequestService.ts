import type { MusicRequest } from '../types/music'

export interface MusicRequestService {
  submit(request: MusicRequest): Promise<void>
}

export class MockMusicRequestService implements MusicRequestService {
  async submit(request: MusicRequest): Promise<void> {
    void request
    await new Promise((resolve) => window.setTimeout(resolve, 700))
  }
}

export const musicRequestService = new MockMusicRequestService()
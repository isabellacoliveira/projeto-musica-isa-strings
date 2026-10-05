import type { Video } from '../types/music'

export interface YoutubeService {
  search(query: string): Promise<Video[]>
}

export class MockYoutubeService implements YoutubeService {
  async search(query: string): Promise<Video[]> {
    void query
    return []
  }
}

export const youtubeService = new MockYoutubeService()
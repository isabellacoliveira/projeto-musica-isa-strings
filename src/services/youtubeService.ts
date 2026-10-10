import catalog from '../data/youtube-catalog.json'
import type { Video } from '../types/music'

export interface YoutubeService {
  search(query: string): Promise<Video[]>
}

export class MockYoutubeService implements YoutubeService {
  async search(query: string): Promise<Video[]> {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')

    return [...catalog]
      .sort((firstVideo, secondVideo) => new Date(firstVideo.publishedAt).getTime() - new Date(secondVideo.publishedAt).getTime())
      .filter((video) => !normalizedQuery || video.title.toLocaleLowerCase('pt-BR').includes(normalizedQuery))
      .map((video) => ({
        id: video.videoId,
        title: video.title,
        publishedAt: video.publishedAt,
        instrumento: video.instrumento,
        url: video.url,
        thumbnail: video.thumbnail,
      }))
  }
}

export const youtubeService = new MockYoutubeService()
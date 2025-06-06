export interface IYoutubeVideoItem {
    kind: string
    etag: string
    id: {
        kind: string
        videoId: string
    },
    snippet: {
        publishedAt: Date
        channelId: string
        title: string
        description: string
        thumbnails: {
          default: {
            url: string
            width: number
            height: number
          },
          medium: {
            url: string
            width: number
            height: number
          },
          high: {
            url: string
            width: number
            height: number
          }
        },
        channelTitle: string
        publishTime: Date
    }
}

export interface IYoutubeReponse {
    kind: string
    etag: string
    nextPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    },
    items: IYoutubeVideoItem[]
};
import type { IYoutubeReponse, IYoutubeVideoItem } from "../interface/ThirdAPI";
export const GetLatestVideos = async (): Promise<IYoutubeReponse> => {
    return fetch(`${import.meta.env.API}/api/youtube/latest`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            etag: '',
            kind: '',
            nextPageToken: '',
            pageInfo: '',
            regionCode: '',
            items: [] as IYoutubeVideoItem[]
        }) as unknown as IYoutubeReponse);
}
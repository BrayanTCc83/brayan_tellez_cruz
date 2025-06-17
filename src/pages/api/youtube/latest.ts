import { GetOrSaveYoutubeResponseCache } from '../../../cache/youtube';

import type { APIRoute } from 'astro';
import type { IYoutubeReponse } from '../../../interface/ThirdAPI';

const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.YOUTUBE_CHANNEL_ID;

export const GET: APIRoute = async () => {
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`;

    try {
        const data = await GetOrSaveYoutubeResponseCache<IYoutubeReponse>('latest', apiURL);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error al conectar con YouTube' }), {
            status: 500,
        });
    }
};

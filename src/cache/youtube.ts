import { FlatCache } from "flat-cache";

const YoutubeCache = new FlatCache();
const TTL = 6 * 60 * 60 * 1000; // 6 Hours
YoutubeCache.load('astro-youtube-api-cache');

interface CachedTTL<T> {
    timestamp: number
    data: T
};

const CacheValidateTTL = <T,>(cached: CachedTTL<T>): boolean => {
    const now = Date.now();
    return now - cached.timestamp < TTL;
}

export const GetOrSaveYoutubeResponseCache = async <T,>(key: string, url: string) => {
    const cached:CachedTTL<T> | null | undefined = YoutubeCache.get(key);
    if(cached && CacheValidateTTL<T>(cached)) {
        if((cached.data as any).error) {
            throw cached;
        }
        return cached;
    }

    const res = await fetch(url);
    const data = await res.json();

    YoutubeCache.set(key, {
        timestamp: Date.now(),
        data
    } as CachedTTL<unknown>);
    YoutubeCache.save();

    return data;
}

export default YoutubeCache;
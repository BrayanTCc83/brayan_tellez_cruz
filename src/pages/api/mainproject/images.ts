import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../status/statuscode';

export const GET: APIRoute = async ({ url } : APIContext ) => {
    const name = 'lua';
    const mainproject = `/assets/projects/${name}/images`;
    const images: string[] = await fetch(`${url.origin}${mainproject}`)
        .then(res => res.json())
        .catch(_ => []);

    return new Response(
        JSON.stringify(images.map(img => `${url.origin}/assets/projects/${name}/${img}`)), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
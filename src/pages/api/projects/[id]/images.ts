import type { APIContext, APIRoute } from 'astro';
import Projects from '../../../../../public/assets/projects/projects.json';

import STATUS from '../../../../status/statuscode';

export async function getStaticPaths() {
  return Projects.map( id => ({
    params: { id }
  }));
}

export const GET: APIRoute = async ({ url, params } : APIContext ) => {
    const id = params.id??'lua';
    const mainproject = `/assets/projects/${id}/images`;
    const images: string[] = await fetch(`${url.origin}${mainproject}`)
        .then(res => res.json())
        .catch(_ => []);

    return new Response(
        JSON.stringify(images.map(img => `${url.origin}/assets/projects/${id}/${img}`)), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
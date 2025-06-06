import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../status/statuscode';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es', id: 1 } },
    { params: { lang: 'en', id: 2 } },
  ];
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const name = 'lua';
    const lang = params.lang ?? 'es';
    const mainproject = `/assets/projects/${name}/${lang}.json`;
    const content = await fetch(`${url.origin}${mainproject}`)
        .then(res => res.json())
        .catch(_ => {});

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
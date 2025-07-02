import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../status/statuscode';
import LANGS_SUPPORTED, { SPANISH } from '../../../utils/langs';

export async function getStaticPaths() {
  return LANGS_SUPPORTED.map( lang => ({ params: { lang } }) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const name = 'lua';
    const lang = params.lang ?? SPANISH;
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
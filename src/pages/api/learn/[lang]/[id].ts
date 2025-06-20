import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../../status/statuscode';
import Learns from '../../../../../public/assets/learn/learn.json';

export async function getStaticPaths() {
    return Learns.flatMap( ({id}) => ['es','en','ch'].flatMap(lang => ({ params: { lang, id } })) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang;
    const id = params.id;
    const learn = `${url.origin}/assets/learn/${id}/introduction-${lang}.json`;
    const content = await fetch(learn)
            .then(res => res.json())
            .catch(_ => 
                fetch(`${url.origin}/assets/learn/${id}/introduction-es.json`)
                    .then(res =>  res.json())
            )
            .catch(_ => ({}));
    content.themes = await fetch(`${url.origin}/assets/learn/${id}/themes-${lang}.json`)
            .then(res => res.json())
            .catch(_ => 
                fetch(`${url.origin}/assets/learn/${id}/themes-es.json`)
                    .then(res =>  res.json())
            )
            .catch(_ => ({}));

    content.flow = await fetch(`${url.origin}/assets/learn/${id}/flow.json`)
        .then(res => res.json())
        .catch(_ => []);

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
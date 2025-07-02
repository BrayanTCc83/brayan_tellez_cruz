import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../../../status/statuscode';
import Learns from '../../../../../../public/assets/learn/learn.json';
import LANGS_SUPPORTED from '../../../../../utils/langs';

export async function getStaticPaths() {
    return Learns.flatMap( ({id, themes}) => themes.flatMap( lesson => LANGS_SUPPORTED.flatMap(lang => ({ params: { lang, id, lesson } }))) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang;
    const id = params.id;
    const lesson = params.lesson;
    
    const learn = `${url.origin}/assets/learn/${id}/${lesson}-${lang}.json`;
    const content = await fetch(learn)
            .then(res => res.json())
            .catch(_ => 
                fetch(`${url.origin}/assets/learn/${id}/${lesson}-es.json`)
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

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
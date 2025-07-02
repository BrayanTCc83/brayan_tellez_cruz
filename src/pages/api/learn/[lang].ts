import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../status/statuscode';
import Learns from '../../../../public/assets/learn/learn.json';

import type { ILearnConcept } from '../../../interface/Learn';
import LANGS_SUPPORTED from '../../../utils/langs';

export async function getStaticPaths() {
    return Learns.flatMap( ({id}) => LANGS_SUPPORTED.flatMap(lang => ({ params: { lang, id } })) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang;
    const learn = (await fetch(`${url.origin}/assets/learn/learn.json`)
        .then(res => res.json())
        .catch(_ => [] as string[]));
    
    const content: ILearnConcept[] = [];
    for(const b of learn) {
        const blog = `${url.origin}/assets/learn/${b.id}/introduction-${lang}.json`;
        const learnTheme = await fetch(blog)
            .then(res => res.json())
            .catch(_ => 
                fetch(`${url.origin}/assets/learn/${b.id}/introduction-es.json`)
                    .then(res =>  res.json())
            )
            .catch(_ => ({}));
        learnTheme.themes = b.themes;
        content.push( learnTheme );
    }

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
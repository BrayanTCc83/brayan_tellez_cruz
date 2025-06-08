import type { APIContext, APIRoute } from 'astro';

import STATUS from '../../../status/statuscode';
import type { ILearnConcept } from '../../../interface/Learn';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es', id: 1 } },
    { params: { lang: 'en', id: 2 } },
    { params: { lang: 'ch', id: 3 } },
  ];
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang;
    const learn = (await fetch(`${url.origin}/assets/learn/learn.json`)
        .then(res => res.json())
        .catch(_ => [] as string[]));
    
    const content: ILearnConcept[] = [];
    for(const b of learn) {
        const blog = `${url.origin}/assets/learn/${b}/${lang}.json`;
        content.push(
            await fetch(blog)
                .then(res => res.json())
                .catch(_ => 
                    fetch(`${url.origin}/assets/learn/${b}/es.json`)
                        .then(res =>  res.json())
                )
                .catch(_ => ({}))
        );
        content[content.length - 1].flow = await fetch(`${url.origin}/assets/learn/${b}/flow.json`)
            .then(res => res.json())
            .catch(_ => []);
    }

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
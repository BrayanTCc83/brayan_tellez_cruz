import type { APIContext, APIRoute } from 'astro';
import type { IProject } from '../../../../interface/LangSupport';

import STATUS from '../../../../status/statuscode';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es', id: 1 } },
    { params: { lang: 'en', id: 2 } },
    { params: { lang: 'ch', id: 3 } },
  ];
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang ?? 'es';
    const list = `/assets/projects/projects.json`;
    const projects = (await fetch(`${url.origin}${list}`)
        .then(res => res.json())
        .catch(_ => []) as string[]);
    
    const content: IProject[] = [];
    for(const p of projects) {
        const project = `${url.origin}/assets/projects/${p}/${lang}.json`;
        content.push(
            await fetch(project)
                .then(res => res.json())
                .catch(_ => {})
        );
    }

    return new Response(
        JSON.stringify(content), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
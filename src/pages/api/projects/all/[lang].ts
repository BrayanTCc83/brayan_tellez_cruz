import type { APIContext, APIRoute } from 'astro';
import type { IProject } from '../../../../interface/LangSupport';

import STATUS from '../../../../status/statuscode';
import LANGS_SUPPORTED, { SPANISH } from '../../../../utils/langs';

export async function getStaticPaths() {
  return LANGS_SUPPORTED.map( lang => ({ params: { lang } }) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang ?? SPANISH;
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
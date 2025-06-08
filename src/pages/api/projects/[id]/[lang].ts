import type { APIContext, APIRoute } from 'astro';
import Projects from '../../../../../public/assets/projects/projects.json';

import STATUS from '../../../../status/statuscode';

export async function getStaticPaths() {
  return Projects.flatMap( id => [ 'es', 'en', 'ch' ].map( lang => ({ params: { lang, id: id } })) );
}

export const GET: APIRoute = async ({ url, params } : APIContext ) => {
    const { lang, id } = params;
    const path = `/assets/projects/${id}/project-${lang}.json`;
    const project = await fetch(`${url.origin}${path}`)
        .then(res => res.json())
        .catch(_ => 
            fetch(`${url.origin}${`/assets/projects/${id}/project-es.json`}`)
                .then(res => res.json())
        );

    return new Response(
        JSON.stringify(project), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
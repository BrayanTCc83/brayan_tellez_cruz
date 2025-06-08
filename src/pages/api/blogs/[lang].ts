import type { APIContext, APIRoute } from 'astro';
import type { IBlogResume, IBlogDefinition } from '../../../interface/Blog';

import STATUS from '../../../status/statuscode';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es', id: 1 } },
    { params: { lang: 'en', id: 2 } },
    { params: { lang: 'ch', id: 3 } },
  ];
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const lang = params.lang;
    const blogs: IBlogDefinition[] = (await fetch(`${url.origin}/assets/blogs/blogs.json`)
        .then(res => res.json())
        .catch(_ => []));
    
    const content: IBlogResume[] = [];
    for(const b of blogs) {
        const blog = `${url.origin}/assets/blogs/${b.id}/resume-${lang}.json`;
        content.push(
            await fetch(blog)
                .then(res =>  res.json())
                .catch(_ => 
                    fetch(`${url.origin}/assets/blogs/${b.id}/resume-es.json`)
                        .then(res =>  res.json())
                )
                .catch(_ => ({}))
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
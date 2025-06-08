import type { APIContext, APIRoute } from 'astro';
import type { IBlog } from '../../../../interface/Blog';

import STATUS from '../../../../status/statuscode';

import Blogs from "../../../../../public/assets/blogs/blogs.json";

export async function getStaticPaths() {
  return Blogs.flatMap( id => [ 'es', 'en', 'ch' ].map( lang => ({ params: { lang, id: id.id } })) );
}

export const GET: APIRoute = async ({ params, url }: APIContext) => {
    const { lang, id } = params;
    const blog: IBlog[] = (await fetch(`${url.origin}/assets/blogs/${id}/${lang}.json`)
        .then(res => res.json())
        .catch(_ => []));

    return new Response(
        JSON.stringify(blog), {
        status: STATUS.SUCCESS,
        headers: {
        'Content-Type': 'application/json',
        },
    });
};
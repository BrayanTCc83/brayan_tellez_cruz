import type { APIRoute } from 'astro';
import { BLOG_URL, INDEX_URL, PROJECT_URL, USER_URL } from '../../router/routes';

import STATUS from '../../status/statuscode';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      endpoints: {
        project: [...Object.values(PROJECT_URL)],
        blog: [...Object.values(BLOG_URL)],
        data: [...Object.values(INDEX_URL)],
        user: [...Object.values(USER_URL)]
      }
    }), {
    status: STATUS.SUCCESS,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
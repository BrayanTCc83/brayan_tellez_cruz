import type { APIContext, APIRoute } from 'astro';
import aboutmees from "../../../data/es/aboutme.json";
import aboutmeen from "../../../data/en/aboutme.json";
import aboutmech from "../../../data/ch/aboutme.json";

import STATUS from '../../../status/statuscode';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es', id: 1 } },
    { params: { lang: 'en', id: 2 } },
    { params: { lang: 'ch', id: 3 } },
  ];
}

export const GET: APIRoute = async ({ params }: APIContext) => {
  const lang = params.lang ?? 'es';

  return new Response(
    JSON.stringify(
      lang === 'es' ? aboutmees : lang === 'en' ? aboutmeen : aboutmech
    ), {
    status: STATUS.SUCCESS,
    headers: {
    'Content-Type': 'application/json',
    },
  });
};
import type { APIContext, APIRoute } from 'astro';
import aboutmees from "../../../data/es/aboutme.json";
import aboutmeen from "../../../data/en/aboutme.json";
import aboutmech from "../../../data/zh/aboutme.json";

import STATUS from '../../../status/statuscode';
import LANGS_SUPPORTED, { ENGLISH, SPANISH } from '../../../utils/langs';

export async function getStaticPaths() {
  return LANGS_SUPPORTED.map( lang => ({ params: { lang } }) );
}

export const GET: APIRoute = async ({ params }: APIContext) => {
  const lang = params.lang ?? SPANISH;

  return new Response(
    JSON.stringify(
      lang === SPANISH ? aboutmees : lang === ENGLISH ? aboutmeen : aboutmech
    ), {
    status: STATUS.SUCCESS,
    headers: {
    'Content-Type': 'application/json',
    },
  });
};
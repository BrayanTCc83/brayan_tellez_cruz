import type { APIContext, APIRoute } from 'astro';
import aboutmees from "../../../data/es/aboutme.json";
import aboutmeen from "../../../data/en/aboutme.json";

import STATUS from '../../../status/statuscode';

export const GET: APIRoute = async ({ params }: APIContext) => {
    const lang = params.lang ?? 'es';

    return new Response(
        JSON.stringify(lang === 'en' ? aboutmeen : aboutmees), {
        status: STATUS.SUCCESS,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
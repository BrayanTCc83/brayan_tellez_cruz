import type { IBlogResume } from "../interface/Blog";
import type { ILangSupport } from "../interface/LangSupport";

export const GetAllBlogs = async ({ lang }: ILangSupport ): Promise<IBlogResume[]> => {
    return fetch(`${import.meta.env.API}/api/blogs/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as IBlogResume[]);
}
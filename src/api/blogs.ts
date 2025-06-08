import type { IBlog, IBlogFragment, IBlogResume } from "../interface/Blog";
import type { ILangSupport } from "../interface/LangSupport";

export const GetAllBlogs = async ({ lang }: ILangSupport ): Promise<IBlogResume[]> => {
    return fetch(`${import.meta.env.API}/api/blogs/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as IBlogResume[]);
}

export const GetBlog = async ({ lang, id }: ILangSupport & { id: string } ): Promise<IBlog> => {
    return fetch(`${import.meta.env.API}/api/blogs/${lang}/${id}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            author: '',
            creation_date: '',
            duration: 0,
            fragments: [] as IBlogFragment[],
            poster: '',
            subtitle: '',
            title: '',
            update_date: ''
        }) as IBlog);
}
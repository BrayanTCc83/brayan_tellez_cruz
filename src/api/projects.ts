import type { ILangSupport, IProject } from "../interface/LangSupport";

export const GetLatestProjects = async ({ lang }: ILangSupport ): Promise<IProject[]> => {
    return fetch(`${import.meta.env.API}/api/projects/latest/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as IProject[]);
}
import type { ILangSupport, IProject } from "../interface/LangSupport";

export const GetLatestProjects = async ({ lang }: ILangSupport ): Promise<IProject[]> => {
    return fetch(`${import.meta.env.API}/api/projects/latest/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as IProject[]);
}

export const GetAllProjects = async ({ lang }: ILangSupport ): Promise<IProject[]> => {
    return fetch(`${import.meta.env.API}/api/projects/all/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as IProject[]);
}

export const GetProjectImages = async ({ id }: { id: string } ): Promise<string[]> => {
    return fetch(`${import.meta.env.API}/api/projects/${id}/images`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as string[]);
}
import type { IAbout, ILangSupport, IProject } from "../interface/LangSupport";

export const AboutMe = async ({ lang }: ILangSupport): Promise<IAbout> => {
    return fetch(`${import.meta.env.API}/api/about/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            content: {
                description: [],
                header: ''
            },
            credentials: '',
            meta: {
                description: '',
                image: '',
                url: ''
            },
            skills: {},
            hobbies: {}
        }) as IAbout);
}

export const MainProject = async ({ lang }: ILangSupport): Promise<IProject> => {
    return fetch(`${import.meta.env.API}/api/mainproject/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            description: [],
            name: '',
            subname: '',
            technologies: [],
            urlgit: '',
            urlweb: ''
        }) as unknown as IProject);
}

export const MainProjectImages = async (): Promise<string[]> => {
    return fetch(`${import.meta.env.API}/api/mainproject/images`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => []);
}
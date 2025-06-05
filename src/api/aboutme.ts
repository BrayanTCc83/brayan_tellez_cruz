import { API } from "./base";

import type { IAbout, IAboutContentDescription, ILangSupport, IMainProject } from "../interface/LangSupport";

export const AboutMe = async ({ lang }: ILangSupport): Promise<IAbout> => {
    return fetch(`${API}/about?lang=${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( err => {
            console.error(err);
            return {
                credentials: '',
                content: {
                    description: [] as IAboutContentDescription[],
                    header: ''
                },
                meta: {
                    description: '',
                    image: '',
                    url: ''
                }
            } as IAbout;
        });
}

export const MainProject = async ({ lang }: ILangSupport): Promise<IMainProject> => {
    return fetch(`${API}/mainproject?lang=${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( err => {
            console.error(err);
            return [];
        });
}

export const MainProjectImages = async (): Promise<string[]> => {
    return fetch(`${API}/mainproject/images`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( err => {
            console.error(err);
            return [];
        });
}
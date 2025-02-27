import { API } from "./base";

import type { IAbout, ILangSupport, IMainProject } from "../interface/LangSupport";

export const AboutMe = async ({ lang }: ILangSupport): Promise<IAbout> => {
    return fetch(`${API}/about?lang=${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( err => err );
}

export const MainProject = async ({ lang }: ILangSupport): Promise<IMainProject> => {
    return fetch(`${API}/mainproject?lang=${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( err => err );
}
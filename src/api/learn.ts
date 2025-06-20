import type { ILearnConcept, ILearnAbstract, ILearnLesson } from "../interface/Learn";
import type { ILangSupport } from "../interface/LangSupport";

export const GetAllLearn = async ({ lang }: ILangSupport ): Promise<ILearnAbstract[]> => {
    return fetch(`${import.meta.env.API}/api/learn/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as ILearnAbstract[]);
}

export const GetLearn = async ({ lang, id }: ILangSupport & { id: string } ): Promise<ILearnConcept> => {
    return fetch(`${import.meta.env.API}/api/learn/${lang}/${id}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            description: '',
            flow: [],
            git: '',
            id: '',
            lang: '',
            title: '',
            url: '',
            themes: {
                text: '',
                themes: []
            },
            resume: ''
        }) as ILearnConcept);
}

export const GetTheme = async ({ lang, id, lesson }: ILangSupport & { id: string, lesson: string } ): Promise<ILearnLesson> => {
    return fetch(`${import.meta.env.API}/api/learn/${lang}/${id}/${lesson}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => ({
            id: '',
            lang: '',
            lesson: '',
            title: '',
            sections: {}
        }) as ILearnLesson);
}
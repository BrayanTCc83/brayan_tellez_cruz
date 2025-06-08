import type { ILearnConcept } from "../interface/Learn";
import type { ILangSupport } from "../interface/LangSupport";

export const GetAllLearn = async ({ lang }: ILangSupport ): Promise<ILearnConcept[]> => {
    return fetch(`${import.meta.env.API}/api/learn/${lang}`)
        .then( res => res.ok ? res.json() : {error: res.statusText} )
        .catch( _ => [] as ILearnConcept[]);
}
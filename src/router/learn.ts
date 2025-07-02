import Learns from '../../public/assets/learn/learn.json';
import LANGS_SUPPORTED from '../utils/langs';
import baseUrl from './_base';

export const GetLearnPaths = () => {
    return Learns.flatMap( ({ id }) =>
        LANGS_SUPPORTED.flatMap(lang =>
            `${baseUrl}/${lang}/learn/${id}`
        )
    );
}

export const GetLearnLessonsPaths = () => {
    return Learns.flatMap( ({ id, themes }) =>
        themes.flatMap( lesson =>
            LANGS_SUPPORTED.flatMap(lang =>
                `${baseUrl}/${lang}/learn/${id}/${lesson}`
            )
        )
    );
}
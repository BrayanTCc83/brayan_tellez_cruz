import Learns from '../../public/assets/learn/learn.json';
import baseUrl from './_base';

export const GetLearnPaths = () => {
    return Learns.flatMap( ({ id }) =>
        ['es','en','ch'].flatMap(lang =>
            `${baseUrl}/${lang}/learn/${id}`
        )
    );
}

export const GetLearnLessonsPaths = () => {
    return Learns.flatMap( ({ id, themes }) =>
        themes.flatMap( lesson =>
            ['es','en','ch'].flatMap(lang =>
                `${baseUrl}/${lang}/learn/${id}/${lesson}`
            )
        )
    );
}
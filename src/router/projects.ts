import Projects from '../../public/assets/projects/projects.json';
import LANGS_SUPPORTED from '../utils/langs';
import baseUrl from './_base';

export const GetProjectsPaths = () => {
    return Projects.flatMap( id =>
        LANGS_SUPPORTED.map( lang =>
            `${baseUrl}/${lang}/projects/${id}`
        )
    );
}
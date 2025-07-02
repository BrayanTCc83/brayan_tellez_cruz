import Projects from '../../public/assets/projects/projects.json';
import baseUrl from './_base';

export const GetProjectsPaths = () => {
    return Projects.flatMap( id =>
        [ 'es', 'en', 'ch' ].map( lang =>
            `${baseUrl}/${lang}/projects/${id}`
        )
    );
}
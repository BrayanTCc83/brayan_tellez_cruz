import Blogs from "../../public/assets/blogs/blogs.json";
import LANGS_SUPPORTED from "../utils/langs";
import baseUrl from "./_base";

import type { IBlogDefinition } from "../interface/Blog";

export const GetBlogsPaths = () => {
    return (Blogs as IBlogDefinition[]).flatMap( id => 
        LANGS_SUPPORTED.map( lang => 
            `${baseUrl}/${lang}/blogs/${id.id}`
        )
    );
}
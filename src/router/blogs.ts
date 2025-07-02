import Blogs from "../../public/assets/blogs/blogs.json";
import LANGS_SUPPORTED from "../utils/langs";
import baseUrl from "./_base";

export const GetBlogsPaths = () => {
    return Blogs.flatMap( id => 
        LANGS_SUPPORTED.map( lang => 
            `${baseUrl}/${lang}/blogs/${id.id}`
        )
    );
}
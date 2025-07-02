import Blogs from "../../public/assets/blogs/blogs.json";
import baseUrl from "./_base";

export const GetBlogsPaths = () => {
    return Blogs.flatMap( id => 
        [ 'es', 'en', 'ch' ].map( lang => 
            `${baseUrl}/${lang}/blogs/${id.id}`
        )
    );
}
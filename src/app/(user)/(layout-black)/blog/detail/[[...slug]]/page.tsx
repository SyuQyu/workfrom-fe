import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogDetailPage = () => {
    // const router = useRouter();
    // const { slug } = router.query;
    // const [blogPost, setBlogPost] = useState(null);

    // useEffect(() => {
    //     const fetchBlogPost = async () => {
    //         const post = await getBlogPost(slug);
    //         setBlogPost(post);
    //     };

    //     if (slug) {
    //         fetchBlogPost();
    //     }
    // }, [slug]);

    // if (!blogPost) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <p>detail blog</p>
        </div>
    );
};

export default BlogDetailPage;

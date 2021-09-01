import IPostService from "../contract/IPostService";
import Post from "../model/Post";

interface listResponseModel {
    title: string;
    created_at: string;
    cover_file_name: string;
    description: string;
    slug: string;
}

interface singleResponseModel {
    title: string;
    created_at: string;
    cover_file_name: string;
    sanitized_html: string;
    user_id: string;
}

class APIv2PostService implements IPostService {
    async getListPosts(callback: (posts: Post[]) => void) {
        try {
            const response = await fetch("/api/posts");
            const posts: listResponseModel[] = await response.json();
            if (!response.ok) throw new Error("Error");
            callback(
                posts.map(
                    (post) =>
                        new Post(
                            post.title,
                            post.created_at,
                            post.cover_file_name,
                            {
                                description: post.description,
                                slug: post.slug,
                            }
                        )
                )
            );
        } catch (error) {
            callback([]);
            console.error(
                "APIv2PostService.getListPosts(): Unable to fetch data from API"
            );
        }
    }

    async getPost(slug: string, callback: (post: Post | undefined) => void) {
        try {
            const response = await fetch(`/api/post/${slug}`);
            if (!response.ok) throw new Error("Error");
            const post: singleResponseModel = await response.json();
            callback(
                new Post(post.title, post.created_at, post.cover_file_name, {
                    author: post.user_id,
                    sanitizedHtml: post.sanitized_html,
                })
            );
        } catch (error) {
            callback(undefined);
            console.error(
                "APIv2PostService.getPost(): Unable to fetch data from API"
            );
        }
    }
}

export default APIv2PostService;

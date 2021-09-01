import Post from "../model/Post";

interface IPostService {
    getListPosts(callback: (posts: Post[]) => void): Promise<void>;
    getPost(
        slug: string,
        callback: (post: Post | undefined) => void
    ): Promise<void>;
}

export default IPostService;

import { RouteComponentProps } from "react-router";
import APIv2PostService from "./APIv2PostService";
import APIv2UserService from "./APIv2UserService";
import Post from "./Post";
import PostPageJSXElement from "./PostPageJSXElement";

interface Params {
    slug: string;
}

const PostPage = ({ match }: RouteComponentProps<Params>) => {
    const postService = new APIv2PostService();
    const userService = new APIv2UserService();
    const loadingPost = new Post("Loading post...", "", "", postService);
    const blankPost = new Post(
        "This post isn't available",
        "",
        "",
        postService
    );
    return PostPageJSXElement({
        postService,
        userService,
        slug: match.params.slug,
        loadingPost,
        blankPost,
    });
};

export default PostPage;

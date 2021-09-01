import { RouteComponentProps } from "react-router";
import APIv2PostService from "../service/APIv2PostService";
import APIv2UserService from "../service/APIv2UserService";
import Post from "../model/Post";
import PostPageJSXElement from "../components/post/PostPageJSXElement";

interface Params {
    slug: string;
}

const PostPage = ({ match }: RouteComponentProps<Params>) => {
    const postService = new APIv2PostService();
    const userService = new APIv2UserService();
    return PostPageJSXElement({
        postService,
        userService,
        slug: match.params.slug,
    });
};

export default PostPage;

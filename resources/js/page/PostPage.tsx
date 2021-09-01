import { RouteComponentProps } from "react-router";
import APIv2PostService from "../service/APIv2PostService";
import APIv2UserService from "../service/APIv2UserService";
import Post from "../model/Post";
import PostPageJSXElement from "../components/post/PostPageJSXElement";
import APIv2FileService from "../service/APIv2FileService";

interface Params {
    slug: string;
}

const PostPage = ({ match }: RouteComponentProps<Params>) => {
    const postService = new APIv2PostService();
    const userService = new APIv2UserService();
    const fileService = new APIv2FileService();
    return PostPageJSXElement({
        postService,
        userService,
        fileService,
        slug: match.params.slug,
    });
};

export default PostPage;

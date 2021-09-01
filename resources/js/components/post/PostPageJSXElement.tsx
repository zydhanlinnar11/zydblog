import { useEffect, useState } from "react";
import IPostService from "../../contract/IPostService";
import Post from "../../model/Post";
import "../../../css/Post.css";
import TitleBox from "../title-box";
import LoadingAnimation from "../LoadingAnimation";
import NotAvailable from "../NotAvailable";
import ReactHtml from "raw-html-react";
import User from "../../model/User";
import IUserService from "../../contract/IUserService";

interface PostPageJSXElementProps {
    slug: string;
    postService: IPostService;
    userService: IUserService;
}

const PostPageJSXElement = (props: PostPageJSXElementProps) => {
    const unknownUser = new User("unknown", "Unknown User", "unknown");
    const loadingPost = new Post("Loading post...", "", "");
    const blankPost = new Post("This post isn't available", "", "");
    const { slug, postService, userService } = props;
    const [post, setPost] = useState((): Post => loadingPost);
    const [user, setUser] = useState((): User => unknownUser);
    const [content, setContent] = useState(() => <LoadingAnimation />);

    useEffect(() => {
        postService.getPost(slug, (fetchedPost: Post | undefined) => {
            if (!fetchedPost) {
                setPost(blankPost);
                const blankContent = (
                    <NotAvailable text="This page isn't available" />
                );
                setContent(blankContent);
                return;
            }
            setPost(fetchedPost);
        });
    }, []);

    useEffect(() => {
        if (post == loadingPost) return;
        userService.getUser(
            post.getAuthor(),
            (fetchedUser: User | undefined) => {
                if (!fetchedUser) return;
                setUser(fetchedUser);
            }
        );
    }, [post]);

    useEffect(() => {
        if (user == unknownUser) return;
        const properContent = (
            <div className="post-content-container">
                <div className="post-content">
                    <h3 className="post-content-title">{post.getTitle()}</h3>
                    <p className="post-content-info">
                        <span className="not-highlighted">Created by</span>{" "}
                        {user.getUserName()}{" "}
                        <span className="not-highlighted">on</span>{" "}
                        {post.getLocalDateString()}
                    </p>
                    <hr />
                    <ReactHtml html={post.getSanitizedHtml()} />
                </div>
            </div>
        );
        setContent(properContent);
    }, [user]);

    return (
        <main>
            <TitleBox backgroundURL={"null"} title={post.getTitle()} />
            {content}
        </main>
    );
};

export default PostPageJSXElement;

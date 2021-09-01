import { useEffect, useState } from "react";
import IPostService from "./IPostService";
import IPost from "./IPost";
import "../../../css/Post.css";
import TitleBox from "../title-box";
import LoadingAnimation from "../LoadingAnimation";
import NotAvailable from "../NotAvailable";
import ReactHtml from "raw-html-react";
import User from "./User";
import IUserService from "./IUserService";

interface PostPageJSXElementProps {
    slug: string;
    postService: IPostService;
    userService: IUserService;
    loadingPost: IPost;
    blankPost: IPost;
}

const PostPageJSXElement = (props: PostPageJSXElementProps) => {
    const { slug, postService, loadingPost, blankPost, userService } = props;
    const [post, setPost] = useState((): IPost => loadingPost);
    const [user, setUser] = useState(
        (): User => new User("unknown", "Unknown User", "unknown")
    );
    const [content, setContent] = useState(() => <LoadingAnimation />);

    useEffect(() => {
        postService.getPost(slug, (fetchedPost: IPost | undefined) => {
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
        userService.getUser(
            post.getAuthor(),
            (fetchedUser: User | undefined) => {
                if (!fetchedUser) return;
                setUser(fetchedUser);
                const properContent = (
                    <div className="post-content-container">
                        <div className="post-content">
                            <h3 className="post-content-title">
                                {post.getTitle()}
                            </h3>
                            <p className="post-content-info">
                                <span className="not-highlighted">
                                    Created by
                                </span>{" "}
                                {fetchedUser.getUserName()}{" "}
                                <span className="not-highlighted">on</span>{" "}
                                {post.getLocalDateString()}
                            </p>
                            <hr />
                            <ReactHtml html={post.getSanitizedHtml()} />
                        </div>
                    </div>
                );
                setContent(properContent);
            }
        );
    }, [post]);

    return (
        <main>
            <TitleBox
                backgroundURL={post.getCoverURL()}
                title={post.getTitle()}
            />
            {content}
        </main>
    );
};

export default PostPageJSXElement;

import { useState, useEffect } from "react";
import IPostService from "./IPostService";
import TitleBox from "../title-box";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import LoadingAnimation from "../LoadingAnimation";
import NotAvailable from "../NotAvailable";
import config from "../../utilities/config";
import "../../../css/ListOfContents.css";
import IPost from "./IPost";

interface ListOfContentsLayoutProps {
    postService: IPostService;
}

function ListOfContentsLayout(props: ListOfContentsLayoutProps) {
    const emptyPosts: IPost[] = [];
    const { postService } = props;
    const [posts, setPosts] = useState(() => emptyPosts);
    const [ListOfContentsLayoutJsx, setListOfContentsLayoutJsx] = useState(
        () => <LoadingAnimation />
    );
    const [isFetched, setFetched] = useState(() => false);

    useEffect(() => {
        postService.getListPosts(setPosts);
        setFetched(true);
    }, []);

    useEffect(() => {
        if (!isFetched) return;
        const contentAvailableLayout = (
            <div className="list-content">
                {posts.map((post) => (
                    <Link
                        style={{ textDecoration: "none" }}
                        to={post.getURL()}
                        key={post.getSlug()}
                    >
                        <PostItem
                            title={post.getTitle()}
                            localDate={post.getLocalDateString()}
                            description={post.getDescription()}
                            thumbnailURL={post.getThumbnailURL()}
                        />
                    </Link>
                ))}
            </div>
        );
        if (posts.length === 0)
            setListOfContentsLayoutJsx(
                <NotAvailable text="No content available." />
            );
        else setListOfContentsLayoutJsx(contentAvailableLayout);
    }, [posts]);

    return (
        <main>
            <TitleBox
                title={config.getBlogName()}
                backgroundURL={config.getTitleBoxDefaultBackground()}
            />
            {ListOfContentsLayoutJsx}
        </main>
    );
}

export default ListOfContentsLayout;

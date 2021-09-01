import APIv2PostService from "../service/APIv2PostService";
import ListOfContentsJSXElement from "../components/post/ListOfContentsJSXElement";

const ListOfContents = () => {
    return ListOfContentsJSXElement({ postService: new APIv2PostService() });
};

export default ListOfContents;

import APIv2PostService from "./APIv2PostService";
import ListOfContentsJSXElement from "./ListOfContentsJSXElement";

const ListOfContents = () => {
    return ListOfContentsJSXElement({ postService: new APIv2PostService() });
};

export default ListOfContents;

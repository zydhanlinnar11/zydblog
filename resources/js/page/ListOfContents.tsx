import APIv2PostService from "../service/APIv2PostService";
import ListOfContentsJSXElement from "../components/post/ListOfContentsJSXElement";
import APIv2FileService from "../service/APIv2FileService";

const ListOfContents = () => {
    return ListOfContentsJSXElement({
        postService: new APIv2PostService(),
        fileService: new APIv2FileService(),
    });
};

export default ListOfContents;

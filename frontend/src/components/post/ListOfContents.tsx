import APIv1PostService from './APIv1PostService'
import ListOfContentsJSXElement from './ListOfContentsJSXElement'

const ListOfContents = () => {
  return ListOfContentsJSXElement({ postService: new APIv1PostService() })
}

export default ListOfContents

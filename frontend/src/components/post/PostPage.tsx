import { RouteComponentProps } from 'react-router'
import APIv1PostService from './APIv1PostService'
import Post from './Post'
import PostPageJSXElement from './PostPageJSXElement'

interface Params {
  slug: string
}

const PostPage = ({ match }: RouteComponentProps<Params>) => {
  const postService = new APIv1PostService()
  const loadingPost = new Post('Loading post...', '', '', postService)
  const blankPost = new Post("This post isn't available", '', '', postService)
  return PostPageJSXElement({
    postService,
    slug: match.params.slug,
    loadingPost,
    blankPost,
  })
}

export default PostPage

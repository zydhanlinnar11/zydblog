import { useEffect, useState } from 'react'
import IPostService from './IPostService'
import IPost from './IPost'
import '../../css/Post.css'
import TitleBox from '../title-box'
import LoadingAnimation from '../LoadingAnimation'
import NotAvailable from '../NotAvailable'
import ReactHtml from 'raw-html-react'

interface PostPageJSXElementProps {
  slug: string
  postService: IPostService
  loadingPost: IPost
  blankPost: IPost
}

const PostPageJSXElement = (props: PostPageJSXElementProps) => {
  const { slug, postService, loadingPost, blankPost } = props
  const [post, setPost] = useState((): IPost => loadingPost)
  const [content, setContent] = useState(() => <LoadingAnimation />)

  useEffect(() => {
    postService.getPost(slug, (fetchedPost: IPost | undefined) => {
      if (fetchedPost) {
        setPost(fetchedPost)
        const properContent = (
          <div className="post-content-container">
            <div className="post-content">
              <h3 className="post-content-title">{fetchedPost.getTitle()}</h3>
              <p className="post-content-info">
                <span className="not-highlighted">Created by</span>{' '}
                {fetchedPost.getAuthor()}{' '}
                <span className="not-highlighted">on</span>{' '}
                {fetchedPost.getLocalDateString()}
              </p>
              <hr />
              <ReactHtml html={fetchedPost.getSanitizedHtml()} />
            </div>
          </div>
        )
        setContent(properContent)
        return
      }
      setPost(blankPost)
      const blankContent = <NotAvailable text="This page isn't available" />
      setContent(blankContent)
    })
  }, [])

  return (
    <main>
      <TitleBox backgroundURL={post.getCoverURL()} title={post.getTitle()} />
      {content}
    </main>
  )
}

export default PostPageJSXElement

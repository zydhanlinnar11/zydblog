import TitleBox from './title-box'
import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import NotAvailable from './NotAvailable'
import ReactHtml from 'raw-html-react'
import './Post.css'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }

  componentDidMount() {
    fetch(`/blog/posts/${this.props.match.params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          title: data.title,
          content: data.sanitizedHtml,
          coverPath: data.coverPath,
          date: data.date,
          author: data.author,
        })
      })
  }

  render() {
    const titleBoxBg = this.state.coverPath
    const postTitle = this.state.title
    const postContent = this.state.content
    const postDate = this.state.date
    const postAuthor = this.state.author

    return (
      <main>
        <TitleBox
          background={titleBoxBg}
          title={postTitle === '' ? 'Loading post...' : postTitle}
        />
        {postContent === undefined ? (
          <NotAvailable text="This page isn't available" />
        ) : postContent === '' ? (
          <LoadingAnimation />
        ) : (
          <div className="post-content-container">
            <div className="post-content">
              <h3 className="post-content-title">{postTitle}</h3>
              <p className="post-content-info">
                <span className="not-highlighted">Created by</span> {postAuthor}{' '}
                <span className="not-highlighted">on</span>{' '}
                {new Date(postDate).toLocaleString()}
              </p>
              <hr />
              <ReactHtml html={postContent} />
            </div>
          </div>
        )}
      </main>
    )
  }
}

export default Post

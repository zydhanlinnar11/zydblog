import React from 'react'
import PostItem from './post-item'
import NotAvailable from './NotAvailable'
import TitleBox from './title-box'
import LoadingAnimation from './LoadingAnimation'
import { Link } from 'react-router-dom'
import './ListContent.css'

async function getListContent() {
  const API_URL = '/blog/posts'
  try {
    const response = await fetch(API_URL)
    const content = await response.json()
    return content
  } catch (error) {
    console.error('Unable to fetch data')
  }
  return []
}

class ListContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loaded: false,
    }
  }

  componentDidMount() {
    getListContent().then((content) => {
      this.setState({
        items: content,
        loaded: true,
      })
    })
  }

  render() {
    const titleBox = <TitleBox title="Welcome to My Blog" />
    const isContentLoaded = this.state.loaded
    const numberOfContents = this.state.items.length

    const contentAvailableLayout = (
      <div className="list-content">
        {this.state.items.map((item) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`/blog/post/${item.slug}`}
            key={item.slug}
          >
            <PostItem
              postTitle={item.title}
              postDate={item.date}
              postDesc={item.description}
              postPic={item.thumbnailPath}
            />
          </Link>
        ))}
      </div>
    )
    return (
      <main>
        {titleBox}
        {!isContentLoaded ? (
          <LoadingAnimation />
        ) : numberOfContents > 0 ? (
          contentAvailableLayout
        ) : (
          <NotAvailable text="No content available." />
        )}
      </main>
    )
  }
}

export default ListContent

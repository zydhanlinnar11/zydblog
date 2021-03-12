import React from 'react'
import PostItem from './post-item'
import NotAvailable from './NotAvailable'
import TitleBox from './title-box'
import LoadingAnimation from './LoadingAnimation'
import { Link } from 'react-router-dom'
import './ListContent.css'
import titleBg from './title-bg.webp'

const STORAGE_URL = 'https://storage.googleapis.com/zydhan-web.appspot.com'

function getScreenDPI() {
  const thumbnailScaleFactor = [1, 2, 3, 4]
  const thumbnailDPI = ['mdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']

  const currentScaleFactor = window.devicePixelRatio
  if (
    currentScaleFactor >= thumbnailScaleFactor[thumbnailScaleFactor.length - 1]
  )
    return thumbnailDPI[thumbnailDPI.length - 1]
  else
    for (let i = 0; i < thumbnailScaleFactor.length; i++)
      if (currentScaleFactor <= thumbnailScaleFactor[i]) return thumbnailDPI[i]
}

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
    const titleBox = (
      <TitleBox title="Welcome to My Blog" background={titleBg} />
    )
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
              postPic={`${STORAGE_URL}/${
                item.coverFilename
              }-thumb-${getScreenDPI()}.webp`}
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

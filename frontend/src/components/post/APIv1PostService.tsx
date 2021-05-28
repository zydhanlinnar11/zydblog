import blogConfig from '../../utilities/config'
import IPost from './IPost'
import IPostService from './IPostService'
import Post from './Post'

interface responseObjectModel {
  title: string
  date: string
  coverFilename: string
  description?: string
  markdown?: string
  slug?: string
  sanitizedHtml?: string
  author?: string
}

class APIv1PostService implements IPostService {
  private POSTS_API_URL = '/posts'
  private IMAGE_STORAGE_URL =
    'https://storage.googleapis.com/zydhan-web.appspot.com'

  async getListPosts(callback: (posts: IPost[]) => void) {
    try {
      const response = await fetch(this.POSTS_API_URL)
      const posts: responseObjectModel[] = await response.json()
      if (!response.ok) throw new Error('Error')
      callback(
        posts.map(
          (post) =>
            new Post(post.title, post.date, post.coverFilename, this, {
              description: post.description,
              slug: post.slug,
            })
        )
      )
    } catch (error) {
      callback([])
      console.error(
        'APIv1PostService.getListPosts(): Unable to fetch data from API'
      )
    }
  }

  async getPost(slug: string, callback: (post: IPost | undefined) => void) {
    try {
      const response = await fetch(`${this.POSTS_API_URL}/${slug}`)
      if (!response.ok) throw new Error('Error')
      const post: responseObjectModel = await response.json()
      callback(
        new Post(post.title, post.date, post.coverFilename, this, {
          author: post.author,
          sanitizedHtml: post.sanitizedHtml,
        })
      )
    } catch (error) {
      callback(undefined)
      console.error('APIv1PostService.getPost(): Unable to fetch data from API')
    }
  }

  private getScreenWidth(): number {
    const screenWidths = [320, 480, 640, 720, 1080, 1366]
    const currentWidth = window.innerWidth * window.devicePixelRatio
    for (let i = 0; i < screenWidths.length; i++)
      if (currentWidth <= screenWidths[i]) return screenWidths[i]
    return screenWidths[screenWidths.length - 1]
  }

  getPostCoverURL(coverFilename: string): string {
    return `${
      this.IMAGE_STORAGE_URL
    }/${coverFilename}-${this.getScreenWidth()}.webp`
  }

  private getScreenDPI(): string {
    const thumbnailScaleFactor = [1, 2, 3, 4]
    const thumbnailDPI = ['mdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']

    const currentScaleFactor = window.devicePixelRatio
    for (let i = 0; i < thumbnailScaleFactor.length; i++)
      if (currentScaleFactor <= thumbnailScaleFactor[i]) return thumbnailDPI[i]
    return thumbnailDPI[thumbnailDPI.length - 1]
  }

  getPostThumbnailURL(coverFilename: string): string {
    return `${
      this.IMAGE_STORAGE_URL
    }/${coverFilename}-thumb-${this.getScreenDPI()}.webp`
  }
}

export default APIv1PostService

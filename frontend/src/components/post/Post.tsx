import blogConfig from '../../utilities/config'
import IPost from './IPost'
import IPostService from './IPostService'

interface PostOptionalAttributes {
  description?: string
  slug?: string
  author?: string
  sanitizedHtml?: string
}

class Post implements IPost {
  private title: string
  private dateISOFormatString: string
  private coverFileName: string
  private coverURL: string
  private thumbnailURL: string
  private postService: IPostService
  private postOptionalAttributes?: PostOptionalAttributes

  constructor(
    title: string,
    dateISOFormatString: string,
    coverFileName: string,
    postService: IPostService,
    postOptionalAttributes?: PostOptionalAttributes
  ) {
    this.title = title
    this.dateISOFormatString = dateISOFormatString
    this.coverFileName = coverFileName
    this.coverURL = blogConfig.getTitleBoxDefaultBackground()
    this.thumbnailURL = blogConfig.getTitleBoxDefaultBackground()
    this.postService = postService
    this.postOptionalAttributes = postOptionalAttributes
  }

  getTitle(): string {
    return this.title
  }

  getDateISOFormatString(): string {
    return this.dateISOFormatString
  }

  getLocalDateString(): string {
    return new Date(this.getDateISOFormatString()).toLocaleString()
  }

  getCoverURL(): string {
    if (this.coverFileName === '')
      return blogConfig.getTitleBoxDefaultBackground()
    return this.postService.getPostCoverURL(this.coverFileName)
  }

  getThumbnailURL() {
    if (this.coverFileName === '')
      return blogConfig.getTitleBoxDefaultBackground()
    return this.postService.getPostThumbnailURL(this.coverFileName)
  }

  getDescription(): string {
    if (this.postOptionalAttributes?.description)
      return this.postOptionalAttributes.description
    else return 'No description available'
  }

  getSlug(): string {
    if (this.postOptionalAttributes?.slug)
      return this.postOptionalAttributes.slug
    return 'not-found'
  }

  getAuthor(): string {
    if (this.postOptionalAttributes?.author)
      return this.postOptionalAttributes.author
    return 'Unknown User'
  }

  getSanitizedHtml(): string {
    if (this.postOptionalAttributes?.sanitizedHtml)
      return this.postOptionalAttributes.sanitizedHtml
    return '<h1>No content available</h1>'
  }

  getURL(): string {
    return `/post/${this.getSlug()}`
  }
}

export default Post

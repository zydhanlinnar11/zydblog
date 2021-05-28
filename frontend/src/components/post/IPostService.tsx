import IPost from './IPost'

interface IPostService {
  getListPosts(callback: (posts: IPost[]) => void): Promise<void>
  getPost(
    slug: string,
    callback: (post: IPost | undefined) => void
  ): Promise<void>
  getPostCoverURL(coverFilename: string): string
  getPostThumbnailURL(coverFilename: string): string
}

export default IPostService

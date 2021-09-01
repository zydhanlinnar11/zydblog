interface IPost {
  getTitle(): string
  getDateISOFormatString(): string
  getLocalDateString(): string
  getCoverURL(): string
  getThumbnailURL(): string
  getDescription(): string
  getSlug(): string
  getAuthor(): string
  getSanitizedHtml(): string
  getURL(): string
}

export default IPost

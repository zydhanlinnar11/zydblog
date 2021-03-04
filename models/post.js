const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurifier = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurifier(new JSDOM().window)

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  thumbnail: {
    type: Buffer,
    required: true,
  },
  thumbnailType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitizedHtml: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
})

blogPostSchema.pre('validate', function (next) {
  if (this.title)
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    })
  if (this.markdown)
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
  next()
})

blogPostSchema.virtual('thumbnailPath').get(function () {
  if (this.thumbnail != null && this.thumbnailType != null)
    return `data:${
      this.thumbnailType
    };charset=utf-8;base64,${this.thumbnail.toString('base64')}`
})

module.exports = mongoose.model('Blog Post', blogPostSchema)

const mongoose = require('mongoose')

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
  thumbnailLink: {
    type: String,
    required: true,
  },
  previewContent: {
    type: String,
    required: true,
  },
  contentLink: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Blog Post', blogPostSchema)

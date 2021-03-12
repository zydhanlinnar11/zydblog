const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  attribution: {
    type: String,
  },
})

module.exports = mongoose.model('Image', imageSchema)

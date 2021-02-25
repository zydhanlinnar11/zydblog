const express = require('express')
const router = express()
const BlogPost = require('../../models/post')

// Get all blog post
router.get('/', async (req, res) => {
  try {
    const blogposts = await BlogPost.find()
    res.json(blogposts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one blog post content
router.get('/:id', getBlogPost, (req, res) => {
  res.json(res.blogpost)
})

// Create one
router.post('/', async (req, res) => {
  const blogpost = new BlogPost({
    title: req.body.title,
    date: req.body.date,
    thumbnailLink: req.body.thumbnailLink,
    previewContent: req.body.previewContent,
    contentLink: req.body.contentLink,
  })

  try {
    const newPost = await blogpost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ message: err.message })
  }
})

// Update one
router.patch('/:id', getBlogPost, async (req, res) => {
  if (req.body.title != null) res.blogpost.title = req.body.title
  if (req.body.date != null) res.blogpost.date = req.body.date
  if (req.body.thumbnailLink != null)
    res.blogpost.thumbnailLink = req.body.thumbnailLink
  if (req.body.previewContent != null)
    res.blogpost.previewContent = req.body.previewContent
  if (req.body.contentLink != null)
    res.blogpost.contentLink = req.body.contentLink

  try {
    const updatedBlogPost = await res.blogpost.save()
    res.json(updatedBlogPost)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete one
router.delete('/:id', getBlogPost, async (req, res) => {
  try {
    await res.blogpost.remove()
    res.json({ message: 'Post deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

async function getBlogPost(req, res, next) {
  try {
    blogpost = await BlogPost.findById(req.params.id)
    if (blogpost == null)
      return res.status(404).json({ message: 'Cannot find post.' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.blogpost = blogpost
  next()
}

module.exports = router

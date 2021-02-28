const express = require('express')
const router = express()
const BlogPost = require('../../models/post')

// Get all blog post
router.get('/', async (req, res) => {
  try {
    const blogposts = await BlogPost.find().sort({ date: 'desc' })
    res.json(blogposts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get one blog post content
router.get('/:slug', getBlogPostBySlug, (req, res) => {
  res.json(res.blogpost)
})

// Create one
router.post('/', async (req, res) => {
  const blogpost = new BlogPost({
    title: req.body.title,
    date: Date.now(),
    thumbnailLink: req.body.thumbnailLink,
    description: req.body.description,
    markdown: req.body.markdown,
    author: req.body.author,
  })

  try {
    const newPost = await blogpost.save()
    res.redirect(`${process.env.BLOG_LINK}/${newPost.slug}`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Update one
router.patch('/:slug', getBlogPostBySlug, async (req, res) => {
  if (req.body.title != null) res.blogpost.title = req.body.title
  if (req.body.date != null) res.blogpost.date = req.body.date
  if (req.body.thumbnailLink != null)
    res.blogpost.thumbnailLink = req.body.thumbnailLink
  if (req.body.description != null)
    res.blogpost.description = req.body.description
  if (req.body.markdown != null) res.blogpost.markdown = req.body.markdown
  if (req.body.author != null) res.blogpost.author = req.body.author

  try {
    const updatedBlogPost = await res.blogpost.save()
    res.redirect(`${process.env.BLOG_LINK}/${updatedBlogPost.slug}`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete one
router.delete('/:slug', getBlogPostBySlug, async (req, res) => {
  try {
    await res.blogpost.remove()
    res.redirect('/blog/admin/manage-posts')
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

async function getBlogPostBySlug(req, res, next) {
  try {
    blogpost = await BlogPost.findOne({ slug: req.params.slug })
    if (blogpost == null)
      return res.status(404).json({ message: 'Cannot find post.' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  res.blogpost = blogpost
  next()
}

module.exports = router

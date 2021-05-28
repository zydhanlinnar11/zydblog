module.exports = function (checkAuthenticated) {
  const express = require('express')
  const router = express()
  const BlogPost = require('../../models/post')
  const slugify = require('slugify')
  const User = require('../../models/user')
  const sharp = require('sharp')

  async function isThereAnySlugConflict(slug) {
    return (await BlogPost.findOne({ slug: slug })) != null
  }

  function deleteMarkdownAndSanitizedHtml(blogpost) {
    return {
      title: blogpost.title,
      date: blogpost.date,
      coverFilename: blogpost.coverFilename,
      description: blogpost.description,
      slug: blogpost.slug,
    }
  }

  // Get all blog post
  router.get('/', async (req, res) => {
    try {
      const blogposts = await BlogPost.find().sort({ date: 'desc' })
      res.json(blogposts.map(deleteMarkdownAndSanitizedHtml))
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

  // Get one blog post content
  router.get('/:slug', getBlogPostBySlug, async (req, res) => {
    res.json({
      title: res.blogpost.title,
      date: res.blogpost.date,
      coverFilename: res.blogpost.coverFilename,
      author: (await User.findById(res.blogpost.author)).username,
      sanitizedHtml: res.blogpost.sanitizedHtml,
    })
  })

  // Create one
  router.post('/', checkAuthenticated, async (req, res) => {
    const blogpost = new BlogPost({
      title: req.body.title,
      date: Date.now(),
      description: req.body.description,
      coverFilename: req.body.coverFilename,
      markdown: req.body.markdown,
      author: req.body.author,
      slug: slugify(req.body.title, {
        lower: true,
        strict: true,
      }),
    })

    try {
      if (await isThereAnySlugConflict(blogpost.slug))
        throw { message: 'Slug conflict' }
      const newPost = await blogpost.save()
      res.redirect(`/post/${newPost.slug}`)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  })

  // Update one
  router.patch(
    '/:slug',
    checkAuthenticated,
    getBlogPostBySlug,
    async (req, res) => {
      let isSlugConflict = false
      if (req.body.title != null && res.blogpost.title != req.body.title) {
        res.blogpost.title = req.body.title
        res.blogpost.slug = slugify(req.body.title, {
          lower: true,
          strict: true,
        })
        if (await isThereAnySlugConflict(res.blogpost.slug))
          isSlugConflict = true
      }

      if (req.body.coverFilename != null)
        res.blogpost.coverFilename = req.body.coverFilename
      if (req.body.description != null)
        res.blogpost.description = req.body.description
      if (req.body.markdown != null) res.blogpost.markdown = req.body.markdown
      try {
        if (isSlugConflict) throw { message: 'Slug conflict' }
        const updatedBlogPost = await res.blogpost.save()
        res.redirect(`/post/${updatedBlogPost.slug}`)
      } catch (error) {
        res.status(400).json({ message: error.message })
      }
    }
  )

  // Delete one
  router.delete(
    '/:slug',
    checkAuthenticated,
    getBlogPostBySlug,
    async (req, res) => {
      try {
        await res.blogpost.remove()
        res.redirect('/admin/manage-posts')
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    }
  )

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

  return router
}

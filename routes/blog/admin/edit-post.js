const express = require('express')
const BlogPost = require('../../../models/post')
const router = express.Router()

router.get('/:slug', async (req, res) => {
  res.render('edit-post', {
    title: 'Edit Post',
    blogName: process.env.BLOG_NAME,
    mainTitle: 'Edit post',
    article: await BlogPost.findOne({ slug: req.params.slug }),
  })
})

module.exports = router

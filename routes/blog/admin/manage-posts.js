module.exports = (checkAuthenticated) => {
  const express = require('express')
  const BlogPost = require('../../../models/post')
  const router = express.Router()

  router.get('/', checkAuthenticated, async (req, res) => {
    const articles = await BlogPost.find().sort({ date: 'desc' })
    res.render('manage-posts', {
      title: 'Manage posts',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Manage posts',
      articles: articles,
      loggedIn: true,
    })
  })
  return router
}

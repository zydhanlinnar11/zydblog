module.exports = (checkAuthenticated) => {
  const express = require('express')
  const BlogPost = require('../../../models/post')
  const router = express.Router()

  router.get('/', checkAuthenticated, (req, res) => {
    res.render('new-post', {
      title: 'New Post',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Create new post',
      article: new BlogPost(),
      loggedIn: true,
    })
  })
  return router
}

module.exports = (checkAuthenticated) => {
  const express = require('express')
  const BlogPost = require('../../../models/post')
  const router = express.Router()

  router.get('/', checkAuthenticated, async (req, res) => {
    res.render('new-post', {
      title: 'New Post',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Create new post',
      article: new BlogPost(),
      author: (await req.user).username,
      loggedIn: true,
    })
  })
  return router
}

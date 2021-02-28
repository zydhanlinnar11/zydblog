module.exports = (checkNotAuthenticated) => {
  const express = require('express')
  const router = express.Router()

  router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login', {
      title: 'Login',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Login',
      loggedIn: false,
    })
  })
  return router
}

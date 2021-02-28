module.exports = (checkAuthenticated) => {
  const express = require('express')
  const router = express.Router()

  router.get('/', checkAuthenticated, (req, res) => {
    res.render('dashboard', {
      title: 'Dashboard',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Dashboard',
      loggedIn: true,
    })
  })
  return router
}

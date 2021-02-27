const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('login', {
    title: 'Login',
    blogName: process.env.BLOG_NAME,
    mainTitle: 'Login',
  })
})

module.exports = router

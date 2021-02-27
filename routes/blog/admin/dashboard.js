const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    blogName: process.env.BLOG_NAME,
    mainTitle: 'Dashboard',
  })
})

module.exports = router

const express = require('express')
const router = express()

const blogPostsRouter = require('./blog/posts')
router.use('/posts', blogPostsRouter)

const adminRouter = require('./blog/admin')
router.use('/admin', adminRouter)

router.get('/', (req, res) => {
  res.redirect(process.env.BLOG_LINK)
})

module.exports = router

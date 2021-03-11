module.exports = (checkAuthenticated, checkNotAuthenticated, passport) => {
  const express = require('express')
  const router = express()
  const path = require('path')

  const blogPostsRouter = require('./blog/posts')
  router.use('/posts', blogPostsRouter(checkAuthenticated))

  const adminRouter = require('./blog/admin')
  router.use(
    '/admin',
    adminRouter(checkAuthenticated, checkNotAuthenticated, passport)
  )

  router.get('/', (req, res) => {
    res.sendFile(path.resolve('frontend/build', 'index.html'))
  })

  router.get('/post/*', (req, res) => {
    res.sendFile(path.resolve('frontend/build', 'index.html'))
  })
  return router
}

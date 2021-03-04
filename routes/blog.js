module.exports = (checkAuthenticated, checkNotAuthenticated, passport) => {
  const express = require('express')
  const router = express()

  const blogPostsRouter = require('./blog/posts')
  router.use('/posts', blogPostsRouter(checkAuthenticated))

  const usersRouter = require('./blog/users')
  router.use('/users', usersRouter)

  const adminRouter = require('./blog/admin')
  router.use(
    '/admin',
    adminRouter(checkAuthenticated, checkNotAuthenticated, passport)
  )

  router.get('/', (req, res) => {
    res.redirect('/blog/admin')
  })
  return router
}

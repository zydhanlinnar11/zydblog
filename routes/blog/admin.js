module.exports = (checkAuthenticated, checkNotAuthenticated, passport) => {
  const express = require('express')
  const router = express.Router()

  const adminDashboardRouter = require('./admin/dashboard')
  router.use('/dashboard', adminDashboardRouter(checkAuthenticated))

  const newPostRouter = require('./admin/new-post')
  router.use('/new-post', newPostRouter(checkAuthenticated))

  const editPostRouter = require('./admin/edit-post')
  router.use('/edit-post', editPostRouter(checkAuthenticated))

  const managePostsRouter = require('./admin/manage-posts')
  router.use('/manage-posts', managePostsRouter(checkAuthenticated))

  const newUserRouter = require('./admin/new-user')
  router.use('/new-user', newUserRouter(checkAuthenticated))

  const loginRouter = require('./admin/login')
  router.use('/login', loginRouter(checkNotAuthenticated))

  const manageUsersRouter = require('./admin/manage-users')
  router.use('/manage-users', manageUsersRouter(checkAuthenticated))

  router.get('/', checkAuthenticated, (req, res) => {
    res.redirect('/blog/admin/dashboard')
  })

  router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('./')
  })

  return router
}

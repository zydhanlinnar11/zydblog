const express = require('express')
const router = express.Router()

const adminDashboardRouter = require('./admin/dashboard')
router.use('/dashboard', adminDashboardRouter)

const newPostRouter = require('./admin/new-post')
router.use('/new-post', newPostRouter)

const editPostRouter = require('./admin/edit-post')
router.use('/edit-post', editPostRouter)

const managePostsRouter = require('./admin/manage-posts')
router.use('/manage-posts', managePostsRouter)

const newUserRouter = require('./admin/new-user')
router.use('/new-user', newUserRouter)

const loginRouter = require('./admin/login')
router.use('/login', loginRouter)

module.exports = router

module.exports = (checkAuthenticated) => {
  const express = require('express')
  const User = require('../../../models/user')
  const router = express.Router()
  const bcrypt = require('bcrypt')

  router.get('/', checkAuthenticated, (req, res) => {
    res.render('new-user', {
      title: 'New User',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Create new user',
      success: '',
      loggedIn: true,
    })
  })

  router.post('/', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(
        req.body.password,
        parseInt(process.env.SALT_ROUND)
      )

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      })

      await newUser.save()
      res.render('new-user', {
        title: 'New User',
        blogName: process.env.BLOG_NAME,
        mainTitle: 'Create new user',
        success: 'yes',
        loggedIn: true,
      })
    } catch (error) {
      res.render('new-user', {
        title: 'New User',
        blogName: process.env.BLOG_NAME,
        mainTitle: 'Create new user',
        success: 'no',
        loggedIn: true,
      })
    }
  })
  return router
}

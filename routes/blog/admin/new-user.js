const express = require('express')
const User = require('../../../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  res.render('new-user', {
    title: 'New User',
    blogName: process.env.BLOG_NAME,
    mainTitle: 'Create new user',
    success: '',
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
    })
  } catch (error) {
    res.render('new-user', {
      title: 'New User',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Create new user',
      success: 'no',
    })
  }
})

module.exports = router

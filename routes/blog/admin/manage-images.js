module.exports = (checkAuthenticated) => {
  const express = require('express')
  const router = express.Router()
  const Image = require('../../../models/images')

  router.get('/', checkAuthenticated, async (req, res) => {
    const images = await Image.find().sort({ date: 'desc' })
    res.render('manage-images', {
      title: 'Manage images',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Manage images',
      images: images,
      loggedIn: true,
    })
  })

  router.delete('/:id', checkAuthenticated, async (req, res) => {
    const image = await Image.findById(req.params.id)
    try {
      image.delete()
      res.redirect('./')
    } catch (error) {
      console.error(error)
      res.redirect('./')
    }
  })

  return router
}

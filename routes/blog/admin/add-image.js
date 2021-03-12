module.exports = (checkAuthenticated) => {
  const express = require('express')
  const router = express.Router()
  const { Storage } = require('@google-cloud/storage')
  const Image = require('../../../models/images')
  const sharp = require('sharp')
  const slugify = require('slugify')

  const storage = new Storage({
    credentials: JSON.parse(process.env.FB_CREDS),
  })

  const bucket = storage.bucket(process.env.BUCKET_URL)

  router.get('/', checkAuthenticated, (req, res) => {
    res.render('add-image', {
      title: 'Add New Image',
      blogName: process.env.BLOG_NAME,
      mainTitle: 'Add New Image',
      loggedIn: true,
      image: new Image(),
    })
  })

  router.post('/', checkAuthenticated, async (req, res) => {
    const finalFileName = await uploadImage(
      JSON.parse(req.body.image).data,
      req.body.filename
    )

    const imageInfo = new Image({
      filename: finalFileName,
      description: req.body.description,
      attribution:
        req.body.attribution == null
          ? 'No attribution required.'
          : req.body.attribution,
      path: `https://storage.googleapis.com/${process.env.BUCKET_URL}/${finalFileName}.webp`,
    })

    try {
      await imageInfo.save()
      res.redirect('./')
    } catch (error) {
      res.redirect('./')
    }
  })

  async function tryUpload(file, buffer, filename, maxRetryCount = 3) {
    let count = 0
    do {
      try {
        console.log(`Uploading ${filename}`)
        await file.save(buffer)
        await file.makePublic()
      } catch (error) {
        console.log('Upload failed, retrying')
        console.error(error)
        count++
      } finally {
        console.log(`${filename} successfully uploaded.`)
        break
      }
    } while (count < maxRetryCount)
  }

  async function uploadImage(image, filename) {
    const imageBuffer = new Buffer.from(
      await sharp(new Buffer.from(image, 'base64')).webp().toBuffer(),
      'base64'
    )

    const finalFileName = slugify(filename, {
      lower: true,
      strict: true,
    })
    const imageFile = bucket.file(finalFileName + '.webp')

    await tryUpload(imageFile, imageBuffer, finalFileName + '.webp')

    await uploadThumbnailImage(image, finalFileName)
    await uploadCoverImage(image, finalFileName)

    return finalFileName
  }

  async function uploadThumbnailImage(image, filename) {
    const imageHeight = [160, 320, 480, 640]
    const imageDPI = ['mdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi']

    for (let i = 0; i < imageHeight.length; i++) {
      const thumbnailBuffer = new Buffer.from(
        await sharp(new Buffer.from(image, 'base64'))
          .webp()
          .resize(null, imageHeight[i])
          .toBuffer(),
        'base64'
      )
      const thumbnailFile = bucket.file(`${filename}-thumb-${imageDPI[i]}.webp`)
      await tryUpload(
        thumbnailFile,
        thumbnailBuffer,
        `${filename}-thumb-${imageDPI[i]}.webp`
      )
    }
  }

  async function uploadCoverImage(image, filename) {
    const screenWidth = [720, 1080, 1366, 320, 480, 640]

    for (let i = 0; i < screenWidth.length; i++) {
      const coverBuffer = new Buffer.from(
        await sharp(new Buffer.from(image, 'base64'))
          .webp()
          .resize(screenWidth[i], null)
          .toBuffer(),
        'base64'
      )
      const coverFile = bucket.file(`${filename}-${screenWidth[i]}.webp`)
      await tryUpload(
        coverFile,
        coverBuffer,
        `${filename}-${screenWidth[i]}.webp`
      )
    }
  }

  return router
}

const express = require('express')
const router = express.Router()
const User = require('../../models/user')

// Get username by id
router.get('/:id', async (req, res) => {
  res.json((await User.findById(req.params.id)).username)
})

module.exports = router

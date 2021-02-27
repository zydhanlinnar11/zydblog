if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .catch((error) => console.error(error))

const expressLayouts = require('express-ejs-layouts')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', __dirname + 'views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(process.env.BLOG_LINK)
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
app.use(cors())

const blogRouter = require('./routes/blog')
app.use('/blog', blogRouter)

app.listen(process.env.PORT || 1111)

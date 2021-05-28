if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const users = require('./models/user')

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .catch((error) => console.error(error))

const expressLayouts = require('express-ejs-layouts')
app.use(express.urlencoded({ limit: '200mb', extended: false }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', __dirname + 'views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use('/admin', express.static('public'))
app.use('/', express.static('frontend/build'))

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json({ limit: '200mb' }))

const passport = require('passport')
const initializePassport = require('./routes/blog/passport-config')
initializePassport(
  passport,
  async (username) => await users.findOne({ username: username })
)
app.use(flash())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())

const LOGIN_PAGE = '/admin/login'
app.post(
  LOGIN_PAGE,
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: LOGIN_PAGE,
    failureFlash: true,
  })
)

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect(LOGIN_PAGE)
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return res.redirect('/admin')
  next()
}

app.get('/', async (req, res) => {
  res.redirect('/')
})

const blogRouter = require('./routes/blog')
app.use('/', blogRouter(checkAuthenticated, checkNotAuthenticated, passport))

app.get('*', (req, res) => {
  res.redirect('/post/not-found')
})

app.listen(process.env.PORT || 1111)

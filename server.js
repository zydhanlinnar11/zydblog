if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .catch((error) => console.error(error))

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
app.use(cors())

const blogPostsRouter = require('./routes/blog/posts')
app.use('/blog/posts', blogPostsRouter)

app.listen(process.env.PORT || 1111)

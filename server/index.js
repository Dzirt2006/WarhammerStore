const express = require('express')
const router = require("express").Router();
const app = express()
// const port = 3000

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('./webpack', {
  index: "index.html"
}))

app.use('/api', require('./api')) // API

module.exports = app

// app.listen(port, () => console.log(`Online-Store app listening on port ${port}!`))

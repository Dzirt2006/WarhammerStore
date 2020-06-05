const express = require('express')
const router = require("express").Router();
const path = require('path')
const app = express()
// const port = 3000

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/', express.static('../public', {
//   index: "index.html"
// }))
app.use(express.static(path.join(__dirname, '../public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

app.use('/api', require('./api')) // API

module.exports = app

// app.listen(port, () => console.log(`Online-Store app listening on port ${port}!`))

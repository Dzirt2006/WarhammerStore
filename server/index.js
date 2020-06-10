const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')
const passport = require('passport')
const Users =require('./db/user')
// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Session middleware
app.use(session({
  secret: 'This is not a very secure secret...',
  resave: false,
  saveUninitialized: false
}))

// consumes 'req.session' so that passport can know what's on the session
app.use(passport.initialize())

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session())

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  console.log('User',user)
  done(null, user.id)
})

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  console.log("U/:",id)
  try {
    const user = await Users.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})
  
app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

app.use('/api', require('./api')) // API

module.exports = app

// app.listen(port, () => console.log(`Online-Store app listening on port ${port}!`))

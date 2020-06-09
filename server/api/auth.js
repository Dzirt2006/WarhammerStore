const router = require('express').Router()
const Users = require('../db/user')


//router.use('/google', require('./oauth'))

router.get('/me', (req, res, next) => {
  res.json(req.user || {})
})

router.put('/login', async (req, res, next) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    console.log(user);
    if (user[0]) {
      req.login(user[0], (err) => err ? next(err) : res.json(user[0]))
    } else {
      const err = new Error('Incorrect email or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end()
  })
})




module.exports = router
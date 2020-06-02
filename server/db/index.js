const db = require('./dbConnect')
const Goods = require('./goods')
const router=require('express').Router()

router.use('/goods',Goods);

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
  })

module.exports = {
    // Include your models in this exports object as well!
    db,
    Goods
  }
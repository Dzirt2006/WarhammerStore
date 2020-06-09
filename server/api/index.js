const router = require('express').Router()


router.use('/goods',require('./goods'));

router.use('/cookies',require('./cookies'));

router.use('/auth',require('./auth'));

module.exports = router
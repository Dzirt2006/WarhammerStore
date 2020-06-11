const router = require('express').Router()


router.use('/goods',require('./goods'));

router.use('/cookies',require('./cookies'));

router.use('/auth',require('./auth'));

router.use('/user',require('./user'));

module.exports = router
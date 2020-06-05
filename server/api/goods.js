const router = require('express').Router();
const Goods = require('../db/goods');
const { green, red } = require('chalk');


router.get('/', async (req, res, next) => {
    try {
        const goods = await Goods.findAll();
        res.status(200).json(goods);
        console.log(green('Get all Goods SUCCESS!'));
    } catch (err) {
        console.log(red('Get all Goods internal ERROR: ', err));
        newx(err);
    }
})

module.exports = router;
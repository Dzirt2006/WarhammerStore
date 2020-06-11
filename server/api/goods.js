const router = require('express').Router();
const Goods = require('../db/goods');
const Orders = require('../db/order');
const Users =require('../db/user')
const { green, red } = require('chalk');


router.get('/', async (req, res, next) => {
    try {
        const goods = await Goods.findAll({include:[Users]});
        res.status(200).json(goods);
        console.log(green('Get all Goods SUCCESS!'));
    } catch (err) {
        console.log(red('Get all Goods internal ERROR: ', err));
        newx(err);
    }
})

module.exports = router;
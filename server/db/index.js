const db = require('./dbConnect')
const Goods = require('./goods')
const Users = require('./user')
const Orders = require ('./order')
// const router=require('express').Router()


// router.use('/goods',Goods);
// router.use('./users',Users);

// router.use((req, res, next) => {
//     const err = new Error('API route not found!');
//     err.status = 404;
//     next(err)
//   })



Users.belongsToMany(Goods, { through: Orders, foreignKey: 'User_id', otherKey: 'Product_id' });
Goods.belongsToMany(Users, { through: Orders, foreignKey: 'Product_id', otherKey: 'User_id' });


  
module.exports = {
    // Include your models in this exports object as well!
    db,
    Goods,
    Users,
    Orders
  }
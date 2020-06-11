const Sequelize = require('sequelize')
const db = require('./dbConnect');

module.exports = db.define('orders', {
  dataStamp: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW 
  },
})


const Sequelize = require('sequelize')
const db = require('./dbConnect');

module.exports = db.define('users', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/loggin.png'
  },
  googleId: {
    type: Sequelize.STRING
  },
  adress:{
      type:Sequelize.TEXT
  }
})


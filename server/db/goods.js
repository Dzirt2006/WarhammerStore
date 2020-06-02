
const Sequelize = require('sequelize');
const db = require('./dbConnect');

module.exports = db.define('goods', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    total_amount: {
        type: Sequelize.INTEGER,
        defaultValue:0
    },
    price: {
        type: Sequelize.FLOAT,
        defaultValue:0
    },
    description: {
        type: Sequelize.TEXT
    }
})

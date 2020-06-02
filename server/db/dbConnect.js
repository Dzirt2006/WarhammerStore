
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow(`Opening database connection to ${pkg.name}`));

const db = new Sequelize(`postgres://postgres:w2w2@localhost:5432/${pkg.name}`, {
  logging: false,
});

module.exports = db;
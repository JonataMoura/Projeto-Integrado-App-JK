const {Sequelize} = require("sequelize")
const db = new Sequelize('railway', 'root', 'dh3fgBaaagbHh--4E3CbDg2H2cBDH6dc', {
    host: 'monorail.proxy.rlwy.net',
    dialect: "mysql"
  });

  module.exports = db


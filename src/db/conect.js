const {Sequelize} = require("sequelize")
const db = new Sequelize('railway', 'root', 'dh3fgBaaagbHh--4E3CbDg2H2cBDH6dc', {
    host: 'monorail.proxy.rlwy.net',
    port: '57155',
    dialect: "mysql"
  });

  // const db = new Sequelize('react', 'admin', 'root', {
  //   host: 'localhost',
  //   dialect: "mysql"
  // });


  module.exports = db


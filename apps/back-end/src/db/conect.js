const {Sequelize} = require("sequelize")
const db = new Sequelize('railway', 'root', 'dh3fgBaaagbHh--4E3CbDg2H2cBDH6dc', {
   host: 'monorail.proxy.rlwy.net',
    port: '57155',
    dialect: "mysql"
  });

  //const sequelize = new Sequelize('mysql -hmonorail.proxy.rlwy.net -uroot -pdh3fgBaaagbHh--4E3CbDg2H2cBDH6dc --port 57155 --protocol=TCP railway')

  module.exports = db


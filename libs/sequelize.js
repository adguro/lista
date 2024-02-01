const { Sequelize } = require('sequelize')

const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}` 
// const URI ='mysql://root:e3cp0mbN2ofn@localhost:3306/blog'
// const URI ='mysql://admin:eslaba2024@database-2.c9uiwee0ssal.us-east-1.rds.amazonaws.com:3306/db'
const URI = config.dbUri
const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
})
 
module.exports = sequelize
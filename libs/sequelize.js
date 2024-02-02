const { Sequelize } = require('sequelize')

const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = config.dbUri
const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true, 
})
 
module.exports = sequelize
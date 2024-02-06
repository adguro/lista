const { Sequelize } = require('sequelize')
const { config } = require('./../config/config')
const setupModels = require('./../db/models');

const URI = config.dbUri

const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true, 
})

setupModels(sequelize);

module.exports = sequelize


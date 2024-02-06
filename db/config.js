const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = config.dbUri


module.exports = {
    development: {
        // url: config.dbUrl,
        url: URI,
        dialect: 'mysql',
    },
    production: {
        // url: URI,
        // dialect: 'mysql',
        url: config.dbUrl,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}


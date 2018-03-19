const path = require('path')

module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'localdatabase',
        user: process.env.DB_USER || 'localdatabase',
        password: process.env.DB_PASS || 'localdatabase',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../localdatabase'),
            operatorsAliases: false
        }
    },
    authentification: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
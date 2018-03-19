const {
    sequelize,
    User,
    Block
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const blocks = require('./blocks.json')

sequelize.sync({force: true})
    .then(async function () {
      
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            blocks.map(block => {
                Block.create(block)
            })
        )

        
        
    })
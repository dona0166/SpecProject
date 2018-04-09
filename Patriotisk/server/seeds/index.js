const {
    sequelize,
    User,
    Block,
    Weed,
    BlockWeed,
    Chemical,
    Trial,
    Result
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const blocks = require('./blocks.json')
const weeds = require('./weeds.json')
const blockweeds = require('./blockweeds.json')
const chemicals = require('./chemicals.json')
const trials = require('./trials.json')
const results = require('./results.json')

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

        await Promise.all(
            weeds.map(weed => {
                Weed.create(weed)
            })
        )

        await Promise.all(
            blockweeds.map(blockweed => {
                BlockWeed.create(blockweed)
            })
        )

        await Promise.all(
            chemicals.map(chemical => {
                Chemical.create(chemical)
            })
        )

        await Promise.all(
            trials.map(trial => {
                Trial.create(trial)
            })
        )

        await Promise.all(
            results.map(result => {
                Result.create(result)
            })
        )

    })
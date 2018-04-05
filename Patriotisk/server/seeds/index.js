const {
    sequelize,
    User,
    Block,
    Weed,
    BlockWeed,
    Chemical,
    WeedChemical,
    TrialResult
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const blocks = require('./blocks.json')
const weeds = require('./weeds.json')
const blockweeds = require('./blockweeds.json')
const chemicals = require('./chemicals.json')
const weedchemicals = require('./weedchemicals.json')
const trialresults = require('./trialresults.json')

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
            weedchemicals.map(weedchemical => {
                WeedChemical.create(weedchemical)
            })
        )

        await Promise.all(
            trialresults.map(trialresult => {
                TrialResult.create(trialresult)
            })
        )

    })
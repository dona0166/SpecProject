const AuthController = require('./controllers/AuthController')
const AuthPolicy = require('./policies/AuthPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
const BlockController = require('./controllers/BlockController')
const BlockWeedController = require('./controllers/BlockWeedController')
const WeedTrialController = require('./controllers/WeedTrialController')



module.exports = (app) => {
    app.post('/register', 
        AuthPolicy.register,
        AuthController.register 
    )

    app.post('/login', 
        AuthController.login
    )

    app.get('/blocks/:userId',
        BlockController.getBlocksByUser
    )

    app.get('/blockweeds/:blockId',
        BlockWeedController.getWeedsByBlock
    )

    app.get('/weedTrial',
        WeedTrialController. getWeedTrialResultByBlock
    )
}
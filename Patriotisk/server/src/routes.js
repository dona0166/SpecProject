const AuthController = require('./controllers/AuthController')
const AuthPolicy = require('./policies/AuthPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
const BlockController = require('./controllers/BlockController')

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
    
}
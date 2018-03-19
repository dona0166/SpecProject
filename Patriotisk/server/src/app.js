const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models') 
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

require('./passport')

require('./routes')(app)

//put {force: true} inside sync to clear the entire database
sequelize
    .sync()
    .then(()=>{
        app.listen(config.port)
        console.log("Server logged on port " + config.port)
    })

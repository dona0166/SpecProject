const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(jsonObject){
    const one_week_time = 60*60*24*7
    return jwt.sign(jsonObject, config.authentification.jwtSecret,{
        expiresIn: one_week_time
    })
}

module.exports = {
    async register(req, res){
        try{
            const user = await User.create(req.body)
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        }
        catch(err){
            res.status(401).send({
                success: false, message : "User already exists"
            })
        }
    },
    async login(req, res){
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            console.log(email)
            if(!user){
                res.status(401).send({
                    success: false, message: "Username or password incorrect"
                })
            }
            else{
                /* const passwordIsValid = password === user.password */
                const passwordIsValid = await user.comparePassword(password)
                if(!passwordIsValid){
                    res.status(401).send({
                        success: false, message: "Username or password incorrect"
                    })
                }
                else{
                    const userJSON = user.toJSON()
                    res.send({
                        user: userJSON,
                        token: jwtSignUser(userJSON)
                    })
                }
            }
        }
        catch(err){
            res.status(500).send({
                success: false, message: "Error occured trying to log in"
            })
        }
    }
}
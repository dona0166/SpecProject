const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,10}$')
            )
        }

        //the same way done with serialize here you are just passing
        //finding the error and value property inside the Joi object
        const {error, value} = Joi.validate(req.body, schema)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        success: false, message: "Invalid email"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        success: false, message: "<h3>Password requirements</h3><br>1. The password is required<br>2. It has to be between 6 and 10 characters long"
                    })
                    break
                default:
                    res.status(400).send({
                        success: false, message: "Invalid registration information"
                    })
                    break
            }   
        }
        else{
            next()
        }

        
    }
}
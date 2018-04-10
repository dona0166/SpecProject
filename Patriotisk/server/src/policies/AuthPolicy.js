const Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema = {
            name: Joi.string().min(3).required(),
            telephonenr: Joi.string().regex(/^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/),
            email: Joi.string().email(),
            password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
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
                case 'name':
                res.status(400).send({
                    success: false, message: "The name needs to be at least 3 characters"
                })
                case 'telephonenr':
                res.status(400).send({
                    success: false, message: "Invalid telephone number format"
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
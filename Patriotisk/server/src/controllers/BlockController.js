const {User, Block} = require('../models')
var _ = require('lodash')

module.exports = {
    async getBlocksByUser(req, res){
        try{
            const userId = req.params.userId
            const blocks = await Block.findAll({
                where: { UserId: userId}
            })
            .map(blocks => blocks.toJSON() )
            
            if(blocks){
                res.send({
                    success: true, message: blocks
                })
            }
            else{
                res.status(403).send({
                    success: false, message: 'An error occured'
                })
            }
        }
        catch(err){
            res.status(500).send({
                success: false
            })
        }
    }

    
}

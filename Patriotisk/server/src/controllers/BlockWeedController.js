const {Block, Weed, BlockWeed} = require('../models')
var _ = require('lodash')

module.exports = {
    async getWeedsByBlock(req, res){
        try{
            const blockId = req.params.blockId
            const blockweeds = await BlockWeed.findAll({
                include: [
                    {
                        model: Weed
                    }
                ]
            })
            .map(blockweed => blockweed.toJSON() )
            .map(blockweed=> _.extend({
                BlockId: blockweed.BlockId
            }, blockweed.Weed))
            .filter(element => element.BlockId == blockId)
            
            if(blockweeds[0]){
                res.send({
                    success: true, message: blockweeds
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

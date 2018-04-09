const {BlockWeed, Weed, Chemical, Trial, Result} = require('../models')
var _ = require('lodash')
const sequelize = require('sequelize')

module.exports = {
    async getWeedTrialResultByBlock(req, res){
        try{
            /* const blockId = req.params.blockId */
            const blockId = 1
            const chemicalId = 1
            /* const blockweeds = await Trial.findAll({
                
                include: [
                    {
                        model: Result
                    }
                ]
            }) */
            const blockweeds = await BlockWeed.findAll({
                where: { BlockId: blockId },
                include: [
                    {
                        /* all: true,
                        nested: true */
                        model: Weed,

                        
                        include: [
                            {
                                model: Trial,
                               
                                include: [
                                    {
                                        model: Chemical,
                                        where: { id: chemicalId }
                                        
                                        /* attributes: ["ChemicalId", [ sequelize.fn('AVG', sequelize.col('concentration')), "avg" ]] */
                                    },
                                    {

                                        model: Result,
                                        
                                    }
                                ] 
                            }
                        ] 
                    }
                ],
            })
            .map(blockweed => blockweed.toJSON() )
            .map(blockweed=> _.extend({
                BlockId: blockweed.BlockId

            }, blockweed.Weed))
            /* .map(element => element.Chemicals.map(chemical => 
                chemical.ChemicalTrialResults.filter(result => result.ChemicalId == 1))) */
            /* .map(weed => weed.Chemicals.map(
                chemical => chemical.name = "something"
            ))
            
            /* .filter(element => element.BlockId == blockId) */

            /* const weedchemicals = await WeedChemical.findAll

            const chemicalResults  = await ChemicalTrialResult.findAll({
                include: [
                    {
                        model: Chemical,
                    }
                ]
            }) */
            /* .map(blockweed => blockweed.toJSON() )
            .map(blockweed=> _.extend({
                BlockId: blockweed.BlockId
            }, blockweed.Weed)) */
            
            if(blockweeds){
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
                success: err.message
            })
        }
    }

    
}

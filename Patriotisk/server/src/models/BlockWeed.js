
module.exports = (sequelize, DataTypes) => {
    const BlockWeed = sequelize.define('BlockWeed', {
    })

    BlockWeed.associate = function(models){
        BlockWeed.belongsTo(models.Block, {foreignKey: 'BlockId', targetKey: 'id'})
        BlockWeed.belongsTo(models.Weed, {foreignKey: 'WeedId', targetKey: 'id'})
        
    }

    return BlockWeed

}
    
    
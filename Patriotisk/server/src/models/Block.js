
module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
        name: {
            type: DataTypes.STRING, allowNull: false
        },
        description : {
            type: DataTypes.STRING, allowNull: true
        },
        comment : {
            type: DataTypes.STRING, allowNull: true
        },
    })

    Block.associate = function(models){
        Block.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id'})
        /* Block.belongsToMany(models.Weed, {through: models.BlockWeed}) */
    }

    return Block

    
}
    
    
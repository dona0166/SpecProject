
module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
        description : {
            type: DataTypes.STRING, allowNull: true
        },
        comment : {
            type: DataTypes.STRING, allowNull: true
        }
    })

    Block.associate = function(models){
        Block.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id'});
    }

    return Block

    
}
    
    
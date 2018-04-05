
module.exports = (sequelize, DataTypes) => {
    const Weed = sequelize.define('Weed', {
        weedType : {
            type: DataTypes.STRING, allowNull: false
        }
    })

    Weed.associate = function(models){
        /* Weed.belongsToMany(models.Block, {through: models.BlockWeed}) */
        Weed.belongsToMany(models.Chemical, {through: models.WeedChemical})
        Weed.hasMany(models.TrialResult, {foreignKey: 'WeedId', sourceKey: 'id'})
    }

    return Weed

    
}
    
    
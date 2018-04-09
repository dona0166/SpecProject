
module.exports = (sequelize, DataTypes) => {
    const Trial = sequelize.define('Trial', {
    })

    Trial.associate = function(models){
        Trial.belongsTo(models.Weed, {foreignKey: 'WeedId', targetKey: 'id'})
        Trial.belongsTo(models.Chemical, {foreignKey: 'ChemicalId', targetKey: 'id'})
        Trial.hasMany(models.Result, {foreignKey: 'TrialId', sourceKey: 'id'})
        
    }

    return Trial

}
    
    
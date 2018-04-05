
module.exports = (sequelize, DataTypes) => {
    const Chemical = sequelize.define('Chemical', {
        name : {
            type: DataTypes.STRING, allowNull: false
        }
    })

    Chemical.associate = function(models){
        Chemical.hasMany(models.TrialResult, {foreignKey: 'ChemicalId', sourceKey: 'id'})
        Chemical.belongsToMany(models.Weed, {through: models.WeedChemical})

    }

    return Chemical

    
}
    
    
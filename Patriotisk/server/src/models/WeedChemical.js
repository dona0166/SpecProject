
module.exports = (sequelize, DataTypes) => {
    const WeedChemical = sequelize.define('WeedChemical', {
    })

    /* WeedChemical.associate = function(models){
        WeedChemical.belongsTo(models.Weed, {foreignKey: 'WeedId', targetKey: 'id'})
        WeedChemical.belongsTo(models.Chemical, {foreignKey: 'ChemicalId', targetKey: 'id'})
        
    } */

    return WeedChemical

}
    
    
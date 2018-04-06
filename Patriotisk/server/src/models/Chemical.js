
module.exports = (sequelize, DataTypes) => {
    const Chemical = sequelize.define('Chemical', {
        name : {
            type: DataTypes.STRING, allowNull: false
        }
    })

    Chemical.associate = function(models){
        /* Chemical.belongsToMany(models.Weed, {through: models.Trial}) */
        Chemical.hasMany(models.Trial, {foreignKey: 'ChemicalId', sourceKey: 'id'})
    }

    return Chemical

    
}
    
    
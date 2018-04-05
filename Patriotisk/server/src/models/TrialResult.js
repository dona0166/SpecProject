
module.exports = (sequelize, DataTypes) => {
    const TrialResult = sequelize.define('TrialResult', {
        month : {
            type: DataTypes.INTEGER, allowNull: false
        },
        concentration : {
            type: DataTypes.INTEGER, allowNull: false
        },
        criteria : {
            type: DataTypes.STRING, allowNull: false
        },

    })

    TrialResult.associate = function(models){
        TrialResult.belongsTo(models.Chemical, {foreignKey: 'ChemicalId', targetKey: 'id'})
        TrialResult.belongsTo(models.Weed, {foreignKey: 'WeedId', targetKey: 'id'})

    }

    return TrialResult

    
}
    
    

module.exports = (sequelize, DataTypes) => {
    const Result = sequelize.define('Result', {
        month : {
            type: DataTypes.INTEGER, allowNull: false
        },
        concentration: {
            type: DataTypes.INTEGER, allowNull: false
        }/* ,
        TrialId: {
            type: DataTypes.INTEGER, allowNull: false
        } */
        
    })

    Result.associate = function(models){
        Result.belongsTo(models.Trial, {foreignKey: 'TrialId', targetKey: 'id'})
        
    }

    return Result

}
    
    
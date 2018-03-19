
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options){
    const SALT_FACTOR = 5;

    if (!user.changed('password')) {
        return;
    }

    return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
        return bcrypt.hashAsync(user.password, salt, null);
    }).then(function(hash) {
        user.setDataValue('password', hash);
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },
       {
           hooks: {
               beforeSave: hashPassword,
           }
       }
    )

    User.associate = function(models){
        User.hasMany(models.Block, {foreignKey: 'UserId', sourceKey: 'id'})
    }

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}
    
    
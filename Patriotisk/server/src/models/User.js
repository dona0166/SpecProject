
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
        name: {
            type: DataTypes.STRING,
            allowNull: false/* ,
            validate: {
                min: 3,
                notEmpty: true
            } */
        },
        telephonenr: {
            type: DataTypes.STRING,
            allowNull: false/* ,
            validate: {
                is: /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/i
                
            } */
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            /* validate: {
                is: /\S+@\S+\.\S+/i
            } */
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            /* validate: {
                is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i
            } */
        }
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
    
    
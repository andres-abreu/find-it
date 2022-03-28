const {Model, DataType} = require('sequelize')
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw,this.password)
    }
}

User.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },
        username: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User
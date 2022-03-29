const {Model, DataType} = require('sequelize')
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
)


module.exports = Category;
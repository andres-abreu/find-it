const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model:'category',
        key:'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model:'user',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored: true,
    modelName: 'product'
  }
)

module.exports = Product

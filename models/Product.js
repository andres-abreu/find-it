const {Model, DataType} = require('sequelize');
const sequelize = require('../config/connection')

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataType.STRING,
      allowNull: true
    },
    price: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataType.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'category',
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


//Add relation to User
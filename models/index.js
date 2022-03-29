const User = require('./User');
const Product = require('./Products');
const Catergories = require('./Categories');
const Category = require('./Category');


Product.belongsTo(Category,{
    foreignKey: 'category_id'
})

Category.hasMany(Product,{
    foreignKey: 'category_id'
})

module.exports = { User, Product, Categories };

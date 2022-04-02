const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');


Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
})

Category.hasMany(Product,{
    foreignKey: 'category_id'
})

Product.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Product, {
    foreignKey: 'user_id'
})

module.exports = { User, Product, Category };

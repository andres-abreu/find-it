const {Category} = require('../models')

const categoryData = [
    {
        category_name: 'Tops',
    },
    {
        category_name: 'Bottoms'
    },
    {
        category_name: 'Shoes'
    },
    {
        category_name: 'Accesories'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories;
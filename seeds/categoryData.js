const {Category} = require('../models')

const categoryData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Shorts'
    },
    {
        category_name: 'Skirts'
    },
    {
        category_name: 'Hats'
    },
    {
        category_name: 'Dress'
    },
    {
        category_name: 'Pants'
    },
    {
        category_name: 'Active Wear'
    },
    {
        category_name: 'Beach Wear'
    },
    {
        category_name: 'Suits'
    },
    {
        category_name: 'Shoes and Socks'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories;
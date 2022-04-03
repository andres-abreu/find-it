const router = require('express').Router();

const {User, Product, Category} = require('../models')

const withAuth = require('../utils/auth')

//GET ALL Categories for homepage

router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll()
        const categories = dbCategoryData.map((category) => category.get({plain: true}))
        res.render('homepage',{
            categories,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/createproduct', (req, res) =>{
    res.render('productform')
})

router.get('/:category_id', (req, res) => {
    Product.findAll({
        where: {
            category_id: req.params.category_id
        },
        attributes: [
            'id',
            'product_name',
            'description',
            'price',
            'filename'
        ],
        include: [
            {
                model: User,
                attributes:['username']
            }
        ]
    })
    .then(dbProductData => {
        const products = dbProductData.map(product => product.get({plain: true}))
        res.render('product-list', {products, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})


module.exports = router;
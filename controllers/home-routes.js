const router = require('express').Router();

const { User, Products, Category, Product } = require('../models')

const withAuth = require('../utils/auth')

//GET ALL Categories for homepage

router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll()
        const categories = dbCategoryData.map((category) => category.get({ plain: true }))
        res.render('homepage', {
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

router.get('/createproduct', (req, res) => {
    res.render('productform')
})

// GET one Categories for user
router.get('/category/:id', async (req, res) => {
    try {
        const dbCategoryData = await Category.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    attributes: [
                        'id',
                        'title',
                        'description',
                        'image',
                        'price',
                    ],
                },
            ],
        });

        const category = dbCategoryData.get({ plain: true });
        res.render('category', { category });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one product
router.get('/product/:id', async (req, res) => {
    try {
        const dbProductData = await Product.findByPk(req.params.id);

        const product = dbProductData.get({ plain: true });

        res.render('product', { products });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
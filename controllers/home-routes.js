const router = require('express').Router();

const {User, Products, Category} = require('../models')

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


module.exports = router;
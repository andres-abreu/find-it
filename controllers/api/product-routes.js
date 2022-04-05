const router = require('express').Router();
const { User, Product, Category } = require('../../models');
const sequelize = require('../../config/connection')
const withAuth = require('../../utils/auth')


// CREATE new product
router.post('/api/product', async (req, res) => {
    try {
        const dbProductData = await Product.create({
            tittle: req.body.title,
            descirption: req.body.descirption,
            price: req.body.price,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dProductData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Product.destroy({
        where: 
        {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({message: 'No post found with this id'});
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: err.message});
    })
})
module.exports = router
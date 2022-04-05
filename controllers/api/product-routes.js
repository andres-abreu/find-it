const router = require('express').Router();
const { User, Product, Category } = require('../../models');
const sequelize = require('../../config/connection')
const withAuth = require('../../utils/auth')


router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
            'id',
            'product_name',
            'description',
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

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
const router = require('express').Router();
const {Product} = require('../../models');
const { route } = require('../home-routes');

router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Product.destroy({
        where: {id: req.params.id}
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
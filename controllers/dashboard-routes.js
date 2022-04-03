const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product, Category } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
  console.log(req.session.user_id);  
  Product.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes:[
        'id',
        'product_name',
        'description',
        'price',
        'filename'
      ],
      include: [
        {
          model: User,
          atributes:['username']
        }
      ]
    })
    .then(dbProductData => {
      const products = dbProductData.map(product => product.get({plain:true}));
      console.log(products);
      res.render('dashboard', { products, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/edit/:id', (req, res) => {
  Product.findByPk(req.params.id , {
    attributes: [
      'id',
      'product_name',
      'description',
      'price',
      'filename'
    ]
  })
  .then(dbProductData => {
    if (dbProductData) {
      const product = dbProductData.get({plain: true})
      res.render('edit-product', {
        product,
        loggedIn:true
      })
    } else {
      res.status(404).end();
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
  })

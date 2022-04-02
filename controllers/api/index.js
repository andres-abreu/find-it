const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const productRoutes = require('./product-routes.js');

router.use('/product', productRoutes)
router.use('/users', userRoutes)

module.exports = router
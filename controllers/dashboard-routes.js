const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Product, Category } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
    res.render('dashboard', { loggedIn: true });
  });
  
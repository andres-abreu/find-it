const router = require('express').Router();

const {User, Categories, Products} = require('../models')

const withAuth = require('../utils/auth')

//GET ALL Categories for homepage
module.exports = router
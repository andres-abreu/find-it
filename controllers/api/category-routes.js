const router = require('express').Router();
const sequelize = require('../config/connection')
const { User, Product, Category} = require('../../models')


const router = require('express').Router();
const {Product} = require('../../models')

const multer = require('multer')
const upload = multer({dest: './public/uploadImages'})



module.exports = router
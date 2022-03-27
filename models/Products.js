const router = require('express').Router();
const { Products } = require('../../models');

// CREATE new product
router.post('/', async (req, res) => {
  try {
    const dbProductData = await Product.create({
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbProductData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
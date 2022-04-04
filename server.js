const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const {Product} = require('./models')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'public/css/uploadImages')
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.post('/create', upload.single("image"), (req, res) => {
    productFileName = req.file.filename;
    let category_id = 0;
    console.log();
    switch (req.body.categories) {
      case 'Shirts':
            category_id = 1;
            console.log(category_id);
        break;
      case 'Shorts':
          category_id = 2;
          console.log(category_id);
      break;
      case 'Skirts':
            category_id = 3;
            console.log(category_id);
        break;
      case 'Hats':
          category_id = 4;
          console.log(category_id);
      break;
      case 'Dress':
            category_id = 5;
            console.log(category_id);
        break;
      case 'Pants':
            category_id = 6;
            console.log(category_id);
        break;
      case 'Active Wear':
            category_id = 7;
            console.log(category_id);
        break;
      case 'Beach Wear':
            category_id = 8;
            console.log(category_id);
        break;
      case 'Suits':
            category_id = 9;
            console.log(category_id);
        break;
      case 'Shoes And Socks':
            category_id = 10;
            console.log(category_id);
        break;
      default:
        break;
    }
    Product.create({
      product_name:req.body.name,
      price:req.body.price,
      description:req.body.description,
      filename:req.file.filename,
      category_id:category_id,
      user_id:req.session.user_id
    })
    res.redirect('/dashboard')
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
})

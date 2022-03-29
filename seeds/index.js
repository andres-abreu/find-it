const sequelize = require('../config/connection');
const seedCategory = require('./categoryData')


const seedAll = async () => {
    await sequelize.sync({force: true})

    await seedCategory

    process.exit(0)
}

seedAll();
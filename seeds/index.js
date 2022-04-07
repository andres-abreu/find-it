const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedUserData = require('./userData')


const seedAll = async () => {
    await sequelize.sync({force: true})

    await seedCategory();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedUserData();
    console.log('\n----- USER SEEDED -----\n');
    process.exit(0)
}

seedAll();
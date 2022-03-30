const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedUserData = require('/userData')


const seedAll = async () => {
    await sequelize.sync({force: true})

    await seedCategory();
    await seedUserData();
    
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0)
}

seedAll();
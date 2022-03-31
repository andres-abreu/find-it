const User = require('../models')

const userData = [
    {
        username: 'Jose Rodas',
        email: 'josejose@gmail.com',
        password: 'jose123'
    },

    {
        username: 'Ana Martinez',
        email: 'ana@gmail.com',
        password: 'Ana321'
    },

    {
        username: 'Jane Doe',
        email: 'doejane@gmail.com',
        password: 'JaneD555'
    },

    {
        username: 'Adam Smith',
        email: 'adams@hotmail.com',
        passwrod: 'Smith3350'
    },

    {
        username: 'Maria R',
        email: 'maria@yahoo.com',
        password: 'Maria456'
    },

    {
        username: 'Denise P',
        email: 'denisep@gmail.com',
        password: 'Denise444'
    },

    {
        username: 'Luke S',
        email: 'skywalker1@gmail.com',
        password:'"Theforce1'
    },

    {
        username: 'Betty Y',
        email: 'bettyy@hotmail.com',
        passwrod: 'Betty556'
    },

    {
        username: 'Carlos P',
        email: 'carlos@gmail.com',
        password: 'carlos101'
    },

    {
        username: 'Sandy M',
        email: 'sandym@gmail.com',
        password: 'iamsandy'
    }

]

const seedUserData = () => user.bulkCreate(userData)

module.exports = seedUserData;
const sequelize = require('sequelize');
const conn = require('../db/conn');

const User = conn.define('user' , {
    email: {
        type: sequelize.STRING,
    },
    senha: {
        type: sequelize.STRING,
    },
});

module.exports = User;
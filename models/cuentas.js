const Sequelize = require('sequelize');
const db = require('../config/database');

const Cuenta = db.define('cuentas', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = Cuenta;


const Sequelize = require('sequelize');
const db = require('../config/database');

const Clientes = db.define('clientes', {
    nombre: {
        type: Sequelize.STRING
    },
    empresa: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.NUMBER
    },
    correo: {
        type: Sequelize.STRING
    },
    creador: {
        type: Sequelize.STRING
    }
});

module.exports = Clientes;
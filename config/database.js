const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });


module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    /* Puede ser localhost pero es mas recomendable la ip */
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    /* dialect es el motor de base de datos utilizado */
    dialect: 'mysql',
    define: {
        timestamps:false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});
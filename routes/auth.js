const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

/* /auth */
module.exports = function(){
    router.post('/autenticar',
        authController.autenticarUsuario
    )
    router.post('/crear-cuenta',
        authController.crearCuenta
    );
    router.get('/obtenerCuenta',
        auth,
        authController.obtenerCuenta
    )


    return router;
}
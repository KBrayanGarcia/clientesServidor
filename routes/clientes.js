const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');
const auth = require('../middlewares/auth');

/* /clientes */
module.exports = function() {
 
    router.get('/',
        auth,
        clientesController.obtenerClientes
    );
    router.post('/',
        auth,
        clientesController.agregarCliente
    )
    router.put('/:id',
        auth,
        clientesController.editarCliente
    )
    router.delete('/:id',
        auth,
        clientesController.eliminarCliente
    )
    
    return router;
}
const Cliente = require('../models/cliente');
const Cuenta = require('../models/cuentas');

exports.obtenerClientes = async(req, res) => {
    const usuario = req.usuarioLoggeado.usuario;
    try {
    /* Verificar que la cuenta existe */
        const cuentaExiste = await Cuenta.findOne({
            where: {
                id: usuario.id
            }
        });
        if (!cuentaExiste) {
            return res.status(404).json({msg: "Cuenta no encontrada"})
        }
        const clientes = await Cliente.findAll({
            where: {
                creador: usuario.id
            }
        });
        res.send(clientes);
    } catch (error) {
        console.log(error);
    }
}
exports.agregarCliente = async (req, res) => {
    const usuario = req.usuarioLoggeado.usuario;
    try {
        const { nombre, empresa, celular, correo } = req.body;
        const creador = usuario.id;
        Cliente.create({
            nombre, empresa, celular, correo, creador
        })
            .then(cliente =>  res.json({msg: 'Cliente creado correctamente'}))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
} 

exports.editarCliente = async (req, res) => {
    const usuario = req.usuarioLoggeado.usuario;
    try {
        /* Verificar que la cuenta existe */
        const cuentaExiste = await Cuenta.findOne({
            where: {
                id: usuario.id
            }
        });
        if (!cuentaExiste) {
            return res.status(404).json({msg: "Cuenta no encontrada"})
        }
        const id = req.params.id;

        /* Verificar si de verdad el cliente a editar es del usuario correspondiente */
        const clienteExiste = await Cliente.findOne({
            where: {
                id: id
            }
        })
        const { creador } = clienteExiste;
        if (creador !== usuario.id ) {
            return res.status(400).json({msg: "Accioon no autorizada"})
        }

        const { nombre, empresa, celular, correo } = req.body;
        Cliente.update({
            nombre, empresa, celular, correo
        }, {
                where: {
                id
            }
        })
            .then(clienteActualizado => res.json({msg: 'Cliente actualizado'}))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
    
}
exports.eliminarCliente = async (req, res) => {
    const usuario = req.usuarioLoggeado.usuario;
    try {
        const cuentaExiste = await Cuenta.findOne({
            where: {
                id: usuario.id
            }
        });
        if (!cuentaExiste) {
            return res.status(404).json({msg: "Cuenta no encontrada"})
        }
        const id = req.params.id;

        /* Verificar si de verdad el cliente a editar es del usuario correspondiente */
        const clienteExiste = await Cliente.findOne({
            where: {
                id: id
            }
        })
        const { creador } = clienteExiste;
        if (creador !== usuario.id ) {
            return res.status(400).json({msg: "Accioon no autorizada"})
        }

        Cliente.destroy({
            where: {
                id: id
            }
        })
            .then(clienteEliminado => res.json({msg: `Cliente con el id: ${id} ha sido eliminado`}))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}
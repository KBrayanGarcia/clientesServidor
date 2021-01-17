const { validationResult } = require('express-validator');
const Cuenta = require('../models/cuentas');
const bcrypjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    const { email, password } = req.body;
    try {
        const cuenta = await Cuenta.findOne({
            where: {
                email: email
            } 
        });
    
        if (!cuenta) {
            return res.status(400).json({msg: "Usuario no existente"})
        } 
        
        const contraseñaValida = await bcrypjs.compare(password, cuenta.password);
        if (!contraseñaValida) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }
        cuenta.password = password;

        /* Ahora es crea ese objeto con ese id */
        const payload = {
            usuario: {
                id: cuenta.id
            }
        }

        jwt.sign(payload, process.env.SECRETA, {
            /* Este atributo hace expirar el id en 1 hora */
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;
                res.json({token});
        })

    } catch (error) {
        console.log(error);
    }
}

exports.crearCuenta = async (req, res) => {


    try {
        const { nombre, email } = req.body;
        let { password } = req.body;

        const cuentaExistente = await Cuenta.findOne({
            where: {
                email: email
            }
        });

        if(cuentaExistente) {
            return res.status(400).json({ msg: "Cuenta existente, introduce un correo electronico diferente" });
        }

    /* encriptar contraseña */
        const salt = await bcrypjs.genSalt(10);
        password = await bcrypjs.hash(password, salt)

    /* Enviar cuenta a BD */
        const respuesta = await Cuenta.create({
            nombre, email, password
        })
        res.json({ msg: "Cuenta creada con exito" });
    } catch (error) {
        console.log(error);
    }

}

exports.obtenerCuenta = async (req, res) => {
    const id = req.usuarioLoggeado.usuario.id;
   try {
       const respuesta = await Cuenta.findOne({
           where: {
            id
           },
           attributes: ['id', 'nombre']
       })
       res.send(respuesta)
   } catch (error) {
       console.log(error);
   } 
}
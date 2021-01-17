const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');

/* El token represante si un usuario inicio sesion entonces si */
    if (!token) {
        return res.status(404).json({msg: "Token no valido, o sesion expirada"})
    }

    try {
        const objeto = jwt.verify(token, process.env.SECRETA);
        req.usuarioLoggeado = objeto;
        next();
    } catch (error) {
        console.log(error);
    }

}
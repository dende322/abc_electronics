const jwt = require("../utils/jwt");
const Client = require("../models/client");

function asureAuth(req, res, next) {

    if (!req.headers.authorization) {
        return res
        .status(403)
        .send({ msg: "Peticion sin cabecera de autenticacion" })
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    try {
        const payload = jwt.decode(token);
        const currentDate = new Date().getTime();

        if(payload.exp <= currentDate){
            return res.status(400).send({msg: "El token ha expirado"});
        }

        req.user = payload;
        next();

    } catch (error) {
        return res.status(400).send({ msg: "Token invalido" });
    }
};

async function asureAdmin(req, res, next){

    try {
        const client = await Client.findById(req.user.user_id);

        if(client.role == "user") res.status(400).send({ msg: "No cuneta con permisos para esta accion" });

        next();

    } catch (error) {
        return res.status(400).send({ msg: "Token invalido" });
    }
};

module.exports = {
    asureAuth,
    asureAdmin,
}
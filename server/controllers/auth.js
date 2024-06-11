const Client = require("../models/client");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

function register(req, res) {
    const {
        nombre,
        apellido,
        direccion,
        f_nacimiento,
        email,
        telefono,
        celular,
        password,
        hijos,
        l_nacimiento,
        l_ubicacion,
        religion,
        hobbies,
        deportes,
        estado_c
    } = req.body;

    if (!email) res.status(400).send({ msg: "Correo obligatorio" });
    //if (!password) res.status(400).send({ msg: "Clave obligatoria" });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const client = new Client({
        nombre,
        apellido,
        direccion,
        f_nacimiento,
        email: email.toLowerCase(),
        telefono,
        celular,
        password: hashPassword,
        hijos,
        l_nacimiento,
        l_ubicacion,
        religion,
        hobbies,
        deportes,
        estado_c,
        role: "user"
    });

    client.save((error, clientStorage) => {
        if (error) {
            res.status(400).send({ msg: "Error en la creacion del cliente" });
        } else {
            res.status(200).send(clientStorage);
        }
    });
}

function login(req, res) {
    const { email, password } = req.body;
    
    if(!email || !password) res.status(400).send({msg : "Error al iniciar sesion"});

    const emailLower = email.toLowerCase();

    Client.findOne( {email: emailLower}, (error, clientStorage) =>{
        if(clientStorage != null){
            if(error){
                res.status(500).send({msg : "Error del servidor"});
            }else{
                bcrypt.compare(password, clientStorage.password, (bcryptError, check) =>{
                    if(bcryptError){
                        res.status(500).send({msg : "Error del servidor"});
                    }else if(!check){
                        res.status(500).send({msg : "Clave incorrecta"});
                    }else{
                        res.status(200).send({
                            access : jwt.createAccessToken(clientStorage),
                            refresh : jwt.createRefreshToken(clientStorage)
                        })
                    }
                });
            }
        }else{
            res.status(500).send({msg : "Error del servidor"});
        }
    })
}

function refreshAccessToken(req, res){
    const {token} = req.body;

    if (!token) res.status(400).send({ msg: "Token requerido" });

    const {user_id} = jwt.decode(token);

    Client.findOne({ _id : user_id}, (error, clientStorage) =>{
        if(clientStorage !== null){
            if (error) {
                res.status(500).send({ msg: "Error del servidor" });
            } else {
                res.status(200).send({
                    accessToken: jwt.createAccessToken(clientStorage),
                });
            }
        }else{
            res.status(500).send({ msg: "Error del servidor" });
        }
    });
}

module.exports = {
    register,
    login,
    refreshAccessToken,
}
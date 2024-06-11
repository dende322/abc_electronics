const mongoose = require("mongoose")

const ClientSchema = mongoose.Schema({
    nombre : String,
    apellido : String,
    direccion : String,
    f_nacimiento : String,
    email : {
        type :  String,
        unique : true
    },
    telefono : String,
    celular : String,
    password : String,
    hijos : Array,
    l_nacimiento  : {
        m_c : String,
        d_e : String,
        pais: String
    },
    l_ubicacion  : {
        m_c : String,
        d_e : String,
        pais: String,
        z_code : String
    },
    religion  : String,
    hobbies  : Array,
    deportes  : Array,
    estado_c  : Array,
    role : String
});

module.exports = mongoose.model("Client", ClientSchema);
const Client = require("../models/client")

async function getMe(req, res){
    const {user_id} = req.user;

    const response = await Client.findById(user_id);

    if(!response){
        res.status(400).send({msg : "Usuario no encontrado"});
    }else{
        res.status(200).send(response);
    }
}

async function getClient(req, res){
    const {id} = req.params;
    if(!id) res.status(400).send({msg : "Informacion incompleta"});

    const response = await Client.findById(id);

    if(!response){
        res.status(400).send({msg : "Usuario no encontrado"});
    }else{
        res.status(200).send(response);
    }

}

async function getClients(req, res){
    res.status(200).send( await Client.find({}))
}

async function updateClient(req, res){
    const {id} = req.params;
    const clientData = req.body;

    let query = clientData;
    if(clientData.hijos){
        query = {$push : { hijos : { $each : clientData.hijos} }};
        clientData
    }else if(clientData.estado_c){
        query = {$push : { estado_c : { $each : clientData.estado_c} }};
    }else if(clientData.deportes){
        query = {$push : { deportes : { $each : clientData.deportes} }};
    }else if(clientData.hobbies){
        query = {$push : { hobbies : { $each : clientData.estado_c} }};
    }

    Client.findByIdAndUpdate({_id : id}, query, (error) =>{
        if(error){
            res.status(400).send({msg : "Error al actualizar"});
        }else{
            res.status(200).send({msg : "Actuializacion correcta"});
        }
    });
}

async function deleteClient (req, res){
    const {id} = req.params;

    Client.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg: "Error el eliminar el cliente"});
        }else{
            res.status(200).send({msg: "Cliente eliminado"});
        }
    });
}

module.exports = {
    getMe,
    getClients,
    updateClient,
    getClient,
    deleteClient,
}
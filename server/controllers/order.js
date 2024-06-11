const Order = require("../models/order");

async function getOrder(req, res) {
    const { id } = req.params;

    const response = await Order.findById(id);

    if (!response) {
        res.status(400).send({ msg: "Orden no encontrado" });
    } else {
        res.status(200).send(response);
    }
}

async function getAllOrders(req, res) {

    res.status(200).send(await Order.find({}));

}

async function getAllOrdersByClientId(req, res) {

    const {user_id} = req.user;

    res.status(200).send(await Order.find({cliente : user_id}));

}

async function createOrder(req, res) {

    const {
        cliente,
        productos,
        precio_T,
    } = req.body;

    if (!cliente || !productos || !precio_T) res.status(500).send({ msg: "Error del servidor" });

    const order = new Order({
        cliente,
        f_pedido: Date.now(),
        f_envio: null,
        f_pago: null,
        productos,
        precio_T
    });

    order.save((error, orderStorage) => {
        if (error) {
            res.status(400).send({ msg: "Error realizando pedido" });
        } else {
            res.status(200).send(orderStorage);
        }
    });
}

async function updateOrder(req, res){
    const {id} = req.params;
    const orderData = req.body;

    const date = Date.now();

    if(orderData.f_envio) orderData.f_envio = date;
    if(orderData.f_pago) orderData.f_pago = date;

    Order.findByIdAndUpdate({ _id: id }, orderData, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al actualizar" });
        } else {
            res.status(200).send({ msg: "Actuializacion correcta" });
        }
    });
}

module.exports = {
    createOrder,
    getOrder,
    getAllOrders,
    getAllOrdersByClientId,
    updateOrder,
}
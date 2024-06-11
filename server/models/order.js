const mongoose = require("mongoose")

const OrdertSchema = mongoose.Schema({
    cliente : String,
    f_pedido : Date,
    f_envio : Date,
    f_pago : Date,
    productos : Array,
    precio_T : Number
});

module.exports = mongoose.model("orders", OrdertSchema);
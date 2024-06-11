const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    nombre : String,
    marca : String,
    descripcion : String,
    cantidad : Number,
    costo : Number,
    precio_venta : Number,
    categorias : Array,
    imagen : String,
    active :  Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
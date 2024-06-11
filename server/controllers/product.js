const Product = require("../models/product");
const image = require("../utils/image");

async function getProduct(req, res) {
    const { id } = req.params;

    const response = await Product.findById(id);

    if (!response) {
        res.status(400).send({ msg: "Producto no encontrado" });
    } else {
        res.status(200).send(response);
    }
}

async function getAllProducts(req, res) {
    const {active} = req.query;

    res.status(200).send(await Product.find(((active=="")?{}:{active})));

}

async function createProduct(req, res) {

    const {
        nombre,
        descripcion,
        cantidad,
        costo,
        precio_venta,
        categorias,
        marca
    } = req.body;

    const categoriasSplit = categorias.split(",");

    if (!nombre || !cantidad || !costo || !precio_venta) res.status(400).send({ msg: "Datos incompletos" });

    const product = new Product({
        nombre,
        descripcion,
        cantidad: parseInt(cantidad),
        costo,
        precio_venta,
        categorias: categoriasSplit,
        imagen: "",
        marca,
        active: true
    });

    if (req.files.imagen) {
        const imagePath = image.getImagePath(req.files.imagen);
        product.imagen = imagePath;
    }

    product.save((error, productStorage) => {
        if (error) {
            res.status(400).send({ msg: "Error en la crecaion del producto" });
        } else {
            res.status(200).send(productStorage);
        }
    });
}

async function updateProduct(req, res) {
    const { id } = req.params;
    const productData = req.body;
    
    if(productData.categorias) productData.categorias = productData.categorias.split(",");

    if (req.files.imagen) {
        const imagePath = image.getImagePath(req.files.imagen);
        productData.imagen = imagePath;
    }

    Product.findByIdAndUpdate({ _id: id }, productData, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al actualizar" });
        } else {
            res.status(200).send({ msg: "Actuializacion correcta" });
        }
    });
}

async function deletProduct() {

}

module.exports = {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deletProduct,
}
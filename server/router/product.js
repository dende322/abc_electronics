const express = require("express");
const middleware = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty")
const productController = require("../controllers/product");

const api = express.Router();
const md_upload = multiparty({uploadDir: "./uploads/products"});

api.get("/product/all",productController.getAllProducts );
api.get("/product/:id", productController.getProduct);
api.post("/product/create",[middleware.asureAuth, middleware.asureAdmin, md_upload], productController.createProduct);
api.patch("/product/:id", [middleware.asureAuth, md_upload], productController.updateProduct);
//api.patch("/product/delete:id" [middleware.asureAuth, middleware.asureAdmin], productController.updateProduct);


module.exports = api;
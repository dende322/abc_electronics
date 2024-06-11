const express = require("express");
const middleware = require("../middlewares/authenticated");
const orderController = require("../controllers/order");

const api = express.Router();

api.get("/order/all",[middleware.asureAuth], orderController.getAllOrders);
api.get("/order/:id",[middleware.asureAuth], orderController.getOrder);
api.post("/order/create",[middleware.asureAuth], orderController.createOrder);
api.get("/orders", [middleware.asureAuth], orderController.getAllOrdersByClientId);
api.patch("/order/:id", [middleware.asureAuth, middleware.asureAdmin], orderController.updateOrder);


module.exports = api;
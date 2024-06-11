const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();

//Import routings
const authRoutes = require("./router/auth");
const clientRoutes = require("./router/client");
const productRoutes = require("./router/product");
const pedidosRoutes = require("./router/order");

//Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configure static folder
app.use(express.static("uploads"));

//Configure Cors
app.use(cors());

//Configure routings
app.use(`/api/${API_VERSION}`,
    authRoutes,
    clientRoutes,
    productRoutes,
    pedidosRoutes
);

module.exports = app;
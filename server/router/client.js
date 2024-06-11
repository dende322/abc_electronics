const express = require("express");
const clientController = require("../controllers/client");
const middleware = require("../middlewares/authenticated");

const api = express.Router();

api.get("/client/me", [middleware.asureAuth], clientController.getMe);
api.get("/clients", clientController.getClients);
api.get("/client/:id", clientController.getClient);
api.patch("/client/:id", clientController.updateClient);
api.delete("/client/:id", clientController.deleteClient);

module.exports = api;
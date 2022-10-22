const express = require('express');
const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');

const routes = express.Router();

routes.post('/users', UserController.add);
routes.get('/users', UserController.read);

routes.post('/users/:user_id/address', AddressController.add);
routes.get('/users/:user_id/address', AddressController.read);

routes.post('/users/:user_id/tech', TechController.add);
routes.get('/users/:user_id/tech', TechController.read);
routes.delete('/users/:user_id/tech', TechController.delete);

module.exports = routes;
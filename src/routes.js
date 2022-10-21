const express = require('express');
const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');

const routes = express.Router();

routes.post('/users', UserController.add);
routes.get('/users', UserController.read);

routes.post('/users/:user_id/address', AddressController.add);
routes.get('/users/:user_id/address', AddressController.read);

module.exports = routes;
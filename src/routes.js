const express = require('express');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.post('/users', UserController.add);
routes.get('/users', UserController.read);

module.exports = routes;
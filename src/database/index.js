//Passa na instância do Sequelize as configs feita pelo módulo de credenciais do banco.

const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../model/User');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
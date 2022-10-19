//Apenas a aplicação será responsável pelas credenciais de conexão com o banco.

module.exports = {
    database: 'nodejs',
    username: 'root',
    password: 'ceub',
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: true,
    }
};
const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){ //Passa o parâmetro de conexão com o banco => (connect) sequelize: connect
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = User;
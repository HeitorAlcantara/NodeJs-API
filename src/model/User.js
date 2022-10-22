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

    static associate(models){ //Passa todas as models como parâmetro
        this.hasMany(models.Address  , {foreignKey: 'user_id' , as: 'addresses'});
        this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'}); 
    }
}

module.exports = User;
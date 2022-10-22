const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(sequelize){ // --> Lembrando: shortcut (connection){sequelize: connection} ==> (sequelize) {sequelize}
        super.init({
            name: DataTypes.STRING
        },{
            sequelize,
            tableName: 'techs'
        })
    }

    static associate(models){
        this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'user'});
    }
}

module.exports = Tech;
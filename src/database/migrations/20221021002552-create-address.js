'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', 
    { id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'users', key: 'id'}, //Faço o relacionamento da tabela address com o user_id
        onUpdate: 'CASCADE', //Caso haja alguma mudança nos ids de users, o atributo altera automaticamente aqui
        onDelete: 'CASCADE', //Caso haja alguma mudança nos ids de users, o atributo deleta automaticamente aqui
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};

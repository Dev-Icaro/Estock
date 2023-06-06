'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movimentacoes_estoques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_transacao: {
        type: Sequelize.STRING
      },
      data_transacao: {
        type: Sequelize.DATE
      },
      quantidade: {
        type: Sequelize.FLOAT
      },
      observacao: {
        type: Sequelize.TEXT
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'produtos', key: 'id'}
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'usuarios', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movimentacoes_estoques');
  }
};
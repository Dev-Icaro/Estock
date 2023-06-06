'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movimentacoes_estoque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movimentacoes_estoque.belongsTo(models.produtos, {
        foreignKey: 'produto_id'
      });
      movimentacoes_estoque.belongsTo(models.usuarios, {
        foreignKey: 'usuario_id'
      });
    }
  }
  movimentacoes_estoque.init({
    tipo_transacao: DataTypes.STRING,
    data_transacao: DataTypes.DATE,
    quantidade: DataTypes.FLOAT,
    observacao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'movimentacoes_estoque',
  });
  return movimentacoes_estoque;
};
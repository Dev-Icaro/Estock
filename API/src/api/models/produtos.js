'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      produtos.belongsTo(models.fabricantes, {
        foreignKey: 'fabricante_id'
      });

      produtos.belongsTo(models.categorias, {
        foreignKey: 'categoria_id'
      });

      produtos.hasMany(models.movimentacoes_estoque, {
        foreignKey: 'produto_id'
      });
    }
  }
  produtos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.FLOAT,
    ativo: DataTypes.BOOLEAN,
    foto: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'produtos',
  });
  return produtos;
};
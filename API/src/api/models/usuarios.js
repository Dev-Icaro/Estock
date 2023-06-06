'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuarios.hasMany(models.movimentacoes_estoque, {
        foreignKey: 'usuario_id'
      });
    }
  }
  usuarios.init({
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    primeiro_nome: DataTypes.STRING,
    ultimo_nome: DataTypes.STRING,
    aniversario: DataTypes.DATE,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};
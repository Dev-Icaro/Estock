'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fabricantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      fabricantes.hasMany(models.produtos, {
        foreignKey: 'fabricante_id'
      })
      // define association here
    }
  }
  fabricantes.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    website: DataTypes.STRING,
    pais: DataTypes.STRING,
    ano_abertura: DataTypes.DATE,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    logotipo: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'fabricantes',
  });
  return fabricantes;
};
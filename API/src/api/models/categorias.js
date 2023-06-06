'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categorias.hasMany(models.produtos, {
        foreignKey: 'categoria_id'
      })
    }
  }
  categorias.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};
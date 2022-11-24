'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
loans.belongsTo(models.user)
loans.belongsTo(models.movie)    }
  }
  loans.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fechaloans: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'loans',
  });
  return loans;
};
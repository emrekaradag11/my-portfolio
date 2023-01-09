const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("images", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    image : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    metaId : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ord : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
    },
    updated_at : {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
});
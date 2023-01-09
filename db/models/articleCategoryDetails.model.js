const { Sequelize,DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define("settings", {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    slug : {
      type: DataTypes.TEXT,
      allowNull: false
    },
    langId : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metaId : {
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
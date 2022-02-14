const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create fields/columns for Movie model
class Movie extends Model {}
Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    release: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // image: {
    //   type: DataTypes.VARBINARY(MAX),
    // },
    // user_id: {
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;

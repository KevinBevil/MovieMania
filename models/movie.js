module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    movieName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    moviePoster: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movieRuntime: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movieRating: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    movieActors: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movieDirector: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    movieGenre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    moviePlot: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movieYear: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    IMDBrating: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    movieProduction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    movieWriter: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    movieCountry: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    movieLanguage: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userRating: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  });
  return Movie;
};

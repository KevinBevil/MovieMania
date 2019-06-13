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
    tomatoesRating: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

    // Sequelize documentation says sequelize adds these fields to the model by default
    //    ,
    //
    //    createdAt: sequelize.DATE,
    //    updatedAt: sequelize.DATE    
  });
  return Movie;
};

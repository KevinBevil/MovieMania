var db = require("../models");

module.exports = function(app) {
  // Get all movies
  app.get("/api/movies", function(req, res) {
    db.Movie.findAll({}).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Create a new movie
  app.post("/api/movies", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Delete a movie by id
  app.delete("/api/movies/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(
      dbMovie
    ) {
      res.json(dbMovie);
    });
  });
};

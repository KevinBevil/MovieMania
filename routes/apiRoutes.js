require("dotenv").config();
var db = require("../models");
var keys = require("../keys.js");
var Omdb = require("omdb");
var omdbKey = keys.omdb.id;

module.exports = function(app) {
  // Get movies from OMDB
  app.get("/api/password", function(req, res) {
    res.send(omdbKey);
  });

  // Get all movies on watch list
  app.get("/api/movies/:watched", function(req, res) {
    var watchedBool = false;
    if (req.params.watched === "true") {
      watchedBool = true;
    }

    db.Movie.findAll({
      where: {
        watched: watchedBool
      },
      order: [["updatedAt", "ASC"]]
    }).then(function(movies) {
      res.json(movies);
    });
  });

  // Get one movie
  app.get("/api/movies/:id", function(req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Movie]
    }).then(function(dbMovie) {
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
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Watch or Unwatch a movie by id
  app.put("/api/movies/:id", function(req, res) {
    db.Movie.update(req.body, { where: { id: req.params.id } }).then(function(
      dbMovie
    ) {
      res.json(dbMovie);
    });
  });
};

require("dotenv").config();
var db = require("../models");
var keys = require("../keys.js");
var omdbKey = keys.omdb.id;

module.exports = function(app) {
  // Get movies from OMDB
  app.get("/api/password", function(req, res) {
    res.send(omdbKey);
  });

  // Get all movies on watch list
  app.get("/api/movies/byuser/:id/", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      },
      include: [db.Movie],
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
      include: [db.User] // Changed during teacher time
    }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Create a new movie
  app.post("/api/movies", function(req, res) {
    db.Movie.create(req.body)
      .then(function(dbMovie) {
        res.json(dbMovie);
      })
      .catch(function(err) {
        console.log(err);
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

  // User db get method to check if user email is already in database
  app.get("/check/user/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(response) {
      console.log(response);
      res.json(response);
    });
  });

  // The user db create method
  app.post("/login", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });
};

var db = require("../models");
var omdb = require("../keys.js");
var omdbKey = omdb.password;

module.exports = function(app) {
  // Get movies from OMDB
  app.get("/api/password", function(req, res) {
    res.send(omdbKey);
  });

  // Get all movies on watch list
  app.get("/api/movies", function(req, res) {
    db.Movie.findAll({
      where: {
        watched: false
      }
    }).then(function(movies) {
      res.json(movies);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

$(document).ready(function() {
  // Get references to page elements
  // var $exampleText = $("#example-text");
  // var $exampleDescription = $("#example-description");
  var $submitBtn = $(".btn-action-add");
  var $exampleList = $("#example-list");

  var $searchResult = $("#search-result");

  // The API object contains methods for each kind of request we'll make
  var API = {
    addNewMovie: function(newMovie) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/movies",
        data: JSON.stringify(newMovie)
      });
    },
    getMovies: function() {
      return $.ajax({
        url: "api/movies",
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };

  var movieWatchList = new Vue({
    el: "[vue='movie-watch-list']",
    data: {
      watchlist: []
    }
  });

  // refreshWatchList gets new examples from the db and repopulates the list
  var refreshWatchList = function() {
    API.getMovies().then(function(movies) {
      var moviesList = [];

      for (var i = 0; i < movies.length; i++) {
        moviesList.push({ title: movies[i].movieName });
      }

      // Vue.component("movie-watch-list", {
      //   data: {
      //     watchlist: moviesList
      //   }
      // });

      movieWatchList.watchlist = moviesList;
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    console.log("hello friends");

    var movieDetails = $(this).parents("#movie-details");
    var movieTitle = movieDetails
      .find("#movie-title")
      .text()
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");
    movieTitle = movieTitle.slice(0, movieTitle.length - 1).join(" ");
    var movieYear = getDataFromElement(movieDetails, "#movie-year");
    var movieGenre = getDataFromElement(movieDetails, "#genre");
    var moviePlot = getDataFromElement(movieDetails, ".movie-plot");
    var imdbRating = getDataFromElement(movieDetails, "#imdb-rating").split(
      " "
    );
    imdbRating = imdbRating[imdbRating.length - 1];

    var newMovie = {
      movieName: movieTitle,
      movieYear: movieYear,
      movieGenre: movieGenre,
      moviePlot: moviePlot,
      IMDBrating: imdbRating,
      tomatoesRating: 7.0,
      watched: false
    };

    // if (!(example.text && example.description)) {
    //   alert("You must enter an example text and description!");
    //   return;
    // }

    API.addNewMovie(newMovie).then(function() {
      console.log("this worked, let's refresh");
      refreshWatchList();
      $("#search-result").empty();
    });

    // $exampleText.val("");
    // $exampleDescription.val("");
  };

  var getDataFromElement = function(parent, selector) {
    return parent
      .find(selector)
      .text()
      .trim();
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
    });
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", "#add-watch-list", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);
  $searchResult.on("click", ".btn-action-add", handleFormSubmit);

  // initialize page by refreshing the watchlist
  refreshWatchList();
});

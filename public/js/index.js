$(document).ready(function() {
  // Get references to page elements
  var $searchResult = $("#search-result");
  var $watchList = $("#to-watch-list");
  var $watchedList = $("#recently-rated");

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
    getMovies: function(watched) {
      console.log(watched);
      return $.ajax({
        url: "api/movies/" + watched,
        type: "GET"
      });
    },
    deleteMovie: function(id) {
      return $.ajax({
        url: "api/movies/" + id,
        type: "DELETE"
      });
    },
    updateMovie: function(id, update) {
      return $.ajax({
        url: "api/movies/" + id,
        type: "PUT",
        data: update
      });
    }
  };

  var movieWatchList = new Vue({
    el: "[vue='movie-watch-list']",
    data: {
      list: []
    }
  });

  var movieWatchedList = new Vue({
    el: "[vue='movie-watched-list']",
    data: {
      list: []
    }
  });

  // refreshWatchList gets new examples from the db and repopulates the list
  var refreshWatchList = function() {
    API.getMovies("false").then(function(movies) {
      renderList(movies, movieWatchList);
    });

    API.getMovies("true").then(function(watchedMovies) {
      renderList(watchedMovies, movieWatchedList);
    });
  };

  var renderList = function(movies, vueElement) {
    var moviesList = [];

    for (var i = 0; i < movies.length; i++) {
      moviesList.push({
        title: movies[i].movieName,
        id: movies[i].id
      });
    }

    vueElement.list = moviesList;
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var addToWatchList = function(event) {
    event.preventDefault();

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
  var deleteMovie = function() {
    var idToDelete = $(this).attr("data-id");

    API.deleteMovie(idToDelete).then(function() {
      refreshWatchList();
    });
  };

  var movieToWatchedList = function() {
    var idToUpdate = $(this).attr("data-id");

    API.updateMovie(idToUpdate, { watched: true }).then(function() {
      refreshWatchList();
    });
  };

  var movieToWatchList = function() {
    var idToUpdate = $(this).attr("data-id");

    API.updateMovie(idToUpdate, { watched: false }).then(function() {
      refreshWatchList();
    });
  };

  // Add event listeners to the submit and delete buttons
  $watchList.on("click", ".watch-movie", movieToWatchedList);
  $watchedList.on("click", ".unwatch-movie", movieToWatchList);
  $watchList.on("click", ".delete-movie", deleteMovie);
  $watchedList.on("click", ".delete-movie", deleteMovie);
  $searchResult.on("click", ".btn-action-add", addToWatchList);

  // initialize page by refreshing the watchlist
  refreshWatchList();
});

// =============================================================================
// JQuery handlers for User Table in DB
// =============================================================================

$(document).ready(function() {
  $("body").change(function() {
    var $user = $("#user").value();
    var $email = $("#email").value();
    var $pic = $("#pic").value();

    var newUser = {
      userName: $user,
      email: $email,
      pic: $pic
    };
    console.log("!!!" + newUser);
  });
});

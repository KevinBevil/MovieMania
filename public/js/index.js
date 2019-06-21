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
    getMovies: function(id) {
      return $.ajax({
        url: "api/movies/byuser/" + id,
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

  $(document).on("click", "#sign-out", function(event) {
    event.preventDefault();
    movieWatchList.list = [];
    movieWatchedList.list = [];
  });

  $(document).on("click", "#to-watch-list", function(event) {
    event.preventDefault();
    refreshWatchList();
  });

  // refreshWatchList gets new examples from the db and repopulates the list
  var refreshWatchList = function() {
    var userId = $("#user-name").attr("data-id");
    console.log(userId);
    API.getMovies(userId).then(function(movies) {
      console.log(movies[0].Movies);
      renderList(movies[0].Movies);
    });
  };

  var renderList = function(movies) {
    var watchList = [];
    var watchedList = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].watched) {
        watchedList.push({
          title: movies[i].movieName,
          userRating: movies[i].userRating,
          id: movies[i].id
        });
      } else {
        watchList.push({
          title: movies[i].movieName,
          id: movies[i].id
        });
      }
    }
    movieWatchList.list = watchList;
    movieWatchedList.list = watchedList;
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
    var imdbRating = getDataFromElement(movieDetails, "#imdb-rating")
    var moviePoster = $(".movie-poster").attr("src");
    var movieRuntime = getDataFromElement(movieDetails, "#run-time");
    var movieRating = getDataFromElement(movieDetails, "#movie-rating");
    var movieActors = getDataFromElement(movieDetails, "#actors");
    var movieDirector = getDataFromElement(movieDetails, "#movie-director");
    var movieProduction = getDataFromElement(movieDetails, "#movie-production");
    var movieWriter = getDataFromElement(movieDetails, "#movie-writers");
    var movieCountry = getDataFromElement(movieDetails, "#movie-country");
    var movieLanguage = getDataFromElement(movieDetails, "#movie-language");
    var userId = $("#user-name").attr("data-id");

    var movieWatched = false;
    var userRating = 0;
    movieDetails.find(".star").each(function() {
      if ($(this).hasClass("selected")) {
        movieWatched = true;
        userRating++;
      }
    });

    var newMovie = {
      movieName: movieTitle,
      moviePoster: moviePoster,
      movieRuntime: movieRuntime,
      movieRating: movieRating,
      movieActors: movieActors,
      movieDirector: movieDirector,
      movieGenre: movieGenre,
      moviePlot: moviePlot,
      movieYear: movieYear,
      IMDBrating: imdbRating,
      movieProduction: movieProduction,
      movieWriter: movieWriter,
      movieCountry: movieCountry,
      movieLanguage: movieLanguage,
      watched: movieWatched,
      userRating: userRating,
      UserId: userId
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

  var rateMovie = function() {
    var rating = $(this).data("value");
    var idToUpdate = $(this)
      .parents(".list-item-border")
      .find("span")
      .attr("data-id");
    API.updateMovie(idToUpdate, { userRating: rating }).then(function() {
      refreshWatchList();
    });
  };

  // Add event listeners to the submit and delete buttons
  $watchList.on("click", ".watch-movie", movieToWatchedList);
  $watchedList.on("click", ".unwatch-movie", movieToWatchList);
  $watchList.on("click", ".delete-movie", deleteMovie);
  $watchedList.on("click", ".delete-movie", deleteMovie);
  $searchResult.on("click", ".btn-action-add", addToWatchList);

  $watchedList.on("click", ".star", rateMovie);
});

// =============================================================================
// JQuery handlers for User Table in DB
// =============================================================================

$(document).ready(function() {
  $("body").change(function() {
    var $user = $("#user").val();
    var $email = $("#email").val();
    var $pic = $("#pic").val();

    var newUser = {
      userName: $user,
      email: $email,
      pic: $pic
    };
    console.log("!!!" + newUser);
  });
});

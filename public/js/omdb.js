// Ajax call to OMDB

$("#btn-search-movie").on("click", function (event) {
    event.preventDefault();
    $("#search-result").text("");

    // grab text from input && remove trailing spaces
    var movie = $("#input-search").val().trim();

    $.ajax({
        url: "/api/password/",
        method: "GET"
    }).then(function (res) {
        omdbSearch(res);
    });

    function omdbSearch(omdbKey) {
        var queryURL =
            "https://www.omdbapi.com/?t=" + movie + "&apikey=" + omdbKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {

            $("#input-search").val("");
            console.log(res);

            if (res.Response !== "False") {
                $("#search-result").append(`
                <div class="section-border" id="movie-details">
                    <div class="row">
                        <div class="col-sm-3 movie-details-side">
                            <img class="mb-3 movie-poster" src="${res.Poster}" alt="">
                            <div>
                                <p><strong>Runtime:</strong> ${res.Runtime}</p>
                                <p><strong>Genre:</strong> ${res.Genre}</p>
                                <p><strong>IMDB Rating:</strong> ${res.imdbRating}</p>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="row px-3 movie-details-main">
                                <div class="d-flex flex-wrap movie-details-header">
                                    <h2 class="mr-2" id="movie-title">
                                        ${res.Title}
                                        <span class="mr-2" id="movie-year">${res.Year}</span>
                                    </h2>
                                </div>
                                <div class="movie-details-body">
                                    <p id="movie-director">Directed by ${res.Director}</p>
                                    <p class="movie-plot">${res.Plot}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            } else {
                $("#search-result").append(`
                <div class="section-border text-center" id="movie-details">
                    <h4>Sorry, movie not found!</h4>
                    <i class="fas fa-film fa-5x"></i>
                    <h4>Please try again.</h4>
                </div>
            `);
            }
        });
    }

});
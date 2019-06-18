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

            // check if movie exists in omdb
            if (res.Response !== "False") {
                
                // formatting the writers list to only return name
                var writers = res.Writer;
                var writersArr = writers.split(", ");
                writers = "";

                for (var i = 0; i < writersArr.length; i++) {
                    var n = writersArr[i].indexOf(" (");

                    // if ( exists, truncate there
                    if (n > 0) {
                        writersArr[i] = writersArr[i].substring(0, n);
                    }

                    writers += writersArr[i] + ", ";
                }

                writers = writers.slice(0, -2);

                // Display result
                $("#search-result").append(`
                <div class="section-border" id="movie-details">
                    <div class="row">
                        <div class="movie-details-side">
                            <img class="mb-3 movie-poster" src="${res.Poster}" alt="">
                            <div>
                                <p id="run-time"><strong>Runtime:</strong> ${res.Runtime}</p>
                                <p id="movie-rating"><strong>Rated:</strong> ${res.Rated}</p>
                                <p id="imdb-rating"><strong>IMDB Rating:</strong> ${res.imdbRating}</p>
                            </div>
                            <div class="mt-3 actions">
                                <div class="btn-action-add"><i class="far fa-plus-square mr-2"></i>Add to List</div>
                                <section class='rating-widget'>
                                    <!-- Rating Stars Box -->
                                    <div class='rating-stars'>
                                    <ul class='stars'>
                                        <li class='star' title='Poor' data-value='1'>
                                        <i class='fas fa-star'></i>
                                        </li>
                                        <li class='star' title='Fair' data-value='2'>
                                        <i class='fas fa-star'></i>
                                        </li>
                                        <li class='star' title='Good' data-value='3'>
                                        <i class='fas fa-star'></i>
                                        </li>
                                        <li class='star' title='Excellent' data-value='4'>
                                        <i class='fas fa-star'></i>
                                        </li>
                                        <li class='star' title='WOW!!!' data-value='5'>
                                        <i class='fas fa-star'></i>
                                        </li>
                                    </ul>
                                    </div>
                                </section>
                                
                            </div>
                        </div>
                        <div class="movie-details-main">
                            <div class="row px-3">
                                <div class="d-flex flex-wrap movie-details-header">
                                    <h2 class="mr-2" id="movie-title">
                                        ${res.Title}
                                        <span class="mr-2" id="movie-year">${res.Year}</span>
                                    </h2>
                                </div>
                                <div class="movie-details-body">
                                    <p id="movie-director">Directed by ${res.Director}</p>
                                    <p class="movie-plot">${res.Plot}</p>
                    
                                    <!-- Tabs -->
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="tab-actors" data-toggle="tab" href="#actors" role="tab" aria-controls="actors" aria-selected="true">Actors</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tab-genre" data-toggle="tab" href="#genre" role="tab" aria-controls="genre" aria-selected="false">Genre</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tab-details" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="false">Details</a>
                                        </li>
                                    </ul>
                    
                                    <!-- tab contents -->
                                    <div class="tab-content" id="myTabContent">
                                        <div class="mt-2 tab-pane fade show active" id="actors" role="tabpanel" aria-labelledby="tab-actors">
                                            ${res.Actors}
                                        </div>
                                        <div class="mt-2 tab-pane fade" id="genre" role="tabpanel" aria-labelledby="tab-genre">
                                            ${res.Genre}
                                        </div>
                                        <div class="tab-pane fade" id="details" role="tabpanel" aria-labelledby="tab-details">
                                            <table>
                                                <tr>
                                                    <td class="details-label">Production</td>
                                                    <td id="movie-production" class="details-body">${res.Production}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Writer</td>
                                                    <td id="movie-writers" class="details-body">${writers}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Country</td>
                                                    <td id="movie-country" class="details-body">${res.Country}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Language</td>
                                                    <td id="movie-language" class="details-body">${res.Language}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
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
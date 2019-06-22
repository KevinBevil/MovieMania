$("#to-watch-list > h3").on("click", function() {
    listDisplay($("#to-watch-list"));
    
    // Display result
    $("#search-result").prepend(`
        <h3>Your Watch List</h3>
    `);
});

$("#recently-rated > h3").on("click", function() {
    listDisplay($("#recently-rated"));

    // Display result
    $("#search-result").prepend(`
        <h3>Watched & Rated</h3>
    `);
});

var listDisplay = function (element) {
    var vueElement = element.find("ul");
    var generatedStars = "";
    var result = "";
    var data = vueElement[0]["__vue__"].list;

    for (var i = 0; i < data.length; i++) {

        var userRating = data[i].userRating;

      switch (userRating) {
        case "0":
            break;
        case "1":
            generatedStars = `
                <li class="star selected" title="Poor" data-value="1">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Fair" data-value="2">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Good" data-value="3">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Excellent" data-value="4">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="WOW!!!" data-value="5">
                    <i class="fas fa-star"></i></li>
            `;
            break;
        case "2":
            generatedStars = `
                <li class="star selected" title="Poor" data-value="1">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Fair" data-value="2">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Good" data-value="3">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Excellent" data-value="4">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="WOW!!!" data-value="5">
                    <i class="fas fa-star"></i></li>
            `;
            break;
        case "3":
            generatedStars = `
                <li class="star selected" title="Poor" data-value="1">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Fair" data-value="2">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Good" data-value="3">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="Excellent" data-value="4">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="WOW!!!" data-value="5">
                    <i class="fas fa-star"></i></li>
            `;
            break;
        case "4":
            generatedStars = `
                <li class="star selected" title="Poor" data-value="1">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Fair" data-value="2">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Good" data-value="3">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Excellent" data-value="4">
                    <i class="fas fa-star"></i></li>
                <li class="star" title="WOW!!!" data-value="5">
                    <i class="fas fa-star"></i></li>
            `;
            break;
        case "5":
            generatedStars = `
                <li class="star selected" title="Poor" data-value="1">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Fair" data-value="2">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Good" data-value="3">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="Excellent" data-value="4">
                    <i class="fas fa-star"></i></li>
                <li class="star selected" title="WOW!!!" data-value="5">
                    <i class="fas fa-star"></i></li>
            `;
            break;
        }

        result += `
            <div class="section-border" id="movie-details">
                <div class="row">
                    <div class="movie-details-side">
                        <img class="mb-3 movie-poster" src="${data[i].moviePoster}" alt="">
                        <div>
                            <p id="run-time"><strong>Runtime:</strong> ${data[i].movieRuntime}</p>
                            <p id="movie-rating"><strong>Rated:</strong> ${data[i].movieRating}</p>
                            <p id="imdb-rating"><strong>IMDB Rating:</strong> ${data[i].IMDBrating}</p>
                        </div>
                        <div class="mt-3 actions">
                          <section class="rating-widget">
                              <!-- Rating Stars Box -->
                              <div class="rating-stars">
                                <ul class="stars">
                                  ${generatedStars}
                                </ul>
                              </div>
                          </section>
                      </div>
                    </div>
                    <div class="movie-details-main">
                            <div class="row px-3">
                                <div class="d-flex flex-wrap movie-details-header">
                                    <h2 class="mr-2" id="movie-title">
                                        ${data[i].movieName}
                                        <span class="mr-2" id="movie-year">${data[i].movieYear}</span>
                                    </h2>
                                </div>
                                <div class="movie-details-body">
                                    <p id="movie-director">Directed by ${data[i].movieDirector}</p>
                                    <p class="movie-plot">${data[i].moviePlot}</p>
                    
                                    <!-- Tabs -->
                                    <ul class="nav nav-tabs" id="myTab${data[i].id}" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="tab-actors${data[i].id}" data-toggle="tab" href="#actors${data[i].id}" role="tab" aria-controls="actors${data[i].id}" aria-selected="true">Actors</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tab-genre${data[i].id}" data-toggle="tab" href="#genre${data[i].id}" role="tab" aria-controls="genre${data[i].id}" aria-selected="false">Genre</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="tab-details${data[i].id}" data-toggle="tab" href="#details${data[i].id}" role="tab" aria-controls="details${data[i].id}" aria-selected="false">Details</a>
                                        </li>
                                    </ul>
                    
                                    <!-- tab contents -->
                                    <div class="tab-content" id="myTabContent${data[i].id}">
                                        <div class="mt-2 tab-pane fade show active" id="actors${data[i].id}" role="tabpanel" aria-labelledby="tab-actors${data[i].id}">
                                            ${data[i].movieActors}
                                        </div>
                                        <div class="mt-2 tab-pane fade" id="genre${data[i].id}" role="tabpanel" aria-labelledby="tab-genre${data[i].id}">
                                            ${data[i].movieGenre}
                                        </div>
                                        <div class="tab-pane fade" id="details${data[i].id}" role="tabpanel" aria-labelledby="tab-details${data[i].id}">
                                            <table>
                                                <tr>
                                                    <td class="details-label">Production</td>
                                                    <td id="movie-production" class="details-body">${data[i].movieProduction}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Writer</td>
                                                    <td id="movie-writers" class="details-body">${data[i].movieWriter}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Country</td>
                                                    <td id="movie-country" class="details-body">${data[i].movieCountry}</td>
                                                </tr>
                                                <tr>
                                                    <td class="details-label">Language</td>
                                                    <td id="movie-language" class="details-body">${data[i].movieLanguage}</td>
                                                </tr>    
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    // clear display area
    $("#search-result").html("");

    // Display result
    $("#search-result").append(`
        ${result}
    `);
    
    // // Display watch list
    // $("#search-result").append(`
    //     <div vue="movie-watch-results">
    //         <movie-component v-for="movie in movies" :movies="movies"></movie-component>
    //     </div>
    // `);

}

Vue.component("movie-component", {
    props: {
        movies: Object
    },
    template: `
    <div>
        <h3>Your Watch List</h3>
        <div class="section-border">
            <div class="row">
                <div class="movie-details-side">
                    <img class="mb-3 movie-poster" :src="movie.moviePoster" alt="">
                    <div>
                        <p><strong>Runtime:</strong> {{ movie.movieRuntime }}</p>
                        <p><strong>Rated:</strong> {{ movie.movieRating }}</p>
                        <p class="imdb-rating"><strong>IMDB Rating:</strong> {{ movie.IMDBrating }}</p>
                    </div>
                    <div class="mt-3 actions">
                        <section class="rating-widget">

                            <!-- Rating Stars Box -->
                            <div class="rating-stars">
                                <genStars :userRating="movie.userRating"></genStars>
                            </div>

                        </section>
                    </div>
                </div>
                <div class="movie-details-main">
                    <div class="row px-3">
                        <div class="d-flex flex-wrap movie-details-header">
                            <h2 class="mr-2 movie-title">
                                {{ movie.movieName }}
                                <span class="mr-2 movie-year">{{ movie.movieYear }}</span>
                            </h2>
                        </div>
                        <div class="movie-details-body">
                            <p class="movie-director">Directed by {{ movie.movieDirector }}</p>
                            <p class="movie-plot">{{ movie.moviePlot }}</p>
            
                            <!-- Tabs -->
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="tab-details" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="false">Details</a>
                                </li>
                            </ul>
            
                            <!-- tab contents -->
                            <div class="tab-content" id="myTabContent">
                                
                                <div class="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="tab-details">
                                    <table>
                                        <tr>
                                            <td class="details-label">Actors</td>
                                            <td class="details-body">{{ movie.movieActors }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Genre</td>
                                            <td class="details-body">{{ movie.movieGenre }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Production</td>
                                            <td class="details-body">{{ movie.movieProduction }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Writer</td>
                                            <td class="details-body">{{ movie.movieWriter }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Country</td>
                                            <td class="details-body">{{ movie.movieCountry }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Language</td>
                                            <td class="details-body">{{ movie.movieLanguage }}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});


new Vue({
    el: "#movie-watch-results",
    data: function () {
        return {
            movies: []
        }
    },
    mounted: function () {
        var self = this;
        $.ajax({
            url: "/api/movies/false",
            method: "GET",
            success: function (data) {
                self.movies = data;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
});

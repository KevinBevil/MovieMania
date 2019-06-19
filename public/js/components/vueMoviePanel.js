new Vue({
    el: "[vue='movie-results']",
    data: function() {
        return {
            movies: []
            
        }
    },
    mounted: function () {
        var self = this;
        $.ajax({
            url: '/api/movies/:id',
            method: 'GET',
            success: function (data) {
                console.log(data);
                self.movies = data;
            },
            error: function (error) {
                console.log(error);
            }
        });
    },
    template: `
    <div>
        <div v-for="(movie, index) in movies" class="section-border">
            <div class="row">
                <div class="movie-details-side">
                    <img class="mb-3 movie-poster" :src="movie.moviePoster" alt="">
                    <div>
                        <p><strong>Runtime:</strong> {{ movie.movieRuntime }}</p>
                        <p><strong>Rated:</strong> {{ movie.movieRating }}</p>
                        <p class="imdb-rating"><strong>IMDB Rating:</strong> {{ movie.IMDBrating }}</p>
                    </div>
                    <div class="mt-3 actions">
                        <section class='rating-widget'>

                            <!-- Rating Stars Box -->
                            <div class='rating-stars'>
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


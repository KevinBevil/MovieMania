new Vue({
    el: "[vue='movie-results']",
    data: function() {
        return {
            movies: [
                {
                    "id":1,
                    "movieName":"Pokémon Detective Pikachu",
                    "moviePoster":"https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg",
                    "movieRuntime":"Runtime: 104 min",
                    "movieRating":"Rated: PG",
                    "movieActors":"Ryan Reynolds, Justice Smith, Kathryn Newton, Bill Nighy",
                    "movieDirector":"Directed by Rob Letterman",
                    "movieGenre":"Action, Adventure, Comedy, Family, Mystery, Sci-Fi",
                    "moviePlot":"In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
                    "movieYear":2019,
                    "IMDBrating":"6.9",
                    "movieProduction":"Warner Bros. Pictures",
                    "movieWriter":"Dan Hernandez, Benji Samit, Rob Letterman, Derek Connolly, Dan Hernandez, Benji Samit, Nicole Perlman, Satoshi Tajiri, Ken Sugimori, Junichi Masuda, Atsuko Nishida, Tomokazu Ohara, Haruka Utsui",
                    "movieCountry":"USA, Japan, Canada",
                    "movieLanguage":"English",
                    "watched":false,
                    "userRating":"3",
                    "createdAt":"2019-06-19T18:19:55.000Z",
                    "updatedAt":"2019-06-19T18:19:55.000Z"
                },
                {
                    "id":3,
                    "movieName":"Inception",
                    "moviePoster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                    "movieRuntime":"Runtime: 148 min",
                    "movieRating":"Rated: PG-13",
                    "movieActors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                    "movieDirector":"Directed by Christopher Nolan",
                    "movieGenre":"Action, Adventure, Sci-Fi, Thriller",
                    "moviePlot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    "movieYear":2010,
                    "IMDBrating":"8.8",
                    "movieProduction":"Warner Bros. Pictures",
                    "movieWriter":"Christopher Nolan",
                    "movieCountry":"USA, UK",
                    "movieLanguage":"English, Japanese, French",
                    "watched":false,
                    "userRating":"0",
                    "createdAt":"2019-06-19T18:59:16.000Z",
                    "updatedAt":"2019-06-19T18:59:16.000Z"
                },
                {
                    "id":4,
                    "movieName":"Avengers: Endgame",
                    "moviePoster":"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
                    "movieRuntime":"Runtime: 181 min",
                    "movieRating":"Rated: PG-13",
                    "movieActors":"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
                    "movieDirector":"Directed by Anthony Russo, Joe Russo",
                    "movieGenre":"Action, Adventure, Sci-Fi",
                    "moviePlot":"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                    "movieYear":2019,
                    "IMDBrating":"8.7",
                    "movieProduction":"Marvel Studios","movieWriter":"Christopher Markus, Stephen McFeely, Stan Lee, Jack Kirby, Jim Starlin",
                    "movieCountry":"USA",
                    "movieLanguage":"English, Japanese, Xhosa",
                    "watched":false,
                    "userRating":"5",
                    "createdAt":"2019-06-19T18:59:28.000Z",
                    "updatedAt":"2019-06-19T19:16:03.000Z"
                },
                {
                    "id":5,
                    "movieName":"Kick-Ass",
                    "moviePoster":"https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_SX300.jpg",
                    "movieRuntime":"Runtime: 117 min",
                    "movieRating":"Rated: R",
                    "movieActors":"Aaron Taylor-Johnson, Garrett M. Brown, Evan Peters, Deborah Twiss",
                    "movieDirector":"Directed by Matthew Vaughn",
                    "movieGenre":"Action, Comedy",
                    "moviePlot":"Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a superhero, even though he has no powers, training or meaningful reason to do so.",
                    "movieYear":2010,
                    "IMDBrating":"7.6",
                    "movieProduction":"Lionsgate",
                    "movieWriter":"Jane Goldman, Matthew Vaughn, Mark Millar, John Romita Jr.",
                    "movieCountry":"UK, USA",
                    "movieLanguage":"English",
                    "watched":false,
                    "userRating":"0",
                    "createdAt":"2019-06-19T19:00:24.000Z",
                    "updatedAt":"2019-06-19T19:00:24.000Z"
                }
            ]
        }
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


var moviePanel = new Vue({
    el: '[vue="movie-panel"]',
    data() {
        return {
            movies: [
                {
                    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                    runtime: "148 min",
                    rated: "PG-13",
                    imdbRating: "8.8",
                    title: "Inception",
                    year: "2010",
                    director: "Christopher Nolan",
                    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                    genre: "Action, Adventure, Sci-Fi, Thriller",
                    production: "Warner Bros. Pictures",
                    writer: "Christopher Nolan",
                    country: "USA, UK",
                    language: "English, Japanese, French",
                    watched: true,
                    ratingValue: 5
                },
                {
                    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
                    runtime: "181 min",
                    rated: "PG-13",
                    imdbRating: "8.9",
                    title: "Avengers: Endgame",
                    year: "2019",
                    director: "Anthony Russo, Joe Russo",
                    plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                    actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
                    genre: "Action, Adventure, Fantasy, Sci-Fi",
                    production: "Marvel Studios",
                    writer: "Christopher Markus, Stephen McFeely, Stan Lee, Jack Kirby, Jim Starlin",
                    country: "USA",
                    language: "English, Japanese, Xhosa",
                    watched: false,
                    ratingValue: 3
                },
                {
                    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
                    runtime: "148 min",
                    rated: "PG-13",
                    imdbRating: "8.8",
                    title: "Inception",
                    year: "2010",
                    director: "Christopher Nolan",
                    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
                    genre: "Action, Adventure, Sci-Fi, Thriller",
                    production: "Warner Bros. Pictures",
                    writer: "Christopher Nolan",
                    country: "USA, UK",
                    language: "English, Japanese, French",
                    watched: true,
                    ratingValue: 5
                },
                {
                    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
                    runtime: "181 min",
                    rated: "PG-13",
                    imdbRating: "8.9",
                    title: "Avengers: Endgame",
                    year: "2019",
                    director: "Anthony Russo, Joe Russo",
                    plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                    actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
                    genre: "Action, Adventure, Fantasy, Sci-Fi",
                    production: "Marvel Studios",
                    writer: "Christopher Markus, Stephen McFeely, Stan Lee, Jack Kirby, Jim Starlin",
                    country: "USA",
                    language: "English, Japanese, Xhosa",
                    watched: true,
                    ratingValue: null
                }
            ]
        }
    },
    template: `
    <div>
        <div v-for="(movie, index) in movies" v-if="movie.ratingValue" class="section-border">
            <div class="row">
                <div class="movie-details-side">
                    <img class="mb-3 movie-poster" v-bind:src="movie.poster" alt="">
                    <div>
                        <p><strong>Runtime:</strong> {{ movie.runtime }}</p>
                        <p><strong>Rated:</strong> {{ movie.rated }}</p>
                        <p class="imdb-rating"><strong>IMDB Rating:</strong> {{ movie.imdbRating }}</p>
                    </div>
                    <div class="mt-3 actions">
                        <section class='rating-widget'>
                            <!-- Rating Stars Box -->
                            <div class='rating-stars'>
                            <ul id='stars'>
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
                            <h2 class="mr-2 movie-title">
                                {{ movie.title }}
                                <span class="mr-2 movie-year">{{ movie.year }}</span>
                            </h2>
                        </div>
                        <div class="movie-details-body">
                            <p class="movie-director">Directed by {{ movie.director }}</p>
                            <p class="movie-plot">{{ movie.plot }}</p>
            
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
                                            <td class="details-body">{{ movie.actors }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Genre</td>
                                            <td class="details-body">{{ movie.genre }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Production</td>
                                            <td class="details-body">{{ movie.production }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Writer</td>
                                            <td class="details-body">{{ movie.writer }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Country</td>
                                            <td class="details-body">{{ movie.country }}</td>
                                        </tr>
                                        <tr>
                                            <td class="details-label">Language</td>
                                            <td class="details-body">{{ movie.language }}</td>
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
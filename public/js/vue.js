new Vue({
    el: "#recently-rated",
    data: {
        movies: [
            {
                "Title": "Avengers: Endgame",
                "Year": "2019",
                "Rated": "PG-13",
                "Released": "26 Apr 2019",
                "Runtime": "181 min",
                "Genre": "Action, Adventure, Fantasy, Sci-Fi",
                "Director": "Anthony Russo, Joe Russo",
                "Writer": "Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",
                "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
                "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                "Language": "English, Japanese, Xhosa",
                "Country": "USA",
                "Awards": "N/A",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.9/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "94%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "78/100"
                    }
                ],
                "Metascore": "78",
                "imdbRating": "8.9",
                "imdbVotes": "360,133",
                "imdbID": "tt4154796",
                "Type": "movie",
                "DVD": "N/A",
                "BoxOffice": "N/A",
                "Production": "Marvel Studios",
                "Website": "N/A",
                "Response": "True"
            }, {
                "Title": "Pokémon Detective Pikachu",
                "Year": "2019",
                "Rated": "PG",
                "Released": "10 May 2019",
                "Runtime": "104 min",
                "Genre": "Action, Adventure, Comedy, Family, Mystery, Sci-Fi",
                "Director": "Rob Letterman",
                "Writer": "Dan Hernandez (screenplay by), Benji Samit (screenplay by), Rob Letterman (screenplay by), Derek Connolly (screenplay by), Dan Hernandez (story by), Benji Samit (story by), Nicole Perlman (story by), Satoshi Tajiri (based on \"Pokémon\" created by), Ken Sugimori (based on \"Pokémon\" created by), Junichi Masuda (based on \"Pokémon\" created by), Atsuko Nishida (characters), Tomokazu Ohara (original story), Haruka Utsui (original story)",
                "Actors": "Ryan Reynolds, Justice Smith, Kathryn Newton, Bill Nighy",
                "Plot": "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
                "Language": "English",
                "Country": "USA, Japan, Canada",
                "Awards": "N/A",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "6.9/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "66%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "53/100"
                    }
                ],
                "Metascore": "53",
                "imdbRating": "6.9",
                "imdbVotes": "42,903",
                "imdbID": "tt5884052",
                "Type": "movie",
                "DVD": "N/A",
                "BoxOffice": "N/A",
                "Production": "Warner Bros. Pictures",
                "Website": "http://detectivepikachumovie.com/",
                "Response": "True"
            }
        ],
        main: "*** Testing Vue ***"
    }
})

var vueWatchList = new Vue({
    el: '[vue="watch-list"]',
    data() {
        return
    },
    template: `
        <div>
            <h3>I'm a component</h3>
            <h4>Here I am!!</h4>
        </div>
    `
});
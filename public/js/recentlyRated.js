$(document).ready(function () {

  /* 1. Visualizing things on Hover - See next part for action on click */
  $(".star-holder").on("mouseover", ".star", function () {
    // The star currently selected
    var ratingValue = parseInt($(this).data("value"), 10); // The star currently mouse on

    // Now highlight all the stars that"s not after the current hovered star
    $(this).parent().children("li.star").each(function (e) {
      if (e < ratingValue) {
        $(this).addClass("hover");
      }
      else {
        $(this).removeClass("hover");
      }
    });

  }).on("mouseout", ".star", function () {
    $(this).parent().children("li.star").each(function (e) {
      $(this).removeClass("hover");
    });
  });
  /* 2. Action to perform on click */
  $(".star-holder").on("click", ".star", function () {
    // The star currently selected
    var ratingValue = parseInt($(this).data("value"), 10);
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < ratingValue; i++) {
      $(stars[i]).addClass("selected");
    }
  });

});


$("#recently-rated > h3").on("click", function () {

  $.ajax({
    url: "/api/movies/true",
    method: "GET",
    error: function (error) {
      console.log(error);
    }
  }).then(function (data) {
    var generatedStars = "";
    var result = "";

    for (var i = 0; i < data.length; i++) {
      var userRating = data[i].userRating;

      switch (userRating) {
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
        default:
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
          <h3>Watched & Rated</h3>
          ${result}
      `)
  });


  // // Display watch list
  // $("#search-result").append(`
  //     <div vue="movie-watch-results">
  //         <movie-component v-for="movie in movies" :movies="movies"></movie-component>
  //     </div>
  // `);

});


Vue.component("genStars", {
  props: ["userRating"],
  template: `
    <div>You rated this:
      <ul class="stars">
        <li v-bind:class="{selected: (userRating >= 1)}" class="star" title="Poor" data-value="1">
            <i class="fas fa-star"></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 2)}"class="star" title="Fair" data-value="2">
            <i class="fas fa-star"></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 3)}"class="star" title="Good" data-value="3">
            <i class="fas fa-star"></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 4)}"class="star" title="Excellent" data-value="4">
            <i class="fas fa-star"></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 5)}"class="star" title="WOW!!!" data-value="5">
            <i class="fas fa-star"></i>
        </li>
      </ul>
    </div>
  `

});



$(document).ready(function () {

  /* 1. Visualizing things on Hover - See next part for action on click */
  $('.star-holder').on('mouseover', '.star', function () {
    // The star currently selected
    var ratingValue = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < ratingValue) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', '.star', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });
  /* 2. Action to perform on click */
  $('.star-holder').on('click', '.star', function () {
    // The star currently selected
    var ratingValue = parseInt($(this).data('value'), 10);
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < ratingValue; i++) {
      $(stars[i]).addClass('selected');
    }
    console.log(`You rated this ${ratingValue} stars.`);
  });

});


Vue.component("genStars", {
  props: ["userRating"],
  template: `
    <div>You rated this:
      <ul class='stars'>
        <li v-bind:class="{selected: (userRating >= 1)}" class='star' title='Poor' data-value='1'>
            <i class='fas fa-star'></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 2)}"class='star' title='Fair' data-value='2'>
            <i class='fas fa-star'></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 3)}"class='star' title='Good' data-value='3'>
            <i class='fas fa-star'></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 4)}"class='star' title='Excellent' data-value='4'>
            <i class='fas fa-star'></i>
        </li>
        <li v-bind:class="{selected: (userRating >= 5)}"class='star' title='WOW!!!' data-value='5'>
            <i class='fas fa-star'></i>
        </li>
      </ul>
    </div>
  `
});
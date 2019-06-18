$(document).ready(function(){
  
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#search-result').on('mouseover', '.star', function(){
      // The star currently selected
      var ratingValue = parseInt($(this).data('value'), 10); // The star currently mouse on
     
      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function(e){
        if (e < ratingValue) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
      
    }).on('mouseout', '.star', function(){
      $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
      });
    });
    /* 2. Action to perform on click */
    $('#search-result').on('click', '.star', function(){
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
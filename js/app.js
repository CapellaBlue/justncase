console.log("allo");
$(function(){
  // Begin Window Onload Function
  console.log("but hello");


  $( ".menu-container ").on('click', function() {
    $( "#nav-elements" ).toggleClass("show");
  });

  // End Window Onload Function
});

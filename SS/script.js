$(document).ready(function() {
    var distance = $('#content').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        console.log("Content is at the Top");
        
        $("#top-nav").css("background-color", "hsla(0, 0%, 0%, 0.50)");

        $("#top-nav a").css("color", "white");
    }
  });
});


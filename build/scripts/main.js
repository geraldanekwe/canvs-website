$(document).ready(function(){

  $('.video-play-btn').click(function() {
    setTimeout(function() {
    $f($('#canvs-video')[0]).api('play');      
  },0);

  });

});
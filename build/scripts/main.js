// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js"
// @codekit-append "../bower_components/twitter-bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js"

$(document).ready(function(){

  $('.video-play-btn').click(function() {
    setTimeout(function() {
    $f($('#canvs-video')[0]).api('play');      
  },0);

  });

});

//Mailchimp AJAX Script for Canvs Demo Form - Source: http://designshack.net/articles/css/custom-mailchimp-email-signup-form/

$(function () {
  var $form = $('#canvs-demo-form');
 
  $('#canvs-demo-form').on('submit', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('.section-description').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {
      
      if (data.result != "success") {
        var message = data.msg;
        $('.section-description').addClass('error').html(message);
        $('#canvs-demo-form .form-control').addClass('submitted');
      }
 
      else {
        var message = data.msg;
        $('.canvs-demo-form-title').html("Thank you for your interest in Canvs.");
        $('.section-description').removeClass('error').html(message + "<br>Someone will contact you about scheduling a demo within the next 48 hours.");
        $('.canvs-demo-form-wrap').fadeOut();
      }
    }
  });
}
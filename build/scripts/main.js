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

// @codekit-prepend "../bower_components/vimeo-player-api/javascript/froogaloop.min.js"
// @codekit-prepend "../bower_components/svgeezy/svgeezy.min.js"
// @codekit-prepend "../bower_components/animatescroll/animatescroll.js"


$(document).ready(function(){

//Video show/hide

  $('.video-play-btn').click(function() {
    $('.canvs-login').removeClass('fadeInRight').addClass('animated fadeOutRight');
    $('.canvs-video-wrap-container').addClass('active animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('fadeOut');
    });
    $('.canvs-video-wrap').addClass('animated growIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('growIn');
      $f($('#canvs-video')[0]).api('play');
    });
  });

  $('.canvs-video-close').click(function () {
    $('.canvs-video-wrap').addClass('animated shrinkOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('shrinkOut');
      $f($('#canvs-video')[0]).api('pause');
    });
    $('.canvs-video-wrap-container').addClass('animated fadeout').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass('active fadeOut');
    });
    $('.canvs-login').removeClass('fadeOutRight').addClass('fadeInRight');
  });

//Scroll button

  $('.scroll-down-arrow').click(function() {
    $('.about-canvs-section').animatescroll();
  });

//Mailchimp AJAX Script for Canvs Demo Form - Source: http://designshack.net/articles/css/custom-mailchimp-email-signup-form/

  var $form = $('#canvs-demo-form');
 
  $form.on('submit', function(event) {
    console.log('Demo Form Submit Click');
    if(event) event.preventDefault();
    register($form);
  });

  function register($formElement) {
    $.ajax({
      type: $formElement.attr('method'),
      url: $formElement.attr('action'),
      data: $formElement.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType : 'application/json; charset=utf-8',
      error       : function(err) { 
        $('.canvs-demo-form-description')
          .html('<span class="alert">Could not connect to server. Please try again later.</span>'); 
      },
      success     : function(data) {
        
        if (data.result != 'success') {
          var message = data.msg;
          $('.canvs-demo-form-description').addClass('error').html(message);
          $('#canvs-demo-form .form-control').addClass('submitted');
        }
   
        else {
          var message = data.msg;
          $('.canvs-demo-form-title').html("Thank you for your interest in Canvs.");
          $('.canvs-demo-form-description').removeClass('error').html(message + " Someone will contact you about scheduling a demo within the next 48 hours.");
          $('.canvs-form-wrap').fadeOut();
        }
      }
    });
  }

//Mailchimp AJAX Script for Newsletter Form

  var $newsletterForm = $('#newsletter-form');
 
  $newsletterForm.on('submit', function(event) {
    console.log('Newsletter Form Submit Click');
    if(event) event.preventDefault();
    newsletterRegister($newsletterForm);
  });

  function newsletterRegister($newsletterForm) {
    $.ajax({
      type: $newsletterForm.attr('method'),
      url: $newsletterForm.attr('action'),
      data: $newsletterForm.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { $('.newsletter-form-description').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
      success     : function(data) {
        
        if (data.result != "success") {
          var message = data.msg;
          $('.newsletter-form-description').addClass('error').html(message);
          $('#newsletter-form .form-control').addClass('submitted');
        }
   
        else {
          var message = data.msg;
          $('.newsletter-form-title').html("Thank you for subscribing.");
          $('.newsletter-form-description').removeClass('error').html(message);
          $('.newsletter-form-wrap').fadeOut();
        }
      }
    });
  }

});

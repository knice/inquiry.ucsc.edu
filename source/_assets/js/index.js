/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        
        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });
        
        // Creates Captions from Alt tags
        $(".post-content img.caption").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt") && !$(this).hasClass("emoji"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });

          var menuToggle = $('#js-mobile-menu').unbind();
          $('#js-navigation-menu').removeClass("show");

          menuToggle.on('click', function(e) {
            e.preventDefault();
            $('#js-navigation-menu').slideToggle(function(){
              if($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
              }
            });
          });
        
    });

}(jQuery));

(function ($) {

<<<<<<< HEAD
    'use strict';

    /**
     * A simple Drupal behavior example.
     */
    Drupal.behaviors.cirlceThemeExample = {
        attach: function (context) {
            //hover for photos//
            $ = jQuery;
            $(document).ready(function () {
                $('.view-display-id-photo_main_all article').hover(
                    function () {
                        if (!$(this).hasClass('animating')) {
                            var hovered = this;
                            $(this).addClass('animating');
                            $(".changeme2", this).fadeIn('slow', function() {
                                $(hovered).removeClass('animating');
                            });
                        }
                    },
                    function () {
                        $(".changeme2", this).fadeOut()
                    });
            });
=======
  'use strict';
>>>>>>> 1658fdfc4fae7dddc961b2e494d46058d7eef017

  /**
   * Photo hover behaviour.
   */
  Drupal.behaviors.photoHover = {
    attach: function (context) {

      $('.view-display-id-photo_main_all a.article, .view-display-id-photo_main a.article').hover(
        function () {
          $(this).find(".on-hover-content").fadeIn(100);
        },
        function () {
          $(this).find(".on-hover-content").stop().fadeOut(100);
        });
    }
  };

  /**
   * Scroll to top button.
   */
  Drupal.behaviors.scrollToTop = {
    attach: function (context) {

      // Check to see if the window is top if not then display button.
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $('.scrollToTop').fadeIn();
        } else {
          $('.scrollToTop').fadeOut();
        }
      });

      // Click event to scroll to top.
      $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
      });
    }
  };

  /**
   * Push the active class to the passed item.
   */
  Drupal.behaviors.example_behavior = {
    attach: function (context, settings) {

      // Check if the variable exist.
      var dSettings = Drupal.settings;
      if (dSettings.activeMenuItem != undefined) {
        var mainMenuItem = (dSettings.activeMenuItem.mainMenuItem != undefined) ? dSettings.activeMenuItem.mainMenuItem : '';
        var secondaryMenuItem = (dSettings.activeMenuItem.secondaryMenuItem != undefined) ? dSettings.activeMenuItem.secondaryMenuItem : '';
        if (mainMenuItem != '') {
          $(".menu-main-menu li a").each(function (index) {
            if ($(this).text().toLowerCase() == mainMenuItem) {
              $(this).addClass('active');
            }
          });
        }
        if (secondaryMenuItem != '') {
          $(".view-display-id-photo_type_links li a, .view-display-id-video_type_links li a").each(function (index) {
            if ($(this).text().toLowerCase() == secondaryMenuItem) {
              $(this).addClass('active');
            }
          });
        }
      }

    }
  }


})(jQuery);

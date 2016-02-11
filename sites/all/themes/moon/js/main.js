(function ($) {

    'use strict';

    /**
     * Photo hover behaviour.
     */
    Drupal.behaviors.specialAuthor = {
      attach: function (context) {

        // Check if the variable exist.
        var dSettings = Drupal.settings;
        if (dSettings.pageAuthor != undefined) {
          var whichAuthor = (dSettings.pageAuthor.which != undefined) ? dSettings.pageAuthor.which : '';
          var authorName = (dSettings.pageAuthor.authorName != undefined) ? dSettings.pageAuthor.authorName : '';
          if (authorName != '') {
            if (whichAuthor === 'special') {
              $('.menu-main-menu li').not('li:first').remove();
              $('.menu-main-menu li:first-child ').addClass('special-author').prepend('WEDDING PHOTO BY').find('a').attr('href', dSettings.pageAuthor.authorURL).text(authorName);
            }
          }
        }


      }


    }

    /**
     * Photo hover behaviour.
     */
    Drupal.behaviors.photoHover = {
      attach: function (context) {

        $('.view-display-id-photo_main_per_author a.article, .view-display-id-photo_main_all a.article, .view-display-id-photo_main a.article').hover(
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
    Drupal.behaviors.activeClass = {
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

(function ($) {

    'use strict';

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

})(jQuery);

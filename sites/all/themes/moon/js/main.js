(function ($) {

    'use strict';

    /**
     * A simple Drupal behavior example.
     */
    Drupal.behaviors.photoHover = {
        attach: function (context) {
            $('.view-display-id-photo_main_all article').hover(
                function () {
                    $(".changeme2", this).fadeIn(100);
                },
                function () {
                    $(".changeme2", this).stop().fadeOut(100);
                });

        }
    };

})(jQuery);

(function ($) {

    'use strict';

    /**
     * A simple Drupal behavior example.
     */
    Drupal.behaviors.cirlceThemeExample = {
        attach: function (context) {
            // Your code goes here.
            //hover for photos//
            $ = jQuery;
            $(document).ready(function () {
                $('.view-display-id-photo_main_all article').hover(
                    function () {
                        $(".changeme2", this).fadeIn()
                    },
                    function () {
                        $(".changeme2", this).fadeOut()
                    });
            });

        }
    };

})(jQuery);
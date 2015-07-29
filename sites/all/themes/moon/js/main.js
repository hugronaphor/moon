(function ($) {

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

        }
    };

})(jQuery);
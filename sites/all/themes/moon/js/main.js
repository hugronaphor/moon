(function ($) {

    'use strict';

    /**
     * Photo hover behaviour.
     */
    Drupal.behaviors.photoHover = {
        attach: function (context) {

            $('.view-display-id-photo_main_all a.article').hover(
                function () {
                    $(this).find(".after-hover-content").fadeIn(100);
                },
                function () {
                    $(this).find(".after-hover-content").stop().fadeOut(100);
                });

        }
    };

})(jQuery);

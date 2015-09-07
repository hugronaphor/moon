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

    /**
     * ...
     */
    Drupal.behaviors.photoPageAlign = {
        attach: function (context) {

            $(window).load(function () {

                //var temp = "<div class='cell' style='width:{width}px; height: {height}px; background-image: url(http://vnjs.net/i/photo/{index}.jpg)'></div>";
                //var w = 1, html = '', limitItem = 49;
                //for (var i = 0; i < limitItem; ++i) {
                //    w = 200 +  200 * Math.random() << 0;
                //    html += temp.replace(/\{height\}/g, 200).replace(/\{width\}/g, w).replace("{index}", i + 1);
                //}
                ////$(".pane-node-field-image-multiple .field-items").html(html);
                //
                //var wall = new freewall(".pane-node-field-image-multiple .field-items");
                //
                //wall.reset({
                //    selector: '.field-item img',
                //    animate: true,
                //    //cellW: 10,
                //   // cellH: 200,
                //    onResize: function() {
                //        wall.fitWidth();
                //    }
                //});
                //wall.fitWidth();
                //// for scroll bar appear;
                //$(window).trigger("resize");

            });


        }
    };

})(jQuery);

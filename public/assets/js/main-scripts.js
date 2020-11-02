(function ($) {
    "use strict";

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.Test();
            fn.Sidenav();
            fn.StickyHeader();
        },
        Test: function () {
            console.log("Worked!");
        },
        Sidenav: function () {
            var button = $(".button-display-sidenav");
            var sidenav = $(".app-sidenav");

            button.on("click", function (e) {
                e.preventDefault();
                sidenav.addClass("active");
            });
            sidenav.on("click", ".button-close-sidenav, .sidenav-close", function () {
                sidenav.removeClass("active");
            });
        },
        StickyHeader: function () {
            var header = $(".app-header");
            $(window).scroll(function () {
                if ($(this).scrollTop() > header.height()) {
                    header.addClass("sticky");
                } else {
                    header.removeClass("sticky");
                }
            });
        },
    };

    // Windows.On.Load
    $(window).on("load", function () {});

    // Document.Ready
    $(document).ready(function () {
        fn.Launch();
    });
})(jQuery);

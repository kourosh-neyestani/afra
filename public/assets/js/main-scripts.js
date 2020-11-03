(function ($) {
    "use strict";

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.Test();
            fn.Sidenav();
            fn.Carousel();
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
        Carousel: function () {
            var mySwiper = new Swiper(".el-swiper-portfolio-15", {
                loop: false,
                navigation: {
                    nextEl: ".el-slider-next",
                    prevEl: ".el-slider-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 12,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 2.3,
                        spaceBetween: 18,
                    },
                    992: {
                        slidesPerView: 3.3,
                        spaceBetween: 18,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 18,
                    },
                },
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

(function ($) {
    "use strict";
    // Preloader
    $(window).load(function () {
        // will first fade out the loading animation
        $("#loader").fadeOut("fast", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });


    });


    // Typed info description in the intro section
    document.addEventListener('DOMContentLoaded', function () {
        Typed.new('#typed-info', {
            strings: ["Who am I?", "I'm a software developer", "I'm an innovator", "A traveller", "A Photographer"],
            typeSpeed: 50,
            startDelay: 1000,
            loop: true
        });
    });


    /*---------------------------------------------------- */
    /* Owl Carousel
     ------------------------------------------------------ */
    $("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom: [
            [0, 1],
            [700, 2],
            [960, 3]
        ],
        navigationText: false
    });


    /*----------------------------------------------------- */
    /* Alert Boxes
     ------------------------------------------------------- */
    $('.alert-box').on('click', '.close', function () {
        $(this).parent().fadeOut(500);
    });


    /*-----------------------------------------------------*/
    /* Navigation Menu
     ------------------------------------------------------ */
    var toggleButton = $('.menu-toggle-btn'),
        nav = $('.main-navigation');

    // toggle button
    toggleButton.on('click', function (e) {
        e.preventDefault();
        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
    });

    // nav items
    nav.find('li a').on("click", function () {
        toggleButton.toggleClass('is-clicked');
        nav.fadeOut();
    });


    /*---------------------------------------------------- */
    /* Highlight the current section in the navigation bar
     ------------------------------------------------------ */
    var sections = $("section"),
        navigation_links = $("#main-nav-wrap li a");
    sections.waypoint({
        handler: function (direction) {
            var active_section;
            active_section = $('section#' + this.element.id);
            if (direction === "up") active_section = active_section.prev();
            var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');
            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

        },

        offset: '25%'
    });


    /*---------------------------------------------------- */
    /* Smooth Scrolling
     ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {

        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });

    });

    /*----------------------------------------------------- */
    /* Back to top
     ------------------------------------------------------- */
    var pxShow = 300; // height on which the button will show
    var fadeInTime = 400; // how slow/fast you want the button to show
    var fadeOutTime = 400; // how slow/fast you want the button to hide

    // Show or hide the sticky footer button
    var elTop = document.getElementById("intro-social").getBoundingClientRect().top;
    jQuery(window).scroll(function () {
        if (!( $("#header-search").hasClass('is-visible'))) {

            console.log(elTop);
            if (jQuery(window).scrollTop() >= elTop) {
                jQuery("#intro-social").addClass("fix-header");
            } else {
                jQuery("#intro-social").removeClass("fix-header");

            }

            if (jQuery(window).scrollTop() >= pxShow) {
                jQuery("#go-top").fadeIn(fadeInTime);
            } else {
                jQuery("#go-top").fadeOut(fadeOutTime);
            }

        }

    });

})(jQuery);
$(document).ready(function () {
    // NavBar Menu
    let scroll_nav = $(".navbar");
    let nav_menu = $(".navbar-dark .nav-navbar .nav-link");
    let nav_form = $(".form-control");
    let scrollTop = $(".back-to-top");
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 5,
        loop: true,
        dots: false,
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });
    // carousel.imagesLoaded(function () {
    //     carousel.trigger('refresh.owl.carousel');
    // });

    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if ($(this).scrollTop() >= 200) {
            $(scrollTop).css("display", "block");
        } else {
            $(scrollTop).css("display", "none");
        }
        if ($(window).scrollTop() > 200) {
            $('.navbar').addClass('menu-bg');
        } else {
            $('.navbar').removeClass('menu-bg');
        }
    });


    $(scrollTop).click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0

        }, 800);
        return false;
    });

    $('#menu-toggle').click(function () {
        $(this).toggleClass('open');
    })
    // var about = $("#about").offset().top;
    // console.log(about);
    // var portfolio = $("#skill").offset().top;
    // var contact = $("#contact").offset().top;

    // $(".nav li:nth-child(2) a").click(function (e) {
    //     e.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: about
    //     }, 1500, "easeInOutExpo");
    //     return false;
    // });
    // $(".nav li:nth-child(3) a").click(function (e) {
    //     e.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: portfolio
    //     }, 1500, "easeInOutExpo");
    //     return false;
    // });
    // $(".nav li:nth-child(4) a").click(function (e) {
    //     e.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: contact
    //     }, 1500, "easeInOutExpo");
    //     return false;
    // });
    // var navbar = $(".navbar");
    // var brand = $(".navbar-brand");
    //var nav = $(".navbar-collapse .nav");
    // Skill bar
    // var skills = {
    //     ht: 65,
    //     js: 30,
    //     php: 35,
    //     net: 30,
    //     bs: 45,
    //     st: 100,
    //     pi: 35
    // };

    // $.each(skills, function (key, value) {
    //     var skillbar = $("." + key);

    //     skillbar.animate({
    //             width: value + "%"
    //         },
    //         3000,
    //         function () {
    //             $(".bar-percent").fadeIn();
    //         }
    //     );
    // });

});
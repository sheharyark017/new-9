var lastScroll = 40;

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar-top").addClass("sticky");
        } else if (scrollY < 20) {
            $(".navbar-top").removeClass("sticky");
        }
        lastScroll = scroll;
    });
});

$(".menu-toggler").on("click", function() {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
});

$(".click").on("click", function() {
    $(".menu-toggler").removeClass("active");
    $(".navbar-menu").removeClass("active");
});

$(".navbar-menu a").on("click", function() {
    $(".menu-toggler").removeClass("active");
    $(".navbar-menu").removeClass("active")
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});
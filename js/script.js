$(document).ready(function () {
    $('.counter').counterUp();
    $('.header__burger').click(function () {
        if (!$('.header-menu').hasClass('active-menu')) {
            $('.header-menu').addClass('active-menu');
            $('.fa-bars').hide();
            $('.fa-close').show();
        }
        else {
            $('.header-menu').removeClass('active-menu');
            $('.fa-close').hide();
            $('.fa-bars').show();
        }
    })
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var navHeight = $('.header-nav').innerHeight();
        var headerHeight = $('.header').innerHeight();
        if (scroll >= headerHeight - navHeight) {
            $('.header-nav').addClass('dark-bg');
        }
        else {
            $('.header-nav').removeClass('dark-bg');
        }


        $('.header-menu__link').each(function () {
            var id = $(this).attr('href');
            var position = $(id).offset().top - $('.header-nav').innerHeight();
            if (scroll >= position) {
                $('.header-menu__item_active').removeClass('header-menu__item_active');
                $(this).parent().addClass('header-menu__item_active');
            }

        })
    })
    $('.header-menu__link').click(function (e) {
        e.preventDefault();
        $('.header-menu__item_active').removeClass('header-menu__item_active');
        $(this).parent().addClass('header-menu__item_active');
        var id = $(this).attr('href');
        var position = $(id).offset().top - $('.header-nav').innerHeight();

        $('html').animate({
            scrollTop: position
        }, 800)
    })
});
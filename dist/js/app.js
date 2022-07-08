$(document).ready(function () {
    // ПЕРЕКЛЮЧЕНИЕ ТАБОВ
    $(document).on('click', ".tabs__list-item", function () {
        $(this).parents('section').find('.tab-content').removeClass('active');
        $('#' + $(this).attr("data-tab")).addClass('active');
        $(this).parents('section').find('.tabs__list-item').removeClass('active');
        $(this).addClass('active');
    });

    //РАСКРЫТИЕ ДРОПДАУНОВ
    $(document).on('click', ".dropdown__link", function () {
        $(this).toggleClass("active").parent().siblings().find(".dropdown__link").removeClass("active");
        $(this).parent().find('.dropdown__content').slideToggle().parent().siblings().find(".dropdown__content").slideUp();
    });

    //ФИКСИРОВАННАЯ ШАПКА НА СКРОЛЛЕ 
    let header = document.querySelector('.header');
    headerHeight = header.clientHeight;

    document.onscroll = function () {
        let scroll = window.scrollY;

        if (scroll > headerHeight) {

            header.classList.add('fixed');
            document.body.style.paddingTop = headerHeight + 'px';
        }
        else {
            header.classList.remove('fixed');
            document.body.removeAttribute('style');
        }
    };



    //ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО КЛИКУ ВНЕ ЕГО ОБЛАСТИ
    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal').removeClass('active');
            $('body').removeClass('scroll-hide');
        }
    });

    //ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ
    $(document).on('click', ".header__burger", function () {
        $('.mobile-menu__wrapper').addClass('active');
        $('body').addClass('scroll-hide');
    });

    //ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ
    $(document).on('click', ".mobile-menu .close", function () {
        $('.mobile-menu__wrapper').removeClass('active');
        $('body').removeClass('scroll-hide');
    });



    //ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ПО КЛИКУ ФОНА
    $(document).click(function (e) {
        if ($(e.target).is('.mobile-menu__wrapper')) {
            $('.mobile-menu__wrapper').removeClass('active');
            $('body').removeClass('scroll-hide');
        }
    });


    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛУЧИТЬ ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ
    $(document).on('click', ".btn-main", function () {
        $('.personal').addClass('active');
        $('body').addClass('scroll-hide');
    });

    //ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛУЧИТЬ ПЕРСОНАЛЬНОЕ ПРЕДЛОЖЕНИЕ
    $(document).on('click', ".offer .close", function () {
        $('.personal').removeClass('active');
        $('body').removeClass('scroll-hide');
    });

    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛУЧИТЬ УЗНАТЬ ПОДРОБНОСТИ
    $(document).on('click', ".header__btn", function () {
        $('.details').addClass('active');
        $('body').addClass('scroll-hide');
    });

    //ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛУЧИТЬ УЗНАТЬ ПОДРОБНОСТИ
    $(document).on('click', ".details .close", function () {
        $('.details').removeClass('active');
        $('body').removeClass('scroll-hide');
    });

    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
    $(document).on('click', ".footer__add-info-privacy", function () {
        $('.privacy').addClass('active');
        $('body').addClass('scroll-hide');
    });

    //ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
    $(document).on('click', ".privacy .close", function () {
        $('.privacy').removeClass('active');
        $('body').removeClass('scroll-hide');
    });

    //МАСКА НА ИНПУТЫ С ТЕЛЕФОНОМ
    if ($(".input-phone").length !== 0) {
        Inputmask("+7 (999) 999-99-99").mask(".input-phone");
    }

    //ОТКРЫТИЕ ВИДЕО НА СТРАНИЦЕ О КОМПАНИИ
    $(document).on('click', '.main__buttons-watch', function (e) {
        e.preventDefault();
        let firstString = 'https://www.youtube.com/embed/';
        let link = $(this).attr('href');
        let newLink;
        if (link.indexOf('v=') !== -1) {
            let arrayLinks = link.split('v=');
            let secondString = arrayLinks[arrayLinks.length - 1];
            newLink = firstString + secondString;
        }
        else {
            newLink = link;
        }

        $.fancybox.open({
            src: newLink,
            type: 'iframe'
        });

    });

    //СМЕНА ФОНА
    let mainBg = $('.main__background');
    let k = 1;

    setInterval(function () {
        mainBg.removeClass('active');
        mainBg[k].classList.add('active');
        k++;
        if (mainBg.length == k) {
            k = 0;
        }
    }, 5000);

    // Anchor
    const anchorScroll = function (e, _this) {
        e.preventDefault();
        let elementClick = _this.attr("href");
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1000);
        return false;
    }

    $(document).on('click', '.header__list-link', function (e) {
        anchorScroll(e, $(this));
    });
    // $(document).on('click', '.map-site__item a', function (e) {
    //     anchorScroll(e, $(this));
    // });

    // swiper.loopDestroy();

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, СТАНДАРТНЫЙ НОМЕР
    const swiperInteriorsStandart = new Swiper('.swiper-interiors-standard', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-standard-button-next',
            prevEl: '.interiors-standard-button-prev',
        },
        pagination: {
            el: '.interiors-standard-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, ДВУХКОМНАТНЫЙ НОМЕР
    const swiperInteriorsTwoRoom = new Swiper('.swiper-interiors-two-room', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-two-room-button-next',
            prevEl: '.interiors-two-room-button-prev',
        },
        pagination: {
            el: '.interiors-two-room-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, ДВУХУРОВНЕВЫЙ НОМЕР
    const swiperInteriorsDuplex = new Swiper('.swiper-interiors-duplex', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-duplex-button-next',
            prevEl: '.interiors-duplex-button-prev',
        },
        pagination: {
            el: '.interiors-duplex-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ ТУМБОВ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, ПЛАНИРОВКИ
    const swiperInteriorsLayoutsThumbs = new Swiper('.swiper-interiors-layouts-thumbs', {
        speed: 400,
        slidesPerView: 7.7,
        spaceBetween: 8,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 7.78,
                spaceBetween: 8,
            },
            // when window width is >= 480px
            668: {
                slidesPerView: 8.15,
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 10,
            }
        }
    });

    if ($(window).width() >= 1024) {
        $(".swiper-interiors-layouts-thumbs .swiper-wrapper").addClass("slides-center");
    }

    if ($(window).width() < 1024) {
        $(".swiper-interiors-layouts-thumbs .swiper-wrapper").addClass("slides-center");
    }

    if ($(window).width() < 1024 && [...$(".js-slide")].length > 7) {
        $(".swiper-interiors-layouts-thumbs .swiper-wrapper").removeClass("slides-center");
    }


    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, ПЛАНИРОВКИ
    const swiperInteriorsLayouts = new Swiper('.swiper-interiors-layouts', {
        speed: 400,
        slidesPerView: 1,
        // loop: true,
        navigation: {
            nextEl: '.interiors-layouts-button-next',
            prevEl: '.interiors-layouts-button-prev',
        },
        pagination: {
            el: '.interiors-layouts-pagination',
            type: 'fraction',
        },
        thumbs: {
            swiper: swiperInteriorsLayoutsThumbs
        }
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ ИНТЕРЬЕРЫ И ЭКСТЕРЬЕРЫ, ВХОДНАЯ ГРУППА И МОП
    const swiperLayoutsEntryGroup = new Swiper('.swiper-layouts-entry-group', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-entry-group-button-next',
            prevEl: '.interiors-entry-group-button-prev',
        },
        pagination: {
            el: '.interiors-entry-group-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ ИНТЕРЬЕРЫ И ЭКСТЕРЬЕРЫ, РЕСТОРАН
    const swiperLayoutsRestaurant = new Swiper('.swiper-layouts-restaurant', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-restaurant-button-next',
            prevEl: '.interiors-restaurant-button-prev',
        },
        pagination: {
            el: '.interiors-restaurant-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ ИНТЕРЬЕРЫ И ЭКСТЕРЬЕРЫ, ТЕРРИТОРИЯ
    const swiperLayoutsTerritory = new Swiper('.swiper-layouts-territory', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-territory-button-next',
            prevEl: '.interiors-territory-button-prev',
        },
        pagination: {
            el: '.interiors-territory-pagination',
            type: 'fraction',
        },
    });

    //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ ИНТЕРЬЕРЫ И ЭКСТЕРЬЕРЫ, ФАСАД
    const swiperLayoutsFacade = new Swiper('.swiper-layouts-facade', {
        speed: 400,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.interiors-facade-button-next',
            prevEl: '.interiors-facade-button-prev',
        },
        pagination: {
            el: '.interiors-facade-pagination',
            type: 'fraction',
        },
    });

});

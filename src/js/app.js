// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$(document).on('click', ".tabs__list-item", function () {
    $('.tab-content').removeClass('active');
    $('#' + $(this).attr("data-tab")).addClass('active');
    $('.tabs__list-item').removeClass('active');
    $(this).addClass('active');
});

//РАСКРЫТИЕ ДРОПДАУНОВ
$(document).on('click', ".dropdown", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.dropdown__link').removeClass('active');
        $(this).find('.dropdown__content').slideUp();
    }
    else {
        $(this).addClass('active');
        $(this).find('.dropdown__link').addClass('active');
        $(this).find('.dropdown__content').slideDown();
    }
});

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

//ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА СЕКЦИИ НОМЕРА И ПЛАНИРОВКИ, ПЛАНИРОВКИ
const swiperInteriorsLayouts = new Swiper('.swiper-interiors-layouts', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.interiors-layouts-button-next',
        prevEl: '.interiors-layouts-button-prev',
    },
    pagination: {
        el: '.interiors-layouts-pagination',
        type: 'fraction',
    },
});



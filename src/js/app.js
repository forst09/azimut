// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$(document).on('click', ".tabs__list-item", function () {
    $(this).parents('section').find('.tab-content').removeClass('active');
    $('#' + $(this).attr("data-tab")).addClass('active');
    $(this).parents('section').find('.tabs__list-item').removeClass('active');
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



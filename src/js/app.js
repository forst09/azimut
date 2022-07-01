// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$(document).on('click', ".tabs__list-item", function () {
    $('.tab-content').removeClass('active');
    $('#' + $(this).attr("data-tab")).addClass('active');
    $('.tabs__list-item').removeClass('active');
    $(this).addClass('active');
});

//раскрытие дропдаунов
$(document).on('click', ".dropdown", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('.dropdown__link').removeClass('active');
        $(this).find('.dropdown__content').removeClass('active');
    }
    else {
        $(this).addClass('active');
        $(this).find('.dropdown__link').addClass('active');
        $(this).find('.dropdown__content').addClass('active');
    }
});

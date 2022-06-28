// ПЕРЕКЛЮЧЕНИЕ ТАБОВ
$(document).on('click', ".tabs__list-item", function () {
    $('.tab-content').removeClass('active');
    $('#' + $(this).attr("data-tab")).addClass('active');
    $('.tabs__list-item').removeClass('active');
    $(this).addClass('active');
});

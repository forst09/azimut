//ПЕРЕКЛЮЧАТЕЛЬ ТЕМНЫХ/СВЕТЛЫХ КАРТИНОК
$(document).on('click', ".switch__item-label", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parents('.switch').find('.switch__item-sun').removeClass('active');
        $(this).parents('.switch').find('.switch__item-moon').addClass('active');
        $(this).parents('.switch').find('.switch__item-moon').addClass('active');
        $(this).parents('section').find('.switch-image-night').addClass('active');
        $(this).parents('section').find('.switch-image-day').removeClass('active');
    }
    else {
        $(this).addClass('active');
        $(this).parents('.switch').find('.switch__item-sun').addClass('active');
        $(this).parents('.switch').find('.switch__item-moon').removeClass('active');
        $(this).parents('section').find('.switch-image-night').removeClass('active');
        $(this).parents('section').find('.switch-image-day').addClass('active');
    }
});
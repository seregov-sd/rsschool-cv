$(document).ready(function () {

    $(document).on("click", ".menu__link", function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top; // получаем координаты блока
        $('body, html').animate({scrollTop: top}, 400); // плавно переходим к блоку
    });

});
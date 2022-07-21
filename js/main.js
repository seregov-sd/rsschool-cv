$(document).ready(function () {

    $(document).on("click", ".menu__link", function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top; // получаем координаты блока
        $('body, html').animate({scrollTop: top}, 400); // плавно переходим к блоку
    });

    var menuButton = $(".menu__button");
    $(".menu__button").click(function () {
        if (!$(".menu__button").hasClass("btn--active") && !$(".menu__list").hasClass("menu__list--active")) {
            $(this).addClass("btn--active");
            $(".menu__list").addClass("menu__list--active");
        } else {
            $(this).removeClass("btn--active");
            $(".menu__list").removeClass("menu__list--active");
        }
    });
    $(document).click(function (e) {
        if (!menuButton.is(e.target) && menuButton.has(e.target).length === 0) {
            $(".menu__button").removeClass("btn--active");
            $(".menu__list").removeClass("menu__list--active");
        }
        ;
    });
});
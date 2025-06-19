(function ($) {

    /*
        1. Header Button
        2. Mobile Menu
    */

    //1. Header Button

    $(".header_toggle_btn").on("click", function () {
        $(".mobile-menu").toggleClass("active");
    });


    //2. Mobile Menu

    $(".mobile-menu .close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    $(".mobile-menu ul li.has-submenu i").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });

    $(".mobile-menu ul li.has-submenu a").each(function () {
        $(this).on("click", function () {
            $(this).siblings('ul').slideToggle();
            $(this).toggleClass("icon-rotate");
        });
    });
    

})(jQuery);

//Nav Button
const buttons = document.querySelectorAll('.al-map-nav-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
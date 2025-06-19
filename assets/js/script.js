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


const navButtons = document.querySelectorAll('.al-map-btn');
const contentBlocks = document.querySelectorAll('.map-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active from buttons
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // hide all content
        contentBlocks.forEach(c => c.classList.remove('active'));
        const target = btn.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});



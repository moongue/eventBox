function menuLogic() {
    $('.mobile-menu-toggle').click(function () {
        $('.dropdown-mobile-menu').toggleClass('active');
    })
}

$(window).on('load', function () {
    menuLogic();
});
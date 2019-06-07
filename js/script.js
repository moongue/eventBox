function menuLogic() {
    $('.mobile-menu-toggle').click(function () {
        $('.dropdown-mobile-menu').toggleClass('active');
    })
}

function showAnswer () {
    $('.questions-block__question.first').click(function () {
        $('.questions-block__question.first + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.first').toggleClass('open');
    })
    $('.questions-block__question.second').click(function () {
        $('.questions-block__question.second + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.second').toggleClass('open');
    })
    $('.questions-block__question.third').click(function () {
        $('.questions-block__question.third + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.third').toggleClass('open');
    })
    $('.questions-block__question.four').click(function () {
        $('.questions-block__question.four + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.four').toggleClass('open');
    })
}

$(window).on('load', function () {
    menuLogic();
    showAnswer();
});
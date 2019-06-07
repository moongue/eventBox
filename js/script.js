function menuLogic() {
    $('.mobile-menu-toggle').click(function () {
        $('.dropdown-mobile-menu').toggleClass('active');
    })
}

function showAnswer () {
    $('.questions-block__question.first').click(function () {
        $('.questions-block__question.first + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.first').toggleClass('open');
    });
    $('.questions-block__question.second').click(function () {
        $('.questions-block__question.second + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.second').toggleClass('open');
    });
    $('.questions-block__question.third').click(function () {
        $('.questions-block__question.third + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.third').toggleClass('open');
    });
    $('.questions-block__question.four').click(function () {
        $('.questions-block__question.four + .questions-block__answer').slideToggle(300);
        $('.questions-block__question.four').toggleClass('open');
    })
}

function hoverAnimation() {
    $('.one-tab.first').mouseenter(function () {
        $('.one-tab.first').addClass('active');
        $('.one-tab.first').mouseleave(function () {
            $('.one-tab.first').removeClass('active');
        })
    });
    $('.one-tab.second').mouseenter(function () {
        $('.one-tab.second').addClass('active');
        $('.one-tab.second').mouseleave(function () {
            $('.one-tab.second').removeClass('active');
        })
    });
    $('.one-tab.third').mouseenter(function () {
        $('.one-tab.third').addClass('active');
        $('.one-tab.third').mouseleave(function () {
            $('.one-tab.third').removeClass('active');
        })
    });
    $('.one-tab.four').mouseenter(function () {
        $('.one-tab.four').addClass('active');
        $('.one-tab.four').mouseleave(function () {
            $('.one-tab.four').removeClass('active');
        })
    });
    $('.one-tab.five').mouseenter(function () {
        $('.one-tab.five').addClass('active');
        $('.one-tab.five').mouseleave(function () {
            $('.one-tab.five').removeClass('active');
        })
    });
}

$(window).on('load', function () {
    menuLogic();
    showAnswer();
    hoverAnimation();
});
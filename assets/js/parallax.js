$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.title').css({
        'transform' : 'translate(0px, ' + ((-wScroll / 1.5) % ($(window).height() / 2)) + '%)'
    })

});
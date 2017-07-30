$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.title').css({
        'transform' : 'translate(0px, ' + ((-wScroll / 2) % ($(window).height() / 2)) + '%)'
    })

});
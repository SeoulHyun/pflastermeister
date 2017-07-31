$(window).scroll(function () {
    $('#contact_form').hide()

    var wScroll = $(this).scrollTop();


    $('.title').css({
        'transform' : 'translate(0px, ' + ((-wScroll / 1.5) % ($(window).height() / 2)) + '%)'
    })

    $('#contact__link').click(function () {
        $('#contact_form').show()
    })

});
$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    $('.content').each(function () {

        console.log(this);

        var myScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
            .setClassToggle(this, 'content--fade-in')
            // .addIndicators({
            //     name: "2 - change inline style"
            // }) // add indicators (requires plugin)
            .addTo(controller);
    });

    // ====== background blur ====== //
    $(window).scroll(function () {

        $('.section').each(function () {
            var scrollTop = $(window).scrollTop(),
                trainingTop = $(this).position().top,
                trainingHeight = $(this).height(),
                calc = 0,
                offset = trainingHeight / 100;



            if (scrollTop > (trainingTop + offset)) {
                calc = ((scrollTop - (trainingTop + offset)) / trainingHeight) * 10;
                $(this).children(':nth-child(2)').css({'opacity': calc});


                if (calc > '1') {
                    $(this).children(':nth-child(2)').css({ 'opacity': 1 });
                } else if ( calc < '0' ) {
                    $(this).children(':nth-child(2)').css({ 'opacity': 0 });
                }
            } else {
                $(this).children(':nth-child(2)').css({ 'opacity': 0 });
            }
        })


    })

    $('.contact_button').click(function () {
        $('#tools_contact').show("slow")
    })

    $('.side_bar_button').click(function () {
        $('.side_bar').hide("slow");
    })
});
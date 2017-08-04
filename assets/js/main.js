$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    $('.section_content').each(function () {

        console.log(this);

        var myScene = new ScrollMagic.Scene({
            triggerElement: this,
        })
            .setClassToggle(this.children[0], 'fade-in') // add class to #content
            // .addIndicators({
            //     name: "2 - change inline style"
            // }) // add indicators (requires plugin)
            .addTo(controller);


    })

    $(window).scroll(function () {
        $('.section').each(function () {
            var scrollTop = $(window).scrollTop(),
                trainingTop = $(this).position().top,
                trainingHeight = $(this).height(),
                calc = 0;

            console.log('scrollTop: ' + scrollTop);
            console.log('trainingTop: ' + trainingTop);
            console.log('trainingHeight: ' + trainingHeight);


            if (scrollTop > (trainingTop + trainingHeight / 4)) {
                calc = ((scrollTop - (trainingTop + trainingHeight / 4)) / trainingHeight) * 15;
                $(this).children(':nth-child(2)').css({'opacity': calc});


                if (calc > '1') {
                    $(this).children(':nth-child(2)').css({ 'opacity': 1 });
                } else if ( calc < '0' ) {
                    $(this).children(':nth-child(2)').css({ 'opacity': 0 });
                }
            }
        })


    })
})
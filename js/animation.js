$(document).ready(function(){

// init controller
    var controller = new ScrollMagic.Controller();



/*Pin Element
    new ScrollMagic.Scene({
        duration: $('#pavingtools').height()+300,
        offset: $('#pavingtools').height()
    })
        .setPin("#pavingtools")
        .addTo(controller);

// Fade out Title
    new ScrollMagic.Scene({
        duration: 300,	// the scene should last for a scroll distance of 100px
        offset: $('#pflastermeister').height()		// start this scene after scrolling for 50px
    })
        .setTween("#pavingtools .title__text", {
            opacity: 0
        })
        .addTo(controller); // assign the scene to the controller

// Blur Image
    new ScrollMagic.Scene({
        duration: $('#pavingtools').height(),
        offset: $('#pflastermeister').height()+300
    })
        .setTween("#pavingtools", {
            filter:filterVal,
            webkitFilter:filterVal,
            mozFilter:filterVal,
            oFilter:filterVal,
            msFilter:filterVal,
            transition:'all 0.5s ease-out',
        }) // the tween durtion can be omitted and defaults to 1

        .addTo(controller);

    // Fade in Text
    new ScrollMagic.Scene({
        duration: $("#pavingtools").height()-300,
        offset: $("#pflastermeister").height()+300
    })
        .setTween("#pavingtools__content", {

        })
        .addTo(controller);*/


    function scrollBlur(el) {
        var filterVal = 'blur(' + 10 + 'px)';

        new ScrollMagic.Scene({
            triggerElement: el,
            offset: $(el).height()/2,
            duration: $(el).height()*0.4
        })
        .setPin(el)
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: el,
            offset: $(el).height()/2,
            duration: $(el).height()*0.3
        })
        .setTween(el + " .title", {
            opacity: 0
        })
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: el,
            offset: $(el).height()/2,
            duration: $(el).height()*0.2
        })
        .setTween(el + " .background", {
            opacity: 0
        })
        .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: el,
            offset: $(el).height()*0.6,
            duration: $(el).height()*0.3
        })
        .setTween(el + " .content", {
            opacity: 1
        })
        .addTo(controller);
    }

    scrollBlur('#pavingtools');
    scrollBlur('#skillstraining');
    scrollBlur('#technology');

});


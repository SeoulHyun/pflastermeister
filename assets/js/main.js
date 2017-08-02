$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    $('.wrapper').each(function () {

        console.log(this);

        var myScene = new ScrollMagic.Scene({
            triggerElement: this,
        })
            .setClassToggle(this.children[1], 'fade-in') // add class to #content
            .addTo(controller);
    })
})
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: 400
    })
        .setTween(('h1'),{y:"+670",opacity:"0"})
        //.addIndicators()
        .addTo(controller);

    var scene1 = new ScrollMagic.Scene({
        duration: 400
    })
        .setTween(('h2'), {y:"-70",opacity:"0"})
        //.addIndicators()
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
        duration: 1,
        triggerHook: 0,
        offset:1000

    })
        .setTween(('.accent'), {position:"fixed",top:"0",left:"0",width:"10vw",height:"10vw"})
        //.addIndicators()
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        duration: 1,
        triggerHook: 0,
        offset:1000
    })
        .setTween(('.accent>p'), {lineHeight:"10vw"})
        //.addIndicators()
        .addTo(controller);
});


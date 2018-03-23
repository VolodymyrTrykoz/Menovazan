$(document).ready(function() {
    //this function triggers tooltip after hovering on specific element
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
    });



    ////////////////////////////////////////
    ////////////////////////////////////////
    //////////////ANIMATION/////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////


    ////////////////////////////////////////////////////////////
    ///Animation for header and overview section starts here///
    ///////////////////////////////////////////////////////////
    var controller = new ScrollMagic.Controller();
    //triggering animation when triggerElement is visible in window
    var scene = new ScrollMagic.Scene({
        triggerElement: '#header-js',
        reverse: false
    });
    var ltHeader = new TimelineLite();
    ltHeader.fromTo(["header",".logo"], 1, {css: {autoAlpha: 0}}, {css: {autoAlpha: 1}})
        .staggerFrom("header nav a", 0.5, {
            autoAlpha: 0,
            yPercent: '+350'
        }, 0.2)
        .to('.overview-wrapper', 0.9, {
            autoAlpha: 1
        })
        .to('.description', 0.7, {
            autoAlpha: 1,
            y: 0
        })
        .to('.overview__img img', 0.7, {
            autoAlpha: 1
        })
        .to('h1', 0.7, {
            autoAlpha: 1,
            y: 0
        })
        .to([".description--thing", ".description-components"], 0.7, {
            autoAlpha: 1,
            y: 0
        });
    scene.setTween(ltHeader).addTo(controller);


    ///////////////////////////////////////////////////
    ///Animation for section instruction starts here///
    ///////////////////////////////////////////////////

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.instruction h2',
        reverse: false
    });

    var tlInstruction = new TimelineLite();
    tlInstruction.to('.instruction-wrapper', 1, {
        autoAlpha: 1
    })
    .to('.instruction__form', 0.5, {
            autoAlpha: 1,
            y: 0
    })
    .to('.instruction__composition',  0.5, {
            autoAlpha: 1,
            y: 0
    })
    .to('.instruction__indication',  0.3, {
            autoAlpha: 1,
            y: 0
    })
    .to('.instruction img',  2, {
            autoAlpha: 1
    });
    scene2.setTween(tlInstruction).addTo(controller);

    ///////////////////////////////////////////////////
    //////Animation for section usage starts here//////
    ///////////////////////////////////////////////////
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.usage',
        reverse: false
    });

    var usage = new TimelineLite();
    usage.to('.usage h2', 1, {
        autoAlpha: 1,
        y: 0
    })
    .to('.usage-item--1',  0.5, {
            autoAlpha: 1,
            y: 0
    })
    .to('.usage-item--2',  0.5, {
            autoAlpha: 1,
            y: 0
    })
    .to('.usage-item--3',  0.5, {
            autoAlpha: 1,
            y: 0
    });
    scene3.setTween(usage).addTo(controller);
    ///////////////////////////////////////////////////
    //////Animation for section storage starts here////
    ///////////////////////////////////////////////////
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.storage',
        reverse: false
    });
    var tlStorage = new TimelineMax();

    tlStorage.to('.storage h2', 1, {
        autoAlpha: 1
    })
    .to('.storage p',  0.5, {
            autoAlpha: 1,
            y: 0
    })
    .to('.btn--instr',  0.5, {
            y: "0%",
            autoAlpha: 1
    })
    .to('.btn--drugstore',  0.5, {
            y: "0%",
            autoAlpha: 1
    })
    .to('.caution',  1, {
            autoAlpha: 1,
            delay: 0.3
    });
    scene4.setTween(tlStorage).addTo(controller);

    ///////////////////////////////////////////////////
    //////////Animation for footer starts here/////////
    ///////////////////////////////////////////////////
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '#footer',
        offset: -250,
        reverse: false
    });
    var tween = TweenMax.to('footer p', 2, { autoAlpha: 1});
    scene5.setTween(tween).addTo(controller);


    ////////////////////////////////////////
    ////////////////////////////////////////
    /////////////END ANIMATION//////////////
    ////////////////////////////////////////
    ////////////////////////////////////////



});
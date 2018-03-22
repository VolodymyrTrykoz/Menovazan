////////////////////////////////////////////////////////////
///Animation for header and overview section starts here///
///////////////////////////////////////////////////////////
var controller = new ScrollMagic.Controller();
var timeline = new TimelineLite();
    timeline.fromTo(["header",".logo", ".overview-wrapper"], 1, {css: {autoAlpha: 0}}, {css: {autoAlpha: 1}});

//triggering animation when triggerElement is visible in window
var scene = new ScrollMagic.Scene({
    triggerElement: '#header-js',
    reverse: false
})
.setTween(timeline)
.addTo(controller);


var tlNavagation = new TimelineLite();
tlNavagation.staggerFrom("header nav a", 0.3, {
    autoAlpha: 0,
    yPercent: '+350'
}, 0.2);

var overviewH2 = new TimelineLite();
overviewH2.to($('.description'), 0.5, {
    autoAlpha: 1,
    y: 0
});

var overviewImg = new TimelineLite();
overviewImg.to($('.overview__img img'), 0.5, {
    autoAlpha: 1,
    delay: 0.5
});

var overviewH1 = new TimelineLite();
overviewH1.to($('h1'), 1, {
    autoAlpha: 1,
    delay: 0.7
});

var tlComponents = new TimelineLite();
tlComponents.to([".description--thing", ".description-components"], 0.5, {
    autoAlpha: 1,
    y: 0,
    delay: 0.9
});



///////////////////////////////////////////////////
///Animation for section instruction starts here///
///////////////////////////////////////////////////


// var tlInstruction = new TimelineLite();
//triggering animation when triggerElement is visible in window
var scene2 = new ScrollMagic.Scene({
    triggerElement: '.instruction',
    reverse: false
})
.setClassToggle('.instruction', 'run')
    .addTo(controller);
var tlInstruction = new TimelineLite();
tlInstruction.to($('.instruction-wrapper'), 5, {
    autoAlpha: 1
});

var instructionForm = new TimelineLite();
instructionForm.to($('.instruction__form'), 0.5, {
    autoAlpha: 1,
    y: 0
})
.to($('.instruction__composition'),  0.5, {
    autoAlpha: 1,
    y: 0
})
.to($('.instruction__indication'),  0.5, {
    autoAlpha: 1,
    y: 0
})
.to($('.instruction img'),  0.5, {
    autoAlpha: 1
});


///////////////////////////////////////////////////
//////Animation for section usage starts here//////
///////////////////////////////////////////////////
var scene3 = new ScrollMagic.Scene({
    triggerElement: '.usage',
    reverse: false
})
.setClassToggle('.usage', 'run')
.addTo(controller);
var usage = new TimelineLite();
    usage.to($('.usage h2'), 1, {
        autoAlpha: 1,
        y: 0
    })
    .to($('.usage-item--1'),  0.5, {
        autoAlpha: 1,
        y: 0
    })
    .to($('.usage-item--2'),  0.5, {
         autoAlpha: 1,
         y: 0
    })
    .to($('.usage-item--3'),  0.5, {
         autoAlpha: 1,
         y: 0
    });

///////////////////////////////////////////////////
//////Animation for section storage starts here////
///////////////////////////////////////////////////
var scene4 = new ScrollMagic.Scene({
    triggerElement: '.storage'
});
var tlStorage = new TimelineMax();

tlStorage.to($('.storage h2'), 1, {
    autoAlpha: 1
})
.to($('.storage p'),  0.5, {
        autoAlpha: 1,
        y: 0
    })
.to($('.btn--instr'),  0.3, {
        autoAlpha: 1,
        y: 0
    })
.to($('.btn--drugstore'),  0.3, {
        autoAlpha: 1,
        y: 0
    })
.to($('.caution'),  0.3, {
        autoAlpha: 1
    });
// scene4.addTween(tlStorage);





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
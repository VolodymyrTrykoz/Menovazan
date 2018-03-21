$(document).ready(function() {
    //this function triggers tooltip after hovering on specific element
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
    });

    //this function provides animation hover effect on button
    $('.btn--instr').hover(function(){
        $('.btn--instr span').fadeIn("slow");
        TweenMax.to(('.btn--instr span'), 0.5, {x:"-60px"});

    });
    $('.btn--instr').mouseleave(function(){
        $('.btn--instr span').fadeOut("fast");
        TweenMax.to(('.btn--instr span'), 0.5, {x:"50px"});
    });

});
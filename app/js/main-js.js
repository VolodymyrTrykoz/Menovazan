$(document).ready(function() {
    $('.tooltip').tooltipster();








    $('.btn--instr').hover(function(){
        $('.btn--instr span').fadeIn("slow");
        TweenMax.to(('.btn--instr span'), 0.5, {x:"18px"}, delay: 0.5);

    });
    $('.btn--instr').mouseleave(function(){
        $('.btn--instr span').fadeOut("fast");

    });









});
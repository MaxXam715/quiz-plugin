$(document).ready(function () {

    initSlider()

})

// Слайдер
function initSlider(e) {
    var slider = $('.am-slider-quiz');
    var slide = slider.find('.am-question-slide');
    var slideCount = slide.length;

    slider.find('>:first-child').addClass('am-active');


    slider.wrapInner('<div class="slider-inner" />');

    var container = $('.slider-inner');
    container.css('width', 100 * slideCount + '%');
    slide.css('width', 100 / slideCount +'%');

    var next = $('.am-btn-next');
    var prev = $('.am-btn-prev');
    var i = 0;

    function mover(){
        if(i === 0){
            container.css('left',0);
        } else if(i > 0){
            container.css('left','-'+100*i+'%');
        }
    }

    next.on('click',function(){
        if( i < slideCount -1){
            i++;
            mover();
            $('.am-question-slide.am-active').next('.am-question-slide').addClass('am-active');
            $('.am-question-slide.am-active').prev('.am-question-slide.am-active').removeClass('am-active');
        }
    });
    prev.on('click',function(){
        if( i > 0){
            i--;
            mover();
            $('.am-question-slide.am-active').prev('.am-question-slide').addClass('am-active');
            $('.am-question-slide.am-active').next('.am-question-slide').removeClass('am-active');
        }
    });
}
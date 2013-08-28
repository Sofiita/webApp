$(document).ready(function(){
    var slides, timer;
    slides = $('#slider .slidesContainer > .slide');
    function sliderScroll(direction){
	   
       var position = $('#slider').scrollLeft();

       var totalWidth = (slides.length * slides[0].offsetWidth) - slides[0].offsetWidth

       switch (direction) {
            case 'right':
                if (position+slides[0].offsetWidth > totalWidth){ 
                    $('#slider:not(:animated)').animate({scrollLeft:0},1000);
                } else { 
                    $('#slider:not(:animated)').animate({scrollLeft:position+slides[0].offsetWidth},1000);
                }
                break;

            case 'left': 
                if (position-slides[0].offsetWidth < 0){ 
                    $('#slider:not(:animated)').animate({scrollLeft:totalWidth},1000);
                } else { 
                    $('#slider:not(:animated)').animate({scrollLeft:position-slides[0].offsetWidth},1000);
                }
                break;
        }

   }
   
   function initTimer(){
       var timer = setInterval(function(){sliderScroll('right');}, 5000);
   }

    $('#slider .slidesContainer').css('width',slides[0].offsetWidth * slides.length);

    $('.next').click(function(){
        clearInterval(timer); 
        sliderScroll('right');
        initTimer(); 
        return false;
    });

    $('.prev').click(function(){
        clearInterval(timer); 
        sliderScroll('left'); 
        initTimer(); 
        return false;
    });

    initTimer();

});
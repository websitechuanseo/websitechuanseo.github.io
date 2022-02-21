(function($){

    /* jsMainVisual
    --------------------------------------------------*/
    var jsMainVisual = function(){
        $('.mv-item').eq(0).addClass('on');
        
        if (document.addEventListener) {
            document.addEventListener("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            document.addEventListener("DOMMouseScroll", MouseWheelHandler, false); //Firefox
        } else {
            document.attachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
        }

        var i = 1;
        var mouseWheel = true;
        function MouseWheelHandler(e) {
            if (!mouseWheel) {
                return false;
            }
            mouseWheel = false;
            setTimeout(function() {
                mouseWheel = true;
            }, 1000);
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            var h = window.innerHeight;
            var section = $('.mv-item');
            console.log(i);
            if (i <= section.length && i >= 0) {
                //scrolling down?
                if (delta < 0) {
                    window.scrollTo({
                        top: h * i,
                        behavior: "smooth"
                    });
                    section.removeClass('on');
                    section.eq(i).addClass('on');
                    if(i < section.length) i++;
                } else {
                    //scrolling up?
                    window.scrollTo({
                        top: h * i,
                        behavior: "smooth"
                    });
                    section.removeClass('on');
                    section.eq(i).addClass('on');
                    if(i>0) i--;                   
                }
            }
        }
    }

    /* jsMvSlider
    --------------------------------------------------*/
    var jsMvSlider = function(){
        $('.mv-slder').slick();
    }

    $(document).ready(function() {
        jsMainVisual();
        jsMvSlider();
    });
    
})(jQuery);
(function($){
    
    /* jsHeader
    --------------------------------------------------*/
    var jsHeader = function(){
        var lastScrollTop = 0;
        $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('#header').addClass('header-hide');
        } else {
            $('#header').removeClass('header-hide');
        }
        lastScrollTop = st;
        });        
    }

    /* jsSlider
    --------------------------------------------------*/
    var jsSlider = function(){
        $('.mainSlider').slick({
            dots: false,
            infinite: true,
            autoplay: 2000,
            speed: 1500,
            slidesToShow: 1,
            pauseOnHover: false,
            fade: true,
            arrows: false,
        });
    }

    $(document).ready(function() {
        jsHeader();
        jsSlider();
    });
    
})(jQuery);

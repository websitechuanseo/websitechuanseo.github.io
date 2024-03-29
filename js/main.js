(function($){
    $(window).on('load', function(){
        $('#preloader').fadeOut(1000);
    });

    $(window).on('load resize', function(){
        if($(".key-content").length) {
            var _h = $('.key-content').innerHeight();
            $('#footer').css('padding-bottom',_h + 'px');
        }
    });

    $(document).ready(function(){

        if($(".js-main-slider").length) {
            $(".js-main-slider").slick({
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                fade: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                cssEase: 'linear'
            });
        }

        $('.btn-menu').on('click', function(){
            $('body').toggleClass('mn-opened');
        });
    });    
    
})(jQuery);

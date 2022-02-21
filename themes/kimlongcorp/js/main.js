(function($){

    /* jsBacktop
    --------------------------------------------------*/
    var jsBacktop = function(){
        var back_top = $('.backtop'), offset = 200;
        back_top.click(function(){
            $("html, body").animate({ scrollTop: 0 }, 800 );
            return false;
        });
        if($(window).scrollTop() > offset){ 
            back_top.fadeIn(200);
        }
        $(window).scroll(function() {
            if($(window).scrollTop() > offset ) back_top.fadeIn(200); 
            else back_top.fadeOut(200);
        });
    }

    /* jsTabs
    --------------------------------------------------*/
    var jsTabs = function(){
        $('.tab-nav .item').each(function(){
            $(this).on('click', function(){
                var _index = $(this).index();
                $('.tab-nav .item').removeClass('active');
                $('.tab-inner').removeClass('on');
                $(this).addClass('active');
                $('.tab-inner').eq(_index).addClass('on');
            });
        });
    }

    $(document).ready(function() {
        jsBacktop();
        jsTabs();
    });
    
})(jQuery);

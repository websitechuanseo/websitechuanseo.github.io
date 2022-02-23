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


    /* jsanchor
    --------------------------------------------------*/
    $(window).scroll(function () {
		var banner = $(".page-title").innerHeight();
		var sbHeight = window.pageYOffset;
		$(".header.is-blue").addClass("fixed");
		if ($(window).scrollTop() === 0) {
			$(".header").removeClass("fixed");
		}
		if (sbHeight >= banner - 25) {
			$(".nav-anchor").addClass("fixed");
		} else {
			$(".nav-anchor").removeClass("fixed");
		}
	});

     /* jsspace
    --------------------------------------------------*/
    $(window).on('resize load', function() {
        var $this = $(this);
        var $winW = $this.width();
        var $containerW = $('.inner01').width();
        var $margin = ( $winW - $containerW ) / 2 ;
        $('.space-left').css({
            'padding-left': $margin
        });
        $('.space-right').css({
            'padding-right': $margin
        });
    });


    $(document).ready(function() {
        jsBacktop();
        jsTabs();

        
     /* jsslider
    --------------------------------------------------*/
    $(".tc-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		// autoplay: true,
        arrows: false,
		infinite: true,
		autoplaySpeed: 2000,
		speed: 1000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});


    });
    
})(jQuery);

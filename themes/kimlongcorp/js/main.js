(function($){

    /* jsInview
    --------------------------------------------------*/
    var jsInview = function(){
        $(window).on('scroll load', function () {
            var sc = $(window).scrollTop(),
                wh = window.innerHeight;
            $('.js-effect, .js-fadeup').each(function (index, el) {
                var pos = $(this).offset().top;
                if (pos < sc + wh * 0.7) {
                    $(this).addClass('is-fadeup');
                }
            });
        });
    }

    /* jsBacktop
    --------------------------------------------------*/
    var jsBacktop = function(){
        var back_top = $('.back-top'), offset = 200;
        back_top.click(function(){
            $("html, body").animate({ scrollTop: 0 }, 800 );
        });
        if($(window).scrollTop() > offset){ 
            back_top.fadeIn(500);
        }
        $(window).scroll(function() {
            if($(window).scrollTop() > offset ) back_top.fadeIn(500); 
            else back_top.fadeOut(500);
        });
    }

    /* jsTabs
    --------------------------------------------------*/
    var jsTabs = function(){
        $('#tabs-product-detail li').each(function(){
            $(this).on('click', function(){
                var _index = $(this).index();
                $('#tabs-product-detail li').removeClass('active');
                $('.tabs-content-wrap').removeClass('on');
                $(this).addClass('active');
                $('.tabs-content-wrap').eq(_index).addClass('on');
            });
        });
    }

    var jsTabsMap = function(){
        $('.contact-page .block-branch li').each(function(){
            $(this).on('click', function(){
                var _index = $(this).index();
                $('.contact-page .block-branch li').removeClass('active');
                $('.contact-page .block-branch .tab-map-wrap').removeClass('on');
                $(this).addClass('active');
                $('.contact-page .block-branch .tab-map-wrap').eq(_index).addClass('on');
            });
        });
    }

    /* jsFormMess
    --------------------------------------------------*/
    var jsFormMess = function(){
        $('.page-messenger').on('click',function(){
            $(this).fadeOut(500);
            $('.page-form').addClass('on');
        });

        $('.page-form .p-close').on('click',function(){
            $('.page-messenger').fadeIn(500);
            $('.page-form').removeClass('on');
        });
    }


    /* jsanchor
    --------------------------------------------------*/
    $(window).scroll(function () {
		var banner = $(".page-title").innerHeight();
		var sbHeight = window.pageYOffset;
		$("#header").addClass("is-fixed");
		if ($(window).scrollTop() === 0) {
			$("#header").removeClass("is-fixed");
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
        jsTabsMap();
        jsInview();
        jsFormMess();
        $('.matchHeight').matchHeight();

        $('.nav-anchor li a').each(function(){
            $(this).on('click',function(){
                var _href = $(this).attr('href');
                $('.nav-anchor li').removeClass('active');
                $(this).parent().addClass('active');
                if($(this).parent().parent().attr('class') === 'anchor-sub') {
                    $(this).parent().parent().parent().addClass('active');
                }
                if($(this).parent().find('ul').length) {
                    $(this).parent().find('ul').find('li').eq(0).addClass('active');
                }
            });
        });

        $('.anchor-list li a').each(function(){
            $(this).on('click',function(){
                var _href = $(this).attr('href');
                $('.anchor-list li').removeClass('active');
                $(this).parent().addClass('active');
                if($(this).parent().parent().attr('class') === 'sub') {
                    $(this).parent().parent().parent().addClass('active');
                }
                if($(this).parent().find('ul').length) {
                    $(this).parent().find('ul').find('li').eq(0).addClass('active');
                }
            });
        });
    

        $.fancybox.defaults.hideScrollbar = false;
        $('[data-fancybox]').fancybox({
            loop : false,
            animationDuration: 500,
        })

    var top = 70;
    /* smooth scroll
    --------------------------------------------------*/
    $("a[href*=\\#]:not([href=\\#])")
        .not(".j-inline, .j-moveTo, .anchor-foot a")
        .click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html,body").animate(
                        {
                            scrollTop: target.offset().top - top,
                        },
                        700
                    );
                    return false;
                }
            }
        });
        
     /* jsslider
    --------------------------------------------------*/
    if($('.tc-slider').length){
        $(".tc-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: 2000,
            speed: 1000,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }

    if($('.slider-img-project').length || $('.slider-img-project').length){
        $(".slider-img-project, .slider-img-project").slick({
            slidesToShow: 3,
            dots: true,
            autoplay: true,
            arrows: true,
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
    }

    if($('.slide-main').length){
        $(".slide-main").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            arrows: true,
            infinite: true,
            autoplaySpeed: 2000,
            speed: 1000,
            pauseOnHover: false,
            // prevArrow: '<span class="prev-arrow"><svg class="page-icon"><use xlink:href="#icon-slider-arrow"></use></svg></span>',
            // nextArrow: '<span class="next-arrow"><svg class="page-icon"><use xlink:href="#icon-slider-arrow"></use></svg></span>',
        });
    }
    if($('.list-project').length){
        $(".list-project").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            arrows: true,
            infinite: true,
            autoplaySpeed: 2000,
            speed: 1000,
            pauseOnHover: false,
            // prevArrow: '<span class="prev-arrow"><svg class="page-icon"><use xlink:href="#icon-arrow-slider-02"></use></svg></span>',
            // nextArrow: '<span class="next-arrow"><svg class="page-icon"><use xlink:href="#icon-arrow-slider-02"></use></svg></span>',
        });
    }

    if($('.list-cooperate').length){
        $(".list-cooperate").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            arrows: true,
            infinite: true,
            autoplaySpeed: 2000,
            speed: 1000,
            pauseOnHover: false,
            prevArrow: '<span class="prev-arrow"><svg class="page-icon"><use xlink:href="#icon-arrow-slider-02"></use></svg></span>',
            nextArrow: '<span class="next-arrow"><svg class="page-icon"><use xlink:href="#icon-arrow-slider-02"></use></svg></span>',
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
    }

    $(".btn-submit").click(function() {
        $(".form-area").show();
    });

    $(".close").click(function() {
        $(".form-area").hide();
    });

});

    $("#files").change(function() {
        filename = this.files[0].name;
    });

    $(function() {
        $(".ttl-accordion").on("click", function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.hasClass("accordion-active")) {
                $(".txt-accordion").slideUp(400);
                $(".ttl-accordion").removeClass("accordion-active");
            }
            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
        });
    });
   

    $(function() {
        $('.ico-menu, .ico-close').on('click', function(){
            $('.h-nav').toggleClass('is-open');
        })

        $(".j-toggle").on("click", function (e) {
            e.preventDefault();
            $(this).parent(".item").addClass("show");
        });


        
       $(".icon-search").on("click",function(){
            var $this = $(this);
            $this.closest("#header").find(".form-search-area").addClass("active");
        });
        $(document).mouseup(function(e) 
        {
            var container = $(".form-search-area form");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $(".form-search-area").removeClass("active");
            }
        });

    });

    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() + 150;
		$('.space-anchor').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
				var _id = $(this).attr('id');
				// console.log(_id);
				$('.nav-anchor li').removeClass('active');
				$('a[href*=\\#'+_id+']').parent().addClass('active');
				var _parent = $('a[href*=\\#'+_id+']').parent().parent();
				if(_parent.hasClass('anchor-sub')){
					_parent.parent().addClass('active');
				}
			}
		});
	}).scroll();
    
})(jQuery);
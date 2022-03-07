(function($){

    /* jsMainVisual
    --------------------------------------------------*/
    var jsMainVisual = function(){
        $('.mv-item').eq(0).addClass('active');
        $('.mainVisual').fullpage({
            normalScrollElements: '.h-nav',
            verticalCentered: true,
            afterLoad: function(anchorLink, index){
                $('.mv-nav .item').removeClass('active');
                $('.mv-nav .item').eq(index-1).addClass('active');
            },
        });
        $('.mv-btn-next').click(function(){
            $.fn.fullpage.moveSectionDown();
        });
    }

    /* jsMvSlider
    --------------------------------------------------*/
    var jsMvSlider = function(){
        $('.mv-slider').slick({
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 2000,
            speed: 1000,
            prevArrow: '<span class="prev-arrow"><svg class="page-icon"><use xlink:href="#icon-slider-arrow"></use></svg></span>',
            nextArrow: '<span class="next-arrow"><svg class="page-icon"><use xlink:href="#icon-slider-arrow"></use></svg></span>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });
    }

    $(document).ready(function() {
        jsMainVisual();
        jsMvSlider();
    });
    
})(jQuery);

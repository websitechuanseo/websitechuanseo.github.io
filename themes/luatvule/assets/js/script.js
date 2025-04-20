(function($){
    var jsEffect = function(){
        $(window).on('scroll load', function(){
            var sc = $(window).scrollTop(),
                wh = window.innerHeight;
            $('.effect, .fadeup').each(function (index, el) {
                var pos = $(this).offset().top;
                if(pos<sc+wh*0.7){
                    $(this).addClass('on');
                }
            });
        });
    }
    jsEffect();

    $("body").append('<span class="backtop" id="backtop"><i class="fas fa-arrow-right"></i></span>');
    $(function () {
        $("#backtop").click(function() {
            $("html, body").animate({ scrollTop : 0 });
            return false;
        });
        var topBtn = $('#backtop');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                topBtn.addClass('on');
            } else {
                topBtn.removeClass('on');
            }
        });
    });
    
    $(window).on('load', function(){
        $('body').addClass('loaded');

        if($('.inp_search').length){
            $('.inp_search').each(function(){
                var val = $(this).val();
                if(val){
                    $(this).parent().addClass('is_val');
                }
            });

            $('.inp_search').on('change keyup',function(){
                var val = $(this).val();
                if(val){
                    $(this).parent().addClass('is_val');
                }else{
                    $(this).parent().removeClass('is_val');
                }
            });
        }

        if($('.js_del').length){
            $('.js_del').on('click',function(){
                $(this).next().val('').trigger('change');
            });
        }
    });

    // $('.js_hdr_search').on('click', function(){
    //     console.log('clicked');
    //     $(this).find('span').toggleClass('hidden');
    //     $('.b_search').toggleClass('show');
    // });

    $('.hdr_btnMenu').on('click',function(){
        $('body').toggleClass('menu_opened');
    });

    $('.sub_btn').on('click',function(){
        $(this).next().slideToggle('200');
        $(this).parent().toggleClass('opened');
    });

    $('.icon_close, .menu_overlay').on('click',function(){
        $('body').removeClass('menu_opened');
    });

    $('.js_slider_staff').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    });

    $('.js_slider_testimonial').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<span class="slick-arrow slick-prev"></span>',
        nextArrow: '<span class="slick-arrow slick-next"></span>',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    });
    
    var uploadFile = $('#inp_attachment');
    uploadFile.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        console.log(filename);
        $('#fileNameUpload').html(filename).slideDown();
    });

})(jQuery);
$(function () {
    var mobileBar = $('.bi.bi-list')
    var mobileMenu = $('.header__container-tablet-tab-clicked')
    var html = $('html')
    var mobileSlides = $('.image-slider')
    var imgs = $('.mobile-slides-item')
    var nextButtonSlide = $('.next-button')
    var prevButtonSlide = $('.prev-button')
    var idx = 0;

    var mobile = {
        runSlide: function() {
            // xử lý slideShow
            function run() {
                ++idx;
                if (idx > imgs.length - 1) {
                    idx = 0
                }
                $(mobileSlides).css({
                    transform: `translateX(${-idx * 382}px)`
                    
                });
            }
            setInterval(run, 4000)
        },
        handleEvent: function() {
            $(mobileMenu).slideUp();
            $(mobileBar).click(function (e) { 
                // e.preventDefault();
                // $(mobileMenu).toggleClass('open');
                $(mobileMenu).slideToggle();
            });

            // click vao airport sẽ mở ra modal
            $('.mobile-open-modal-button').click(function (e) { 
                e.preventDefault();
                $('.modal').addClass('open');
            });

            // open button slide
            $(mobileSlides).click(function (e) { 
                e.stopPropagation();
                $(nextButtonSlide).removeClass('close');
                $(prevButtonSlide).removeClass('close');

                $(nextButtonSlide).addClass('open');
                $(prevButtonSlide).addClass('open');
            });

            $(html).click(function (e) {
                $(nextButtonSlide).removeClass('open');
                $(prevButtonSlide).removeClass('open');

                $(nextButtonSlide).addClass('close');
                $(prevButtonSlide).addClass('close');
            });

            // nút next Slide
            $(nextButtonSlide).click(function (e) { 
                e.stopPropagation()
                ++idx;
                if (idx > imgs.length - 1) {
                    idx = 0
                }
                $(mobileSlides).css({
                    transform: `translateX(${-idx * 382}px)`
                    
                });
            });

            // nút prev Slide
            $(prevButtonSlide).click(function (e) { 
                e.stopPropagation();
                --idx;
                if (idx < 0) {
                    idx = imgs.length - 1
                }
                $(mobileSlides).css({
                    transform: `translateX(${-idx * 382}px)`
                    
                });
            });

        },
        start: function (param) {
            this.runSlide()
            this.handleEvent()
        }
    }

    mobile.start()
});

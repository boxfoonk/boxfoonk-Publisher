var Layout = function () {
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $("body").addClass("header-fixed");
        } else {
            $("body").removeClass("header-fixed");
        }
    };

    var handleSmoothScroll = function() {
        $('.js_nav-item a, .promo-block a').on('click', function(e) {
            var target = $($(this).attr('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - $('.header').height() + 1
                }, 600);
            }
        });
    };
    
    var handleBackToTop = function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.js-back-to-top').fadeIn();
            } else {
                $('.js-back-to-top').fadeOut();
            }
        });
        $('.js-back-to-top').click(function() {
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    };

    var handleParallax = function() {
        if (window.parallax) {
            $('.parallax-window').each(function(){
                var $this = $(this);
                new Parallax($this[0]);
            });
        }
    };
    
    var handleAutoHeight = function() {
        $('[data-auto-height="true"]').each(function() {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var maxHeight = 0;
            items.each(function() {
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });
            items.css('height', maxHeight);
        });
    };

    return {
        init: function () {
            handleHeaderOnScroll();
            $(window).scroll(handleHeaderOnScroll);
            handleSmoothScroll();
            handleBackToTop();
            handleParallax();
            handleAutoHeight();
        }
    };
}();

$(document).ready(function() {
    Layout.init();
});
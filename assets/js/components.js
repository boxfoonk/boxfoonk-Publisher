var Components = function () {
    var handleProgressBar = function() {
        $('.progress-bar').each(function() {
            var $this = $(this);
            $this.appear(function() {
                var width = $this.data('width');
                $this.css('width', width + '%');
            });
        });
    };

    var handleWowAnimation = function() {
        if (window.WOW) {
            new WOW().init();
        }
    };

    var handleMasonry = function() {
        if (typeof imagesLoaded === 'function' && typeof Masonry === 'function') {
            var $container = $('.masonry-grid-container');
            $container.imagesLoaded(function () {
                $container.masonry({
                    itemSelector: '.masonry-grid-item',
                    percentPosition: true
                });
            });
        }
    };

    var handlePopup = function() {
        if ($.fn.magnificPopup) {
            $('.work-popup-trigger').magnificPopup({
                type: 'inline',
                midClick: true,
                mainClass: 'mfp-fade'
            });
        }
    };

    return {
        init: function () {
            handleProgressBar();
            handleWowAnimation();
            handleMasonry();
            handlePopup();
        }
    };
}();

$(document).ready(function() {
    Components.init();
});
require(['config'], function() {
    'use strict';

    require([
            'jquery',
            'modernizr',
            'colorscroll'
    ], function($, ø) {
        function setup_colors() {
            var raw_colors = [
                '#e4e4e4',
                '#c5fafe',
                '#fff8ac',
                '#ffb9ad',
                '#A77BFA',
                '#7DC7F6',
                '#B7CEF8',
                '#c7ffe7',
                '#e4e4e4',
            ];
            if ($(window).width() <= 480) {
                raw_colors = ['#C7F8FE'];
            }

            var colors = [];
            for (var i=0; i<raw_colors.length; i++) {
                colors.push({
                    color: raw_colors[i],
                    position: $(window).height() * i
                });
            };

            $('body').colorScroll({
                colors: colors
            });
        }

        setup_colors();
        $(window).resize(setup_colors);
    });

});

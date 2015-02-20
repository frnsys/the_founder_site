require(['config'], function() {
    'use strict';

    require([
            'jquery',
            'modernizr',
            'colorscroll'
    ], function($, ø) {
        function setup_colors() {
            var raw_colors = [
                '#fff8ac',
                '#c5fafe',
                '#e3c7ff',
                '#c7ffe7',
            ];

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

requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        modernizr: 'vendor/bower/modernizr/modernizr',
        requirejs: 'vendor/bower/requirejs/require',

        colorscroll: 'vendor/bower/colorscroll/dist/jquery.colorscroll.min'
    },
    shim: {
        modernizr: {
            exports: 'Modernizr'
        },
        colorscroll: {
            deps: ['jquery'],
            exports: 'colorscroll'
        }
    }
});

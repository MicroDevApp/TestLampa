(function () {
    'use strict';

    function startPlugin() {
        console.log('Привет от плагина!');
    }

    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') {
                startPlugin();
            }
        });
    }
})();

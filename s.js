(function() {
    'use strict';

    Lampa.Listener.follow('app', function(event) {
        if (event.type === 'ready') {
            Lampa.Noty.show('Мой плагин загружен');
        }
    });
})();
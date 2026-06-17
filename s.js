(function() {
    'use strict';

    function init() {
        console.log('Мой плагин инициализирован');

        // Пример: добавить пункт в меню
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                console.log('Lampa готова!');
            }
        });
    }

    // Правильная проверка
    if (window.Lampa && Lampa.Listener) {
        init();
    } else {
        // Правильное событие
        document.addEventListener('ready', init);
    }
})();
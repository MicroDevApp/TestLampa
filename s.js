(function() {
    'use strict';

    function init() {
        // Добавляем пункт в настройки
        Lampa.Settings.push({
            name: 'Мой плагин',
            label: 'Настройки моего плагина',
            type: 'button',
            onClick: function() {
                alert('Плагин работает! Ура!');
            }
        });
        console.log('Плагин загружен и добавлен в настройки!');
    }

    if (window.lampa) {
        init();
    } else {
        window.addEventListener('lampa:ready', init);
    }
})();
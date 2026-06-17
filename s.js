// @name TestLampa
// @version 1.0.0
// @description Тестовый плагин

(function() {
    'use strict';

    function init() {
        // Ваш код плагина
        console.log('Плагин загружен!');
    }

    // Регистрация в Lampa
    if (window.lampa) {
        init();
    } else {
        window.addEventListener('lampa:ready', init);
    }
})();
(function() {
    'use strict';

    function init() {
        // 1. Добавляем кнопку в раздел настроек
        Lampa.Settings.push({
            name: 'test_lampa_page',
            label: 'Моя страница',
            type: 'button',
            onClick: function() {
                // 2. Создаем и запускаем новую активность (страницу)
                Lampa.Activity.push({
                    url: '',
                    title: 'Приветствие',
                    component: 'test_page',
                    page: 1
                });
            }
        });

        // 3. Регистрируем компонент для отображения нашей страницы
        Lampa.Component.add('test_page', function() {
            var _this = this;

            this.create = function() {
                // Создаем простой HTML-блок с текстом
                var div = document.createElement('div');
                div.style.padding = '50px';
                div.style.textAlign = 'center';
                div.style.fontSize = '30px';
                div.innerHTML = 'Привет!';
                return div;
            };

            this.render = function() {
                return this.create();
            };

            this.destroy = function() {
                // Очистка при закрытии
            };
        });

        console.log('Плагин с кнопкой и страницей загружен!');
    }

    if (window.lampa) {
        init();
    } else {
        window.addEventListener('lampa:ready', init);
    }
})();
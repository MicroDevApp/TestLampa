(function () {
    'use strict';

    function startPlugin() {

        // Регистрируем компонент (страницу) в Lampa
        Lampa.Component.add('hello_page', {
            create: function () {
                var html = '<div style="display:flex; align-items:center; justify-content:center; height:100%; width:100%;">'
                         +   '<h1 style="color:white; font-size:4em; text-align:center;">Привет</h1>'
                         + '</div>';

                this.html = $(html);
            },
            render: function () {
                return this.html;
            },
            pause: function () {},
            resume: function () {},
            destroy: function () {}
        });

        // Добавляем пункт в боковое меню
        Lampa.Menu.add({
            title: 'Привет',
            icon:  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
                 +   '<path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/>'
                 + '</svg>',
            order: 100,
            component: 'hello_page'
        });

        console.log('HelloPlugin: загружен');
    }

    // Запускаем после готовности приложения
    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                startPlugin();
            }
        });
    }

})();
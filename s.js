(function () {
    // Ждем полной загрузки приложения
    Lampa.listener.follow('app', function (e) {
        if (e.type == 'ready') {
            console.log('Плагин загружен!');
            
            // Добавим кнопку в главное меню
            var button = $('<div class="menu__item selector focus">Мой плагин</div>');
            
            button.on('hover', function() {
                // Действие при наведении
            });

            button.on('click', function() {
                // Действие при клике
                Lampa.Noty.show('Привет из моего плагина!');
            });

            $('.menu__list').append(button);
        }
    });
})();

### ссылка на пр четвертого спринта: https://github.com/vasilek-liza/middle.messenger.praktikum.yandex/pull/5
### учебный проект: веб-приложение "Чат"

### ссылка на задеплоенный проект: https://sparkling-beignet-d22662.netlify.app

Используемые технологии: 

JavaScript, SCSS, Vite, Express, Handlebars

Версия node, необходимая для нормальной работоспособности: v18.13.0

Для запуска команда:  
### npm run start

Для сборки проекта команда: 
### npm run build

ui взят из готовых решений https://www.figma.com/file/gInPV4WCF3QRHO7mSzdh3X/messeger?type=design&node-id=0-1&t=2J7PUfL7Th9ISmrv-0

Ссылки на все свёрстанные страницы:

Профиль https://sparkling-beignet-d22662.netlify.app/profile

Чаты  https://sparkling-beignet-d22662.netlify.app/chats

Ошибка 404 https://sparkling-beignet-d22662.netlify.app/not-found

Ошибка 500 https://sparkling-beignet-d22662.netlify.app/error

Войти https://sparkling-beignet-d22662.netlify.app/login

Зарегистрироваться https://sparkling-beignet-d22662.netlify.app/signup

Изменить пароль https://sparkling-beignet-d22662.netlify.app/change-password

Изменить профиль https://sparkling-beignet-d22662.netlify.app/change-user-data



Реализован сбор данных из форм и валидация

Сделана страница со списком чатов

Добавлен класс для работы с запросами

Добавлен компонентный подход

Добавлен роутинг

Реализована авторизация (регистрация, авторизация, выход из системы);

Добавлена возможность работы с информацией пользователя (изменять данные пользователя, изменять аватар, изменять пароль);

Добавлена работа с чатами (список чатов пользователя, создать новый чат, добавить пользователя в чат, удалить пользователя из чата).

Подключены WebSocket


Настроен pre-commit

Произведен audit пакетов

Тестами покрыты роутер, компонент Button и Link, модуль отправки запросов, set из utils. Используется Mocha и Chai. 

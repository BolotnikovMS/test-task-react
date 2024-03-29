# Задание по React.
Всем привет👋! Продолжаю изучать React и в качестве практики разрабатываю проект по заданию.

## Описание задачи.
Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):
1. Список постов (главная страница), где будут располагаться все посты.
2. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов).
3. Страница с пользователями.
Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com.

## Подробное описание
1. Список постов (главная страница)
    1. Должна содержать список всех постов. ✅
    2. Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев. ✅
    3. Заголовок и текст брать из api. ✅
    4. Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе. ✅
    5. Список комментариев изначально скрыт, доступна лишь кнопка Комментарии. ✅
    6. При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться. ✅
    7. Комментарий состоит из заголовка(email) и текста.+
    8. При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше). ✅
    9. Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.
    10. Должна присутствовать возможность поиска по заголовку поста, с возможностью очистки поля через крестик. ✅
    11. Должна присутствовать возможность сортировки по заголовку поста. ✅
    12. Должна присутствовать пагинация. ✅
2. Подробности о пользователе (переход при нажатии по аватару у поста) ✅
    1. Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста. ✅
    2. Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2. ✅
    3. Добавить лоадер по аналогии с п.1.8. ✅
    4. Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу. ✅

### P.S:
1. В качестве основы можно взять шаблон React App.  
*В качестве основы мною был использован vite.*
2. Вынесите логику работы с сервером в saga-эффекты.  
*Пока еще не изучил данную тему :(*
3. Обязательно разбейте логически-независимые элементы страниц на компоненты. ✅
4. На странице Подробности о пользователе данные должны подгружаться даже после обновления этой страницы. ✅
5. Весь интерфейс реализуйте с помощью ui-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).  
*На данный момент сверстал интерфейс без ui-библиотек.*
6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).
7. Сделайте обработку ошибок на случай прихода ошибки от сервера. ✅
8. Верстка должна выглядеть хорошо для маленьких и больших экранов устройств. ✅
# Фреймворки
jQuery UI, ext js – это скорее библиотеки компнентов.

# Backbone + Marionette
Кантор рекомендует не пользоваться и не изучать. Ангуляр, говорит, лучше.
Ангуляр топовый.
Эмбер тоже, вроде, ничего, но никогда не использовал.

Эти фреймворки — архитектурные.

# React
Virtual DOM. Собрать новый дом, сравнить со станым и показать только то, что изменилось.
Свой язык JSX с шаблонизатором HTML.
Впечатление — пиздец. Ну его нахер.
Минус - сложно интегрировать готовые компоненты (ext, jquery ui). Надо делать самому.

В качестве архитектурного решения для реакта сам Фб рекомендует Flux.
Flux - архитектура. Сам реакт — это V в MVC.

# Освоение
Полгода – освоить фреймворк.
Определиться со сферами задач и потом уже осваивать.


# Angular
Он перебирает данные, сравнивает что изменилось и отрисовывает их.
Есть роутер: какой ф-и соответствует определенный урл через history api.

# Polymer
Хороший прототип для веб-компонентов. На проде как-то не используют.
Хорошо поиграться, получить обратную связь для разработки стандартов.
Весьма ограничен по сравнению с Ангуляром и реактом.

# Поисковики
Надо спец сервис, который генерит готовый html для поисковиков.
prerender.io - пример
Или можно сделать на Phantom js.

HTML5 history API
# Let в замыканиях
Переписать армию функций через let.
Там будет работать просто без всяких костылей.
Потому что `let a` создается для каждого блока. Для кажого прогона for будет создана своя область видимости на уровне
языка. А через замыкания мы делаем то же самое руками через LE функции.
Где-то 20-я минута записи.

# Интернационализация
Браузеры поддерживают интернационализацию. В учебнике есть про это раздел: https://learn.javascript.ru/intl

Сафари не поддерживает Intl. Есть добавлятор: https://github.com/andyearnshaw/Intl.js/ - тут и валюта и даты и пр.

Для дат momentjs.com рекомендует (ребята из Оджетты про нее говорили). Крутая библиотека для работы с датами. Она не 
тяжелая, главное не тянуть лишние локали.

# Методы массива: filter

    let arr = [null, 2, 3, null];
    arr.filter(Boolean); // отфильтрует только те, которые не пустые. Финт такой.
    
# Преобразование к булевому
Можно делать через `!!val`, но Илья стал использовать `Boolean(val)`. Так понятнее.

# Замыкания
[[Scope]] в функциях в новом стандарте стало [[External]].


# Методы объектов
Современный JS: rest-оператор:

    function showArgs(...args) { // ...args - получить все аргументы в виде массива
        alert( args.join() );
    }
    
    function showArgs(a, b, ...args) { // a, b - осталось так, остальное - записалось в массив args
        alert( args.join() );
    }
    
    showArgs(1, 2, 3, 4, 5);
    
    
# 4 способа задания this
Просто ф-я без объекта (this undefined/window)
Через obj.method - объект слева от точки
call/apply - явно передаем
new Constructor - новый объект
    
# Методы в современном JS

    let calc = {
        read() { // вместо read: function() {}
            this.a = +prompt();
        }
    }
    
    
    
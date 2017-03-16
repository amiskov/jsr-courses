// Строка с пробелами - тру! Только пустая строка '' - false
var a = 1 && '  ' && 0 && 3; // => 0 

// && - более высокий приоритет. Выполняется раньше ||

/*
    && - ищет первое ложное
    || - идет первое тружное
 */

// В ES6 есть еще тип Symbol

// Ничего не присвоено - undefined. В явном виде не присваивают. Используется для проверки, есть ли значение.
// null - используется в явном виде. Присваиваем в переменную, когда значение не известно. var age = null; (если не
// знаем)

// true + false = 1


let a = 1; // видно только в блоке кода. Ее не будет видно после if:
if (...) {
    let a;
}
// Тут ее уже не видно.


"use strict" еще надо использовать. В том числе для работы с ES6.
Так же он включается автоматически при использовании новых возможностей (let, class и пр.)

# Babel
var - старая школа. В новом js его можно вообще не использовать.
let - новая школа. Полностью заменяет var.

# Mocha, тестирование
mocha
jasmine

Некотоыре переходили: jasmine -> mocha
А так не было jasmine <-/- mocha
Можно сделать вывод, что mocha лучше.


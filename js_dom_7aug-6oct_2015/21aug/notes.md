# apply/call

    function f(a, b, c) {
        console.log(this, a, b, c);
    }
    // f(1, 2, 3)
    f.call('THIS', 1, 2, 3);

`apply` вместо аргументов передает массив.

В современном JS используется редко. Есть spread:

    function f(a, b, c) {
        console.log(this, a, b, c);
    }
    var arr = [1, 2, 3];
    f(...arr)

    var arr = [1, 2, 3]
    Math.max(...arr); // передаются элементы массива по отдельности, как аргументы.
                      // Раньше так можно было делать только через apply.
    
    // ... — спец оператор spread



    function bind(ctx, f) { // ctx - контекст
        return function() {
            return f.apply(ctx, arguments);
        }
    }
    var user = {
        sayHi() {
            alert(this.firstName);
        },
        firstName: "Vasya"
    };
    setTimeout(f.bind(user), 1000); // привязка контекста

# Тесты, подмена функции
sinon - библиотека для замены функционала, который нельзя оттестить автоматически.
sinon.stub(window, "prompt") // Вместо prompt запускать заглушку в дальнейшем коде.

До тестов нужно ее сделать, после тесто — снять: stub/restore.

# Декораторы
Декораторы часто используются при тестировании. Оборачивают функцию и шпионят за ней:

    function sum(a, b) { return a + b; }
    sum = sinon.spy(sum);
    sum.args; sum.isCalled;
    
Они модифицируют поведение функции, не меняя ее основную работу.    

ДЗ будет про нужные на фронтэнде декораторы. Про setTimeout, задача Тормозилка.

Функция bind - это декоратор (см. этот файл вверху).

# ООП
Когда сущности — объекты и они взаимодействуют между собой.





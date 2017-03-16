# Arrow function
Рассмотрим такую функцию (декоратор):

    function delayFunc(f, delay) {
        return function() {
            var context = this;
            var args = arguments;
            
            setTimeout(function() {
                f.apply(context, arts); // Чтобы сохранить this из обертки
            });
        }
    }
    
Нынче модно запускать ф-и так:

    !function() {
    }();

Функция `=>` из Es6:
    
    var f = (a, b) => a + b;
    f(1, 2); // 3
    
С одним аргументом:
    
    var double = a => a * 2; // получить a и умножить его на 2
    double(2); // 4
    
Большая ф-я. Нужны скобки - есть скобки - надо делать ретурн:

    var double = a => {
        return a * 2;
    }

У ф-и `=>` отсутствуют `this` и `arguments`. Это означает, что при передаче можно делать так:
    
    function delayFunc(f, delay) {
        return function() { // this и arguments стрелка возьмет отсюда
            setTimeout(() => {
                f.apply(this, arguments); // Стрелка берет this и arguments снаружи и не создает свои.
            });
        }
    }
    
Можно сказать, что стрелка берет this и arguments из замыкания. Из внешней функции.

# Lodash
В ней есть хорошая тормозилка. `_.throttle`.

# ООП
Функциональный стиль ООП - через конструктор.

Внешний интерфейс - то, что доступно снаружи: this.functionName = ...
Внутренний — с наружи не видно.

Внутренний интерфейс можно переделывать. А внешний может использоваться кем-то. Поэтому важно понимать, что выносить,
а что нет. Это Инкапсуляция (внутренние данные объекта не видны снаружи).

Определить геттеры и сеттеры для свойства:

    var waterAmount; // Хранится количество воды
    Object.defineProperty(this, 'waterAmount', {
        get() {
            return waterAmount;
        },
        set() {
            // проверяем адекватность значения
        });
        
    this.power = function() { ... } // Это олдскул. Нынче либо чере дескриптор wriatable = false или через геттер.
        writable = false и this.power - для огарничения, только геттер.
        
        
Еще про стрелку:
        
      function getBoilTime() {
          return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
      }
      var getBoilTime = () => {
          return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
      }
        
        

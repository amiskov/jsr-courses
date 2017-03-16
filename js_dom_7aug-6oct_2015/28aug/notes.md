Запись: 2015_08_29_2130

# Тесты, библиотека Sinon
sinon.useFakeTimers(); - чтобы не ждать setTimeout в коде.
this.clock.tick(100); // прошло 100 мс

# Прототипы
Прототип — специальная ссылка.

    var animal = { canWald: true };
    var rabbit = { canJump: true };
    rabbit.__proto__ = animal;
    rabbit.canWalk; // true
    delete rabbit.canWalk; // работает только для rabbit, не полезет в animal. Так же и с записью.
    rabbit.canWalk; // true, так и осталось

При создании объекта конструктором, с помощью свойства `prototype` можно указать, какой `__proto__` будет у 
создаваемых им объектов:

    function Animal(name) {
        this.name = name;
        
        // this.__proto__ = { ... } // так обычно не делают. не работает в ИЕ до 11
    }
    Animal.prototype = {
        canWalk: true
    };
    
    var animal = new Animal("Шарик");
    animal.canWalk; // true
    
    animal.__proto__ === Animal.prototype

Посмотреть прототип:

    Object.getPrototypeOf(animal); // это так, чтоб знать. Редко так надо делать

У все объектов есть в самом низу `Object.ptototype`, который встроен в язык.

Вопросы, которые Илья задавал в лекции:
1. /task/prototype-after-new

rabbit.__proto__ и Rabbit.prototype — это просто _ссылки_ на объект. Это не объекты. Это ссылки. Меняем Rabbit
.prototype, ну ладно, эта ссылка изменилась, а ссылка rabbit.__proto__ осталась прежней.

# Есть конструктор без prototype

    function Animal() {
        eats: true
    }
    // не указываем Animal.prototype
    var animal = new Animal();
    animal.__proto__; // Здесь, все-таки, будет Animal, по сколько по умолчанию у каждого конструктора есть свойство
                      // Animal.prototype.constructor === Animal (указывает на функцию)

# Чем прототипы лучше функционального ООП
Экономия ресурсов. Методы и свойства беруться из прототипа.
Наследование.

# Наследование
См. /native-prototypes в учебнике (картинку).

Разбираться с наследованием в JS проще всего на том, что уже встроено в JS. У нас будет так же, только со своими 
объектами и конструкторами.

Тут же про `hasOwnProperty`.

    // наследование от Animal
    function Rabbit(name) {
        Animal.call(this, name); // Специфичные для каждого объекта свойства
    }
    Rabbit.prototype.__proto__ = Animal.prototype;  // не поддерживается старыми ИЕ
    Rabbit.prototype = Object.create(Animal.prototype); // Работает с ИЕ9
    
    Rabbit.prototype = {
        jump() {
            alert('I jump "  + this.name);
        }
    }
    
Обычно используют прототипный стиль. Функциональный — для существующего кода.    

Функиональный стиль — все в объекте.
Прототипный стиль — в объекте только то, что надо каждому объекту, а все общие методы — в прототип.

# ES6
См. папку class:

    class Animal {
        constructor(name) {
            this.name = name;
        }
        
        walk() {
            alert('I walk: ' + this.name);
        }
    }
    
    class Rabbit extends Animal {
        // конструктор унаследуется от Animal
        jump() {
            alert('I jump: ' + this.name);
        }
    }

Под капотом происходит то же, что и раньше: прототипы и конструкторы. Это просто синтаксические улучшения.

приватные свойства — как и раньше через подчеркивание. Геттеры и сеттеры — защита и проверка.

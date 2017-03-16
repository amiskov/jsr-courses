"use strict";

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        alert('I walk: ' + this.name);
    }

    get food() { // свойство через геттер
        return "Animal food";
    }
}

class Rabbit extends Animal {
    // конструктор унаследуется от Animal
    jump() {
        alert('I jump: ' + this.name);
    }

    // переопределение
    //walk() {
    //    alert('Rabbit walks');
    //}

    // Расширение метода
    walk() { // в class надо имено так, а не через функцию
        super.walk(); // запустим сначала то, что в родителе. super - обращение к родителю
        alert('Rabbit walks');
    }
}

var rabbit = new Rabbit('Krolik');
rabbit.walk();
console.dir(rabbit);
alert(rabbit.food);

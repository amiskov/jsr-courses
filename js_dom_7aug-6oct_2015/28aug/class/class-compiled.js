"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = (function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: "walk",
        value: function walk() {
            alert('I walk: ' + this.name);
        }
    }, {
        key: "food",
        get: function get() {
            // свойство через геттер
            return "Animal food";
        }
    }]);

    return Animal;
})();

var Rabbit = (function (_Animal) {
    _inherits(Rabbit, _Animal);

    function Rabbit() {
        _classCallCheck(this, Rabbit);

        _get(Object.getPrototypeOf(Rabbit.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Rabbit, [{
        key: "jump",

        // конструктор унаследуется от Animal
        value: function jump() {
            alert('I jump: ' + this.name);
        }

        // переопределение
        //walk() {
        //    alert('Rabbit walks');
        //}

        // Расширение метода
    }, {
        key: "walk",
        value: function walk() {
            // в class надо имено так, а не через функцию
            _get(Object.getPrototypeOf(Rabbit.prototype), "walk", this).call(this); // запустим сначала то, что в родителе. super - обращение к родителю
            alert('Rabbit walks');
        }
    }]);

    return Rabbit;
})(Animal);

var rabbit = new Rabbit('Krolik');
rabbit.walk();
console.dir(rabbit);
alert(rabbit.food);

//# sourceMappingURL=class-compiled.js.map
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Carousel = (function () {
    function Carousel(options) {
        var _this = this;

        _classCallCheck(this, Carousel);

        this.elem = options.elem;
        this.list = this.elem.querySelector('ul');
        this.listElems = this.list.querySelectorAll('li');

        this.position = 0;
        this.width = options.width || 130;
        this.count = options.count || 3;

        // TODO: Использовать делегирование
        this.elem.querySelector('.prev').addEventListener('click', function (e) {
            return _this.shiftLeft();
        });
        this.elem.querySelector('.next').addEventListener('click', function (e) {
            return _this.shiftRight();
        });
    }

    _createClass(Carousel, [{
        key: 'shiftLeft',
        value: function shiftLeft() {
            this.position = Math.min(this.position + this.width * this.count, 0);
            this.list.style.marginLeft = this.position + 'px';
        }
    }, {
        key: 'shiftRight',
        value: function shiftRight() {
            this.position = Math.max(this.position - this.width * this.count, -this.width * (this.listElems.length - this.count));
            this.list.style.marginLeft = this.position + 'px';
        }
    }]);

    return Carousel;
})();

var carouselElem = document.getElementById('carousel');
new Carousel({
    elem: carouselElem
});

//# sourceMappingURL=carousel-compiled.js.map
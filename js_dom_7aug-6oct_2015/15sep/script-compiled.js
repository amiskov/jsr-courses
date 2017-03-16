"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Menu = (function () {
    function Menu(options) {
        var _this = this;

        _classCallCheck(this, Menu);

        this.elem = options.elem;
        this.titleElem = this.elem.querySelector('.title');

        //this.titleElem.onclick = this.onTitleClick.bind(this); // аналогично следующей строке
        //this.titleElem.onclick = (e) => this.onTitleClick(e);

        this.titleElem.addEventListener('click', function (e) {
            return _this.toggle();
        }); // Хорошо выносить обработчик в отдельную ф-ю
        // Экономит время при чтении
    }

    _createClass(Menu, [{
        key: 'toggle',
        value: function toggle() {
            this.elem.classList.toggle('open');
        }
    }]);

    return Menu;
})();

var menuElem = document.getElementById('sweeties');
new Menu({
    elem: menuElem
});

//# sourceMappingURL=script-compiled.js.map
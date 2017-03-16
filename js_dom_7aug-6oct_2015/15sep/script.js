"use strict";
class Menu {
    constructor(options) {
        this.elem = options.elem;
        this.titleElem = this.elem.querySelector('.title');

        //this.titleElem.onclick = this.onTitleClick.bind(this); // аналогично следующей строке
        //this.titleElem.onclick = (e) => this.onTitleClick(e);

        this.titleElem.addEventListener('click', (e) => this.toggle()); // Хорошо выносить обработчик в отдельную ф-ю
                                                                        // Экономит время при чтении
    }

    toggle() {
        this.elem.classList.toggle('open');
    }
}

var menuElem = document.getElementById('sweeties');
new Menu({
    elem: menuElem
});
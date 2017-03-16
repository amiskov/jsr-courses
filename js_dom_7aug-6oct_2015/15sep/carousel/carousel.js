class Carousel {

    constructor(options) {
        this.elem = options.elem;
        this.list = this.elem.querySelector('ul');
        this.listElems = this.list.querySelectorAll('li');

        this.position = 0;
        this.width = options.width || 130;
        this.count = options.count || 3;

        // TODO: Использовать делегирование
        this.elem.querySelector('.prev').addEventListener('click', (e) => this.shiftLeft());
        this.elem.querySelector('.next').addEventListener('click', (e) => this.shiftRight());
    }

    shiftLeft() {
        this.position = Math.min(this.position + this.width * this.count, 0);
        this.list.style.marginLeft = this.position + 'px';
    }

    shiftRight() {
        this.position = Math.max(this.position - this.width * this.count, -this.width * (this.listElems.length - this.count));
        this.list.style.marginLeft = this.position + 'px';
    }
}

var carouselElem = document.getElementById('carousel');
new Carousel({
    elem: carouselElem
});

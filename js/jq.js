function $(selector) {
    let element;
    if (typeof selector === 'string') {
        element = document.querySelectorAll(selector)
    } else if (selector instanceof HTMLElement){
        element = [selector];
    }
    return new JQ(element);
}

function JQ(params) {
    this.element = params;
    this.start = function (event, callBckFunc) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBckFunc);
        }
    }
    this.classAdd = function (nameClass) {
        if (typeof nameClass === 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(nameClass)) {
                    this.element[i].classList.add(nameClass);
                    console.log('Добавление класса было проведено успешно');
                } else{
                    this.element[i].classList.add(nameClass);
                    console.log('Добавление класса было проведено успешно');
                }
            }
        }
    }
    this.classRemove = function (nameClass) {
        if (typeof nameClass === 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(nameClass)) {
                    this.element[i].classList.remove(nameClass);
                    console.log('Удаление класса было проведено успешно');
                } else{
                    this.element[i].classList.remove(nameClass);
                    console.log('Удаление класса было проведено успешно');
                }
            }
        }
    }
    this.html = function (html) {
        if (typeof html === 'string' || typeof html === 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;
            }
        } else if(html === undefined){
            return this.element[0].innerHTML;
        }
    }
}
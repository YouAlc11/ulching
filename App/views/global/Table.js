export class Table {
    constructor() {
        this.element = document.createElement('table');
        this.element.className = 'table table-bordered';
        this.element.innerHTML = ``;
    }
}
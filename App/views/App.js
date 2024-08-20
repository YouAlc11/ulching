import { Topbar } from './layout/Topbar.js';
import { MainNav } from './layout/MainNav.js';

export class App {
    constructor() {
        this.topbar = new Topbar();
        this.mainNav = new MainNav();
    }

    render() {
        const appElement = document.createElement('div');
        appElement.className = 'wrapper';

        const containerElement = document.createElement('div');
        containerElement.className = 'page-content';
        containerElement.id = 'container-components';
        appElement.appendChild(this.topbar.render());
        appElement.appendChild(this.mainNav.render());
        appElement.appendChild(containerElement);

        return appElement;
    }
}
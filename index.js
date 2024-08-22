import { App } from './App/components/App.js';

const app = new App();
document.body.innerHTML = '';
document.body.className = '';
document.body.appendChild(app.render());
const vendor = document.createElement('script');
vendor.src = 'resources/assets/js/vendor.js';
document.body.appendChild(vendor);
const appS = document.createElement('script');
appS.src = 'resources/assets/js/app.js';
document.body.appendChild(appS);
import { Signin } from "./Signin.js";

function changeFrame() {
    const script = document.querySelector('script[src="App/views/signin/Main.js"]');
    // Verifica que el script exista antes de intentar eliminarlo
    if (script) {
        script.remove(); // Elimina el nodo
    }

    const scriptNew = document.createElement('script');
    scriptNew.src = 'index.js';
    scriptNew.type = 'module';
    document.body.appendChild(scriptNew);
}

function changeSingUp() {
    const script = document.querySelector('script[src="App/views/signin/Main.js"]');
    // Verifica que el script exista antes de intentar eliminarlo
    if (script) {
        script.remove();
    }
    const scriptNew = document.createElement('script');
    scriptNew.type = 'module';
    scriptNew.src = 'App/views/signup/Main.js';

    document.body.appendChild(scriptNew);
}

document.addEventListener('DOMContentLoaded', () => {
    const signin = new Signin();
    document.body.innerHTML = '';
    document.body.className = 'authentication-bg';
    document.body.appendChild(signin.render());
    signin.bindEventsLogin((event) => changeFrame(event));
    signin.bindEventsSignUp((event) => changeSingUp(event));
});
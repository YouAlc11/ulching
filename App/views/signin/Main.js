import { Signin } from "./Signin.js";

function changeFrame() {
    const script = document.querySelector('script[src="App/views/signin/Main.js"]');
    // Verifica que el script exista antes de intentar eliminarlo
    if (script) {
        script.remove(); // Elimina el nodo
        console.log('Script eliminado');
    } else {
        console.log('El script no fue encontrado');
    }

    const scriptNew = document.createElement('script');
    scriptNew.src = 'index.js';
    scriptNew.type = 'module';
    document.body.appendChild(scriptNew);
}

document.addEventListener('DOMContentLoaded', () => {
    const signin = new Signin();
    document.body.innerHTML = '';
    document.body.appendChild(signin.render());
    signin.bindEvents((event) => changeFrame(event));
});
export class addLibrary {
    constructor(arrLibraries) {
        if (Array.isArray(arrLibraries)) {
            arrLibraries.forEach(element => {
                let srcExist = document.querySelector(`script[src="${element}"]`);
                if (!srcExist) {
                    this.script = document.createElement('script');
                    this.script.src = `${element}`;
                    document.body.appendChild(this.script);
                }
            });
        }
        else {
            console.error("Las librerias que estas intentando cargar no son un arreglo");
        }
    }
}
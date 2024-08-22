
function get_component(uri, className, container) {
    const rootPath = `${window.location.protocol}//${window.location.host}/App/views/`;
    let url = rootPath + uri;
    // Importar dinámicamente el módulo usando la URI proporcionada
    import(url)
        .then((module) => {
            // Crear una instancia de la clase de forma dinámica usando el nombre de la clase
            const ClassToInstantiate = module[className];
            if (!ClassToInstantiate) {
                throw new Error(`Clase ${className} no encontrada en el módulo ${uri}`);
            }
            const instance = new ClassToInstantiate();

            // Añadir la instancia al DOM
            const containerComponent = document.getElementById(container);
            containerComponent.innerHTML = '';
            containerComponent.appendChild(instance.render());

        })
        .catch((error) => {
            console.error('Error al cargar el módulo o al instanciar la clase:', error);
        });
}


function navigateTo(url, container, method) {
    // Actualiza la URL en la barra de navegación sin recargar la página
    //window.history.pushState({}, '', url);
    showContent(url, container, method);  // Llama a la función para mostrar el contenido correcto
}

function showContent(url, container, method) {

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        // `data` debe ser un objeto con la información que quieres enviar
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }
            return response.text();
        })
        .then(data => {
            const containerFetch = document.getElementById(container);
            containerFetch.innerHTML = data;
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
        });
}

function set_component(url, container, method) {
    navigateTo(url, container, method);
}

document.addEventListener('DOMContentLoaded', function () {
    // Maneja la navegación del historial (botones de atrás/adelante)
    window.addEventListener('popstate', function () {
        showContent(location.pathname);  // Muestra el contenido basado en la URL actual
    });

    // Mostrar el contenido correcto al cargar la página
    showContent(location.pathname);
});
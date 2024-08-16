function navigateTo(url) {
    // Actualiza la URL en la barra de navegación sin recargar la página
    window.history.pushState({}, '', url);
    showContent(url);  // Llama a la función para mostrar el contenido correcto
}

function showContent(url) {
    // Ocultar todos los divs
    document.querySelectorAll('#app > div').forEach(div => div.classList.remove('active'));

    // Mostrar el div correspondiente basado en la URL
    if (url === '/users') {
        fetch('/users') // Reemplaza con la URL real de la API
        .then(response => response.text())
        .then(data => {
            const usuariosDiv = document.getElementById('usuarios');
            usuariosDiv.classList.add('active');

            // Suponiendo que `data` es una lista de usuarios
            let usersHtml = '<h1>Usuarios</h1><ul>';
            data.forEach(user => {
                usersHtml += `<li>${user.name}</li>`; // Suponiendo que los objetos tienen una propiedad `name`
            });
            usersHtml += '</ul>';

            usuariosDiv.innerHTML = usersHtml;
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
        });
    } else if (url === '/prueba.php') {
        document.getElementById('prueba').classList.add('active');
    } else {
        document.getElementById('inicio').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Asigna el evento click a los enlaces con data-link
    document.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Previene la recarga de la página
            navigateTo(this.getAttribute('href'));  // Navega a la nueva URL
        });
    });

    // Maneja la navegación del historial (botones de atrás/adelante)
    window.addEventListener('popstate', function() {
        showContent(location.pathname);  // Muestra el contenido basado en la URL actual
    });

    // Mostrar el contenido correcto al cargar la página
    showContent(location.pathname);
});
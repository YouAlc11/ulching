<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación</title>
    <style>

    </style>
</head>

<body>
    <header>
        <nav>
            <a href="/" data-link>Inicio</a>
            <button onclick="set_component('/users', 'usuarios', 'GET')">Usuarios</button>
            <button onclick="set_component('/users/add', 'usuarios', 'POST')">Usuarios</button>
            <button onclick="set_component('/users/redirectProductos', 'usuarios', 'GET')">Vista</button>
        </nav>
    </header>
    <main id="app">
        <div id="inicio">
            <h2>hols</h2>
            <h1>Inicio</h1>
            <p>Bienvenido a la página principal asdfasdfasdfasdf.</p>
        </div>
        <div id="usuarios">
            <h1>Usuarios</h1>
            <p>Contenido relacionado con los usuarios.</p>
        </div>
        <div id="prueba">
            <h1>Prueba</h1>
            <p>Esto es una prueba.</p>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>

</html>
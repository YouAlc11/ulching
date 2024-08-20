<?php

class Route
{
    private static $routes = [];
    private static $viewRoutes = [];

    public static function get($uri, $controllerAction)
    {
        self::$routes['GET'][$uri] = $controllerAction;
    }

    public static function post($uri, $controllerAction)
    {
        self::$routes['POST'][$uri] = $controllerAction;
    }

    public static function view($uri, $viewPath)
    {
        self::$viewRoutes[$uri] = $viewPath;
    }

    public static function dispatch()
    {
        $requestUri = explode('?', $_SERVER['REQUEST_URI'])[0];
        $requestMethod = $_SERVER['REQUEST_METHOD'];

        // Intentar encontrar una coincidencia exacta
        if (array_key_exists($requestUri, self::$routes[$requestMethod])) {
            self::executeAction(self::$routes[$requestMethod][$requestUri]);
            return;
        }

        // Intentar encontrar una coincidencia con una ruta dinámica
        foreach (self::$routes[$requestMethod] as $route => $controllerAction) {
            $pattern = preg_replace('/\(:num\)/', '([0-9]+)', $route);
            $pattern = str_replace('/', '\/', $pattern);
            $pattern = '/^' . $pattern . '$/';

            if (preg_match($pattern, $requestUri, $matches)) {
                array_shift($matches); // Remover el primer elemento que es la URI completa
                self::executeAction($controllerAction, $matches);
                return;
            }
        }

        // Intentar encontrar una vista
        if (array_key_exists($requestUri, self::$viewRoutes)) {
            require_once self::$viewRoutes[$requestUri];
        } else {
            self::send404("Route $requestUri not defined");
        }
    }

    private static function executeAction($controllerAction, $params = [])
    {
        $action = explode('@', $controllerAction);
        $controllerFile = __DIR__ . '/../../App/controllers/' . $action[0] . '.php';
        $controllerClass = $action[0];
        $method = $action[1];

        if (file_exists($controllerFile)) {
            require_once $controllerFile;

            if (class_exists($controllerClass)) {
                $controller = new $controllerClass;

                if (method_exists($controller, $method)) {
                    call_user_func_array([$controller, $method], $params);
                } else {
                    self::send404("Method $method not found in controller $controllerClass");
                }
            } else {
                self::send404("Class $controllerClass not found");
            }
        } else {
            self::send404("Controller file $controllerFile not found");
        }
    }

    private static function send404($message)
    {
        http_response_code(404);
        echo "<h1>404 Not Found</h1><p>$message</p>";
        exit();
    }
}

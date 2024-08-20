export class Signin {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'account-pages pt-2 pt-sm-5 pb-4 pb-sm-5';
        this.element.innerHTML = `<div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-5">
                                            <div class="card auth-card">
                                                <div class="card-body px-3 py-5">
                                                    <div class="mx-auto mb-4 text-center auth-logo">
                                                        <a href="index.html" class="logo-dark">
                                                            <img src="../../../resources/assets/images/logo-sm.png" height="30" class="me-1" alt="logo sm" />
                                                            <img src="../../../resources/assets/images/logo-dark.png" height="24" alt="logo dark" />
                                                        </a>

                                                        <a href="index.html" class="logo-light">
                                                            <img src="../../../resources/assets/images/logo-sm.png" height="30" class="me-1" alt="logo sm" />
                                                            <img src="../../../resources/assets/images/logo-light.png" height="24" alt="logo light" />
                                                        </a>
                                                    </div>

                                                    <h2 class="fw-bold text-center fs-18">
                                                        Inicio de Sesión
                                                    </h2>
                                                    <p class="text-muted text-center mt-1 mb-4">
                                                        Ingresa tu correo electronico o tu usuario para ingresar.
                                                    </p>

                                                    <div class="px-4">
                                                        <form action="https://techzaa.getappui.com/reback/admin/index.html"
                                                            class="authentication-form">
                                                            <div class="mb-3">
                                                                <label class="form-label" for="example-email">Email</label>
                                                                <input type="email" id="example-email" name="example-email" class="form-control"
                                                                    placeholder="Usuario / Email" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label class="form-label" for="example-password">Contraseña</label>
                                                                <input type="password" id="example-password" class="form-control"
                                                                    placeholder="Ingresa tu contraseña" />
                                                            </div>
                                                            

                                                            <div class="mb-1 text-center d-grid">
                                                                <button class="btn btn-primary" type="button" id="btn-submitLogin">
                                                                    Sign In
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <!-- end col -->
                                                </div>
                                                <!-- end card-body -->
                                            </div>
                                            <!-- end card -->

                                            <p class="text-white mb-0 text-center">
                                                New here?
                                                <a href="auth-signup2.html" class="text-white fw-bold ms-1">Sign Up</a>
                                            </p>
                                        </div>
                                        <!-- end col -->
                                </div>
                                <!-- end row -->
                            </div>`;
    }

    bindEvents(callback) {
        const btnSubmitLogin = this.element.querySelector('#btn-submitLogin');
        if (btnSubmitLogin) {
            btnSubmitLogin.addEventListener('click', callback);
        } else {
            console.error('No se pudo encontrar el elemento de filtro para agregar el evento change.');
        }
    }

    render() {
        return this.element;
    }
}
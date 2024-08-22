export class FormUser {
    constructor() {
        this.element = document.createElement('form');
        this.element.id = 'form-user';
        this.element.innerHTML = `<form class="authentication-form">
                                    <div class="mb-3">
                                        <label class="form-label" for="input-name">Nombre</label>
                                        <input type="text" id="input-name" name="input-name" class="form-control" placeholder="Ingresa tu nombre"/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="input-middlename">Segundo nombre (Opcional)</label>
                                        <input type="name" id="input-middlename" name="input-middlename" class="form-control" placeholder="Ingresa tu segundo nombre (Opcional)"/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="input-username">Nombre de usuario</label>
                                        <input type="name" id="input-middlename" name="input-middlename" class="form-control" placeholder="Nombre de usuario"/>
                                    </div>
                                    
                                    <div class="mb-3">
                                        <label class="form-label" for="example-email">Correo electrónico</label>
                                        <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Correo electrónico"/>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="example-password">Password</label>
                                        <input type="password" id="example-password" class="form-control" placeholder="Enter your password"/>
                                    </div>

                                    <div class="mb-1 text-center d-grid">
                                        <button class="btn btn-primary" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>`;
    }



    render() {
        return this.element;
    }
}
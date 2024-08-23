import { addLibrary } from "../../global/design/addLibrary.js";
export class FormUser {
    constructor() {


        this.element = document.createElement('form');
        this.element.id = 'form-user';
        this.element.className = 'authentication-form';
        this.element.innerHTML = `  <div id="msg-container"></div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="name">Nombre</label>
                                            <input type="text" id="name" name="name" class="form-control" placeholder="Ingresa tu nombre"/>
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="middlename">Segundo nombre (Opcional)</label>
                                            <input type="text" id="middlename" name="middlename" class="form-control" placeholder="Ingresa tu segundo nombre (Opcional)"/>
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="lastname">Apellidos</label>
                                            <input type="text" id="lastname" name="lastname" class="form-control" placeholder="Ingresa tus apellidos"/>
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="username">Nombre de usuario</label>
                                            <input type="text" id="username" name="username" class="form-control" placeholder="Nombre de usuario"/>
                                        </div>
                                        
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="phonenumber">Número telefonico</label>
                                            <input type="tel" id="phonenumber" name="phonenumber" class="form-control" placeholder="Número telefonico"/>
                                        </div>

                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="dateOfBirth">Fecha de nacimiento</label>
                                            <input type="text" id="basic-datepicker" name="dateOfBirth" class="form-control" placeholder="Fecha de nacimiento">
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label" for="email">Correo electrónico</label>
                                            <input type="email" id="email" name="email" class="form-control" placeholder="Correo electrónico"/>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label" for="password">Contraseña</label>
                                            <input type="password" id="password" name="password" class="form-control" placeholder="Contraseña"/>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label" for="passwordConfirm">Confirma contraseña</label>
                                            <input type="password" id="passwordConfirm" name="passwordConfirm" class="form-control" placeholder="Confirma contraseña"/>
                                        </div>

                                        <div class="mb-1 text-center d-grid">
                                            <button class="btn btn-primary" type="button" id="btn-signUp">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>`;
        this.createLibrary();
        this.eventClick();
    }

    eventClick() {
        this.element.querySelector('#basic-datepicker').flatpickr();
        const btnSubmit = this.element.querySelector("#btn-signUp");
        btnSubmit.addEventListener('click', () => {
            this.signUp();
        });
    }

    async signUp() {
        const form = this.element;
        const formData = new FormData(form);
        try {
            const response = await fetch('/users', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const request = await response.json();
                if (request.status == 1) {

                } else {
                    this.set_alert(request.status, request.msg);
                }
            }
        } catch {

        }
    }

    set_alert(status, msg) {
        let classname = "success";
        if (status == 0) {
            classname = "danger";
        }
        const containerAlert = this.element.querySelector("#msg-container");
        containerAlert.innerHTML = `<div class="alert alert-${classname}" role="alert">
                                                                        ${msg}
                                                                    </div>`;
        setTimeout(function () {
            containerAlert.innerHTML = '';
        }, 3000);
    }

    createLibrary() {
        const library = new addLibrary(['resources/assets/js/components/form-flatepicker.js']);
    }

    render() {
        return this.element;
    }
}
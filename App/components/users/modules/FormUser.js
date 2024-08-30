import { addLibrary } from "../../global/design/addLibrary.js";
export class FormUser {
    constructor(callback, idUser = '') {
        this.element = document.createElement('form');
        this.element.id = 'form-user';
        this.element.className = 'authentication-form';
        this.element.innerHTML = `  <div id="msg-container"></div>
                                    <input type="hidden" id="user_id" name="user_id" value="${idUser}">
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
        this.callback = callback;
        this.createLibrary();
        this.eventClick();

        if (idUser != '') {
            this.getUser(idUser);
        }
    }

    eventClick() {
        this.element.querySelector('#basic-datepicker').flatpickr();
        const btnSubmit = this.element.querySelector("#btn-signUp");
        btnSubmit.addEventListener('click', () => {
            this.signUp();
        });
    }

    async getUser(idUser) {
        try {
            const response = await fetch('/users/' + idUser);
            if (response.ok) {
                const res = await response.json();
                const arrayRes = Array.isArray(res) ? res : [res];
                if (arrayRes.length > 0) {
                    this.element.querySelector("#name").value = arrayRes[0].first_name;
                    this.element.querySelector("#middlename").value = arrayRes[0].middle_name;
                    this.element.querySelector("#lastname").value = arrayRes[0].last_name;
                    this.element.querySelector("#username").value = arrayRes[0].username;
                    this.element.querySelector("#phonenumber").value = arrayRes[0].phone_number;
                    this.element.querySelector("#basic-datepicker").value = arrayRes[0].date_of_birth;
                    this.element.querySelector("#email").value = arrayRes[0].email;
                }

            }
        }
        catch (error) {
            console.error('Error en la solicutd del usuario formulario, ', error);
        }
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
                let req = await response.text();
                if (req == 'true') {

                    if (this.callback) {
                        this.callback();
                    }

                }
                else {
                    this.set_alert();
                }
            }
        } catch (error) {
            console.error('Error en al guardar usuario', error);
        }
    }

    async set_alert() {
        const containerAlert = this.element.querySelector("#msg-container");

        try {
            const response = await fetch('/notifications');
            if (response.ok) {
                const request = await response.text();
                containerAlert.innerHTML = request;
            }
        } catch {

        }

    }

    createLibrary() {
        const library = new addLibrary(['resources/assets/js/components/form-flatepicker.js']);
    }

    render() {
        return this.element;
    }
}
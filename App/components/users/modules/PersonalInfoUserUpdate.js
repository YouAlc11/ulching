import { FormUser } from "./FormUser.js";
import { Modals } from "../../global/modals/Modals.js";

export class PersonalInfoUserUpdate {
    constructor(idUser) {
        this.element = document.createElement('div');
        this.element.className = 'card';
        this.callbacks(idUser);
        this.loadData(idUser);
    }

    async loadData(idUser) {
        const response = await fetch('/users/' + idUser);
        let information = '';
        if (response.ok) {
            const res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];
            let middlename = '';
            if (arrayRes[0].middle_name != null) {
                middlename = arrayRes[0].middle_name;
            }

            information = `<div class="position-relative">
                                <img
                                    src="files/Users/Profile/wallpaper.jpg"
                                    class="card-img rounded-bottom-0"
                                    height="200"
                                />
                                <img
                                    src="files/Users/Profile/${arrayRes[0].profile_picture_url}"
                                    class="avatar-lg rounded-circle position-absolute top-100 start-0 translate-middle-y ms-3 border border-light border-3"
                                />
                            </div>
                            <div class="card-body mt-4">
                                <div class="">
                                    <div
                                        class="d-flex align-items-center"
                                    >
                                        <div class="d-block">
                                            <h4 class="mb-1">
                                                ${arrayRes[0].first_name}  ${middlename} ${arrayRes[0].last_name}
                                            </h4>
                                            <p class="fs-14 mb-0">
                                                <!-- puesto -->
                                            </p>
                                        </div>
                                        <div class="ms-auto">
                                            <div class="dropdown">
                                                <a
                                                    href="javascript:void(0);"
                                                    class="dropdown-toggle arrow-none"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i
                                                        class="bx bx-dots-vertical-rounded fs-18 text-dark"
                                                    ></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a class="dropdown-item cursor-pointer" data-bs-toggle="modal" data-bs-target="#formularioUser">
                                                        <i class="bx bx-edit-alt me-2"></i>Editar perfil
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <ul class="list-group">
                                                <li class="list-group-item border-0 border-bottom px-0">
                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <h5 class="me-2 fw-medium mb-0">
                                                            Usuario :
                                                        </h5>
                                                        <span class="fs-14 text-muted">${arrayRes[0].username}</span>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 border-bottom px-0">
                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <h5 class="me-2 fw-medium mb-0">
                                                            Correo Electrónico :
                                                        </h5>
                                                        <span class="fs-14 text-muted">${arrayRes[0].email}</span>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 border-bottom px-0">
                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <h5 class="me-2 mb-0 fw-medium">
                                                            Número telefónico:
                                                        </h5>
                                                        <span class="fs-14 text-muted">${arrayRes[0].phone_number}</span>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 border-bottom px-0">
                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <h5 class="me-2 fw-medium mb-0">
                                                            Fecha de nacimiento :
                                                        </h5>
                                                        <span class="fs-14 text-muted">${arrayRes[0].date_of_birth}</span>
                                                    </div>
                                                </li>
                                                <li class="list-group-item border-0 border-bottom px-0">
                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <h5 class="me-2 fw-medium mb-0">
                                                            Fecha de registro :
                                                        </h5>
                                                        <span class="fs-14 text-muted">${arrayRes[0].created_at}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- about -->
                            </div>`;
            this.element.innerHTML = information;
        }
        else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        this.element.appendChild(this.objModal.render());
    }

    closeModalAndReload(idUser) {
        const modalElement = document.getElementById('formularioUser');
        const modal = bootstrap.Modal.getInstance(modalElement); // Obtén la instancia existente del modal
        if (modal) {
            modal.hide(); // Cierra el modal si la instancia existe
        }
        this.loadData(idUser); // Recargar los datos del usuario
    }

    callbacks(idUser) {
        const objFormUser = new FormUser(() => this.closeModalAndReload(idUser), idUser);
        const objModal = new Modals('Formulario de usuario', 'lg', objFormUser.render(), 'formularioUser');
        this.objModal = objModal; // Almacena la referencia a objModal para su uso en loadData
    }

    render() {
        return this.element;
    }
}

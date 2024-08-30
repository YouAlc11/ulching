import { FormAddress } from "./FormAddress.js";
import { Modals } from "../../global/modals/Modals.js";

export class AdressUser {
    constructor(idUser) {
        this.objForm = new FormAddress(idUser);
        this.objModals = new Modals('Formulario de direcciones', 'md', this.objForm.render(), 'ModalFormAddress');

        this.element = document.createElement('div');
        this.element.className = 'card';
        this.element.innerHTML = `<div class="card-header d-flex">
                                    <h5 class="card-title">
                                        Direcciones
                                    </h5>
                                    <div class="ms-auto">
                                        <a class="text-primary cursor-pointer" id="btn-formAddress" data-bs-toggle="modal" data-bs-target="#ModalFormAddress">Agregar</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    
                                </div>`;

        this.loadData(idUser);
        this.element.appendChild(this.objModals.render());
        this.appendEventClean();
    }

    appendEventClean() {
        let then = this;
        this.element.querySelector("#btn-formAddress").addEventListener("click", function () {
            then.objForm.cleanInputs();
        });
    }

    async loadData(idUser) {
        const response = await fetch('/users/adress/' + idUser);
        let information = '';
        if (response.ok) {
            const res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];
            let middlename = '';
            arrayRes.forEach(function (data) {
                information += `<ul class="list-group">
                                    <li class="list-group-item border-0 border-bottom px-0 pt-0">
                                        <div class="d-flex flex-wrap align-items-center gap-2">
                                            <div class="d-block">
                                                <h5 class="mb-1">
                                                    ${data.address_line_1}, ${data.postal_code} ,${data.city}, ${data.state}, ${data.country}
                                                </h5>    
                                            </div>
                                            <div class="ms-auto">
                                                <button class="btn btn-soft-secondary btn-sm btn-update" id="${data.address_id}" data-bs-toggle="modal" data-bs-target="#ModalFormAddress">Modificar</button>
                                                <button class="btn btn-soft-danger btn-sm btn-removeAddress" id="${data.address_id}">Eliminar</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>`;
            });
            const body = this.element.querySelector('.card-body');
            body.innerHTML = information;
            this.appendEvent(idUser);
            this.appendEventUpdate();
        }
        else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    }

    async deleteAddress(idAddress, idUser) {
        try {
            const response = await fetch('/address/delete/' + idAddress);
            if (response.ok) {
                const res = await response.text();
                this.loadData(idUser);
            }
            else {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
        } catch (error) {
            console.error('Hubo un problema con la solicitud:', error);
        }
    }

    appendEvent(idUser) {
        const then = this;
        const btnsDelete = this.element.querySelectorAll('.btn-removeAddress');
        btnsDelete.forEach(function (btnDelete) {
            btnDelete.addEventListener('click', function () {
                let id = this.id;
                then.swal(id, idUser);
            });
        });
    }
    appendEventUpdate() {
        const then = this;
        const btnsUpdate = this.element.querySelectorAll('.btn-update');
        btnsUpdate.forEach(function (btnUpdate) {
            btnUpdate.addEventListener('click', function () {
                let id = this.id;
                then.objForm.loadDataAddress(id);
            });
        });
    }


    swal(id, idUser) {
        const then = this;
        Swal.fire({
            title: '¡Advertencia!',
            text: '¿Estás seguro de eliminar esta dirección?',
            icon: 'error',
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-primary w-xs me-2 mt-2',
                cancelButton: 'btn btn-danger w-xs mt-2'
            },
            buttonsStyling: false,
            showCloseButton: false,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes colocar la acción que deseas realizar al confirmar
                then.deleteAddress(id, idUser); // Por ejemplo, llamar a la función deleteUser con el id del usuario
            }
        });

    }

    render() {
        return this.element;
    }
}
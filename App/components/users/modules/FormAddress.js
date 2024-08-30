export class FormAddress {
    constructor(idUser, callback) {
        this.element = document.createElement('form');
        this.element.id = 'form-addressUser';
        this.element.className = 'authentication-form';
        this.element.innerHTML = `<div id="msg-container"></div>
                                  <input type="hidden" name="user_id" value="${idUser}">
                                  <input type="hidden" name="update" id="update" value="">
                                  <div class="row">
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label" for="address_line_1">Dirección</label>
                                        <input type="text" id="address_line_1" name="address_line_1" class="form-control" placeholder="Calle, número, colonia"/>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label" for="city">Municipio</label>
                                        <input type="text" id="city" name="city" class="form-control" placeholder="Municipio"/>
                                    </div>
                                    
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label" for="postal_code">Código Postal</label>
                                        <input type="text" id="postal_code" name="postal_code" class="form-control" placeholder="Código Postal"/>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label" for="state">Entidad Federativa</label>
                                        <input type="text" id="state" name="state" class="form-control" placeholder="Entidad Federativa"/>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <label class="form-label" for="country">País</label>
                                        <input type="text" id="country" name="country" class="form-control" placeholder="País"/>
                                    </div>

                                    <div class="mb-1 text-center d-grid">
                                        <button class="btn btn-primary" type="button" id="btn-addAddress">
                                            Enviar
                                        </button>
                                    </div>
                                  </div>`;
        this.callback = callback;
        this.eventClick();
    }

    eventClick() {
        let btnSubmit = this.element.querySelector('#btn-addAddress');
        btnSubmit.addEventListener('click', () => {
            this.submit();
        });
    }

    async submit() {
        const form = this.element;
        const formData = new FormData(form);
        try {
            const response = await fetch('/users/adress', {
                method: 'POST',
                body: formData
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
            console.error("Error en la solicitud users/address ", error);
        }
    }

    async loadDataAddress(idAdress) {
        const response = await fetch('/address/' + idAdress);
        let information = '';
        if (response.ok) {
            let res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];

            this.element.querySelector("#address_line_1").value = arrayRes[0].address_line_1;
            this.element.querySelector("#city").value = arrayRes[0].city;
            this.element.querySelector("#postal_code").value = arrayRes[0].postal_code;
            this.element.querySelector("#state").value = arrayRes[0].state;
            this.element.querySelector("#country").value = arrayRes[0].country;
            this.element.querySelector("#update").value = arrayRes[0].address_id;
        }
        else {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
    }

    cleanInputs() {
        this.element.querySelector("#address_line_1").value = '';
        this.element.querySelector("#city").value = '';
        this.element.querySelector("#postal_code").value = '';
        this.element.querySelector("#state").value = '';
        this.element.querySelector("#country").value = '';
        this.element.querySelector("#update").value = '';
    }

    async set_alert() {
        const containerAlert = this.element.querySelector("#msg-container");

        try {
            const response = await fetch('/notifications');
            if (response.ok) {
                const request = await response.text();
                containerAlert.innerHTML = request;
            }
        } catch (error) {
            console.error("Error en la solicitud para obtener notificaciones ", error);
        }

    }
    render() {
        return this.element;
    }
}
export class Filters {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'form-group col-md-6';
        this.loadData().then(() => {
            // Una vez que los datos se hayan cargado, vincula el evento `change`
            this.bindChangeEvent(this.callback);
        });
    }

    async loadData() {
        let option = `<select class="form-control" id="filter_user" name="choices-single-no-search" data-choices data-choices-search-false data-choices-removeItem>
                        <option value="0"> Seleccionar... </option>`;
        try {
            const response = await fetch('/users');
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            const res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];

            arrayRes.forEach(data => {
                option += `<option value="${data.numero}">${data.nombre + ' ' + data.apellido}</option>`;
            });
        } catch (error) {
            console.error('Hubo un problema con la solicitud:', error);
            option += `<option>Error al cargar los datos</option>`;
        }
        option += `</select>`;
        this.element.innerHTML = option;
    }

    bindChangeEvent(callback) {
        this.callback = callback;
        const filterElement = this.element.querySelector('#filter_user');
        if (filterElement) {
            filterElement.addEventListener('change', callback);
        } else {
            console.error('No se pudo encontrar el elemento de filtro para agregar el evento change.');
        }
    }

    render() {
        return this.element;
    }
}

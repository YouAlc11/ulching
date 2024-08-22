export class Table {
    constructor() {
        this.element = document.createElement('table');
        this.element.className = 'table text-nowrap mb-0';
        this.loadData();
    }

    async loadData(idUser = 0) {
        let retu = `<thead class="bg-light bg-opacity-50">
                        <tr>
                            <th class="border-0 py-2">
                                Usuario
                            </th>
                            <th class="border-0 py-2">
                                Fecha de Alta
                            </th>
                            <th class="border-0 py-2">
                                Mail
                            </th>
                            <th class="border-0 py-2">
                                Usuario
                            </th>
                            <th class="border-0 py-2">
                                Estatus
                            </th>
                            <th class="border-0 py-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>`;

        try {
            const response = await fetch('/users/' + idUser);
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            const res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];
            arrayRes.forEach(data => {
                let activ = 'Ativo';
                let classTd = 'text-success';
                if (data.is_active == 0) {
                    activ = 'Inactivo';
                    classTd = 'text-danger';
                }
                retu += `
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <img
                                    src="files/Users/Profile/${data.profile_picture_url}"
                                    alt=""
                                    class="avatar-xs rounded-circle me-2"
                                />
                                <div>
                                    <h5
                                        class="fs-14 mt-1 fw-normal"
                                    >
                                    ${data.first_name} ${data.last_name}
                                    </h5>
                                </div>
                            </div>
                        </td>
                        <td>
                            ${data.created_at} 
                        </td>
                        <td>
                            ${data.email} 
                        </td>
                        <td>
                            ${data.username} 
                        </td>
                        <td class="${classTd}">
                            <i class="bx bxs-circle me-1"></i>${activ} 
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-sm btn-soft-secondary me-1"
                                title="ver"
                                id="${data.id}"
                            >
                                <i
                                    class="bx bx-bullseye fs-16"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="btn btn-sm btn-soft-danger"
                                id="${data.id}"
                            >
                                <i
                                    class="bx bx-trash fs-16"
                                ></i>
                            </button>
                        </td>
                    </tr>`;
            });

            retu += `</tbody>`;
            this.element.innerHTML = retu;

        } catch (error) {
            console.error('Hubo un problema con la solicitud:', error);
            this.element.innerHTML = `<tbody><tr><td colspan="4">Error al cargar datos</td></tr></tbody>`;
        }
    }

    render() {
        return this.element;
    }
}


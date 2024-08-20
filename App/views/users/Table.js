export class Table {
    constructor() {
        this.element = document.createElement('table');
        this.element.className = 'table table-bordered';
        this.loadData();
    }

    async loadData(idUser = 0) {
        let retu = `<thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
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

            arrayRes.forEach(element => {
                retu += `
                    <tr>
                        <td>${element.numero}</td>
                        <td>${element.nombre}</td>
                        <td>${element.apellido}</td>
                        <td>""</td>
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


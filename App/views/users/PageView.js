export class PageView {
    constructor() {
        this.element = document.createElement('div');
        this.className = 'col-md-6 col-xxl-6';
        this.card();
    }

    async card() {
        let numeroVistas;
        try {
            const response = await fetch('/usersViews');
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            // Convertir la respuesta a JSON
            const res = await response.json();
            const arrayRes = Array.isArray(res) ? res : [res];
            numeroVistas = arrayRes[0].numero_vistas;
        } catch (error) {
            console.error('Hubo un problema con la solicitud:', error);
        }
        this.element.innerHTML = `<div class="card">
                                <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <div
                                            class="avatar-md bg-primary bg-opacity-10 rounded"
                                        >
                                            <iconify-icon
                                                icon="iconamoon:eye-duotone"
                                                class="avatar-title text-primary fs-32"
                                            ></iconify-icon>
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-6 text-end">
                                        <p
                                            class="text-muted mb-0 text-truncate"
                                        >
                                            Page View
                                        </p>
                                        <h3
                                            class="text-dark mt-1 mb-0"
                                        >
                                            ${numeroVistas}
                                        </h3>
                                    </div>
                                    <!-- end col -->
                                </div>
                                <!-- end row-->
                            </div>
                            <!-- end card body -->
                            </div>`;
    }

    render() {
        return this.element;
    }
}
import { Table } from "./modules/Table.js";
import { FilterUser } from "./modules/FilterUser.js";
import { Modals } from "../global/modals/Modals.js";
import { FormUser } from "./modules/FormUser.js";

export class Main {
    constructor() {
        this.table = new Table();
        this.filter = new FilterUser();
        this.formUser = new FormUser();
        this.modals = new Modals('Crear nuevo usuario', 'lg', this.formUser.render());
        this.element = document.createElement('div');
        this.element.className = 'container-xxl';
        this.element.innerHTML = `  <!-- ========== Page Title Start ========== -->
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="page-title-box">
                                                <h4 class="mb-0 fw-semibold">Usuarios</h4>
                                                <ol class="breadcrumb mb-0">
                                                    <li class="breadcrumb-item">
                                                        <a href="javascript: void(0);">Usaurios</a>
                                                    </li>
                                                    <li class="breadcrumb-item active">Lista Usuarios</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="d-flex flex-wrap justify-content-between gap-3">
                                                        <div class="search-bar" id="container-filter">
                                                            
                                                           
                                                        </div>
                                                        <div>
                                                            <button
                                                                type="button"
                                                                class="btn btn-primary d-inline-flex align-items-center"
                                                                data-bs-toggle="modal" data-bs-target="#modalActive"
                                                            >
                                                                <i class="bx bx-plus me-1"></i
                                                                >Crear Usuario
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <!-- end row -->
                                                </div>
                                                <div>
                                                    <div class="table-responsive table-centered" id="container-tableUsers">
                                                    </div>
                                                </div>
                                            <div>
                                        </div>
                                    </div>
                                    <!-- ========== Page Title End ========== -->`;
        this.renderTable();
        this.renderFilter();
        this.element.appendChild(this.modals.render());
    }

    renderFilter() {
        const containerFilter = this.element.querySelector("#container-filter");
        const filter = this.filter.render();
        containerFilter.appendChild(filter);
    }

    renderTable() {
        const varContainer = this.element.querySelector('#container-tableUsers');
        const table = this.table.render();
        varContainer.appendChild(table);
    }

    updateTable(idUser = 0) {
        this.table.loadData(idUser);
    }


    eventChange(event) {
        const idUser = event.target.value;
        this.updateTable(idUser);
    }

    render() {
        this.filter.bindChangeEvent((event) => this.eventChange(event));
        return this.element;
    }
}




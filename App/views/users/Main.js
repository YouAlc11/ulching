import { PageView } from "./PageView.js";
import { Table } from "./Table.js";
import { Filters } from "./Filters.js";

export class Main {
    constructor() {
        this.pageView = new PageView();
        this.table = new Table();
        this.tableContainer = null;
        this.filters = new Filters();
    }

    updateTable(idUser = 0) {
        this.table.loadData(idUser);
    }

    renderTable() {
        const tableContainer = document.createElement('div');
        tableContainer.id = 'table-container';
        tableContainer.className = 'card';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';

        const buttonHeader = document.createElement('button');
        buttonHeader.className = "btn btn-success";
        buttonHeader.textContent = 'Refresh Table';
        buttonHeader.onclick = () => this.updateTable();

        cardHeader.appendChild(buttonHeader);

        this.tableContainer = document.createElement('div');
        this.tableContainer.className = 'card-body';

        this.tableContainer.appendChild(this.table.render());
        this.updateTable();

        tableContainer.appendChild(cardHeader);
        tableContainer.appendChild(this.tableContainer);

        return tableContainer;
    }

    renderPageViews() {
        const pageViewContainer = document.createElement('div');
        pageViewContainer.id = 'page-View';
        pageViewContainer.innerHTML = '';

        const pageViewContent = this.pageView.render();
        if (pageViewContent instanceof Node) {
            pageViewContainer.appendChild(pageViewContent);
        } else {
            console.error('El render de PageView no devolvió un nodo DOM válido.');
        }

        return pageViewContainer;
    }

    eventChange(event) {
        const idUser = event.target.value;
        this.updateTable(idUser);
    }

    render() {
        const containerGlobal = document.createElement('div');
        containerGlobal.appendChild(this.filters.render());
        containerGlobal.appendChild(this.renderPageViews());
        containerGlobal.appendChild(this.renderTable());

        // Agregar el evento change después de que el filtro haya sido renderizado
        this.filters.bindChangeEvent((event) => this.eventChange(event));

        return containerGlobal;
    }
}




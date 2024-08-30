export class Modals {
    constructor(titleModal, size, modalBody, idModal) {
        this.body = modalBody;
        this.element = document.createElement('div');
        this.element.className = 'modal fade';
        this.element.id = idModal;
        this.element.tabIndex = '-1';
        this.element.setAttribute("aria-labelledby", idModal + "Label");
        this.element.setAttribute("aria-hidden", "true");
        this.element.innerHTML = `<div class="modal-dialog modal-${size}">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title h4" id="${idModal}Label">${titleModal}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" id="modal-body-container">
                                    
                                </div>
                            </div>
                        </div>`;
        const container = this.element.querySelector('#modal-body-container');
        container.appendChild(this.body);


    }
    render() {
        return this.element;
    }
}


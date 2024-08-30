import { PersonalInfoUserUpdate } from './PersonalInfoUserUpdate.js';
import { AdressUser } from './AdreessUser.js';

export class ProfileUser {
    constructor(idUser) {
        this.element = document.createElement('div');
        this.idUser = idUser;
        this.element.className = "row";
        this.element.innerHTML = `<div class="col-xxl-4">
                                        <div class="row">
                                            <div class="col-12" id="container-personalnfo">
                                            
                                                
                                            </div>
                                            <!-- end col -->
                                        </div>
                                        <!-- end row -->
                                    </div>
                                    <div class="col-xxl-8">
                                        <div class="row">
                                            <div class="col-md-6" id="container-adrress">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end col -->`;
        this.loadPersonalUser(this.idUser);
    }

    loadPersonalUser(idUser) {
        const objPersonalInfo = new PersonalInfoUserUpdate(idUser);
        const objAddress = new AdressUser(idUser);
        this.element.querySelector('#container-personalnfo').appendChild(objPersonalInfo.render());
        this.element.querySelector('#container-adrress').appendChild(objAddress.render());
    }

    render() {
        return this.element;
    }
}
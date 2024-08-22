import { Signup } from "./Signup.js";

const signup = new Signup();
document.body.innerHTML = '';
document.body.appendChild(signup.render());


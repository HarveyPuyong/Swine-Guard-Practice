import { logInFunctionality } from "./log-in.js";
import { signUpFunctionality } from "./sign-up.js";

logInFunctionality();
signUpFunctionality();

const formsButton = document.querySelectorAll('form button');

formsButton.forEach(button => {
  button.addEventListener('click', (e)=> {
    e.preventDefault();
  })
})
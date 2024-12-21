import { logInFunctionality } from "./log-in.js";
import { signUpFunctionality } from "./sign-up.js";
import { handleAddressData } from "./handle-address-data.js";

logInFunctionality();
signUpFunctionality();
handleAddressData();

const formsButton = document.querySelectorAll('form button');
  formsButton.forEach(button => {
    button.addEventListener('click', (e)=> {
      if (!form.reportValidity()) {
        return;
      }
      location.reload() = false;
    })
})
import { addresses } from "./address-data.js";

export function handleAddressData(){
  const municipalities = Object.keys(addresses);

  const municipalityOption = municipalities.map(municipal =>  `<option value="${municipal}">${municipal}</option>`);

  const municipalitySelectTag = document.querySelector('.user-adress-form #municipal').innerHTML = municipalityOption


  const municipalitySelectElem = document.querySelector('.user-adress-form #municipal');

  municipalitySelectElem.addEventListener('change', ()=>{
    const barangaysOfMunicipality = addresses[municipalitySelectElem.value];
    const barangaySelectTag = document.querySelector('.user-adress-form #barangay').innerHTML = 
    barangaysOfMunicipality.map(barangay => `<option value=${barangay}>${barangay}</option>`);
  }
  );
}
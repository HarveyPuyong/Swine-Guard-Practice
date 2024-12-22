export function signUpFunctionality(){
  const detailsContainer = document.querySelector('.details-container')
  const logInDetails = document.querySelector('.log-in-details');
  const joinDetails = document.querySelector('.join-details');
  const logInBtn = document.querySelector('.details-container .log-in-btn');
  const formsContainer = document.querySelector('.forms-container')
  const SignUpForm = document.querySelector('.sign-up-form');
  const logInForm = document.querySelector('.log-in-form');

  logInBtn.addEventListener('click', ()=> {
    detailsContainer.style.order = '1';
    formsContainer.style.order = '2';
    formsContainer.style.marginTop = '0rem'
    joinDetails.style.display = "block";
    logInDetails.style.display = "none";
    SignUpForm.style.display = 'none';
    logInForm.style.display = 'block';
  });


  const forms = document.querySelectorAll(".sign-up-form");
  let currentStep = 0;

  // Show the current form
  function showForm(step) {
    forms.forEach((form, index) => {
      form.style.display = index === step ? "block" : "none";
    });
  }

  // Validate the current form
  function validateForm(step) {
    const inputs = forms[step].querySelectorAll("input, select");
    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }

  // Handle Next buttons
  document.querySelectorAll(".next-btn").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (validateForm(currentStep)) {
        currentStep++;
        if (currentStep < forms.length) {
          showForm(currentStep);
        }
      }
    });
  });

  // Handle Create button
  document.querySelector(".create-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm(currentStep)) {
      currentStep++;
      if (currentStep < forms.length) {
        showForm(currentStep);
      }
    }
  });

  // Handle Finish button
  document.querySelector("#finish-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm(currentStep)) {
      alert("Sign-up complete!");
    }
  });

  // Initially show the first form
  showForm(currentStep);
   
}
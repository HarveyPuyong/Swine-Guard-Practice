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
}
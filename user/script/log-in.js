export function logInFunctionality(){
  const detailsContainer = document.querySelector('.details-container')
  const logInDetails = document.querySelector('.log-in-details');
  const joinDetails = document.querySelector('.join-details');
  const joinBtn = document.querySelector('.join-btn');
  const formsContainer = document.querySelector('.forms-container')
  const SignUpForm = document.querySelector('.sign-up-form');
  const logInForm = document.querySelector('.log-in-form');

  joinBtn.addEventListener('click', ()=> {
    detailsContainer.style.order = '2';
    formsContainer.style.order = '1';
    joinDetails.style.display = "none";
    logInDetails.style.display = "block";
    SignUpForm.style.display = 'block';
    logInForm.style.display = 'none';
  });

}
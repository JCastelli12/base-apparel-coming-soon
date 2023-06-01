const button = document.querySelector('.store__button');

function EmailValidation() {
  const email = document.getElementById('email');
  const errorMSG = document.querySelector('.store__error-message');
  const errorIcon = document.querySelector('.store__email-error');

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    errorMSG.style.display = 'none';
    errorIcon.style.display = 'none';
    email.style.border = '1px solid var(--clr-primary-desaturated)';

    alert('Valid Email!');
    return true;
  }

  errorMSG.style.display = 'block';
  errorIcon.style.display = 'block';
  email.style.border = '2px solid red';

  return false;
}

button.addEventListener('click', (e) => {
  e.preventDefault();
});

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onInputLocalStorage, 500));
window.addEventListener('DOMContentLoaded', onInputSavedValue);

let formValues = {
  email,
  message,
};

function onInputLocalStorage(event) {
  event.preventDefault();

  // formValues[event.target.name] = event.target.value;
  formValues.email = email.value;
  formValues.message = message.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
}

function onInputSavedValue() {
  const storageValues = localStorage.getItem(STORAGE_KEY);
  const storageParse = JSON.parse(storageValues);
  if (storageParse) {
    email.value = storageParse.email;
    message.value = storageParse.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Усі поля повинні бути заповненні!');
    return;
  }
  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const STORAGE_KEY = 'feedback-form-state';

import throttle from "lodash.throttle";

const formData = {};

const refs = {
    formEl: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('.feedback-form input'),
    messageEl: document.querySelector('.feedback-form textarea'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

storageDataChecking();

function onFormInput() {
    formData.email = refs.emailEl.value,
    formData.message = refs.messageEl.value,
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function storageDataChecking() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        refs.emailEl.value = savedData.email;
        refs.messageEl.value = savedData.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    const newObj = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(newObj);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
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

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function storageDataChecking() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        refs.emailEl.value = savedData.email;
        refs.messageEl.value = savedData.message;
    }
    // console.log(savedData);
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
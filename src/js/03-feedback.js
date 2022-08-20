import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

// storageDataChecking();

// Зберігаємо об'єкт зі значеннями email, message у локальне сховище

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function storageDataChecking(event) {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//     if (savedData) {
//       
//     }  
// }

// Очищуємо поля форми та сховище, виводимо об'єкт даних в консоль

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


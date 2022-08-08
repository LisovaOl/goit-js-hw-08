import throttle from 'lodash.throttle'; // импорт тротла

const STORAGE_KEY = 'feedback-form-state'; // вынести в константу

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};
//console.log(refs.textarea);
// console.log(refs.email);

// refs.textarea.addEventListener('input', throttle(saveValue, 500));
refs.form.addEventListener('submit', onFormSubmit);
//refs.email.addEventListener('input', throttle(saveValue, 500));

// function saveValue(e) {
// formData[e.target.name] = e.target.value;
// save(STORAGE_KEY, JSON.stringify(formData));
// }

const formData = {};
refs.form.addEventListener('input', e => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
});

function onFormSubmit(evt) {
  evt.preventDefault(); // не перезагружать страницу

  console.log('Отправляем форму');
  evt.currentTarget.reset(); // очистить форму при отправке данных - при нажатии кнопки ОТПРАВИТЬ
  localStorage.removeItem(STORAGE_KEY); // очистка хранилища при отправке формы
}

// function onTextareaInput(evt) {
//   const message = evt.target.value; //возьми текущий меседж

//   localStorage.setItem(STORAGE_KEY, message); // помести его в хранилище
// }

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

populateTextarea();
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY); // возьми данные из хранилища
    console.log(JSON.parse(savedMessage))
    const obj = JSON.parse(savedMessage);
    console.log(obj.email);
    console.log(obj.message);

  // надо проверить есть ли в хранилище чтото.
    if (savedMessage) {
        refs.email.value = obj.email;
        refs.textarea.value = obj.message;

    //refs.form.value = savedMessage; // Если там что-то было, обновляем DOM
  }
}

// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

//     Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//     Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
//     Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//     Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

// import { save, getItemKey, removeKey } from './storage.js';
// import throttle from 'lodash.throttle';
// const FEEDBACK_FORM_STATE = 'feedback-form-state';
// let formData = getItemKey(FEEDBACK_FORM_STATE) || {};

// const form = document.querySelector('.feedback-form');

// form.addEventListener('input', throttle(saveValue, 500));

// function saveValue(e) {
//   formData[e.target.name] = e.target.value;
//   save(FEEDBACK_FORM_STATE, JSON.stringify(formData));
// }

// // localStorage

// localStorageValue();

// function localStorageValue() {
//   const proverka = getItemKey(FEEDBACK_FORM_STATE);
//   if (proverka) {
//     if (proverka.email) {
//       form.email.value = proverka.email;
//     }
//     if (proverka.message) {
//       form.message.value = proverka.message;
//     }
//   }
// }

// // SABMIT;

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, message },
//   } = e.currentTarget;

//   if (email.value === '' || message.value === '') {
//     return alert('Please fill in all the fields!');
//   }
//   removeKey(FEEDBACK_FORM_STATE);
//   const formData = new FormData(form);
//   const valuesFotm = Object.fromEntries(formData.entries());
//   e.currentTarget.reset();
// }

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


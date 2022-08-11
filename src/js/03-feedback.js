import throttle from 'lodash.throttle'; // імпорт
const STORAGE_KEY = 'feedback-form-state'; // константа - ключ для сховища

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.textarea.addEventListener('input', throttle(saveData, 500));
refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(saveData, 500));

populateInput();

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function saveData(evt) {
  formData[evt.target.name] = evt.target.value;

//   console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault(); // не перегружати сторінку

  const sendData = localStorage.getItem(STORAGE_KEY);

  console.log(JSON.parse(sendData));

  evt.currentTarget.reset(); // очистити форму при відправці даних

  localStorage.removeItem(STORAGE_KEY); // очистка сховища після відправки
  // console.log(formData.email);
  // console.log(formData.message);

// очищення даних в об'єкті
  delete formData.email;
  delete formData.message;
}

// отримати дані зі сховища

function populateInput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY); // візьми дані зі сховища
  const obj = JSON.parse(savedMessage);

  // перевірка на наявність даних у сховищі
  if (savedMessage) {
    refs.email.value = obj.email || '';
    refs.textarea.value = obj.message || '';

  }
}

// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

//     Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//     Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
//     Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//     Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


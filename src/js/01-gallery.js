// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class = "gallery__item" href = "${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      alt = "${description}"
    />
  </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
  // spinner: true,
  // navText: ['prev', 'next'],
  close: false,
  // alertError: true,
  // alertErrorMessage: "Зображення не знайдено, буде завантажено наступне зображення",
  fadeSpeed: 300,
});

// lightbox.on("show.simplelightbox", function (e) {

//     console.log(e.target);

// });
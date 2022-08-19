import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const imgElements = galleryItems
  .map(({ original, preview, description }) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src= "${preview}" alt= "${description}"/>
    </a>`
  ).join('');

galleryEl.insertAdjacentHTML("beforeend", imgElements);
console.log(galleryItems);

let lightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


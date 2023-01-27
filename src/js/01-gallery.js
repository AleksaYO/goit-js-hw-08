// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

const htmlElement = onCreateEl(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", htmlElement);

galleryBox.addEventListener("click", onImageClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
  captionPosition: "bottom",
  animationSpeed: 350,
  disableRightClick: true,
});

function onCreateEl(elements) {
  return elements
    .map(
      ({ preview, original, description }) =>
        `      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`
    )
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
}

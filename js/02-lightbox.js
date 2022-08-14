import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>
    `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = "250";
gallery.options.captionPosition = "bottom";

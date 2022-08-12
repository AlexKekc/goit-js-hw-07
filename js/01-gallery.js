import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", openModalWindowWithGalleryItem);
// galleryContainer.addEventListener("keydown", closeModalWindowWithGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `;
    })
    .join("");
}

function openModalWindowWithGalleryItem(evt) {
  evt.preventDefault();

  const isImageElement = evt.target.classList.contains("gallery__image");

  if (!isImageElement) {
    return;
  }

  createLightBox(evt.target.dataset.source);
}

function createLightBox(source) {
  const instance = basicLightbox.create(`
    <img src='${source}' width="1280" height="700">
`);
  instance.show();
}

// function closeModalWindowWithGalleryItem(evt) {
//     if (evt.code === "Escape") {
//       instance.close();
//   }
// }

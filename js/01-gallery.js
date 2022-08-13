import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", openModalWindowWithGalleryItem);

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

  showLightBox(evt.target.dataset.source);
}

function showLightBox(source) {
  const lightBoxEl = basicLightbox.create(`<img src='${source}'>`);

  lightBoxEl.show();

  window.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      window.removeEventListener("keydown", showLightBox);
      lightBoxEl.close();
    }
  });
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galaryContainer = document.querySelector(".gallery");
console.log(galleryItems);
const gridImages = createImagesMarkup(galleryItems);
galaryContainer.insertAdjacentHTML("beforeend", gridImages);
galaryContainer.addEventListener("click", onGridImagesClick);
function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}
function onGridImagesClick(evt) {
  evt.preventDefault();
  const isImageSwatchEl = evt.target.classList.contains("gallery__image");
  if (!isImageSwatchEl) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="auto" alt=${evt.target.alt} >
`);

  instance.show();
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galaryContainer = document.querySelector(".gallery");
const gridImages = createImagesMarkup(galleryItems);
galaryContainer.insertAdjacentHTML("beforeend", gridImages);
function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src= ${preview} alt=${description} />
</a>`;
    })
    .join("");
}
let lightBoxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

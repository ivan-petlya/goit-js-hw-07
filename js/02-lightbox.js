import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galaryContainer = document.querySelector(".gallery");
const gridImages = createImagesMarkup(galleryItems);
galaryContainer.insertAdjacentHTML("beforeend", gridImages);
galaryContainer.addEventListener("click", onGridImagesClick);
function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src= ${preview} alt=${description} />
</a>`;
    })
    .join("");
}
function onGridImagesClick(evt) {
  evt.preventDefault();
  let lightBoxGallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

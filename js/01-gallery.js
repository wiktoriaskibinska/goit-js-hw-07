import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
// creating html for each img:
function addGalleryItems(items) {
    return items.map(item => `<li>
    <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
</li>`).join("");
}
gallery.innerHTML = addGalleryItems(galleryItems);

// implementig of lightbox:



console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function addGalleryItems(items) {
    return items.map(item => `<li>
    <a
    class="gallery__item"
    href="${item.original}">
<img 
  class="gallery__image"
  src="${item.preview}" 
  alt="${item.description}" />
</a>
    </li>`).join("");
}

gallery.innerHTML = addGalleryItems(galleryItems);
// SimpleLightbox Library

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay:"250ms"
});


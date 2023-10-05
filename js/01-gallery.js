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
      draggable="false"
    />
  </a>
</div>
</li>`).join("");
}
gallery.innerHTML = addGalleryItems(galleryItems);

// implementig of lightbox:

gallery.addEventListener("click", onImageClick)

function onImageClick(evt) {

  prevDefault(evt);

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }


  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

    instance.show()
  
}

//zamykanie lightbox

//prevent 
function prevDefault(evt) {
  evt.preventDefault;
}
console.log(galleryItems);

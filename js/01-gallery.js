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

  evt.preventDefault()

  if (evt.target.nodeName!=="IMG") {
    return;
  }


  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
  

  instance.show();
  const lightboxBg = document.querySelector(".basicLightbox");
  lightboxBg.style.backgroundColor = "rgba(210,180,140, 0.8)";
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
     }
   })
  
}

//zamykanie lightbox

//prevent 



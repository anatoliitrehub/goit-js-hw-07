import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const divGallery = document.querySelector('.gallery');
galleryItems.forEach(el=>{
    divGallery.insertAdjacentHTML('afterbegin',
    `<li class="gallery__item">
        <a class="gallery__link" href=${el.original}>
            <img class="gallery__image" src=${el.preview} alt="${el.description}"/>
        </a>
    </li>`
    )
    
});

let simpleGallery = new SimpleLightbox('.gallery__link',{captionsData:'alt', captionDelay:250});
    simpleGallery.on('show.simplelightbox');

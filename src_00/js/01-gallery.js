import { galleryItems } from './gallery-items.js';

// Change code below this line

// const galleryAllItems = [];
const divGallery = document.querySelector('.gallery');
galleryItems.forEach(el=>{
    divGallery.insertAdjacentHTML('afterbegin',
    `<div class="gallery__item">
        <a class="gallery__link" href="${el.preview}">
            <img
            class="gallery__image"
            src="${el.preview}"
            data-source="${el.original}"
            alt="${el.description}"
            />
        </a>
    </div>`)
    // const divItem = document.createElement('div');
    // const linkItem = document.createElement('a');
    // const imgItem = document.createElement('img');
    // divItem.classList.add('gallery__item');
    // linkItem.classList.add('gallery__link');
    // linkItem.href=el.preview;
    // imgItem.classList.add('gallery__image');
    // imgItem.src = el.preview;
    // imgItem.dataset.source = el.original;
    // imgItem.alt = el.description;
    // linkItem.insertAdjacentElement('afterbegin',imgItem);
    // divItem.insertAdjacentElement('afterbegin',linkItem);
    // galleryAllItems.push(divItem.outerHTML); 
});


// divGallery.insertAdjacentHTML('afterbegin',galleryAllItems.join(''))

const eventHandler = (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source} width="800" height="600">
    </div>
    `,{
        onShow: (instance) => {
            document.addEventListener('keydown',(event)=>{
                if (event.key==='Escape') instance.close()
            }) 
        }
    })
    instance.show()

}

divGallery.addEventListener('click',eventHandler);


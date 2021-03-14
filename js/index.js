import imgArr from '/js/gallery-items.js';

const galleryList = document.querySelector('.gallery');

imgArr.forEach(element => {
    const imgEl = document.createElement('img');
    const liEl = document.createElement('li');
    imgEl.src = element.preview;
    imgEl.classList.add('gallery__image');
    imgEl.alt = element.description;
    liEl.append(imgEl);
    galleryList.append(liEl);
});


const modal = document.querySelector('.lightbox')
const modalImg = document.querySelector('.lightbox__image')


galleryList.addEventListener('click', (event) => {
    modal.classList.add('is-open');
    imgArr.forEach(img => {
        if (img.description === event.target.alt) {
            modalImg.src = img.original;
        }
    });
    console.log(event.target.alt);
})
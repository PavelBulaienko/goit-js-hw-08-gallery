import imgArr from '/js/gallery-items.js';


const galleryListRef = document.querySelector('.gallery');

const imgItems = imgArr.map(element => {
    const imgEl = document.createElement('img');

    imgEl.classList.add('gallery__image');
    imgEl.src = element.preview;
    imgEl.alt = element.description;

    return imgEl;
});

galleryListRef.append(...imgItems);

const modal = document.querySelector('.lightbox')
const modalImg = document.querySelector('.lightbox__image')
let indexOfImg;


galleryListRef.addEventListener('click', (event) => {
    modal.classList.add('is-open');
    imgArr.forEach(img => {
        if (img.description === event.target.alt) {
            modalImg.src = img.original;
            indexOfImg = imgArr.indexOf(img);
        }
    });
})


const closeBtn = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

closeBtn.addEventListener('click', closeModalWindow);
lightboxOverlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModalWindow();
    }

    else if (event.key === 'ArrowRight') {
        nextImage();
    }

    else if (event.key === 'ArrowLeft') {
        prevImage();
    }
})

function nextImage() {
    if (indexOfImg === imgArr.length - 1) {
        indexOfImg = 0;
        modalImg.src = imgArr[indexOfImg].original;
        modalImg.alt = imgArr[indexOfImg].description;
        return;
    }
    
    indexOfImg += 1;
    modalImg.src = imgArr[indexOfImg].original;
    modalImg.alt = imgArr[indexOfImg].description;
}

function prevImage() {
    if (indexOfImg === 0) {
        indexOfImg = imgArr.length - 1;
        modalImg.src = imgArr[indexOfImg].original;
        modalImg.alt = imgArr[indexOfImg].description;
        return;
    }
    
    indexOfImg -= 1;
    modalImg.src = imgArr[indexOfImg].original;
    modalImg.alt = imgArr[indexOfImg].description;
}

function closeModalWindow() {
    modal.classList.remove('is-open');
    modalImg.src = '';
}
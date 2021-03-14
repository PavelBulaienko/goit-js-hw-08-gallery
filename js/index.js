import imgArr from '/js/gallery-items.js';


const galleryList = document.querySelector('.gallery');

imgArr.forEach(element => {
    const imgEl = document.createElement('img');
    const liEl = document.createElement('li');

    imgEl.classList.add('gallery__image');
    imgEl.src = element.preview;
    imgEl.alt = element.description;
    liEl.append(imgEl);
    galleryList.append(liEl);
});


const modal = document.querySelector('.lightbox')
const modalImg = document.querySelector('.lightbox__image')
let indexOfImg;


galleryList.addEventListener('click', (event) => {
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

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modalImg.src = '';
})

lightboxOverlay.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modalImg.src = '';
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('is-open');
        modalImg.src = '';
    }

    if (event.key === 'ArrowRight') {
        nextImage();
    }

    if (event.key === 'ArrowLeft') {
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
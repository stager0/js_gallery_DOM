'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const allImgs = document.querySelectorAll('.list-item__link');

allImgs.forEach((img) => {
  img.addEventListener('click', (currEvent) => {
    currEvent.preventDefault();

    const currentA = currEvent.currentTarget;
    const currentImg = currentA.querySelector('img');

    largeImg.src = currentA.href;
    largeImg.alt = `main image ${currentImg.alt}`;
  });
});

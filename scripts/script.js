const darkModeToggle = document.getElementById('darkModeToggle');
const bodyG = document.getElementById('gallery-body');

darkModeToggle.addEventListener('click', () => {
    bodyG.classList.toggle('dark-mode');
});

const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close-button');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
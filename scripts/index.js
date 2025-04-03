
let slideIndex = 0;
const images = [
    "/images/budo-chapel.jpg",
    "images/christmas-lunch.jpg",
    "images/smartkidos.jpeg",
    "images/mdd-setpiece.jpg",
    "images/prefects.jpg",
    "images/mdd-traditionaldance.jpg",
    "images/mdd-winners.jpg"
];
const time = 3000; // Time interval in milliseconds

function changeSlide() {
    const slide = document.getElementById("slide");
    slide.src = images[slideIndex];
    slideIndex = (slideIndex + 1) % images.length; // Loop back to the first image
    setTimeout(changeSlide, time); // Schedule the next image change
}

// Start the slideshow when the page loads
window.onload = changeSlide;
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});
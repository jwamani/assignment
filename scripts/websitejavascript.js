
// const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Contact form handling
function sendEmail() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!fname || !lname || !mobile || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Mobile number format validation
    const mobilePattern = /^\d{4}-\d{3}-\d{3}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Please enter mobile number in format: 1234-567-890');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show success modal
    const modal = document.getElementById('emailModal');
    const overlay = document.getElementById('modalOverlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('emailModal');
    const overlay = document.getElementById('modalOverlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';

    // Reset form
    document.querySelector('.form-grid').reset();
}

// Location click handler
document.getElementById('lo').addEventListener('click', () => {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.scrollIntoView({ behavior: 'smooth' });
});

const details = document.getElementById("detailsSection");
const iframeContainer = document.getElementById("iframeContainer");

details.addEventListener("toggle", function () {
    if (details.open) {
        iframeContainer.style.height = "70%"; // Shrink iframe when form is opened
    } else {
        iframeContainer.style.height = "100%"; // Expand iframe when form is closed
    }
});
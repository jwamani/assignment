document.addEventListener('DOMContentLoaded', () => {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Toggle active class on button
            button.classList.toggle('active');

            // If opening this accordion
            if (button.classList.contains('active')) {
                // Close all other accordions
                accordionBtns.forEach(otherBtn => {
                    if (otherBtn !== button && otherBtn.classList.contains('active')) {
                        otherBtn.classList.remove('active');
                        const otherContent = otherBtn.nextElementSibling;
                        otherContent.style.maxHeight = null;
                    }
                });

                // Open current accordion
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Close current accordion
                content.style.maxHeight = null;
            }
        });
    });
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
});


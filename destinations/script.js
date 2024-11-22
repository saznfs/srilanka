// Get references to the hamburger menu and nav links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the navigation menu
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});


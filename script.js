document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out. We will get back to you soon.");
    document.getElementById("contact-form").reset();
});
// Toggle the display of the navigation menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
        }
// Toggle Navbar for Mobile View
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Sanitize input fields
    const name = sanitizeInput(document.getElementById('name').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const message = sanitizeInput(document.getElementById('message').value);

    // Display or send sanitized data
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

// Sanitize function to remove special characters
function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;  // Encodes HTML characters
    return tempDiv.innerHTML.replace(/[<>;'"]/g, ""); // Removes special characters if any
}

// Toggle Navbar for Mobile View
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Day/Night Mode Toggle
function toggleMode() {
    const darkModeStyle = document.getElementById('dark-mode');
    if (darkModeStyle.disabled) {
        darkModeStyle.disabled = false;
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeStyle.disabled = true;
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.getElementById('dark-mode').disabled = false;
    }
});
// Toggle mobile menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Toggle between Day and Night Mode
function toggleMode() {
    const darkModeStylesheet = document.getElementById('dark-mode');
    darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
}

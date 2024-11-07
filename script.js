// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Sanitize input fields
    const name = sanitizeInput(document.getElementById('name').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const message = sanitizeInput(document.getElementById('message').value);

    // Display sanitized data and reset form
    alert(`Thank you for reaching out, ${name}. We will get back to you soon.`);
    document.getElementById("contact-form").reset();
});

// Sanitize function to remove special characters from input
function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;  // Encodes HTML characters
    return tempDiv.innerHTML.replace(/[<>;'"]/g, ""); // Removes additional special characters
}

// Toggle Navbar for Mobile View
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Day/Night Mode Toggle
function toggleMode() {
    const darkModeStylesheet = document.getElementById('dark-mode');
    darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
    localStorage.setItem('theme', darkModeStylesheet.disabled ? 'light' : 'dark');
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    document.getElementById('dark-mode').disabled = savedTheme !== 'dark';
});

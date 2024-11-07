// Contact Form Submission with Download as File
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Sanitize input fields
    const name = sanitizeInput(document.getElementById('name').value);
    const email = sanitizeInput(document.getElementById('email').value);
    const message = sanitizeInput(document.getElementById('message').value);

    // Prepare text file content
    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create and click download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact_message.txt';
    link.click();

    // Cleanup and reset form
    URL.revokeObjectURL(url);
    document.getElementById("contact-form").reset();
    alert('Thank you for reaching out. We will get back to you soon.');
});

// Sanitize function to remove special characters
function sanitizeInput(input) {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML.replace(/[<>;'"]/g, ""); // Remove any special characters
}

// Toggle Navbar for Mobile View
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Day/Night Mode Toggle with Local Storage Save
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

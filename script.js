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

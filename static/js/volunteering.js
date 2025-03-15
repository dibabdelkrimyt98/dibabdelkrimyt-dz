document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navbar Toggle
    const navbar = document.getElementById('navbar');
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '☰'; // Hamburger icon
    toggleButton.classList.add('navbar-toggle');

    if (navbar) {
        navbar.parentElement.insertBefore(toggleButton, navbar);

        toggleButton.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // Volunteering Item Hover Effect
    const volunteeringItems = document.querySelectorAll('.volunteering-item');
    volunteeringItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.cursor = 'pointer'; // Change cursor to pointer
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});
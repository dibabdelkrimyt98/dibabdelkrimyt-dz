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

    // Dynamic Image Resizing (for project images)
    const projectImages = document.querySelectorAll('.project-content img');
    projectImages.forEach(img => {
        function resizeImage() {
            if (window.innerWidth < 768) {
                img.style.maxWidth = '100%'; // Full width on small screens
            } else {
                img.style.maxWidth = '150px'; // Original size on larger screens
            }
        }

        resizeImage(); // Initial resize
        window.addEventListener('resize', resizeImage); // Resize on window resize
    });

    // Project Box Hover Effect (using JS for clarity)
    const projectBoxes = document.querySelectorAll('.recent-updates div');
    projectBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
document.addEventListener('DOMContentLoaded', function() {
    // Responsive Navbar Toggle
    const navbar = document.getElementById('navbar');
    toggleButton.innerHTML = ''; // Hamburger icon
    toggleButton.classList.add('navbar-toggle');

    if (navbar) {
        navbar.parentElement.insertBefore(toggleButton, navbar);

        toggleButton.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // Recent Updates Box Hover Effect
    const updateBoxes = document.querySelectorAll('.recent-updates div:not(h2)');
    updateBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.cursor = 'pointer'; // Change cursor to pointer
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Welcome Message Animation (Creative Interaction)
    const welcomeHeading = document.querySelector('.middle-section h1');
    if (welcomeHeading) {
        welcomeHeading.style.opacity = '0';
        welcomeHeading.style.transform = 'translateY(-20px)'; // Start slightly above
        welcomeHeading.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(function() {
            welcomeHeading.style.opacity = '1';
            welcomeHeading.style.transform = 'translateY(0)';
        }, 500); // Delay for smoother effect

        // Adding a typing effect
        const originalText = welcomeHeading.textContent;
        welcomeHeading.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                welcomeHeading.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
            }
        }

        setTimeout(typeWriter, 1000); // Start typing after fade-in
    }

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
// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('#services h2, #services .group, #approach h2, #approach p, #team .group, #contact h2');
    animateElements.forEach(el => {
        el.classList.add('opacity-0'); // Initial state
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // --- Background Effect (Noble Forest Theme) ---
    // Using a subtle canvas effect if particles container exists, 
    // but the new design uses CSS gradients mostly. 
    // We'll keep a very subtle particle effect for "atomic" feel but use Primary Green.

    // Check if we want to add particles dynamically or if we removed the container.
    // The new index.html doesn't explicitly have #particles div, but let's check.
    // Actually, I removed the #particles div in the index.html update to favor the "Ambient Background" css divs.
    // So this part is optional or can be removed. 
    // Let's remove the canvas logic to keep it clean and match the "Matte" look requested in style guide.

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Artificial delay to simulate sending
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML; // Use innerHTML to keep icon
            btn.innerHTML = '<span>Sending...</span>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span>Message Sent</span> <span class="material-symbols-outlined">check</span>';
                // Reset form
                contactForm.reset();
                formStatus.classList.remove('hidden');

                // Reset button after a few seconds
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    formStatus.classList.add('hidden');
                }, 3000);

                console.log('Form submitted successfully!');
            }, 1000);
        });
    }

});

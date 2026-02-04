// script.js - Single Section Minimalist

document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Logic ---
    const modal = document.getElementById('contact-modal');
    const triggers = document.querySelectorAll('.contact-trigger');
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('modal-backdrop');

    function openModal() {
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // --- Form Handling ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Sent!';
                contactForm.reset();
                formStatus.classList.remove('hidden');

                setTimeout(() => {
                    closeModal(); // Auto close on success
                    btn.innerText = originalText;
                    btn.disabled = false;
                    formStatus.classList.add('hidden');
                }, 2000);
            }, 1000);
        });
    }
});

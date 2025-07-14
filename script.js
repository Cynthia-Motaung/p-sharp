document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const doc = document.documentElement;

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        doc.setAttribute('data-theme', 'light');
    }

    // Handle toggle button click
    themeToggleButton.addEventListener('click', () => {
        // Check if the data-theme attribute currently exists
        const isLight = doc.hasAttribute('data-theme');

        if (isLight) {
            // If it's light (attribute exists), switch to dark by removing the attribute
            doc.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // If it's dark (no attribute), switch to light by adding the attribute
            doc.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navMenuWrapper = document.querySelector(".nav-menu-wrapper");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenuWrapper.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove("active");
                navMenuWrapper.classList.remove("active");
            }
        });
    });

    // --- Typed.js for Hero Section ---
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Java.', 'Python.', 'C#.', 'Modern Web Tech.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true
        });
    }

    // --- Tech Stack Animation ---
    const techContainer = document.querySelector('.tech-container');
    if (techContainer) {
        const content = Array.from(techContainer.children);
        content.forEach(item => {
            techContainer.appendChild(item.cloneNode(true));
        });
    }

    // --- Live Email Validation ---
    const emailInput = document.getElementById('email');
    const emailValidationMessage = document.querySelector('.email-validation-message');
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value === "") {
                emailValidationMessage.textContent = "";
                emailValidationMessage.className = 'email-validation-message';
            } else if (emailRegex.test(emailInput.value)) {
                emailValidationMessage.textContent = "Valid email";
                emailValidationMessage.className = 'email-validation-message valid';
            } else {
                emailValidationMessage.textContent = "Invalid email format";
                emailValidationMessage.className = 'email-validation-message invalid';
            }
        });
    }
    
    // --- Project Modal Logic ---
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const projectGrid = document.querySelector('.project-grid');

    if (projectGrid && modal) {
        projectGrid.addEventListener('click', (e) => {
            const detailsButton = e.target.closest('.btn-details');
            if (detailsButton) {
                const card = detailsButton.closest('.project-card');
                
                // Populate modal
                modal.querySelector('.modal-title').textContent = card.dataset.title;
                modal.querySelector('.modal-img').src = card.dataset.img;
                modal.querySelector('.modal-desc').textContent = card.dataset.desc;
                modal.querySelector('.modal-link').href = card.dataset.link;
                
                const techStackContainer = modal.querySelector('.modal-tech-stack');
                techStackContainer.innerHTML = ''; // Clear previous tags
                const techs = card.dataset.tech.split(',');
                techs.forEach(tech => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.textContent = tech;
                    techStackContainer.appendChild(techTag);
                });

                // Show modal
                modal.classList.add('visible');
            }
        });

        // Close modal
        modalCloseBtn.addEventListener('click', () => modal.classList.remove('visible'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
            }
        });
    }
});
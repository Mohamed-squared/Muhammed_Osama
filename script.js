// script.js

// Developer Console Message
console.log("%cHey there, curious developer! 👋 Looking under the hood?",
            "color: #3A86FF; font-size: 18px; font-weight: bold; padding: 5px; background-color: #0D1B2A; border-radius: 5px;");

// This file will contain JavaScript code for the portfolio website.
document.addEventListener('DOMContentLoaded', () => {
    // Example: Log a message to the console when the DOM is fully loaded
    // console.log('DOM fully loaded and parsed'); // Kept for reference, can be removed

    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            // Only proceed if preloader is still visible (not hidden by fallback)
            if (preloader.style.display !== 'none') {
                preloader.classList.add('fade-out');
                preloader.addEventListener('transitionend', () => {
                    preloader.style.display = 'none';
                }, { once: true }); // Ensure it only runs once
            }
        });

        // Fallback: If 'load' event takes too long or fails for some reason
        setTimeout(() => {
            // Check if preloader is still visible and not already fading out
            if (preloader.style.display !== 'none' && !preloader.classList.contains('fade-out')) {
                preloader.classList.add('fade-out');
                preloader.addEventListener('transitionend', () => {
                    preloader.style.display = 'none';
                }, { once: true }); // Ensure it only runs once
            }
        }, 3000); // Hide after 3 seconds anyway
    }

    // Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }

    // Scroll-Triggered Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observerOptions = {
            root: null, // observes intersections relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // percentage of the item that needs to be visible to trigger
        };

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // For hero elements, the .visible class has specific properties defined in CSS
                    // For other .animate-on-scroll elements, the generic .hidden -> .visible transition applies
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            // Apply any inline transition-delay from the element's style attribute
            // This allows CSS-defined delays to be respected by the JS-triggered animation
            if (el.style.transitionDelay) {
                el.style.transition = `opacity 0.6s ease-out ${el.style.transitionDelay}, transform 0.6s ease-out ${el.style.transitionDelay}`;
            } else {
                 // Default transition if no delay is specified, matches .hidden class in CSS
                el.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
            }
            animationObserver.observe(el);
        });
    }

    // Header Visibility Change on Scroll
    const header = document.getElementById('main-header');
    if (header) {
        const scrollThreshold = 100; // Pixels to scroll before changing header
        let isThrottled = false;

        window.addEventListener('scroll', () => {
            if (!isThrottled) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > scrollThreshold) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    isThrottled = false;
                });
                isThrottled = true;
            }
        });
    }

    // Interactive Skills Section (3D Tilt Effect)
    const skillCards = document.querySelectorAll('.skill-card');

    if (skillCards.length > 0) {
        skillCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const cardRect = card.getBoundingClientRect();
                const cardWidth = cardRect.width;
                const cardHeight = cardRect.height;
                // Calculate mouse position relative to the center of the card
                const mouseX = e.clientX - cardRect.left - cardWidth / 2;
                const mouseY = e.clientY - cardRect.top - cardHeight / 2;

                // Define the maximum rotation angle
                const maxRotation = 8; // degrees (reduced for subtlety)

                // Calculate rotation based on mouse position
                const rotateY = (mouseX / (cardWidth / 2)) * maxRotation;
                const rotateX = -(mouseY / (cardHeight / 2)) * maxRotation;

                // Apply the transform, preserving CSS hover effects (scale and translateZ)
                // The CSS :hover for .skill-card is: transform: scale(1.05) translateZ(20px);
                card.style.transform = `scale(1.05) translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                // Reset transform to allow CSS :hover or default state to take over
                card.style.transform = '';
            });
        });
    }

    // Project Modal Logic
    const projectModal = document.getElementById('project-modal');
    const modalOverlay = projectModal ? projectModal.querySelector('.modal-overlay') : null;
    const modalCloseBtn = projectModal ? projectModal.querySelector('.modal-close') : null;
    const viewDetailsBtns = document.querySelectorAll('.details-btn');

    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectDescription = document.getElementById('modal-project-description');

    if (projectModal && modalOverlay && modalCloseBtn && viewDetailsBtns.length > 0 && modalProjectImage && modalProjectTitle && modalProjectDescription) {
        const openModal = (card) => {
            const title = card.dataset.title || "Project Title Not Found";
            const imgSrc = card.dataset.imageSrc || ""; // Default to empty if not found
            const description = card.dataset.description || "Description not available.";

            modalProjectImage.src = imgSrc;
            modalProjectTitle.textContent = title;
            modalProjectDescription.textContent = description;

            projectModal.classList.remove('modal-hidden');
            projectModal.classList.add('modal-visible');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        };

        const closeModal = () => {
            projectModal.classList.remove('modal-visible');
            projectModal.classList.add('modal-hidden');
            document.body.style.overflow = ''; // Restore background scroll
        };

        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Good practice for buttons that don't submit forms
                const projectCard = btn.closest('.project-card');
                if (projectCard) {
                    openModal(projectCard);
                }
            });
        });

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Close modal on 'Escape' key press
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.classList.contains('modal-visible')) {
                closeModal();
            }
        });
    }

    // Konami Code Easter Egg
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiPosition = 0;
    let matrixModeActive = false; // To prevent re-triggering or to toggle

    const activateMatrixMode = () => {
        if (matrixModeActive) return; // Already active

        document.documentElement.style.setProperty('--dark-navy', '#000000');
        document.documentElement.style.setProperty('--dark-blue', '#050505');
        document.documentElement.style.setProperty('--mid-blue', '#002200'); // Dark green for mid tones
        document.documentElement.style.setProperty('--light-slate', '#00FF00'); // Bright green for text
        document.documentElement.style.setProperty('--accent-blue', '#00CC00'); // Slightly darker green for accents

        // Potentially update specific non-variable elements if needed
        // Example: Preloader spinner border colors (if not using CSS vars directly)
        const spinner = document.querySelector('#preloader .spinner');
        if (spinner) {
            spinner.style.borderColor = '#002200'; // var(--mid-blue)
            spinner.style.borderTopColor = '#00CC00'; // var(--accent-blue)
        }
        // Example: Timeline item circles (if they don't inherit well)
        document.querySelectorAll('.timeline-item::after').forEach(circle => {
            // This direct ::after styling is not possible with JS.
            // Would require adding a class to .timeline-item and styling ::after via CSS.
            // For simplicity, we'll assume most elements adapt via CSS variables.
        });


        const matrixMessage = document.createElement('span');
        matrixMessage.id = 'matrix-message';
        matrixMessage.textContent = 'The Matrix has you...';
        matrixMessage.style.position = 'fixed';
        matrixMessage.style.top = '20px';
        matrixMessage.style.left = '50%';
        matrixMessage.style.transform = 'translateX(-50%)';
        matrixMessage.style.padding = '10px 20px';
        matrixMessage.style.backgroundColor = 'rgba(0,20,0,0.85)'; // Darker green, more opaque
        matrixMessage.style.color = '#00FF00';
        matrixMessage.style.fontFamily = "'Roboto Mono', monospace";
        matrixMessage.style.fontSize = '1.2rem';
        matrixMessage.style.border = '1px solid #00FF00';
        matrixMessage.style.borderRadius = '5px';
        matrixMessage.style.zIndex = '99999'; // Ensure it's on top
        matrixMessage.style.boxShadow = '0 0 15px #00FF00'; // Add a glow
        document.body.appendChild(matrixMessage);

        matrixModeActive = true;

        // Optional: Remove message after some time
        setTimeout(() => {
            matrixMessage.style.transition = 'opacity 0.5s ease-out';
            matrixMessage.style.opacity = '0';
            setTimeout(() => {
                if (matrixMessage.parentNode) { // Check if still in DOM
                    matrixMessage.remove();
                }
            }, 500);
        }, 5000); // Message stays for 5 seconds
    };

    window.addEventListener('keyup', (e) => {
        if (matrixModeActive) return; // Don't process if already active

        if (e.key.toLowerCase() === konamiSequence[konamiPosition].toLowerCase()) { // Case-insensitive check for 'b' and 'a'
            konamiPosition++;
            if (konamiPosition === konamiSequence.length) {
                activateMatrixMode();
                konamiPosition = 0; // Reset
            }
        } else {
            konamiPosition = 0; // Reset if wrong key
        }
    });

    // Other initializations will follow (e.g. active nav link highlighting)
});

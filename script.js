// Website functionality
class WebsiteManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupProfilePhoto();
    }

    setupSmoothScrolling() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupProfilePhoto() {
        const profileImg = document.getElementById('profile-img');
        const photoPlaceholder = document.getElementById('photo-placeholder');
        
        if (profileImg && photoPlaceholder) {
            // Check if image is already loaded (cached) - do this first
            if (profileImg.complete && profileImg.naturalHeight !== 0) {
                photoPlaceholder.style.display = 'none';
                profileImg.style.display = 'block';
                return; // Exit early if already loaded
            }
            
            // Hide placeholder immediately to prevent flash
            photoPlaceholder.style.display = 'none';
            profileImg.style.display = 'block';
            
            // Check if the image loads successfully
            profileImg.onload = function() {
                photoPlaceholder.style.display = 'none';
                profileImg.style.display = 'block';
            };
            
            // If image fails to load, show placeholder
            profileImg.onerror = function() {
                photoPlaceholder.style.display = 'flex';
                profileImg.style.display = 'none';
            };
        }
    }
}

// Initialize the website manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WebsiteManager();
});

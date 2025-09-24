class NewsletterPopup {
    constructor() {
        this.popup = null;
        this.overlay = null;
        this.isVisible = false;
        this.showDelay = 5000; // 5 seconds
        this.minInterval = 24 * 60 * 60 * 1000; // 24 hours
    }

    init() {
        this.createPopup();
        this.createOverlay();
        this.bindEvents();
        this.checkShowConditions();
    }

    createPopup() {
        this.popup = document.createElement('div');
        this.popup.className = 'newsletter-popup';
        this.popup.innerHTML = `
            <button class="newsletter-popup-close">
                <i class="fas fa-times"></i>
            </button>
            <h2>📧 Stay Updated!</h2>
            <p>Get weekly German learning tips, cultural insights, and course updates delivered to your inbox.</p>
            <form class="newsletter-popup-form">
                <input type="email" placeholder="Enter your email address" required>
                <button type="submit">
                    <i class="fas fa-envelope"></i>
                    Subscribe Now
                </button>
            </form>
            <div class="newsletter-popup-message" style="display: none;"></div>
            <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 15px;">
                We respect your privacy. Unsubscribe at any time.
            </p>
        `;
        document.body.appendChild(this.popup);
    }

    createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'newsletter-popup-overlay';
        document.body.appendChild(this.overlay);
    }

    bindEvents() {
        // Close button
        this.popup.querySelector('.newsletter-popup-close').addEventListener('click', () => {
            this.hide();
        });

        // Overlay click
        this.overlay.addEventListener('click', () => {
            this.hide();
        });

        // Form submission
        this.popup.querySelector('.newsletter-popup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(e);
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible) {
                this.hide();
            }
        });
    }

    checkShowConditions() {
        const lastShown = localStorage.getItem('newsletterPopupLastShown');
        const now = Date.now();

        if (!lastShown || (now - parseInt(lastShown)) > this.minInterval) {
            setTimeout(() => {
                this.show();
            }, this.showDelay);
        }
    }

    show() {
        if (this.isVisible) return;

        this.isVisible = true;
        this.popup.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Record when popup was shown
        localStorage.setItem('newsletterPopupLastShown', Date.now().toString());
    }

    hide() {
        if (!this.isVisible) return;

        this.isVisible = false;
        this.popup.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    async handleFormSubmission(event) {
        const form = event.target;
        const email = form.querySelector('input[type="email"]').value;
        const submitButton = form.querySelector('button');
        const messageDiv = this.popup.querySelector('.newsletter-popup-message');

        // Disable form during submission
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';

        try {
            await this.addContactToBrevo(email);
            this.showSuccessMessage();
            
            // Hide popup after success
            setTimeout(() => {
                this.hide();
            }, 2000);

        } catch (error) {
            this.showErrorMessage();
        } finally {
            // Re-enable form
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-envelope"></i> Subscribe Now';
        }
    }

    async addContactToBrevo(email) {
        // Simulate API call to Brevo (Sendinblue)
        // In production, replace with actual Brevo API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure (90% success rate)
                if (Math.random() > 0.1) {
                    console.log('Newsletter subscription successful for:', email);
                    resolve();
                } else {
                    reject(new Error('Subscription failed'));
                }
            }, 1500);
        });
    }

    showSuccessMessage() {
        const messageDiv = this.popup.querySelector('.newsletter-popup-message');
        messageDiv.style.display = 'block';
        messageDiv.className = 'newsletter-popup-message success';
        messageDiv.textContent = '✅ Successfully subscribed! Welcome to our community.';
    }

    showErrorMessage() {
        const messageDiv = this.popup.querySelector('.newsletter-popup-message');
        messageDiv.style.display = 'block';
        messageDiv.className = 'newsletter-popup-message error';
        messageDiv.textContent = '❌ Something went wrong. Please try again later.';
    }
}

// Global function for newsletter signup forms
function handleNewsletterSignup(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (typeof newsletterPopup !== 'undefined') {
        newsletterPopup.addContactToBrevo(email).then(() => {
            newsletterPopup.showSuccessMessage();
        }).catch(() => {
            newsletterPopup.showErrorMessage();
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const newsletterPopup = new NewsletterPopup();
    newsletterPopup.init();
    
    // Make it globally accessible
    window.newsletterPopup = newsletterPopup;
});

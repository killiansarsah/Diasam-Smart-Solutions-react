// Portfolio Image Shuffle Script
document.addEventListener('DOMContentLoaded', function() {
    const portfolioImages = [
        { src: 'agency-hotspot/images/CCTV SYSTEM.png', alt: 'Smart Camera', title: 'Smart Camera' },
        { src: 'agency-hotspot/images/Smart Lock.png', alt: 'Smart Lock', title: 'Smart Lock' },
        { src: 'agency-hotspot/images/Video-Doorbell.jpg', alt: 'Video Doorbell', title: 'Video Doorbell' },
        { src: 'agency-hotspot/images/Alexa.png', alt: 'Voice Assistant', title: 'Voice Assistant' },
        { src: 'agency-hotspot/images/smart light.jpg', alt: 'Smart Lights', title: 'Smart Lights' },
        { src: 'agency-hotspot/images/smart light.jpg', alt: 'Smart Plug', title: 'Smart Plug' }
    ];
    
    let currentMobileIndex = 0;
    let isMobile = window.innerWidth < 768;
    
    // Check if mobile view
    function checkMobile() {
        isMobile = window.innerWidth < 768;
    }
    
    // Mobile carousel functionality
    function updateMobileCarousel() {
        if (!isMobile) return;
        
        const productCards = document.querySelectorAll('.portfolio-grid .col-lg-4');
        const dots = document.querySelectorAll('.mobile-carousel-indicators .dot');
        
        // Remove active class from all cards and dots
        productCards.forEach(card => card.classList.remove('active-mobile'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current card and dot
        if (productCards[currentMobileIndex]) {
            productCards[currentMobileIndex].classList.add('active-mobile');
        }
        if (dots[currentMobileIndex]) {
            dots[currentMobileIndex].classList.add('active');
        }
        
        // Move to next card
        currentMobileIndex = (currentMobileIndex + 1) % productCards.length;
    }
    
    // Desktop shuffle functionality
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    function updatePortfolioImages() {
        if (isMobile) return; // Don't shuffle on mobile
        
        const shuffled = shuffleArray(portfolioImages);
        const productCards = document.querySelectorAll('.portfolio-grid .product-card');
        
        // Add slide-out animation
        productCards.forEach(card => {
            card.classList.add('slide-out');
        });
        
        // Wait for slide-out animation to complete, then update content and slide-in
        setTimeout(() => {
            productCards.forEach((card, index) => {
                if (shuffled[index]) {
                    const img = card.querySelector('.product-image img');
                    const title = card.querySelector('.product-title');
                    
                    if (img && title) {
                        img.src = shuffled[index].src;
                        img.alt = shuffled[index].alt;
                        title.textContent = shuffled[index].title;
                    }
                }
                
                // Remove slide-out and add slide-in
                card.classList.remove('slide-out');
                card.classList.add('slide-in');
            });
            
            // Remove slide-in class after animation completes
            setTimeout(() => {
                productCards.forEach(card => {
                    card.classList.remove('slide-in');
                });
            }, 350);
        }, 350);
    }
    
    // Initialize mobile carousel
    if (isMobile) {
        updateMobileCarousel();
    }
    
    // Mobile carousel auto-advance every 3 seconds
    setInterval(() => {
        if (isMobile) {
            updateMobileCarousel();
        }
    }, 3000);
    
    // Desktop shuffle every 5 seconds
    setInterval(() => {
        if (!isMobile) {
            updatePortfolioImages();
        }
    }, 5000);
    
    // Handle window resize
    window.addEventListener('resize', checkMobile);
    
    // Dot click handlers
    const dots = document.querySelectorAll('.mobile-carousel-indicators .dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            if (isMobile) {
                currentMobileIndex = parseInt(this.getAttribute('data-index'));
                updateMobileCarousel();
            }
        });
    });
});

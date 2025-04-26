/**
 * Animations.js - Specialized animations for the Capybara Date Invitation Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation controllers
    initCapybaraAnimations();
    initScrollAnimations();
    initInteractionAnimations();
    initSecretAnimations();
});

/**
 * Initialize capybara character animations
 */
function initCapybaraAnimations() {
    // Hero Capybara
    const heroCapybara = document.getElementById('heroCapybara');
    if (heroCapybara) {
        // Initial greeting animation sequence
        setTimeout(() => {
            waveAnimation(heroCapybara);
            blinkAnimation(heroCapybara);
        }, 1000);
        
        // Periodic animations
        setInterval(() => {
            if (Math.random() > 0.7) {
                blinkAnimation(heroCapybara);
            }
        }, 3000);
    }
    
    // Guide Capybara
    const guideCapybara = document.getElementById('guideCapybara');
    if (guideCapybara) {
        // Periodic thinking animation
        setInterval(() => {
            if (Math.random() > 0.8) {
                guideCapybara.classList.add('thinking');
                setTimeout(() => {
                    guideCapybara.classList.remove('thinking');
                }, 2000);
            }
        }, 10000);
    }
    
    // RSVP Capybara
    const rsvpCapybara = document.getElementById('rsvpCapybara');
    if (rsvpCapybara) {
        // Make occasionally look side to side
        setInterval(() => {
            if (Math.random() > 0.8) {
                rsvpCapybara.style.transform = 'rotate(-5deg)';
                setTimeout(() => {
                    rsvpCapybara.style.transform = 'rotate(5deg)';
                    setTimeout(() => {
                        rsvpCapybara.style.transform = 'rotate(0deg)';
                    }, 500);
                }, 500);
            }
        }, 8000);
    }
}

/**
 * Wave animation implementation
 * @param {HTMLElement} element - Element to animate
 */
function waveAnimation(element) {
    // Add wave class
    element.classList.add('wave-arm');
    
    // Remove class after animation completes
    setTimeout(() => {
        element.classList.remove('wave-arm');
    }, 2000);
}

/**
 * Blink animation implementation
 * @param {HTMLElement} element - Element to animate
 */
function blinkAnimation(element) {
    // Add blink class
    element.classList.add('blink-eyes');
    
    // Remove class after animation completes
    setTimeout(() => {
        element.classList.remove('blink-eyes');
    }, 300);
}

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        // Make all elements visible if not supported
        document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .pop-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }
    
    // Create observer for standard animations
    const standardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                standardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe elements with standard animation classes
    document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .pop-in').forEach(el => {
        standardObserver.observe(el);
    });
    
    // Create observer for section-specific animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger section-specific animations
                if (entry.target.id === 'overview') {
                    animateOverviewCards();
                } else if (entry.target.id === 'map') {
                    animateMap();
                } else if (entry.target.id === 'gallery') {
                    animateGallery();
                }
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Animate overview cards in sequence
 */
function animateOverviewCards() {
    const cards = document.querySelectorAll('.overview-cards .card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-up', 'visible');
        }, index * 200);
    });
}

/**
 * Animate map elements
 */
function animateMap() {
    // Animate route path
    const routePath = document.getElementById('routePath');
    if (routePath) {
        // Get path length
        const pathLength = routePath.getTotalLength();
        
        // Set up initial styles
        routePath.style.strokeDasharray = pathLength;
        routePath.style.strokeDashoffset = pathLength;
        
        // Animate the path
        setTimeout(() => {
            routePath.style.transition = 'stroke-dashoffset 2s ease-in-out';
            routePath.style.strokeDashoffset = '0';
        }, 500);
    }
    
    // Fade in location markers in sequence
    const markers = document.querySelectorAll('.location-marker');
    markers.forEach((marker, index) => {
        marker.style.opacity = '0';
        marker.style.transform = 'translate(-50%, -50%) scale(0.8)';
        
        setTimeout(() => {
            marker.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            marker.style.opacity = '1';
            marker.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 2000 + index * 200);
    });
}

/**
 * Animate gallery items
 */
function animateGallery() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        const row = Math.floor(index / 3);
        const delay = (row * 3 + (index % 3)) * 100;
        
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 500 + delay);
    });
}

/**
 * Initialize interaction animations
 */
function initInteractionAnimations() {
    // Preview route button interaction
    const previewButton = document.getElementById('previewRoute');
    const routeCapybara = document.getElementById('routeCapybara');
    
    if (previewButton && routeCapybara) {
        previewButton.addEventListener('click', () => {
            animateRoutePreview();
        });
    }
    
    // RSVP button interactions
    const rsvpYes = document.getElementById('rsvpYes');
    if (rsvpYes) {
        rsvpYes.addEventListener('click', () => {
            celebrateRSVP();
        });
    }
}

/**
 * Animate route preview with walking capybara
 */
function animateRoutePreview() {
    const routeCapybara = document.getElementById('routeCapybara');
    const routePoints = [
        { id: "location1", x: "20%", y: "15%" },
        { id: "location2", x: "35%", y: "25%" },
        { id: "location3", x: "45%", y: "40%" },
        { id: "location4", x: "60%", y: "55%" },
        { id: "location5", x: "50%", y: "70%" },
        { id: "location6", x: "35%", y: "80%" },
        { id: "location7", x: "25%", y: "65%" },
    ];
    
    // Reset capybara position
    routeCapybara.style.opacity = '1';
    routeCapybara.style.left = routePoints[0].x;
    routeCapybara.style.top = routePoints[0].y;
    routeCapybara.classList.add('walking');
    
    // Animate through each point
    let currentPoint = 0;
    
    // Highlight first location
    const firstMarker = document.getElementById(routePoints[0].id);
    if (firstMarker) {
        firstMarker.classList.add('active');
    }
    
    // Create animation interval
    const routeInterval = setInterval(() => {
        currentPoint++;
        
        // Check if we've reached the end
        if (currentPoint >= routePoints.length) {
            clearInterval(routeInterval);
            routeCapybara.classList.remove('walking');
            
            // Reset all highlights
            document.querySelectorAll('.location-marker').forEach(marker => {
                marker.classList.remove('active');
            });
            
            return;
        }
        
        // Move capybara to next point
        const point = routePoints[currentPoint];
        routeCapybara.style.left = point.x;
        routeCapybara.style.top = point.y;
        
        // Update highlights
        document.querySelectorAll('.location-marker').forEach(marker => {
            marker.classList.remove('active');
        });
        
        const marker = document.getElementById(point.id);
        if (marker) {
            marker.classList.add('active');
        }
    }, 2000);
}

/**
 * Celebrate RSVP with animations and confetti
 */
function celebrateRSVP() {
    const rsvpCapybara = document.getElementById('rsvpCapybara');
    
    // Happy dance animation
    if (rsvpCapybara) {
        rsvpCapybara.classList.add('happy-dance');
    }
    
    // Create confetti
    if (window.confetti) {
        window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#663399', '#9370DB', '#D8BFD8', '#708238', '#F5F5DC']
        });
    } else {
        // Fallback confetti implementation
        createFallbackConfetti();
    }
}

/**
 * Create fallback confetti animation
 */
function createFallbackConfetti() {
    const colors = ['#663399', '#9370DB', '#D8BFD8', '#708238', '#F5F5DC'];
    const confettiCount = 100;
    const container = document.querySelector('.rsvp-section');
    
    if (!container) return;
    
    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        container.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

/**
 * Initialize secret easter egg animations
 */
function initSecretAnimations() {
    // Secret click counters
    const clickCounts = {
        'hummusCard': 0,
        'heroCapybara': 0,
        'footer': 0
    };
    
    // Add event listeners
    Object.keys(clickCounts).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                clickCounts[id]++;
                checkSecretAnimations(id, clickCounts[id]);
            });
        }
    });
    
    // Konami code detection
    let konamiSequence = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiSequence.push(e.key);
        if (konamiSequence.length > konamiCode.length) {
            konamiSequence.shift();
        }
        
        // Check if sequence matches
        if (konamiSequence.join(',') === konamiCode.join(',')) {
            triggerKonamiEasterEgg();
            konamiSequence = [];
        }
    });
}

/**
 * Check for secret animations based on click counts
 * @param {string} id - Element ID
 * @param {number} count - Click count
 */
function checkSecretAnimations(id, count) {
    if (id === 'hummusCard' && count === 5) {
        // Show secret hummus capybara
        const hummusCard = document.getElementById('hummusCard');
        const secretCapy = document.createElement('img');
        secretCapy.src = 'images/secret-hummus-capybara.svg';
        secretCapy.alt = 'Secret capybara';
        secretCapy.className = 'secret-capybara';
        secretCapy.style.position = 'absolute';
        secretCapy.style.bottom = '-20px';
        secretCapy.style.right = '-30px';
        secretCapy.style.width = '80px';
        secretCapy.style.transform = 'scale(0)';
        
        hummusCard.style.position = 'relative';
        hummusCard.appendChild(secretCapy);
        
        // Animate in
        setTimeout(() => {
            secretCapy.style.transition = 'transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
            secretCapy.style.transform = 'scale(1)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            secretCapy.style.transform = 'scale(0)';
            setTimeout(() => {
                secretCapy.remove();
            }, 500);
        }, 5000);
    } else if (id === 'heroCapybara' && count === 3) {
        // Hero capybara does a spin
        const heroCapy = document.getElementById('heroCapybara');
        heroCapy.style.transition = 'transform 1s ease';
        heroCapy.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            heroCapy.style.transition = 'transform 0s';
            heroCapy.style.transform = 'rotate(0deg)';
        }, 1000);
    } else if (id === 'footer' && count === 7) {
        // Easter egg message in console
        console.log('%c🌟 You found a secret! Capybaras appreciate your curiosity! 🌟', 'font-size: 20px; color: #663399; background-color: #E6E6FA; padding: 10px; border-radius: 5px;');
    }
}

/**
 * Trigger Konami code easter egg
 */
function triggerKonamiEasterEgg() {
    // Add sunglasses to all capybaras
    const capybaras = document.querySelectorAll('img[src*="capybara"]');
    
    capybaras.forEach(capybara => {
        // Create sunglasses overlay
        const overlay = document.createElement('div');
        overlay.className = 'sunglasses-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = '30%';
        overlay.style.left = '50%';
        overlay.style.transform = 'translateX(-50%)';
        overlay.style.width = '60%';
        overlay.style.height = '20%';
        overlay.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)';
        overlay.style.borderRadius = '5px';
        overlay.style.zIndex = '10';
        overlay.style.opacity = '0';
        
        // Position relative for absolute positioning
        const parent = capybara.parentElement;
        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }
        
        // Add to parent
        parent.appendChild(overlay);
        
        // Animate in
        setTimeout(() => {
            overlay.style.transition = 'opacity 0.3s ease';
            overlay.style.opacity = '1';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 300);
        }, 3000);
    });
    
    // Play cool sound if audio is enabled
    const coolSound = new Audio('sounds/cool.mp3');
    coolSound.volume = 0.5;
    coolSound.play().catch(() => {
        // Ignore error if auto-play is blocked
    });
    
    // Show message
    const message = document.createElement('div');
    message.textContent = 'COOL CAPYBARAS ACTIVATED! 😎';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'linear-gradient(to right, #663399, #9370DB)';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';
    message.style.fontFamily = 'Quicksand, sans-serif';
    message.style.fontWeight = 'bold';
    message.style.fontSize = '24px';
    message.style.zIndex = '9999';
    message.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        message.style.transform = 'translate(-50%, -50%) scale(1.2)';
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 2500);
}
/**
 * Main JavaScript for Capybara Date Invitation Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const pawPrintCanvas = document.getElementById('pawPrintCanvas');
    const heroCapybara = document.getElementById('heroCapybara');
    const previewRoute = document.getElementById('previewRoute');
    const routeCapybara = document.getElementById('routeCapybara');
    const rsvpYes = document.getElementById('rsvpYes');
    const rsvpCheck = document.getElementById('rsvpCheck');
    const rsvpResponse = document.getElementById('rsvpResponse');
    const rescheduleForm = document.getElementById('rescheduleForm');
    const dateForm = document.getElementById('dateForm');
    const guideCapybara = document.getElementById('guideCapybara');
    const guideSpeech = document.getElementById('guideSpeech');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const whyCapybaras = document.getElementById('whyCapybaras');
    const secretExplanation = document.getElementById('secretExplanation');
    const capybaraFacts = document.getElementById('capybaraFacts');
    const locationMarkers = document.querySelectorAll('.location-marker');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeButton = document.querySelector('.close-button');
    const audioToggle = document.getElementById('audioToggle');
    const themeToggle = document.getElementById('themeToggle');
    
    // Capybara facts array
    const facts = [
        "Capybaras can sleep underwater with just their noses poking out! On our date, we'll keep our heads above water though.",
        "Capybaras make a purring sound when content, just like cats! I hope our date leaves us both purring with happiness.",
        "Baby capybaras can ride on their parents' backs when swimming! Our date has no swimming planned, but I promise to have your back throughout our adventure.",
        "Capybaras have webbed feet to help them swim! The View Lounge has fantastic cocktails, but I promise not to get webbed feet.",
        "In Japan, capybaras are often photographed relaxing in hot springs with citrus fruits on their heads! Our date might be less bizarre, but equally memorable."
    ];

    // Route points for map animation
    const routePoints = [
        { id: "location1", x: "20%", y: "15%" },
        { id: "location2", x: "35%", y: "25%" },
        { id: "location3", x: "45%", y: "40%" },
        { id: "location4", x: "60%", y: "55%" },
        { id: "location5", x: "50%", y: "70%" },
        { id: "location6", x: "35%", y: "80%" },
        { id: "location7", x: "25%", y: "65%" },
    ];

    // Initialize the website
    initWebsite();

    /**
     * Initialize all website components
     */
    function initWebsite() {
        // Set initial setup
        setupPawPrintCanvas();
        setupHeroCapybara();
        setupGuideCapybara();
        setupLocationMarkers();
        setupGalleryItems();
        setupEventListeners();
        
        // Hide loading overlay after website loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingOverlay.style.opacity = '0';
                setTimeout(function() {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 1500);
        });
        
        // Show random capybara facts periodically
        startCapybaraFacts();
    }

    /**
     * Set up paw print canvas for cursor following
     */
    function setupPawPrintCanvas() {
        // Set canvas dimensions
        pawPrintCanvas.width = window.innerWidth;
        pawPrintCanvas.height = window.innerHeight;
        
        const ctx = pawPrintCanvas.getContext('2d');
        const pawPrints = [];
        
        // Handle window resize
        window.addEventListener('resize', function() {
            pawPrintCanvas.width = window.innerWidth;
            pawPrintCanvas.height = window.innerHeight;
        });
        
        // Track mouse movement
        document.addEventListener('mousemove', function(e) {
            // Only add paw print every 100ms
            if (Date.now() % 100 < 20) {
                // Create left and right paw prints
                pawPrints.push({
                    x: e.clientX - 15,
                    y: e.clientY,
                    opacity: 1,
                    scale: 1,
                    rotation: -10,
                    isLeft: true
                });
                
                pawPrints.push({
                    x: e.clientX + 15,
                    y: e.clientY + 20,
                    opacity: 1,
                    scale: 1,
                    rotation: 10,
                    isLeft: false
                });
            }
        });
        
        // Animation loop for paw prints
        function animatePawPrints() {
            ctx.clearRect(0, 0, pawPrintCanvas.width, pawPrintCanvas.height);
            
            // Update and draw paw prints
            for (let i = 0; i < pawPrints.length; i++) {
                const paw = pawPrints[i];
                
                // Skip if opacity is 0 or less
                if (paw.opacity <= 0) {
                    continue;
                }
                
                // Draw paw print
                ctx.save();
                ctx.globalAlpha = paw.opacity;
                ctx.translate(paw.x, paw.y);
                ctx.rotate(paw.rotation * Math.PI / 180);
                ctx.scale(paw.scale, paw.scale);
                
                // Draw SVG-like paw print
                ctx.fillStyle = '#663399';
                
                // Draw paw pad
                ctx.beginPath();
                ctx.ellipse(0, 0, 8, 10, 0, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw toe beans
                const toeOffsets = paw.isLeft 
                    ? [[-5, -12], [5, -12], [-10, -5], [10, -5]]
                    : [[-5, -12], [5, -12], [-10, -5], [10, -5]];
                
                for (const [dx, dy] of toeOffsets) {
                    ctx.beginPath();
                    ctx.ellipse(dx, dy, 4, 5, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                ctx.restore();
                
                // Update paw print properties
                paw.opacity -= 0.02;
                paw.scale *= 0.99;
            }
            
            // Filter out invisible paw prints
            pawPrints.filter(paw => paw.opacity > 0);
            
            requestAnimationFrame(animatePawPrints);
        }
        
        // Start animation
        animatePawPrints();
    }

    /**
     * Set up hero capybara animations
     */
    function setupHeroCapybara() {
        // Wave animation after page load
        setTimeout(function() {
            heroCapybara.classList.add('wave-arm');
            setTimeout(function() {
                heroCapybara.classList.remove('wave-arm');
            }, 2000);
        }, 1500);
        
        // Random blinking
        setInterval(function() {
            if (Math.random() > 0.7) {
                heroCapybara.classList.add('blink-eyes');
                setTimeout(function() {
                    heroCapybara.classList.remove('blink-eyes');
                }, 300);
            }
        }, 3000);
    }

    /**
     * Set up guide capybara behavior
     */
    function setupGuideCapybara() {
        const speechTexts = {
            hero: "Hi! I'm Cappy, your guide to this capybara-themed invitation. Click me anytime you need help!",
            map: "Psst! Try clicking 'Preview Our Day' to see a mini-me walk through all our date locations!",
            rsvp: "No pressure! This day is designed to be enjoyable and relaxed. The capybaras are hoping you'll say yes, though!"
        };
        
        // Update speech based on scroll position
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Determine which section is in view
            if (scrollPosition < windowHeight) {
                updateGuideSpeech('hero');
            } else if (document.getElementById('map').getBoundingClientRect().top < windowHeight/2) {
                updateGuideSpeech('map');
            } else if (document.getElementById('rsvp').getBoundingClientRect().top < windowHeight/2) {
                updateGuideSpeech('rsvp');
            }
        });
        
        // Guide capybara click behavior
        guideCapybara.addEventListener('click', function() {
            guideCapybara.classList.toggle('speaking');
        });
        
        // Update guide speech text
        function updateGuideSpeech(section) {
            if (guideSpeech.textContent !== speechTexts[section]) {
                guideSpeech.textContent = speechTexts[section];
            }
        }
    }

    /**
     * Set up location markers on the map
     */
    function setupLocationMarkers() {
        locationMarkers.forEach(marker => {
            // Add hover effect for cards
            marker.addEventListener('mouseenter', function() {
                this.querySelector('.location-card').style.opacity = '1';
                this.querySelector('.location-card').style.transform = 'translateX(-50%) scale(1)';
            });
            
            marker.addEventListener('mouseleave', function() {
                this.querySelector('.location-card').style.opacity = '0';
                this.querySelector('.location-card').style.transform = 'translateX(-50%) scale(0.95)';
            });
        });
    }

    /**
     * Set up gallery items and modal
     */
    function setupGalleryItems() {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const caption = this.querySelector('.caption').textContent;
                
                modalImage.src = imgSrc;
                modalCaption.textContent = caption;
                galleryModal.style.display = 'flex';
            });
        });
        
        // Close modal when clicking close button
        closeButton.addEventListener('click', function() {
            galleryModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                galleryModal.style.display = 'none';
            }
        });
    }

    /**
     * Set up all event listeners
     */
    function setupEventListeners() {
        // Preview route button
        if (previewRoute) {
            previewRoute.addEventListener('click', animateRoute);
        }
        
        // RSVP buttons
        if (rsvpYes) {
            rsvpYes.addEventListener('click', handleRSVPYes);
        }
        
        if (rsvpCheck) {
            rsvpCheck.addEventListener('click', handleRSVPCheck);
        }
        
        // Date form submission
        if (dateForm) {
            dateForm.addEventListener('submit', function(e) {
                e.preventDefault();
                handleDateFormSubmit();
            });
        }
        
        // Why capybaras button
        if (whyCapybaras) {
            whyCapybaras.addEventListener('click', function() {
                secretExplanation.style.display = secretExplanation.style.display === 'block' ? 'none' : 'block';
            });
        }
        
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-theme');
                localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
            });
            
            // Check for saved theme preference
            if (localStorage.getItem('darkTheme') === 'true') {
                document.body.classList.add('dark-theme');
            }
        }
        
        // Add scroll animation triggers
        observeElements();
    }

    /**
     * Animate the capybara along the route on the map
     */
    function animateRoute() {
        routeCapybara.classList.add('walking');
        let currentPoint = 0;
        
        // Highlight the first location
        document.getElementById(routePoints[currentPoint].id).classList.add('active');
        
        // Animation interval
        const routeInterval = setInterval(function() {
            // Move to next point
            currentPoint++;
            
            // Check if we've reached the end
            if (currentPoint >= routePoints.length) {
                clearInterval(routeInterval);
                routeCapybara.classList.remove('walking');
                
                // Reset all highlights
                locationMarkers.forEach(marker => {
                    marker.classList.remove('active');
                });
                
                return;
            }
            
            // Move capybara to next point
            const nextPoint = routePoints[currentPoint];
            routeCapybara.style.left = nextPoint.x;
            routeCapybara.style.top = nextPoint.y;
            
            // Update highlights
            locationMarkers.forEach(marker => {
                marker.classList.remove('active');
            });
            document.getElementById(nextPoint.id).classList.add('active');
            
        }, 2000); // Time between points
        
        // Position capybara at first point
        routeCapybara.style.left = routePoints[0].x;
        routeCapybara.style.top = routePoints[0].y;
    }

    /**
     * Handle "Yes" RSVP button click
     */
    function handleRSVPYes() {
        // Hide both buttons
        rsvpYes.style.display = 'none';
        rsvpCheck.style.display = 'none';
        
        // Show response message
        rsvpResponse.style.display = 'block';
        rsvpResponse.innerHTML = `
            <h3>Hooray! I'm looking forward to our capybara adventure!</h3>
            <p>I'll reach out soon with details on where to meet and anything you might want to know before our day begins.</p>
            <p>In the meantime, the capybaras and I will be counting down the days!</p>
        `;
        
        // Make RSVP capybara do happy dance
        document.getElementById('rsvpCapybara').classList.add('happy-dance');
        
        // Create confetti celebration
        createConfetti();
    }

    /**
     * Handle "Need to check" RSVP button click
     */
    function handleRSVPCheck() {
        // Hide both buttons
        rsvpYes.style.display = 'none';
        rsvpCheck.style.display = 'none';
        
        // Show reschedule form
        rescheduleForm.style.display = 'block';
    }

    /**
     * Handle date form submission
     */
    function handleDateFormSubmit() {
        // Get form data
        const preferredDate = document.getElementById('preferredDate').value;
        const alternateDate = document.getElementById('alternateDate').value;
        const message = document.getElementById('message').value;
        
        // Hide form
        rescheduleForm.style.display = 'none';
        
        // Show response message
        rsvpResponse.style.display = 'block';
        rsvpResponse.innerHTML = `
            <h3>Thanks for letting me know!</h3>
            <p>I've received your preferred date${alternateDate ? 's' : ''} and will be in touch soon to confirm our capybara adventure.</p>
            <p>Looking forward to our day together!</p>
        `;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { preferredDate, alternateDate, message });
    }

    /**
     * Create confetti celebration effect
     */
    function createConfetti() {
        const colors = ['#663399', '#9370DB', '#D8BFD8', '#708238', '#F5F5DC'];
        const confettiCount = 150;
        
        // Create confetti container if it doesn't exist
        let confettiContainer = document.getElementById('confettiContainer');
        if (!confettiContainer) {
            confettiContainer = document.createElement('div');
            confettiContainer.id = 'confettiContainer';
            confettiContainer.style.position = 'absolute';
            confettiContainer.style.top = '0';
            confettiContainer.style.left = '0';
            confettiContainer.style.width = '100%';
            confettiContainer.style.height = '100%';
            confettiContainer.style.overflow = 'hidden';
            confettiContainer.style.pointerEvents = 'none';
            document.querySelector('.rsvp-section').appendChild(confettiContainer);
        }
        
        // Create confetti pieces
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.opacity = Math.random() + 0.5;
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            
            // Randomly create different shapes
            if (Math.random() > 0.6) {
                confetti.style.borderRadius = '50%';
            } else if (Math.random() > 0.5) {
                confetti.style.transform = 'rotate(45deg)';
            }
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation completes
            confetti.addEventListener('animationend', function() {
                confetti.remove();
            });
        }
        
        // Use confetti.js library if available
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors
            });
        }
    }

    /**
     * Show random capybara facts periodically
     */
    function startCapybaraFacts() {
        // Initial delay
        setTimeout(showRandomFact, 30000);
        
        function showRandomFact() {
            // Initialize lastActivity if it doesn't exist
            let lastActivity = window.lastActivity || Date.now();
            
            // Only show if user is active (hasn't been idle)
            if (Date.now() - lastActivity < 60000) {
                // Get random fact
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                
                // Create and position fact bubble
                capybaraFacts.textContent = randomFact;
                
                // Randomly position on screen
                const positions = [
                    { top: '20%', left: '10%' },
                    { top: '15%', right: '10%' },
                    { bottom: '30%', left: '5%' },
                    { bottom: '25%', right: '5%' }
                ];
                
                const position = positions[Math.floor(Math.random() * positions.length)];
                
                // Apply position
                Object.keys(position).forEach(key => {
                    capybaraFacts.style[key] = position[key];
                });
                
                // Show the fact
                capybaraFacts.classList.add('visible');
                
                // Hide after 8 seconds
                setTimeout(function() {
                    capybaraFacts.classList.remove('visible');
                }, 8000);
            }
            
            // Schedule next fact in 60-90 seconds
            setTimeout(showRandomFact, 60000 + Math.random() * 30000);
        }
        
        // Track user activity
        window.lastActivity = Date.now();
        ['mousemove', 'keydown', 'click', 'scroll'].forEach(event => {
            document.addEventListener(event, function() {
                window.lastActivity = Date.now();
            });
        });
    }

    /**
     * Use Intersection Observer for scroll animations
     */
    function observeElements() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            return;
        }
        
        // Create observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // Observe all elements with animation classes
        document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .pop-in').forEach(el => {
            observer.observe(el);
        });
    }
});

/**
 * Confetti.js - Falling confetti animation
 * 
 * This is a placeholder for the confetti.min.js library
 * You would include the actual library in your project
 */

// Placeholder for confetti library
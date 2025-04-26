# Capybara Website Animations & Interactive Elements

This document details the animations and interactive elements for the capybara-themed date invitation website, focusing on creating a delightful, engaging experience while maintaining performance and accessibility.

## Character Animations

### 1. Hero Capybara
- **Idle Animation:** Gentle breathing motion (subtle scaling 100% to 102% at 4-second intervals)
- **Welcome Animation:** When page loads, the capybara waves with its paw and blinks
- **Interaction:** When clicked/tapped, the capybara tilts its head and makes a small happy sound
- **Technical Approach:** SVG animation with CSS keyframes for movements

### 2. Guide Capybara
- **Position:** Small character that appears in the bottom-right corner
- **Entrance Animation:** Slides up from bottom with a small bounce effect
- **Idle Animation:** Occasionally looks around and adjusts its purple tour guide hat
- **Helper Function:** When a user hovers over complex elements, the guide capybara points to them
- **Speech Bubbles:** Can display helpful tips in purple speech bubbles
- **Technical Approach:** Combination of sprite animation for complex movements and CSS transitions

### 3. Map Route Capybara
- **Trigger:** Activates when user clicks "Preview Our Day"
- **Animation:** Tiny capybara character walks along the purple route on the map
- **Movement:** Follows path from start to end, pausing at each location with a small hop
- **Location Reveals:** As the capybara reaches each location, the info card fades in
- **Technical Approach:** SVG path animation using JavaScript timing functions

## Element Animations

### 1. Purple Paw Print Trail
- **Trigger:** Follows user's cursor or finger movement with slight delay
- **Effect:** Series of 4-5 fading purple paw prints appear behind cursor movement
- **Variation:** Prints become slightly larger when moving over interactive elements
- **Technical Approach:** Canvas-based particle effect that follows pointer coordinates

### 2. Card Reveal Animations
- **Trigger:** Elements animate as they enter the viewport during scrolling
- **Date Overview Cards:** Rise up sequentially with 200ms delay between each
- **Fade-In:** Start at 0 opacity and 20px below final position, animate to full opacity and correct position
- **Easing:** Custom easing function for natural, slightly bouncy movement
- **Technical Approach:** Intersection Observer API with CSS transitions

### 3. Hummus Loading Animation
- **When Used:** During initial page load and any data fetching operations
- **Design:** Circular swirl resembling hummus being mixed with a drizzle of olive oil
- **Animation:** Continuous clockwise rotation with a "dipping" element
- **Message:** "Preparing something delicious..." text beneath
- **Technical Approach:** CSS animation with SVG elements for smooth scaling

## Interactive Elements

### 1. Location Cards on Map
- **Default State:** Simple icons with location names
- **Hover State:** Card expands to show more details about the activity
- **Animation:** Card grows with slight rotation while details fade in
- **Special Effect:** Small purple particles emit from card when expanded
- **Technical Approach:** CSS transforms with JavaScript event listeners

### 2. Gallery Images
- **Default State:** Purple-framed polaroid-style images in grid layout
- **Hover Effect:** Selected image raises slightly and casts a subtle shadow
- **Animation:** Gentle float animation (up/down 5px) on continuous loop
- **Interaction:** Clicking opens a larger view with additional images
- **Technical Approach:** CSS transforms for hover, modal component for expanded view

### 3. RSVP Buttons
- **Default State:** Two buttons, one olive green ("Yes") and one beige ("Need to check")
- **Hover Effect:** Buttons scale up slightly (105%) with color brightening
- **Yes Button Interaction:** When clicked, triggers confetti animation and happy capybara dance
- **Check Button Interaction:** When clicked, shows a form to input availability
- **Technical Approach:** CSS transitions with JavaScript animation library for confetti

## Transition Animations

### 1. Page Section Transitions
- **Scroll Behavior:** Smooth scrolling between sections
- **Section Entry:** Each section has subtle entry animations as it comes into view
- **Background:** Purple gradient subtly shifts hue depending on section
- **Technical Approach:** Intersection Observer API with CSS variable manipulation

### 2. Modal Transitions
- **Opening:** Modals scale from 90% to 100% while fading in
- **Closing:** Reverse animation with slight downward movement
- **Background:** Purple overlay fades in/out with backdrop blur effect
- **Technical Approach:** CSS transitions with focus management for accessibility

### The "Hidden" Animations

### 1. Secret Capybaras
- **Trigger:** Certain elements on the page, when clicked multiple times, reveal hidden capybaras
- **Example:** Clicking the hummus bowl 5 times makes a tiny capybara pop up from behind it
- **Variation:** Different hidden capybaras throughout the site, each with unique animations
- **Technical Approach:** JavaScript click counters with CSS animation reveals

### 2. Capybara Facts
- **Trigger:** Random appearance every 60-90 seconds if user is active on page
- **Animation:** Facts fade in within small purple bubbles in corners of the page
- **Content:** Mix of real capybara facts and humorous date-related capybara scenarios
- **Technical Approach:** JavaScript timeout functions with randomized content selection

### 3. Easter Egg: Konami Code
- **Trigger:** User enters the Konami code (↑↑↓↓←→←→BA)
- **Effect:** All capybaras on page briefly wear purple sunglasses
- **Sound:** Optional "cool" sound effect if audio is enabled
- **Technical Approach:** JavaScript key sequence detection

## Post-RSVP Animations

### 1. If "Yes" Response
- **Main Animation:** The hero capybara does a happy dance with arms raised
- **Background Effect:** Purple confetti explosion across the screen
- **Transition:** Page transforms to show countdown to date
- **New Element:** Animated calendar with capybara getting progressively more excited as date approaches
- **Technical Approach:** SVG animation sequence with particle system for confetti

### 2. If "Need to Check Schedule" Response
- **Main Animation:** The hero capybara nods understandingly
- **Transition:** Form appears with date options
- **New Element:** Calendar interface with capybara pointing to different dates
- **Technical Approach:** Form component with custom styled inputs

## Accessibility Considerations

### 1. Reduced Motion Support
- **Detection:** Respects user's prefers-reduced-motion setting
- **Alternative:** All animations scale back to simple fades or no animation
- **Manual Toggle:** Additional option to disable animations regardless of system setting
- **Technical Approach:** CSS media queries and JavaScript class toggling

### 2. Animation Timing
- **Duration Control:** All animations kept under 500ms for key interactions
- **Pause Ability:** Animations pause when page is not in focus
- **Loading States:** Clear loading indicators that don't rely solely on animation
- **Technical Approach:** JavaScript animation timing management

### 3. Non-Animation Alternatives
- **Text Equivalents:** All animated instructions also available as static text
- **Color Independence:** Important information not conveyed by color alone
- **Focus Management:** Keyboard focus handling for all interactive elements
- **Technical Approach:** ARIA attributes and semantic HTML structure

## Technical Implementation Notes

### 1. Performance Optimization
- **Lazy Loading:** Animations only initialize when near viewport
- **Hardware Acceleration:** Use transform and opacity for most animations to leverage GPU
- **Throttling:** Movement-based animations (like paw prints) throttled to maintain frame rate
- **Asset Optimization:** SVG compression and sprite techniques for complex animations

### 2. Mobile Considerations
- **Touch Events:** All hover animations adapted for touch with appropriate triggers
- **Simplified Versions:** More complex animations simplified on mobile
- **Battery Awareness:** Animation complexity reduced when battery is low
- **Technical Approach:** Feature detection and progressive enhancement

This animation plan creates a cohesive, charming experience that brings the capybara theme to life without overwhelming the user or compromising performance. The focus remains on creating delight while ensuring the date information is clear and accessible.
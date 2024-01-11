// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the couple section
    const coupleSection = document.getElementById('couple');

    // Get the groom and bride elements
    const groomElement = document.querySelector('.couple-part.groom');
    const brideElement = document.querySelector('.couple-part.bride');
    const groomTextElement = document.querySelector('.description-groom');
    const brideTextElement = document.querySelector('.description-bride');

    // Check if an element is more than 75% visible on the screen
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.75 &&
            rect.bottom >= 0 &&
            rect.left <= window.innerWidth &&
            rect.right >= 0
        );
    }

    // Function to handle animations
    function handleAnimations() {
        if (isElementInViewport(groomElement)) {
            groomElement.classList.add('animate-slide');
            groomTextElement.classList.add('animate-slide');
        }

        if (isElementInViewport(brideElement)) {
            brideElement.classList.add('animate-slide');
            brideTextElement.classList.add('animate-slide');
        }
    }

    // Function to scroll to the couple section when clicking on the couple link
    function scrollToCoupleSection(event) {
        event.preventDefault();
        coupleSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Attach the handleAnimations function to the scroll event
    window.addEventListener('scroll', handleAnimations);

    // Attach the handleAnimations function to the resize event
    window.addEventListener('resize', handleAnimations);

    // Get the couple link from the navigation
    const coupleLink = document.querySelector('a[href="#couple"]');

    // Attach the scrollToCoupleSection function to the couple link click event
    coupleLink.addEventListener('click', scrollToCoupleSection);

    // Trigger initial animations on page load
    handleAnimations();
});

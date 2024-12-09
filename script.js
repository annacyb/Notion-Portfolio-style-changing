// Function to adjust the image height based on h1 and h2 heights
function adjustImageHeight() {
    const h1 = document.querySelector('article h1');
    const h2 = document.querySelector('article h2');

    if (h1 && h2) {
        const h1Height = h1.offsetHeight;
        const h2Height = h2.offsetHeight;

        // Set the image height dynamically (h1 + h2 heights + 40px padding top & bottom)
        const imageHeight = h1Height + h2Height + 80;

        const image = document.querySelector('.notion-header__cover img');
        if (image) {
            image.style.height = `${imageHeight}px`;
        }
    }
}

// Call adjustImageHeight when the page loads
window.addEventListener('load', adjustImageHeight);

// Adjust the height when resizing the window
window.addEventListener('resize', adjustImageHeight);

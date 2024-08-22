function adjustImageSizes(p) {
    const container = document.getElementById('image-container');
    const imageA = document.getElementById('imageA');
    const imageB = document.getElementById('imageB');

    const containerWidth = container.clientWidth;
    
    // Calculate widths for each image based on the proportion p
    const widthA = containerWidth * p;
    const widthB = containerWidth * (1 - p);

    // Set the widths
    imageA.style.width = widthA + 'px';
    imageB.style.width = widthB + 'px';
    
    // Adjust the height of the container to fit the tallest image
    const heightA = widthA / imageA.naturalWidth * imageA.naturalHeight;
    const heightB = widthB / imageB.naturalWidth * imageB.naturalHeight;
    
    container.style.height = Math.max(heightA, heightB) + 'px';
}

// Example usage: adjustImageSizes(0.4); // 40% width for image A, 60% for image B
window.addEventListener('resize', () => adjustImageSizes(0.4)); // Adjust sizes on window resize

function getRandomUniqueNumbers(count, max) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function setImageSrc(imgElement, imageNumber) {
    imgElement.classList.remove('fade-in');
    imgElement.classList.add('fade-out');
    setTimeout(() => {
        imgElement.src = `images/photos/image-${imageNumber}.jpg`;
        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const passions = ['Apple', 'coffee', 'cargo bikes', 'Antwerp', 'Lego', 'Star Wars'];
    const passionElement = document.getElementById('passion');
    let index = Math.floor(Math.random() * passions.length); // Random initial index

    // Create and style the line element (assuming you will add the div in index.html)
    const lineElement = document.createElement('div');
    lineElement.style.position = 'fixed';
    lineElement.style.top = '0';
    lineElement.style.left = '0';
    lineElement.style.width = '0';  // Initial width
    lineElement.style.height = '5px';
    lineElement.style.backgroundColor = 'rgb(250, 204, 21)'
    lineElement.style.zIndex = '1000';  // Make sure it's on top of everything
    lineElement.classList.add('transition-all', 'linear'); // Tailwind classes for transition

    // Append the line element to the body
    document.body.appendChild(lineElement);

    // Set initial passion text
    passionElement.textContent = passions[index];

    // Function to change passion text
    function changePassion() {
        passionElement.classList.add('fade-out');

        setTimeout(() => {
            index = (index + 1) % passions.length;
            passionElement.textContent = passions[index];

            passionElement.classList.remove('fade-out');
            passionElement.classList.add('fade-in');

            setTimeout(() => {
                passionElement.classList.remove('fade-in');
            }, 500);
        }, 500);
    }

    // Function to refresh random images
    function refreshImages() {
        const firstSetImageElements = [
            document.getElementById('randomImage1'),
            document.getElementById('randomImage2'),
            document.getElementById('randomImage3'),
            document.getElementById('randomImage4'),
            document.getElementById('randomImage5')
        ];

        const secondSetImageElements = [
            document.getElementById('randomImage6'),
            document.getElementById('randomImage7'),
            document.getElementById('randomImage8')
        ];

        // Generate 8 unique random numbers from 1 to 8
        const uniqueNumbers = getRandomUniqueNumbers(8, 8);

        // First set of images
        setImageSrc(firstSetImageElements[0], uniqueNumbers[0]);
        setImageSrc(firstSetImageElements[1], uniqueNumbers[1]);
        setImageSrc(firstSetImageElements[2], uniqueNumbers[2]);
        setImageSrc(firstSetImageElements[3], uniqueNumbers[3]);
        setImageSrc(firstSetImageElements[4], uniqueNumbers[4]);

        // Second set of images (middle three images of the first set)
        setImageSrc(secondSetImageElements[0], uniqueNumbers[1]);
        setImageSrc(secondSetImageElements[1], uniqueNumbers[2]);
        setImageSrc(secondSetImageElements[2], uniqueNumbers[3]);
    }

    // Function to animate the line and trigger refresh
    function animateLineAndRefresh() {
        lineElement.style.transitionDuration = '5s';  // Adjust to match the interval
        lineElement.style.width = '100%';  // Expand the line to full width

        // When the animation ends, keep the line full for 1 second, then refresh images and passion, reset the line
        setTimeout(() => {
            setTimeout(() => {
                refreshImages();
                changePassion();
                lineElement.style.transitionDuration = '0s';  // Remove the transition temporarily
                lineElement.style.width = '0';  // Reset the line width

                // Start the animation again after resetting
                setTimeout(() => {
                    lineElement.style.transitionDuration = '5s';  // Reapply the transition
                    lineElement.style.width = '100%';  // Start the line animation again
                }, 50);  // Small delay to allow the reset to take effect
            }, 1000);  // Keep the line full for 1 second
        }, 5000);  // 5000ms = 5s, which matches the duration
    }

    // Start the initial animation
    animateLineAndRefresh();

    // Set interval to repeat the animation
    setInterval(animateLineAndRefresh, 6000);  // Repeat every 6 seconds
});
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    let currentRotatingImage = null;
    let isStopping = false;

    images.forEach(img => {
        img.addEventListener('click', function () {
            if (isStopping) {
                return; // Prevent any actions while waiting to stop
            }

            // If the clicked image is already rotating, prepare to stop it
            if (img === currentRotatingImage) {
                stopRotationAfterCycle(img);
            } else {
                // Stop any other rotating image
                if (currentRotatingImage) {
                    stopRotationAfterCycle(currentRotatingImage);
                }

                // Start rotating the clicked image
                startRotation(img);
                currentRotatingImage = img;
            }
        });
    });

    function startRotation(img) {
        img.style.animationPlayState = 'running';
        img.style.animationIterationCount = 'infinite'; // Ensure continuous rotation
    }

    function stopRotationAfterCycle(img) {
        isStopping = true;

        // Listen for the end of the current cycle
        img.addEventListener('animationiteration', function stopListener() {
            img.style.animationPlayState = 'paused';
            img.style.transform = 'rotateY(0deg)';
            img.removeEventListener('animationiteration', stopListener);
            isStopping = false;
            currentRotatingImage = null;
        });
    }
});

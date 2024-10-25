function toggleText() {
    const div = document.getElementById('cursor');
    let isUnderscore = true;

    setInterval(() => {
        if (isUnderscore) {
            div.textContent = '>_';
        } else {
            div.textContent = '>';
        }
        isUnderscore = !isUnderscore;
    }, 1000);
}

// Call the function after the DOM is fully loaded
window.onload = toggleText;

// JavaScript for modal functionality
const modal = document.getElementById('badgeModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];
const images = document.querySelectorAll('.badgeImage');
const caption = document.getElementById('caption');

// When an image is clicked, open the modal
images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        document.body.style.overflow="hidden";
        caption.textContent = this.getAttribute('alt'); // Get the name from 'alt' attribute
        caption.style.display='block';
        document.body.classList.add('modal-open');
    }
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.overflow="auto";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.overflow="auto";
    }
}


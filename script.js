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

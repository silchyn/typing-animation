function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
function type(text, textElement, cursorElement,
              initialDelay, typingSpeed) {
    setTimeout(async () => {
        cursorElement.style.webkitAnimation = 'none';
        cursorElement.style.animation = 'none';
        for (var i = 0; i < text.length; ++i) {
            textElement.textContent = text.slice(0, i + 1);
            await sleep(typingSpeed);
        }
        cursorElement.style.webkitAnimation = '';
        cursorElement.style.animation = '';
    }, initialDelay);
}
type(prompt('Enter text (length <= 15):').trim().slice(0, 15),
            document.getElementById('text'),
            document.getElementById('cursor'), 2000, 250);





const t1Element = document.querySelector('.t1');
const text = t1Element.textContent.trim(); // Get the text content
t1Element.innerHTML = ''; // Clear the original text

// Wrap each character in a span with a custom char-index
[...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('char');
    span.style.setProperty('--char-index', index);
    span.textContent = char;
    t1Element.appendChild(span);
});

import 'core-js/stable/string/split';

document.addEventListener('DOMContentLoaded', () => {
    const result = "test".trim().split(/^|\s+/);
    const h1 = document.createElement("h1");
    if (result[0] === "test") {
        h1.textContent = "Observed correct behavior";
    } else if (result[0] === "t") {
        h1.textContent = "Polyfill caused unexpected behavior";
    }
    document.body.appendChild(h1);
});